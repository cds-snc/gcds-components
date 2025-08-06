import { test as base } from '@stencil/playwright';
import path from 'path';
import fs from 'fs';

export const test = base.extend({
  page: async ({ page }, use, testInfo) => {
    // Start JavaScript coverage
    await Promise.all([
      page.coverage.startJSCoverage(),
      page.coverage.startCSSCoverage(),
    ]);

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

    // Stop coverage collection
    const [jsCoverage, cssCoverage] = await Promise.all([
      page.coverage.stopJSCoverage(),
      page.coverage.stopCSSCoverage(),
    ]);

    // Save coverage result
    const coveragePath = path.join(__dirname, '../coverage/e2e');
    if (!fs.existsSync(coveragePath)) fs.mkdirSync(coveragePath);

    fs.writeFileSync(
      path.join(coveragePath, `${componentName}.js-coverage.json`),
      JSON.stringify(jsCoverage),
    );

    fs.writeFileSync(
      path.join(coveragePath, `${componentName}.css-coverage.json`),
      JSON.stringify(cssCoverage),
    );
  },
});
