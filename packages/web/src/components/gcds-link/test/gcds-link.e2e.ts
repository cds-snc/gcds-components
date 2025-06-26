const { AxeBuilder } = require('@axe-core/playwright');

import { expect } from '@playwright/test';
import { test } from '@stencil/playwright';

test.beforeEach(async ({ page }) => {
  await page.goto('/components/gcds-link/test/gcds-link.e2e.html');

  await page.waitForFunction(() => {
    const host = document.querySelector('gcds-link');
    return host && host.shadowRoot;
  });
});

test.describe('gcds-link', () => {
  test('renders', async ({ page }) => {
    const links = await page.locator('gcds-link');
    const count = await links.count();

    for (let i = 0; i < count; i++) {
      const link = links.nth(i);

      // Wait for element to attach and become visible, allowing up to 10s
      await link.waitFor({ state: 'attached' });
      await link.waitFor({ state: 'visible' });
      await link.waitFor({ timeout: 10000 });

      // Check if it has the 'hydrated' class
      await expect(link).toHaveClass('hydrated');
    }
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

test.describe('gcds-link a11y tests', () => {
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
  /**
   * Image alt text
   */
  test('Image alt text', async ({ page }) => {
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
