(() => {
  const parser = new DOMParser();
  const loadedScripts = new Set(
    Array.from(document.scripts)
      .map((script) => script.getAttribute("src"))
      .filter(Boolean)
      .map((src) => new URL(src, location.href).href)
  );

  let currentPath = canonicalPath(location.pathname);
  let pendingNavigation = null;

  function canonicalPath(pathname) {
    if (!pathname || pathname === "/") return "/index.html";

    let path = pathname;
    if (path.endsWith("/")) path += "index.html";
    if (path.endsWith(".html")) return path;

    const lastSegment = path.split("/").pop();
    if (lastSegment && !lastSegment.includes(".")) return `${path}.html`;

    return path;
  }

  function isDocumentLink(url) {
    if (url.origin !== location.origin) return false;
    if (!["http:", "https:"].includes(url.protocol)) return false;

    const path = url.pathname;
    const lastSegment = path.split("/").pop();
    return path === "/" || path.endsWith("/") || path.endsWith(".html") || !lastSegment.includes(".");
  }

  function scrollToTarget(hash, behavior = "smooth") {
    if (!hash || hash === "#top") {
      window.scrollTo({ top: 0, behavior });
      return;
    }

    const target = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (target) {
      target.scrollIntoView({ behavior, block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior });
    }
  }

  function syncHead(nextDocument) {
    document.title = nextDocument.title;

    const selectors = [
      'meta[name="description"]',
      'meta[property^="og:"]',
      'meta[name^="twitter:"]',
      'link[rel="canonical"]'
    ];

    selectors.forEach((selector) => {
      nextDocument.head.querySelectorAll(selector).forEach((nextElement) => {
        const key = nextElement.getAttribute("name")
          ? `${nextElement.tagName}[name="${nextElement.getAttribute("name")}"]`
          : nextElement.getAttribute("property")
            ? `${nextElement.tagName}[property="${nextElement.getAttribute("property")}"]`
            : `${nextElement.tagName}[rel="${nextElement.getAttribute("rel")}"]`;

        const currentElement = document.head.querySelector(key.toLowerCase());
        if (currentElement) {
          currentElement.replaceWith(nextElement.cloneNode(true));
        } else {
          document.head.appendChild(nextElement.cloneNode(true));
        }
      });
    });
  }

  function loadScript(src) {
    const absoluteSrc = new URL(src, location.href).href;
    if (loadedScripts.has(absoluteSrc)) return Promise.resolve();

    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.defer = true;
      script.src = absoluteSrc;
      script.onload = () => {
        loadedScripts.add(absoluteSrc);
        resolve();
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  async function loadPageScripts(nextDocument) {
    const scripts = Array.from(nextDocument.querySelectorAll("script[src]"))
      .map((script) => script.getAttribute("src"))
      .filter((src) => src && !src.endsWith("site.js"));

    await Promise.all(scripts.map(loadScript));
  }

  function initPage() {
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();

    if (document.querySelector("#projects-grid") && typeof window.initProjects === "function") {
      window.initProjects();
    }
  }

  async function replacePage(url, options = {}) {
    const nextPath = canonicalPath(url.pathname);
    if (nextPath === currentPath) {
      if (options.updateHistory !== false && url.href !== location.href) {
        history.pushState({}, "", url.href);
      }
      scrollToTarget(url.hash || "#top");
      return;
    }

    if (pendingNavigation) pendingNavigation.abort();
    pendingNavigation = new AbortController();

    let nextDocument;
    try {
      const response = await fetch(url.href, {
        headers: { Accept: "text/html" },
        signal: pendingNavigation.signal
      });
      if (!response.ok) throw new Error(`Navigation failed: ${response.status}`);

      nextDocument = parser.parseFromString(await response.text(), "text/html");
      if (!nextDocument.querySelector("main")) throw new Error("Target page has no main element.");
    } catch (error) {
      if (error.name !== "AbortError") location.href = url.href;
      return;
    } finally {
      pendingNavigation = null;
    }

    const swap = async () => {
      await loadPageScripts(nextDocument);
      syncHead(nextDocument);
      document.querySelector("main").replaceWith(nextDocument.querySelector("main"));
      currentPath = nextPath;
      if (options.updateHistory !== false) history.pushState({}, "", url.href);
      initPage();
      requestAnimationFrame(() => scrollToTarget(url.hash || "#top", "auto"));
    };

    try {
      if (document.startViewTransition) {
        await document.startViewTransition(swap).finished;
      } else {
        await swap();
      }
    } catch {
      location.href = url.href;
    }
  }

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link) return;
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (link.target && link.target !== "_self") return;

    const url = new URL(link.href, location.href);
    if (!isDocumentLink(url)) return;

    event.preventDefault();
    replacePage(url);
  });

  window.addEventListener("popstate", () => {
    replacePage(new URL(location.href), { updateHistory: false });
  });

  initPage();
})();
