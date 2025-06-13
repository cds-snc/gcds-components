const { AxeBuilder } = require('@axe-core/playwright');

import { expect } from '@playwright/test';
import { test } from '@stencil/playwright';

test.beforeEach(async ({ page }) => {
  await page.goto('/components/gcds-textarea/test/gcds-textarea.e2e.html');

  await page.waitForFunction(() => {
    const host = document.querySelector('gcds-textarea');
    return host && host.shadowRoot;
  });
});

test.describe('gcds-textarea', () => {
  test('renders', async ({ page }) => {
    const element = await page.locator('gcds-textarea');

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

test.describe('gcds-textarea a11y tests', () => {
  /**
   * Aria-invalid true if error test
   */
  test('aria-invalid', async ({ page }) => {
    const element = await page.locator('gcds-textarea');

    await element.evaluate(el => {
      el.setAttribute('error-message', 'Field required');
    });
    await expect(element).toHaveClass('hydrated');

    const textareaElement = element.locator('textarea');
    await expect(textareaElement).toHaveAttribute('aria-invalid', 'true');
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
   * Textarea keyboard focus
   */
  test('textarea keyboard focus', async ({ page }) => {
    const element = await page.locator('gcds-textarea');
    await expect(element).toHaveClass('hydrated');

    const textareaField = await page
      .locator('gcds-textarea')
      .locator('textarea')
      .innerText();

    await page.keyboard.press('Tab');

    expect(
      await page.evaluate(
        () => document.activeElement?.shadowRoot?.activeElement?.textContent,
      ),
    ).toBe(textareaField);
  });

  /**
   * Textarea label test
   */
  test('textarea contains label', async ({ page }) => {
    const element = await page.locator('gcds-textarea');

    await expect(element).toHaveClass('hydrated');

    const label = element.locator('gcds-label');
    await expect(label).toHaveAttribute('id', 'label-for-textarea-default');
  });

  test('textarea has aria-labelledby for label', async ({ page }) => {
    const element = await page.locator('gcds-textarea');

    await expect(element).toHaveClass('hydrated');

    const textarea = element.locator('textarea');
    await expect(textarea).toHaveAttribute(
      'aria-labelledby',
      'label-for-textarea-default',
    );
  });
});
