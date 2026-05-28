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

    // Wait for fonts to finish loading to avoid fallback-font flakiness
    await page.waitForFunction(() => document.fonts.ready.then(() => true));

    // Wait for all GCDS components inside the preview to hydrate
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
