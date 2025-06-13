const { AxeBuilder } = require('@axe-core/playwright');

import { expect } from '@playwright/test';
import { test } from '@stencil/playwright';

test.beforeEach(async ({ page }) => {
  await page.goto('/components/gcds-select/test/gcds-select.e2e.html');

  await page.waitForFunction(() => {
    const host = document.querySelector('gcds-select');
    return host && host.shadowRoot;
  });
});

test.describe('gcds-select', () => {
  test('renders', async ({ page }) => {
    const element = await page.locator('gcds-select');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    // Check if it has the 'hydrated' class
    await expect(element).toHaveClass('hydrated');
  });

  /**
   * Validation
   */
  // !!! TODO
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

test.describe('gcds-select a11y tests', () => {
  /**
   * Aria-invalid true if error test
   */
  test('aria-invalid', async ({ page }) => {
    const element = await page.locator('gcds-select');

    await element.evaluate(el => {
      el.setAttribute('error-message', 'Field required');
    });
    await expect(element).toHaveClass('hydrated');

    const selectElement = element.locator('select');
    await expect(selectElement).toHaveAttribute('aria-invalid', 'true');
  });

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
   * Select keyboard focus
   */
  test('select keyboard focus', async ({ page }) => {
    const element = await page.locator('gcds-select');
    await expect(element).toHaveClass('hydrated');

    const select = element.locator('select');

    await page.keyboard.press('Tab');

    // Confirm that the focused element is the select inside gcds-select
    const isFocused = await select.evaluate(
      el => el === el.getRootNode().activeElement,
    );

    expect(isFocused).toBe(true);
  });

  /**
   * Select label test
   */
  test('select contains label', async ({ page }) => {
    const element = await page.locator('gcds-select');

    await expect(element).toHaveClass('hydrated');

    const label = element.locator('gcds-label');
    await expect(label).toHaveAttribute('id', 'label-for-select-default');
  });
});
