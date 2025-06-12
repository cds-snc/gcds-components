const { AxeBuilder } = require('@axe-core/playwright');

import { expect } from '@playwright/test';
import { test } from '@stencil/playwright';

test.beforeEach(async ({ page }) => {
  await page.goto('/components/gcds-pagination/test/gcds-pagination.e2e.html');

  await page.waitForFunction(() => {
    const host = document.querySelector('gcds-pagination');
    return host && host.shadowRoot;
  });
});

test.describe('gcds-pagination', () => {
  test('renders', async ({ page }) => {
    const paginations = await page.locator('gcds-pagination');
    const count = await paginations.count();

    for (let i = 0; i < count; i++) {
      const pagination = paginations.nth(i);

      // Wait for element to attach and become visible, allowing up to 10s
      await pagination.waitFor({ state: 'attached' });
      await pagination.waitFor({ state: 'visible' });
      await pagination.waitFor({ timeout: 10000 });

      // Check if it has the 'hydrated' class
      await expect(pagination).toHaveClass('hydrated');
    }
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

test.describe('gcds-pagination a11y tests', () => {
  /**
   * Colour contrast
   */
  test('Colour contrast', async ({ page }) => {
    try {
      const results = await new AxeBuilder({ page })
        .withRules(['color-contrast'])
        .analyze();
      expect(results.violations.length).toBe(0);
    } catch (e) {
      console.error(e);
    }
  });
  /**
   * Link text
   */
  test('Proper link text', async ({ page }) => {
    try {
      const results = await new AxeBuilder({ page })
        .withRules(['link-name'])
        .analyze();
      expect(results.violations.length).toBe(0);
    } catch (e) {
      console.error(e);
    }
  });
});
