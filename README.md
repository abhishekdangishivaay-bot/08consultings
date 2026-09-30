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

## Logo — action needed

The brief asked for the **real 08 Consultings logo** to be downloaded from
`https://www.08consultings.com/` and stored in
`public/assets/images/brand/`. In this build environment, outbound network
access to that domain is blocked by the organization's egress policy (the proxy
returns `403` for the site and every non-package host), so the genuine logo file
could not be retrieved.

The site currently uses a **clean, clearly-labelled placeholder mark** (a simple
geometric analytics glyph plus the company name in the brand typeface), rendered
inline in the nav and footer. To drop in the real logo, follow
`public/assets/images/brand/README.md` — filenames and layout hooks are already
in place, so it is a direct swap.

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
