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

    // Wait for all instances of the component to be hydrated,
    // since the visual page renders multiple variants
    await page.waitForFunction(
      name => {
        const els = document.querySelectorAll(name);
        return (
          els.length > 0 &&
          Array.from(els).every(el => el.classList.contains('hydrated'))
        );
      },
      componentName,
      { timeout: 30000 },
    );

    await use(page);
  },
});
