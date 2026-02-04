import { AxeBuilder } from '@axe-core/playwright';

import { expect } from '@playwright/test';
import { test } from '../../../../tests/base';

test.describe('gcds-signature', () => {
  test('renders', async ({ page }) => {
    const signatures = page.locator('gcds-signature');
    const count = await signatures.count();

    for (let i = 0; i < count; i++) {
      const signature = signatures.nth(i);

      // Wait for element to attach and become visible, allowing up to 10s
      await signature.waitFor({ state: 'attached' });
      await signature.waitFor({ state: 'visible' });
      await signature.waitFor({ timeout: 10000 });

      // Check if it has the 'hydrated' class
      await expect(signature).toHaveClass('hydrated');
    }
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

test.describe('gcds-signature a11y tests', () => {
  /**
   * Colour contrast
   */
  test('Colour contrast', async ({ page }) => {
    const results = await new AxeBuilder({ page })
      .withRules(['color-contrast'])
      .analyze();
    expect(results.violations).toHaveLength(0);
  });
});
