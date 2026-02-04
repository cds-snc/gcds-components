const { AxeBuilder } = require('@axe-core/playwright');

import { expect } from '@playwright/test';
import { test } from '../../../../tests/base';

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
  test('Validation', async ({ page }) => {
    const element = await page.locator('gcds-select');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });
    await element.evaluate(el => (el as HTMLGcdsSelectElement).validate());

    let errorMessage = await element.evaluate(
      el => (el as HTMLGcdsSelectElement).errorMessage,
    );

    expect(errorMessage).toEqual('Choose an option to continue.');

    await element.locator('select').selectOption({ label: 'Option 1' });
    await element.evaluate(el => (el as HTMLGcdsSelectElement).validate());

    errorMessage = await element.evaluate(
      el => (el as HTMLGcdsSelectElement).errorMessage,
    );

    expect(errorMessage).toEqual('');
  });

  test('Validation - custom validation', async ({ page }) => {
    const element = await page.locator('gcds-select');

    // Wait for element to attach and become visible
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.evaluate(el => {
      const matchAnswer = (answer: string) => {
        return {
          validate: (value: string) => {
            return {
              valid: value === answer,
              reason: {
                en: `The selected answer must be "${answer}"`,
                fr: `The selected answer must be "${answer}"`,
              },
            };
          },
        };
      };

      (el as HTMLGcdsSelectElement).validator = [matchAnswer('1')];
    });

    await element.locator('select').selectOption('2');
    await element.evaluate(el => (el as HTMLGcdsSelectElement).validate());

    let errorMessage = await element.evaluate(
      el => (el as HTMLGcdsSelectElement).errorMessage,
    );

    expect(errorMessage).toEqual('The selected answer must be "1"');

    await element.locator('select').selectOption('1');
    await element.evaluate(el => (el as HTMLGcdsSelectElement).validate());

    errorMessage = await element.evaluate(
      el => (el as HTMLGcdsSelectElement).errorMessage,
    );

    expect(errorMessage).toEqual('');
  });

  test('Validation - custom validation (old format)', async ({ page }) => {
    const element = await page.locator('gcds-select');

    // Wait for element to attach and become visible
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.evaluate(el => {
      const matchAnswer = (answer: string) => {
        const errorMessage = {
          en: `The selected answer must be "${answer}"`,
          fr: `The selected answer must be "${answer}"`,
        };

        return {
          validate: (value: string) => {
            return value === answer;
          },
          errorMessage,
        };
      };

      // @ts-expect-error Old format validator
      (el as HTMLGcdsSelectElement).validator = [matchAnswer('1')];
    });

    await element.locator('select').selectOption('2');
    await element.evaluate(el => (el as HTMLGcdsSelectElement).validate());

    let errorMessage = await element.evaluate(
      el => (el as HTMLGcdsSelectElement).errorMessage,
    );

    expect(errorMessage).toEqual('The selected answer must be "1"');

    await element.locator('select').selectOption('1');
    await element.evaluate(el => (el as HTMLGcdsSelectElement).validate());

    errorMessage = await element.evaluate(
      el => (el as HTMLGcdsSelectElement).errorMessage,
    );

    expect(errorMessage).toEqual('');
  });

  test('HTML validity', async ({ page }) => {
    const element = await page.locator('gcds-select');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    let validity = await element.evaluate(el =>
      (el as HTMLGcdsSelectElement).checkValidity(),
    );

    expect(validity).toBe(false);

    await element.locator('select').selectOption('2');

    validity = await element.evaluate(el =>
      (el as HTMLGcdsSelectElement).checkValidity(),
    );

    expect(validity).toBe(true);
  });
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
    const results = await new AxeBuilder({ page })
      .withRules(['color-contrast'])
      .analyze();
    expect(results.violations).toHaveLength(0);
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
      el => el === (el.getRootNode() as ShadowRoot).activeElement,
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
