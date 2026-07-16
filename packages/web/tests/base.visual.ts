import { test as base, type Page, type Route } from '@playwright/test';
import fs from 'fs';
import path from 'path';

/**
 * Fonts are served from local copies (tests/fonts/) instead of the network.
 * Screenshots depend on Lato/Noto Sans (Google Fonts) and the gcds-icons glyph
 * font (design-system CDN); any request that loses the network race changes
 * text metrics or renders raw \fXXX codepoints, producing flaky pixel diffs.
 * Intercepting the font hosts makes rendering deterministic and offline-safe.
 * To refresh the local copies, see tests/fonts/README.md.
 */
const FONT_DIR = path.join(__dirname, 'fonts');

const FONT_CONTENT_TYPES: Record<string, string> = {
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
};

const serveLocalFontFile = (route: Route) => {
  const url = new URL(route.request().url());
  const fileName = path.basename(url.pathname);
  const localPath = path.join(FONT_DIR, 'files', fileName);
  if (fs.existsSync(localPath)) {
    return route.fulfill({
      contentType:
        FONT_CONTENT_TYPES[path.extname(fileName)] ?? 'application/octet-stream',
      body: fs.readFileSync(localPath),
    });
  }
  // Not a file we mirror (e.g. other CDN assets) — let it hit the network
  return route.continue();
};

export const test = base.extend({
  page: async ({ page }: { page: Page }, use, testInfo) => {
    const filePath = testInfo.file;
    const baseFileName = path
      .basename(filePath)
      .replace('.visual.ts', '.visual.html');
    const componentName = path.basename(filePath).replace('.visual.ts', '');

    // Register font interception before navigation so no font request escapes
    await page.route(/fonts\.googleapis\.com/, route =>
      route.fulfill({
        contentType: 'text/css',
        body: fs.readFileSync(path.join(FONT_DIR, 'all-fonts.css'), 'utf8'),
      }),
    );
    await page.route(/fonts\.gstatic\.com/, serveLocalFontFile);
    await page.route(/cdn\.design-system\.canada\.ca/, serveLocalFontFile);

    await page.goto(`/components/${componentName}/test/${baseFileName}`, {
      waitUntil: 'domcontentloaded',
    });

    // Wait for fonts, capped on the Node side. An in-page timer can't fire if
    // the page's main thread is busy, so the cap runs in Node instead.
    await Promise.race([
      page.evaluate(() => document.fonts.ready),
      page.waitForTimeout(10000),
    ]);

    // Wait for all GCDS components inside the preview regions to hydrate
    await page.waitForFunction(
      () => {
        const gcdsEls = Array.from(
          document.querySelectorAll('.preview-component *'),
        ).filter(el => el.tagName.toLowerCase().startsWith('gcds-'));
        return (
          gcdsEls.length > 0 &&
          gcdsEls.every(el => el.classList.contains('hydrated'))
        );
      },
      { timeout: 30000 },
    );

    // The gcds-icons glyph font is requested only once components hydrate and
    // render their .gcds-icon elements — after the font wait above. Force it
    // to load now, otherwise ::before renders the raw \fXXX codepoint instead
    // of the icon glyph.
    await Promise.race([
      page.evaluate(() =>
        document.fonts.load('1em "gcds-icons"').then(() => document.fonts.ready),
      ),
      page.waitForTimeout(10000),
    ]);

    await use(page);
  },
});
