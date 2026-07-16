# Local font mirror for visual tests

Visual regression screenshots must render with the exact same fonts on every
run. Fetching Lato/Noto Sans from Google Fonts and the `gcds-icons` glyph font
from the design-system CDN at test time made screenshots depend on a network
race: a slow or failed font request changed text metrics (layout reflow) or
rendered raw `\fXXX` codepoints instead of icons, causing flaky pixel diffs.

`tests/base.visual.ts` intercepts all requests to `fonts.googleapis.com`,
`fonts.gstatic.com`, and `cdn.design-system.canada.ca` and fulfills them from
this directory instead. Tests never touch the network for fonts.

## Contents

- `all-fonts.css` — combined Google Fonts stylesheets (Lato, Noto Sans,
  Noto Sans Mono) as served to Chrome. Served for every
  `fonts.googleapis.com` request.
- `files/` — the font binaries: every `.woff2` referenced by `all-fonts.css`
  (keyed by basename, which is how the interceptor looks them up) plus
  `gcds-icons.ttf`/`.woff` from the design-system CDN.

## Refreshing the mirror

Only needed when the icon font version bumps (see the `@font-face` URL in
`src/assets/css/global.css`) or the set of font families/weights used by the
preview pages changes.

```bash
CHROME_UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"

# 1. Re-download the stylesheets (one per family URL used in preview HTML /
#    global.css) with a Chrome UA so Google serves woff2:
curl -s -A "$CHROME_UA" "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" > /tmp/lato.css
curl -s -A "$CHROME_UA" "https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" > /tmp/noto.css
curl -s -A "$CHROME_UA" "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Noto+Sans+Mono:wght@100..900&display=swap" > /tmp/global.css
cat /tmp/lato.css /tmp/noto.css /tmp/global.css > all-fonts.css

# 2. Download every referenced binary into files/:
grep -o 'https://fonts.gstatic.com/[^)]*' all-fonts.css | sort -u | \
  while read -r url; do curl -s -o "files/$(basename "$url")" "$url"; done

# 3. Refresh the icon font (match the version in src/assets/css/global.css):
curl -s -o files/gcds-icons.ttf "https://cdn.design-system.canada.ca/@gcds-core/fonts@1.1.1/icons/gcds-icons.ttf"
curl -s -o files/gcds-icons.woff "https://cdn.design-system.canada.ca/@gcds-core/fonts@1.1.1/icons/gcds-icons.woff"
```

After refreshing, regenerate the screenshot baselines (fonts may have changed
metrics): run the "Update visual snapshots" workflow.
