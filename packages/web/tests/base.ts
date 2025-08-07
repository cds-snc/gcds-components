import { test as base } from '@stencil/playwright';
import path from 'path';
import { mixinFixtures as mixinCoverage } from '@bgotink/playwright-coverage';

export const test = mixinCoverage(
  base.extend({
    page: async ({ page }, use, testInfo) => {
      // Navigate to the component test page
      // Use the testInfo to get the file path and derive the component name
      const filePath = testInfo.file;
      const baseFileName = path
        .basename(filePath)
        .replace('.e2e.ts', '.e2e.html');
      const componentName = path.basename(filePath).replace('.e2e.ts', '');

      await page.goto(`/components/${componentName}/test/${baseFileName}`, {
        waitUntil: 'domcontentloaded',
      });

      await page.waitForFunction(component => {
        const host = document.querySelector(component);
        return host && host.shadowRoot;
      }, componentName);

      await use(page);
    },
  }),
);
