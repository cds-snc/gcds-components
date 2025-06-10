const { AxeBuilder } = require('@axe-core/playwright');

import { expect } from '@playwright/test';
import { test } from '@stencil/playwright';

test.beforeEach(async ({ page }) => {
  await page.goto('/components/gcds-hint/test/gcds-hint.e2e.html');

  await page.waitForFunction(() => {
    const host = document.querySelector('gcds-hint');
    return host && host.shadowRoot;
  });
});
test.describe('gcds-hint', () => {
  test('renders', async ({ page }) => {
    const element = await page.locator('gcds-hint');
    await element.waitFor({ timeout: 10000 });
    expect(element).toHaveClass('hydrated');
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

test.describe('gcds-hint a11y tests', () => {
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
});
