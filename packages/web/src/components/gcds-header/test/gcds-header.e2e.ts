const { AxeBuilder } = require('@axe-core/playwright');

import { expect } from '@playwright/test';
import { test } from '../../../../tests/base';

test.describe('gcds-header', () => {
  test('renders', async ({ page }) => {
    const element = await page.locator('gcds-header');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    // Check if it has the 'hydrated' class
    await expect(element).toHaveClass('hydrated');
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
      expect(results.violations).toHaveLength(0);
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
      expect(results.violations).toHaveLength(0);
    } catch (e) {
      console.error(e);
    }
  });
});
