const { AxeBuilder } = require('@axe-core/playwright');

import { expect } from '@playwright/test';
import { test } from '../../../../tests/base';

test.describe('gcds-nav-group', () => {
  test('renders', async ({ page }) => {
    const element = await page.locator('gcds-nav-group');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    // Check if it has the 'hydrated' class
    await expect(element).toHaveClass('hydrated');

    // Check first nav link item role
    const firstItem = await page.locator('gcds-nav-link').first();
    await expect(firstItem).toHaveRole('listitem');
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

test.describe('gcds-nav-group a11y tests', () => {
  /**
   * Colour contrast
   */
  test('Colour contrast', async ({ page }) => {
    try {
      const results = await new AxeBuilder({ page })
        .withRules(['color-contrast'])
        .analyze();
      expect(results.violations).toHaveLength(0);
    } catch (e) {
      console.error(e);
    }
  });

  test('Accessible button', async ({ page }) => {
    const element = page.locator('gcds-nav-group').first();
    await element.waitFor({ state: 'attached' });
    await expect(element).toHaveClass(/hydrated/);

    const results = await new AxeBuilder({ page })
      .withRules(['button-name'])
      .analyze();

    expect(results.violations).toHaveLength(0);
  });
});
