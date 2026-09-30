# Brand assets — 08 Consultings

The official 08 Consultings logo (supplied by the client) is stored here and used
across the site (nav and footer), rendered via `<picture>` with a WEBP source and
a PNG fallback.

| file | usage |
|------|-------|
| `08-consultings-logo.png` | official logo, PNG (451 x 103, transparent) |
| `08-consultings-logo.webp` | same logo, WEBP (smaller, preferred by the browser) |

The favicon (`/favicon.png`) is derived from the "08" mark of this logo.

The brand palette is taken from the logo (purple `#8024BF` to magenta `#C40AB0`)
and drives the site's accent, defined once in `public/assets/css/styles.css`
(`--accent`, `--accent-2`, `--accent-grad`).

To update the logo later, replace the two files above (keeping the names) and, if
the artwork proportions change, adjust `width`/`height` on the `<img class="brand__img">`
in `index.html` and the `.brand__img` height in the stylesheet.
