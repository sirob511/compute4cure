# Compute4Cure Project Notes

## Project Shape
- This is a small static website deployed on Vercel. There is no package manager, framework, build step, or test runner in the repo.
- Pages are plain HTML files:
  - `index.html`: home page and donate section.
  - `projects.html`: dedicated supported research grid.
  - `science.html`: popular science explainer page.
  - `how-it-works.html`: Compute4Cure process page explaining how donated compute runs Folding@home work units.
  - `faq.html`: FAQ page.
- Shared styling lives in `styles.css`.
- `projects.js` contains the research project data, HTML escaping helper, project card rendering, and filter button wiring. It is loaded by `projects.html`.
- `site.js` intercepts same-site HTML navigation for smoother page transitions while preserving normal links as a fallback.
- Static assets are `assets/logo.png`, `favicon.png`, and `og-image.png`. `robots.txt`, `sitemap.xml`, and `vercel.json` are deployment/SEO/support files.

## Local Workflow
- No install is needed.
- To preview locally, run:

```sh
python3 -m http.server 8000
```

- Then open `http://localhost:8000/`.
- When changing layout or CSS, check the home page plus `projects.html`, `science.html`, `how-it-works.html`, and `faq.html` at both desktop and mobile widths.
- When changing `projects.js`, verify the research filter buttons on `projects.html`.

## Deployment Notes
- Vercel serves the static files directly and uses `vercel.json` for clean URLs and security headers.
- The Content Security Policy currently allows self-hosted scripts/styles/images, Google Fonts, Icons8 image URLs, and Vercel tooling.
- External links used by the site include Folding@home pages, Folding@home project stats pages, Icons8 images, Google Fonts, and `mailto:info@compute4cure.org`.

## Editing Conventions
- Keep the site plain HTML/CSS/vanilla JS unless the project explicitly needs a framework.
- Preserve the shared header/nav/footer structure across pages when adding navigation or brand changes.
- Prefer editing existing CSS classes in `styles.css` over adding inline styles. Some current pages have small inline spacers/scripts, but new presentation work should generally go in CSS.
- Keep copy concrete and nonprofit/science focused: donated compute, Folding@home, team ID `1067730`, hardware donations, and current nonprofit status.
- If adding research projects, update the `PROJECTS` array in `projects.js` and use one of the existing target keys (`alzheimers`, `cancer`, `influenza`, `parkinsons`, `unspecified`) unless new filter UI and badge styling are also added.
- Use absolute public URLs in social metadata and update `sitemap.xml` when adding or renaming public pages.

## Known Follow-Up Candidates
- Several secondary pages duplicate the canonical tag and use the home page as canonical; fix this when doing SEO cleanup.
- The inline year script is repeated across pages; this is harmless, but could be consolidated if the site grows.
- The site has no automated validation. For substantive changes, use browser checks and simple link/HTML validation.
