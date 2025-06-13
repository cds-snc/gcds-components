const { AxeBuilder } = require('@axe-core/playwright');

import { expect } from '@playwright/test';
import { test } from '@stencil/playwright';

test.beforeEach(async ({ page }) => {
  await page.goto('/components/gcds-input/test/gcds-input.e2e.html');

  await page.waitForFunction(() => {
    const host = document.querySelector('gcds-input');
    return host && host.shadowRoot;
  });
});

test.describe('gcds-input', () => {
  test('renders', async ({ page }) => {
    const element = await page.locator('gcds-input');

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

test.describe('gcds-input a11y tests', () => {
  /**
   * Aria-invalid true if error test
   */
  test('aria-invalid', async ({ page }) => {
    const element = await page.locator('gcds-input');

    await element.evaluate(el => {
      el.setAttribute('error-message', 'Field required');
    });
    await expect(element).toHaveClass('hydrated');

    const inputElement = element.locator('input');
    await expect(inputElement).toHaveAttribute('aria-invalid', 'true');
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
   * Input keyboard focus
   */
  test('input keyboard focus', async ({ page }) => {
    const element = await page.locator('gcds-input');
    await expect(element).toHaveClass('hydrated');

    const inputField = await page
      .locator('gcds-input')
      .locator('input')
      .innerText();

    await page.keyboard.press('Tab');

    expect(
      await page.evaluate(
        () => document.activeElement?.shadowRoot?.activeElement?.textContent,
      ),
    ).toBe(inputField);
  });

  /**
   * Input label test
   */
  test('input contains label', async ({ page }) => {
    const element = await page.locator('gcds-input');

    await expect(element).toHaveClass('hydrated');

    const label = element.locator('gcds-label');
    await expect(label).toHaveAttribute('id', 'label-for-input-default');
  });

  test('input has aria-labelledby for label', async ({ page }) => {
    const element = await page.locator('gcds-input');

    await expect(element).toHaveClass('hydrated');

    const input = element.locator('input');
    await expect(input).toHaveAttribute(
      'aria-labelledby',
      'label-for-input-default',
    );
  });
});
