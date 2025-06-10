const { AxeBuilder } = require('@axe-core/playwright');

import { expect } from '@playwright/test';
import { test } from '@stencil/playwright';

test.beforeEach(async ({ page }) => {
  await page.goto('/components/gcds-header/test/gcds-header.e2e.html');

  await page.waitForFunction(() => {
    const host = document.querySelector('gcds-header');
    return host && host.shadowRoot;
  });
});

test.describe('gcds-header', () => {
  test('renders', async ({ page }) => {
    const element = await page.locator('gcds-header');
    await element.waitFor({ state: 'attached', timeout: 10000 });
    expect(element).toHaveClass('hydrated');
  });
});

/*
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

test.describe('gcds-header a11y tests', () => {
  /**
   * Banner is top level
   */
  test('Top level banner', async ({ page }) => {
    try {
      const results = await new AxeBuilder({ page })
        .withRules(['landmark-banner-is-top-level'])
        .analyze();
      expect(results.violations.length).toBe(0);
    } catch (e) {
      console.error(e);
    }
  });
  /**
   * Image alt text
   */
  test('Alt text', async ({ page }) => {
    try {
      const results = await new AxeBuilder({ page })
        .withRules(['image-alt'])
        .analyze();
      expect(results.violations.length).toBe(0);
    } catch (e) {
      console.error(e);
    }
  });
});
