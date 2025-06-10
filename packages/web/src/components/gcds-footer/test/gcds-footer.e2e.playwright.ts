const { AxeBuilder } = require('@axe-core/playwright');

import { expect } from '@playwright/test';
import { test } from '@stencil/playwright';

test.beforeEach(async ({ page }) => {
  await page.goto('/components/gcds-footer/test/gcds-footer.e2e.html');

  await page.waitForFunction(() => {
    const host = document.querySelector('gcds-footer');
    return host && host.shadowRoot;
  });
});

test.describe('gcds-footer', () => {
  test('renders', async ({ page }) => {
    const element = await page.locator('gcds-footer');
    await element.waitFor({ timeout: 10000 });
    expect(element).toHaveClass('hydrated');
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

test.describe('gcds-footer a11y tests', () => {
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
  test('Footer landmark is top level', async ({ page }) => {
    try {
      const results = await new AxeBuilder({ page })
        .withRules(['landmark-contentinfo-is-top-level'])
        .analyze();
      expect(results.violations.length).toBe(0);
    } catch (e) {
      console.error(e);
    }
  });
});
