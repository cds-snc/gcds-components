const { AxeBuilder } = require('@axe-core/playwright');

import { expect } from '@playwright/test';
import { test } from '@stencil/playwright';

test.beforeEach(async ({ page }) => {
  await page.goto('/components/gcds-icon/test/gcds-icon.e2e.html');

  await page.waitForFunction(() => {
    const host = document.querySelector('gcds-icon');
    return host && host.shadowRoot;
  });
});
test.describe('gcds-icon', () => {
  test('renders', async ({ page }) => {
    const element = await page.locator('gcds-icon');
    await element.waitFor({ timeout: 10000 });
    expect(element).toHaveClass('hydrated');
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

test.describe('gcds-icon a11y tests', () => {
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
   * Image alt text
   */
  test('Image alt text', async ({ page }) => {
    const element = await page.locator('gcds-icon');
    await element.waitFor({ timeout: 10000 });

    await element.evaluate(
      el => ((el as HTMLGcdsIconElement).label = 'Labelled'),
    );

    await page.waitForChanges();

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
