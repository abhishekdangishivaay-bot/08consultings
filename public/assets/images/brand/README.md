# Brand assets — 08 Consultings

> **IMPORTANT — placeholder in use.**
> The homepage brief asked for the *real* 08 Consultings logo to be downloaded from
> https://www.08consultings.com/ and stored here. In this build environment all
> outbound network access to that domain is blocked by the organization's egress
> policy (the proxy returns `403 CONNECT` for `www.08consultings.com` and every
> non-package host), so the genuine logo file could not be retrieved.
>
> The files below are a **clean, neutral placeholder lockup** (a simple geometric
> analytics mark + the company name in the site's brand typeface). They are *not*
> a recreation of, or a substitute for, the official logo.

## How to drop in the real logo

1. Save the official asset(s) here, keeping these filenames:
   - `08-consultings-logo.svg`      — full lockup for **dark** backgrounds (light logo)
   - `08-consultings-logo-dark.svg` — full lockup for **light** backgrounds (dark logo)
   - `08-consultings-mark.svg`      — compact square mark (favicon / footer / mobile)
   - Optional raster fallbacks: `08-consultings-logo.png`, `08-consultings-logo.webp`
2. The site renders the brand lockup **inline** in the nav and footer (see the
   `.brand` markup in `index.html`). Replace that inline `<svg>` with an `<img>`
   pointing at the file above, or paste the official SVG path data in place of the
   placeholder glyph. Nothing else needs to change — sizing, spacing and color
   hooks are already in place.
3. Preserve the original proportions; do not stretch or recolor beyond the
   light/dark pairing.

## Files
| file | usage |
|------|-------|
| `08-consultings-logo.svg` | primary lockup, dark surfaces |
| `08-consultings-logo-dark.svg` | lockup for any light surface |
| `08-consultings-mark.svg` | icon-only mark, favicon source |
