const { AxeBuilder } = require('@axe-core/playwright');

import { expect } from '@playwright/test';
import { test } from '@stencil/playwright';

import I18N from '../../../utils/i18n/i18n.js';

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
  test('Validation', async ({ page }) => {
    const element = await page.locator('gcds-input');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.evaluate(el => (el as HTMLGcdsInputElement).validate());

    let errorMessage = await element.evaluate(
      el => (el as HTMLGcdsInputElement).errorMessage,
    );

    expect(errorMessage).toEqual('Enter information to continue.');

    await element.locator('input').fill('Information');

    await element.evaluate(el => (el as HTMLGcdsInputElement).validate());

    errorMessage = await element.evaluate(
      el => (el as HTMLGcdsInputElement).errorMessage,
    );

    expect(errorMessage).toEqual('');
  });

  test('Validation - custom validation', async ({ page }) => {
    const element = await page.locator('gcds-input');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.evaluate(el => {
      const minLength = (min: number) => {
        return {
          validate: (value: string) => {
            value = value || '';
            let valid = true;
            if (min) {
              valid = min <= value.length;
            }
            return {
              valid,
              reason: {
                en: `The entered value must be longer than ${min} characters`,
                fr: `The entered value must be longer than ${min} characters`,
              },
            };
          },
        };
      };

      (el as HTMLGcdsInputElement).validator = [minLength(2)];
    });

    await page.waitForChanges();

    await element.locator('input').fill('1');

    await element.evaluate(el => (el as HTMLGcdsInputElement).validate());

    let errorMessage = await element.evaluate(
      el => (el as HTMLGcdsInputElement).errorMessage,
    );

    expect(errorMessage).toEqual(
      'The entered value must be longer than 2 characters',
    );

    await element.locator('input').fill('123');

    await element.evaluate(el => (el as HTMLGcdsInputElement).validate());

    errorMessage = await element.evaluate(
      el => (el as HTMLGcdsInputElement).errorMessage,
    );

    expect(errorMessage).toEqual('');
  });

  test('Validation - custom validation old format', async ({ page }) => {
    const element = await page.locator('gcds-input');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.evaluate(el => {
      const minLength = (min: number) => {
        const errorMessage = {
          en: `The entered value must be longer than ${min} characters`,
          fr: `The entered value must be longer than ${min} characters`,
        };
        return {
          validate: (value: string) => {
            value = value || '';
            let valid = true;
            if (min) {
              valid = min <= value.length;
            }
            return valid;
          },
          errorMessage,
        };
      };

      // @ts-expect-error Old format of validator is different than new format. Will still run in JS environments
      (el as HTMLGcdsInputElement).validator = [minLength(2)];
    });

    await page.waitForChanges();

    await element.locator('input').fill('1');

    await element.evaluate(el => (el as HTMLGcdsInputElement).validate());

    let errorMessage = await element.evaluate(
      el => (el as HTMLGcdsInputElement).errorMessage,
    );

    expect(errorMessage).toEqual(
      'The entered value must be longer than 2 characters',
    );

    await element.locator('input').fill('123');

    await element.evaluate(el => (el as HTMLGcdsInputElement).validate());

    errorMessage = await element.evaluate(
      el => (el as HTMLGcdsInputElement).errorMessage,
    );

    expect(errorMessage).toEqual('');
  });

  /**
   * HTML attribute validation
   */
  test('HTML attribute validation - min/max', async ({ page }) => {
    const element = await page.locator('gcds-input');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.evaluate(el => {
      (el as HTMLGcdsInputElement).type = 'number';
      (el as HTMLGcdsInputElement).min = 5;
      (el as HTMLGcdsInputElement).max = 100;
    });

    await page.waitForChanges();

    await element.locator('input').fill('1');

    await element.evaluate(el => (el as HTMLGcdsInputElement).validate());

    let errorMessage = await element.evaluate(
      el => (el as HTMLGcdsInputElement).errorMessage,
    );

    expect(errorMessage).toEqual(I18N.en.rangeUnderflow.replace('{min}', 5));

    await element.locator('input').fill('123');

    await element.evaluate(el => (el as HTMLGcdsInputElement).validate());

    errorMessage = await element.evaluate(
      el => (el as HTMLGcdsInputElement).errorMessage,
    );

    expect(errorMessage).toEqual(I18N.en.rangeOverflow.replace('{max}', 100));

    await element.locator('input').fill('87');

    await element.evaluate(el => (el as HTMLGcdsInputElement).validate());

    errorMessage = await element.evaluate(
      el => (el as HTMLGcdsInputElement).errorMessage,
    );

    expect(errorMessage).toEqual('');
  });

  test('HTML attribute validation - step', async ({ page }) => {
    const element = await page.locator('gcds-input');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.evaluate(el => {
      (el as HTMLGcdsInputElement).type = 'number';
      (el as HTMLGcdsInputElement).step = 10;
    });

    await page.waitForChanges();

    await element.locator('input').fill('17');

    await element.evaluate(el => (el as HTMLGcdsInputElement).validate());

    let errorMessage = await element.evaluate(
      el => (el as HTMLGcdsInputElement).errorMessage,
    );

    expect(errorMessage).toEqual(
      I18N.en.stepMismatch.replace('{lower}', 10).replace('{upper}', 20),
    );

    await element.locator('input').fill('20');

    await element.evaluate(el => (el as HTMLGcdsInputElement).validate());

    errorMessage = await element.evaluate(
      el => (el as HTMLGcdsInputElement).errorMessage,
    );

    expect(errorMessage).toEqual('');
  });

  test('HTML attribute validation - pattern', async ({ page }) => {
    const element = await page.locator('gcds-input');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.evaluate(el => {
      (el as HTMLGcdsInputElement).pattern = '[A-Z]+';
    });

    await page.waitForChanges();

    await element.locator('input').fill('nocaps');

    await element.evaluate(el => (el as HTMLGcdsInputElement).validate());

    let errorMessage = await element.evaluate(
      el => (el as HTMLGcdsInputElement).errorMessage,
    );

    expect(errorMessage).toEqual(I18N.en.patternMismatch);

    await element.locator('input').fill('ALLCAPS');

    await element.evaluate(el => (el as HTMLGcdsInputElement).validate());

    errorMessage = await element.evaluate(
      el => (el as HTMLGcdsInputElement).errorMessage,
    );

    expect(errorMessage).toEqual('');
  });

  test('HTML attribute validation - minlength', async ({ page }) => {
    const element = await page.locator('gcds-input');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.evaluate(el => {
      (el as HTMLGcdsInputElement).minlength = 6;
    });

    await page.waitForChanges();

    await element.locator('input').fill('short');

    await element.evaluate(el => (el as HTMLGcdsInputElement).validate());

    let errorMessage = await element.evaluate(
      el => (el as HTMLGcdsInputElement).errorMessage,
    );

    expect(errorMessage).toEqual(
      I18N.en.tooShort.replace('{min}', 6).replace('{current}', 5),
    );

    await element.locator('input').fill('long enough');

    await element.evaluate(el => (el as HTMLGcdsInputElement).validate());

    errorMessage = await element.evaluate(
      el => (el as HTMLGcdsInputElement).errorMessage,
    );

    expect(errorMessage).toEqual('');
  });

  test('HTML attribute validation - maxlength', async ({ page }) => {
    const element = await page.locator('gcds-input');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.evaluate(el => {
      (el as HTMLGcdsInputElement).value = 'too long value';
      (el as HTMLGcdsInputElement).maxlength = 7;
    });

    await page.waitForChanges();

    await element.locator('input').focus();

    await page.keyboard.press('Backspace');

    await element.evaluate(el => (el as HTMLGcdsInputElement).validate());

    let errorMessage = await element.evaluate(
      el => (el as HTMLGcdsInputElement).errorMessage,
    );

    expect(errorMessage).toEqual(
      I18N.en.tooLong.replace('{max}', 7).replace('{current}', 13),
    );

    await element.locator('input').fill('perfect');

    await element.evaluate(el => (el as HTMLGcdsInputElement).validate());

    errorMessage = await element.evaluate(
      el => (el as HTMLGcdsInputElement).errorMessage,
    );

    expect(errorMessage).toEqual('');
  });

  /**
   * HTML validity
   */
  test('HTML validity', async ({ page }) => {
    const element = await page.locator('gcds-input');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.evaluate(el => {
      (el as HTMLGcdsInputElement).minlength = 6;
    });

    await page.waitForChanges();

    await element.locator('input').fill('short');

    let checkedValidity = await element.evaluate(el =>
      (el as HTMLGcdsInputElement).checkValidity(),
    );

    expect(checkedValidity).toEqual(false);

    let validationMessage = await element.evaluate(el =>
      (el as HTMLGcdsInputElement).getValidationMessage(),
    );

    expect(validationMessage).toEqual(
      I18N.en.tooShort.replace('{min}', 6).replace('{current}', 5),
    );

    await element.locator('input').fill('long enough');

    checkedValidity = await element.evaluate(el =>
      (el as HTMLGcdsInputElement).checkValidity(),
    );

    expect(checkedValidity).toEqual(true);

    validationMessage = await element.evaluate(el =>
      (el as HTMLGcdsInputElement).getValidationMessage(),
    );

    expect(validationMessage).toEqual('');
  });
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
