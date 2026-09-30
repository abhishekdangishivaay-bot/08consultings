# Brand assets — 08 Consultings

The official 08 Consultings logo is used across the site (nav and footer).

| file | usage |
|------|-------|
| `08-consultings-logo.svg` | official vector logo, used everywhere (scales crisply) |
| `08-consultings-logo.png` | raster copy of the same logo (archival / fallback) |

The favicon (`/favicon.png`) is derived from the "08" mark of this logo.

The brand palette is taken from the logo (purple `#8024BF` to magenta `#C40AB0`)
and drives the site's accent, defined once in `public/assets/css/styles.css`
(`--accent`, `--accent-2`, `--accent-grad`).

To update the logo later, replace the two files above (keeping the names) and, if
the artwork proportions change, adjust `width`/`height` on the `<img class="brand__img">`
in `index.html` and the `.brand__img` height in the stylesheet.
