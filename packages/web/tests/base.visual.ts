import { test as base } from '@playwright/test';
import path from 'path';

export const test = base.extend<{ page: (typeof base.prototype)['page'] }>({
  page: async ({ page }, use, testInfo) => {
    const filePath = testInfo.file;
    const baseFileName = path
      .basename(filePath)
      .replace('.visual.ts', '.visual.html');
    const componentName = path.basename(filePath).replace('.visual.ts', '');

    await page.goto(`/components/${componentName}/test/${baseFileName}`, {
      waitUntil: 'domcontentloaded',
    });

    // Wait for test component to be hydrated
    await page.waitForSelector(`${componentName}.hydrated`, {
      timeout: 30000,
    });

    await use(page);
  },
});
