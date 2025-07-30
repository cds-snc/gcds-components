const { AxeBuilder } = require('@axe-core/playwright');

import { expect } from '@playwright/test';
import { test } from '@stencil/playwright';

import I18N from '../../../utils/i18n/i18n.js';

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
  test('Validation', async ({ page }) => {
    const element = await page.locator('gcds-textarea');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.evaluate(el => (el as HTMLGcdsTextareaElement).validate());

    let errorMessage = await element.evaluate(
      el => (el as HTMLGcdsTextareaElement).errorMessage,
    );

    expect(errorMessage).toEqual('Enter information to continue.');

    await element.locator('textarea').fill('Information');

    await element.evaluate(el => (el as HTMLGcdsTextareaElement).validate());

    errorMessage = await element.evaluate(
      el => (el as HTMLGcdsTextareaElement).errorMessage,
    );

    expect(errorMessage).toEqual('');
  });

  test('Validation - custom validation', async ({ page }) => {
    const element = await page.locator('gcds-textarea');

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

      (el as HTMLGcdsTextareaElement).validator = [minLength(2)];
    });

    await page.waitForChanges();
    await element.locator('textarea').fill('1');
    await element.evaluate(el => (el as HTMLGcdsTextareaElement).validate());

    let errorMessage = await element.evaluate(
      el => (el as HTMLGcdsTextareaElement).errorMessage,
    );

    expect(errorMessage).toEqual(
      'The entered value must be longer than 2 characters',
    );

    await element.locator('textarea').fill('123');
    await element.evaluate(el => (el as HTMLGcdsTextareaElement).validate());

    errorMessage = await element.evaluate(
      el => (el as HTMLGcdsTextareaElement).errorMessage,
    );

    expect(errorMessage).toEqual('');
  });

  test('Validation - custom validation old format', async ({ page }) => {
    const element = await page.locator('gcds-textarea');

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
      (el as HTMLGcdsTextareaElement).validator = [minLength(2)];
    });

    await page.waitForChanges();
    await element.locator('textarea').fill('1');
    await element.evaluate(el => (el as HTMLGcdsTextareaElement).validate());

    let errorMessage = await element.evaluate(
      el => (el as HTMLGcdsTextareaElement).errorMessage,
    );

    expect(errorMessage).toEqual(
      'The entered value must be longer than 2 characters',
    );

    await element.locator('textarea').fill('123');
    await element.evaluate(el => (el as HTMLGcdsTextareaElement).validate());

    errorMessage = await element.evaluate(
      el => (el as HTMLGcdsTextareaElement).errorMessage,
    );

    expect(errorMessage).toEqual('');
  });

  test('HTML attribute validation - minlength', async ({ page }) => {
    const element = await page.locator('gcds-textarea');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.evaluate(el => {
      (el as HTMLGcdsTextareaElement).minlength = 6;
    });

    await page.waitForChanges();

    await element.locator('textarea').fill('short');

    await element.evaluate(el => (el as HTMLGcdsTextareaElement).validate());

    let errorMessage = await element.evaluate(
      el => (el as HTMLGcdsTextareaElement).errorMessage,
    );

    expect(errorMessage).toEqual(
      I18N.en.tooShort.replace('{min}', 6).replace('{current}', 5),
    );

    await element.locator('textarea').fill('long enough');

    await element.evaluate(el => (el as HTMLGcdsTextareaElement).validate());

    errorMessage = await element.evaluate(
      el => (el as HTMLGcdsTextareaElement).errorMessage,
    );

    expect(errorMessage).toEqual('');
  });

  test('HTML attribute validation - maxlength/character-count', async ({
    page,
  }) => {
    const element = await page.locator('gcds-textarea');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.evaluate(el => {
      (el as HTMLGcdsTextareaElement).value = 'too long value';
      (el as HTMLGcdsTextareaElement).characterCount = 7;
    });

    await page.waitForChanges();

    await element.locator('textarea').focus();

    await page.keyboard.press('Backspace');

    await element.evaluate(el => (el as HTMLGcdsTextareaElement).validate());

    let errorMessage = await element.evaluate(
      el => (el as HTMLGcdsTextareaElement).errorMessage,
    );

    expect(errorMessage).toEqual(
      I18N.en.tooLong.replace('{max}', 7).replace('{current}', 13),
    );

    await element.locator('textarea').fill('perfect');

    await element.evaluate(el => (el as HTMLGcdsTextareaElement).validate());

    errorMessage = await element.evaluate(
      el => (el as HTMLGcdsTextareaElement).errorMessage,
    );

    expect(errorMessage).toEqual('');
  });
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
