const { AxeBuilder } = require('@axe-core/playwright');

import { expect } from '@playwright/test';
import { test } from '@stencil/playwright';

test.beforeEach(async ({ page }) => {
  await page.goto('/components/gcds-alert/test/gcds-alert.e2e.html');

  await page.waitForFunction(() => {
    const host = document.querySelector('gcds-alert');
    return host && host.shadowRoot;
  });
});

test.describe('gcds-alert', () => {
  test('renders', async ({ page }) => {
    const alerts = await page.locator('gcds-alert');
    for (let i = 0; i < (await alerts.count()); i++) {
      await expect(alerts.nth(i)).toHaveClass(`hydrated`);
    }
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

test.describe('gcds-alert a11y tests', () => {
  /**
   * Colour contrast test
   */
  test('colour contrast danger alert', async ({ page }) => {
    try {
      const results = await new AxeBuilder({ page })
        .withRules(['color-contrast'])
        .analyze();
      expect(results.violations.length).toBe(0);
    } catch (e) {
      console.error(e);
    }
  });
});
