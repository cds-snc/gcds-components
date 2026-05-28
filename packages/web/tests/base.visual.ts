import { test as base, type Page } from '@playwright/test';
import path from 'path';

export const test = base.extend({
  page: async ({ page }: { page: Page }, use, testInfo) => {
    page.on('console', msg => console.log(`[browser console] ${msg.text()}`));
    page.on('pageerror', err => console.log(`[page error] ${err.message}`));
    page.on('requestfailed', req =>
      console.log(
        `[request failed] ${req.url()} — ${req.failure()?.errorText}`,
      ),
    );
    page.on('response', res => {
      if (res.status() >= 400) {
        console.log(`[bad response] ${res.status()} ${res.url()}`);
      }
    });

    const filePath = testInfo.file;
    const baseFileName = path
      .basename(filePath)
      .replace('.visual.ts', '.visual.html');
    const componentName = path.basename(filePath).replace('.visual.ts', '');

    const response = await page.goto(
      `/components/${componentName}/test/${baseFileName}`,
      { waitUntil: 'domcontentloaded' },
    );
    console.log(`[goto] status ${response?.status()} for ${response?.url()}`);
    console.log('[page html]', (await page.content()).slice(0, 800));

    await use(page);
  },
});
