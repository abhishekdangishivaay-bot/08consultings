# 08 Consultings — Homepage

A premium, 2026-benchmark homepage for **08 Consultings**, a data analytics, AI,
technology and consulting company. This is **phase 1: the homepage only**, built
so the visual direction can be reviewed before the rest of the site is designed.

> Positioning: *the intelligence layer between data and business decisions.*
> Core message: *Turn data into decisions that move business forward.*

## What this is

A production-quality, dependency-free static homepage:

- **Semantic, accessible HTML** with a sensible heading hierarchy, skip link,
  ARIA labels, keyboard-operable controls and visible focus states.
- **Native modern CSS** (design tokens, CSS grid, `backdrop-filter`, fluid type).
  Light enterprise theme (off-white surfaces, near-black ink), one electric-blue
  accent, one radius scale. Theme colours are driven by CSS variables in
  `:root`, so the palette can be retuned from one place.
- **Vanilla JavaScript** for motion and interactivity. No framework, no runtime
  dependencies, so it loads fast and is trivial to review, host and hand off.
- **Self-hosted fonts** (Space Grotesk, Manrope, JetBrains Mono) under
  `public/assets/fonts/` — no external font requests at runtime.
- **Original data-intelligence visuals** (hero node network, convergence
  diagram, AI "applied intelligence" orb) and **real SVG dashboard charts**
  built with a colorblind-validated palette. No stock photography.
- Full **responsive** layouts (desktop / laptop / tablet / mobile) and
  `prefers-reduced-motion` support throughout.

## Structure

```
index.html                         # the homepage (single page, 16 sections)
favicon.svg
public/assets/
  css/styles.css                   # all styles (tokens + sections + responsive)
  js/main.js                       # nav, reveal, counters, tabs, carousel, charts
  fonts/*.woff2                    # self-hosted brand fonts
  images/brand/                    # logo assets (see note below)
```

## Run locally

No build step. Serve the folder with any static server, for example:

```bash
python3 -m http.server 8080
# then open http://127.0.0.1:8080/
```

Opening `index.html` directly over `file://` works too, but a local server is
recommended so the self-hosted fonts load without browser CORS restrictions.

## Logo & brand colour

The **official 08 Consultings logo** (supplied by the client) is stored in
`public/assets/images/brand/` as PNG + WEBP and used in the nav and footer via
`<picture>`. The site's accent is taken straight from the logo, a purple
(`#8024BF`) to magenta (`#C40AB0`) gradient, defined once in the stylesheet and
applied consistently to buttons, links, charts and the data visuals. See
`public/assets/images/brand/README.md` to update the logo later.

> Note on photography: this build environment has no outbound web access, so
> stock or site photography could not be fetched here. The page leans on original
> data visuals (network, charts, dashboards) instead. To add real photos, drop
> image files into the repo (or enable network access) and they can be slotted
> into the hero, problem, why and insights sections.

## Content notes (factual accuracy)

Per the brief, no clients, statistics, testimonials or case-study results were
invented:

- **Verified facts used as-is:** 13+ years, 1000+ projects, global reach, the
  capability and intelligence-area lists, and the real client names.
- **Clearly marked placeholders:** case-study outcomes, testimonials and insight
  articles are shown in their final design but labelled as placeholders / sample
  content until real, approved copy is supplied.
- **Illustrative sample data:** the dashboard showcase uses clearly-noted sample
  figures for design purposes only; no real client data is shown.
- **Footer social links** point to `#` until the real profile URLs are provided.

## Next step

This is the homepage only. Inner pages will be built once the visual direction
here is approved.
