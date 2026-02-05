import { AxeBuilder } from '@axe-core/playwright';

import { expect } from '@playwright/test';
import { test } from '../../../../tests/base';

test.describe('gcds-pagination', () => {
  test('renders', async ({ page }) => {
    const paginations = page.locator('gcds-pagination');
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
    const results = await new AxeBuilder({ page })
      .withRules(['color-contrast'])
      .analyze();
    expect(results.violations).toHaveLength(0);
  });
  /**
   * Link text
   */
  test('Proper link text', async ({ page }) => {
    const results = await new AxeBuilder({ page })
      .withRules(['link-name'])
      .analyze();
    expect(results.violations).toHaveLength(0);
  });
});
