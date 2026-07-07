import { test as base, type Page } from '@playwright/test';
import path from 'path';

export const test = base.extend({
  page: async ({ page }: { page: Page }, use, testInfo) => {
    const filePath = testInfo.file;
    const baseFileName = path
      .basename(filePath)
      .replace('.visual.ts', '.visual.html');
    const componentName = path.basename(filePath).replace('.visual.ts', '');

    await page.goto(`/components/${componentName}/test/${baseFileName}`, {
      waitUntil: 'domcontentloaded',
    });

    // Wait for fonts, but cap the wait on the Node side. An in-page timer
    // can't fire if the page's main thread is busy, so race page.evaluate
    // against a Playwright timeout that runs in Node, independent of the page.
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

    await use(page);
  },
});
