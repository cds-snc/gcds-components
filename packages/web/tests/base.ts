import { test as base } from '@stencil/playwright';
import path from 'path';
import { mixinFixtures as mixinCoverage } from '@bgotink/playwright-coverage';
import { devices } from '@playwright/test';

const gcdsTestBase = base.extend({
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
});

// This test mixin navigates to the component test page based on the test file name
// and waits for the component to be ready in the shadow DOM.
export const test = mixinCoverage(
  gcdsTestBase
);

export const testMobile = mixinCoverage(
  gcdsTestBase.extend({
    contextOptions: {
      ...devices['LG Optimus L70'],
    },
  })
)

export const testTablet = mixinCoverage(
  gcdsTestBase.extend({
    contextOptions: {
      ...devices['Galaxy Tab S9'],
    }
  })
)


