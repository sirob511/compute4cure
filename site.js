(() => {
  const parser = new DOMParser();
  const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const revealSelector = ".reveal-on-scroll";
  let revealObserver = null;

  if (!reduceMotionQuery.matches) {
    document.documentElement.classList.add("reveal-ready");
  }

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

  function isIndexPath(pathname) {
    return canonicalPath(pathname).endsWith("/index.html");
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

  function syncActiveNav() {
    const activePath = canonicalPath(location.pathname);
    const links = Array.from(document.querySelectorAll(".nav a"));
    let activeLink = null;

    if (isIndexPath(location.pathname)) {
      const activeLabel = location.hash === "#donate" ? "Donate" : "Home";
      activeLink = links.find((link) => link.textContent.trim() === activeLabel);
    } else {
      activeLink = links.find((link) => {
        const url = new URL(link.href, location.href);
        return canonicalPath(url.pathname) === activePath;
      });
    }

    links.forEach((link) => {
      const isActive = link === activeLink;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function decoratePageReveals(root = document) {
    const selectors = [
      ".science-card",
      ".science-row",
      ".process-summary",
      ".process-step",
      ".process-note__inner",
      ".page-cta__inner",
      ".science-faq details"
    ];

    root.querySelectorAll(selectors.join(",")).forEach((element) => {
      element.classList.add("reveal-on-scroll");
    });
  }

  function hasRevealDelayClass(element) {
    return Array.from(element.classList).some((className) => className.startsWith("reveal-delay-"));
  }

  function resetScrollReveals(root = document) {
    if (!revealObserver) return;

    root.querySelectorAll(revealSelector).forEach((element) => {
      revealObserver.unobserve(element);
    });
  }

  function initScrollReveals(root = document) {
    const items = Array.from(root.querySelectorAll(revealSelector));
    if (!items.length) return;

    if (reduceMotionQuery.matches || !("IntersectionObserver" in window)) {
      items.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      }, {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.12
      });
    }

    items.forEach((element, index) => {
      if (!hasRevealDelayClass(element)) {
        element.classList.add(`reveal-delay-${Math.min(index % 6, 5)}`);
      }
      revealObserver.observe(element);
    });
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

    syncActiveNav();

    if (document.querySelector("#projects-grid") && typeof window.initProjects === "function") {
      window.initProjects();
    }

    decoratePageReveals();
    initScrollReveals();
  }

  window.initScrollReveals = initScrollReveals;
  window.resetScrollReveals = resetScrollReveals;

  async function replacePage(url, options = {}) {
    const nextPath = canonicalPath(url.pathname);
    if (nextPath === currentPath) {
      if (options.updateHistory !== false && url.href !== location.href) {
        history.pushState({}, "", url.href);
      }
      syncActiveNav();
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
