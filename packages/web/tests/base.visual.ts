import { test as base } from '@playwright/test';
import path from 'path';

export const test = base.extend<{ page: (typeof base.prototype)['page'] }>({
  page: async ({ page }, use, testInfo) => {
    const filePath = testInfo.file;
    const baseFileName = path
      .basename(filePath)
      .replace('.visual.ts', '.visual.html');
    const componentName = path.basename(filePath).replace('.visual.ts', '');

    // networkidle ensures Google Fonts have loaded — critical for font-sensitive diffs
    await page.goto(`/components/${componentName}/test/${baseFileName}`, {
      waitUntil: 'networkidle',
    });

    // Wait for Stencil hydration
    await page.waitForFunction(() => {
      const customEls = Array.from(document.querySelectorAll('*')).filter(el =>
        el.tagName.includes('-'),
      );
      return (
        customEls.length > 0 &&
        customEls.every(el => el.classList.contains('hydrated'))
      );
    });

    await use(page);
  },
});
