const { AxeBuilder } = require('@axe-core/playwright');

import { expect } from '@playwright/test';
import { test } from '../../../../tests/base';

test.describe('gcds-text', () => {
  test('renders', async ({ page }) => {
    const element = await page.locator('gcds-text');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    // Check if it has the 'hydrated' class
    await expect(element).toHaveClass('hydrated');
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

test.describe('gcds-text a11y tests', () => {
  test('Colour contrast - primary text', async ({ page }) => {
    await page.setContent(`
      <gcds-text text-role="primary">This is some primary text.</gcds-text>
    `);

    const results = await new AxeBuilder({ page })
      .withRules(['color-contrast'])
      .analyze();

    expect(results.violations).toHaveLength(0);
  });

  test('Colour contrast - secondary text', async ({ page }) => {
    await page.setContent(`
      <gcds-text text-role="secondary">This is some secondary text.</gcds-text>
    `);

    const results = await new AxeBuilder({ page })
      .withRules(['color-contrast'])
      .analyze();

    expect(results.violations).toHaveLength(0);
  });

  test('Colour contrast - light text', async ({ page }) => {
    await page.setContent(`
      <gcds-text text-role="light">This is some light text.</gcds-text>
    `);

    const results = await new AxeBuilder({ page })
      .withRules(['color-contrast'])
      .analyze();

    expect(results.violations).toHaveLength(0);
  });
});
