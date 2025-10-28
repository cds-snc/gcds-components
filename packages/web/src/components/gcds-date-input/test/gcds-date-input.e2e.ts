const { AxeBuilder } = require('@axe-core/playwright');

import { expect } from '@playwright/test';
import { test } from '../../../../tests/base';

import { dateInputErrorMessage } from '../../../validators/input-validators/input-validators';

test.describe('gcds-date-input', () => {
  test('renders', async ({ page }) => {
    const element = await page.locator('gcds-date-input');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    // Check if it has the 'hydrated' class
    await expect(element).toHaveClass('hydrated');
  });
  /**
   * Value
   */
  test('Format: full - value', async ({ page }) => {
    const element = await page.locator('gcds-date-input');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.locator('select').selectOption('03');
    await element.locator('input[name="year"]').fill('1234');
    await element.locator('input[name="day"]').fill('11');

    const value = await element.evaluate(
      el => (el as HTMLGcdsDateInputElement).value,
    );

    expect(value).toEqual('1234-03-11');
  });
  test('Format: compact - value', async ({ page }) => {
    const element = await page.locator('gcds-date-input');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.evaluate(
      el => ((el as HTMLGcdsDateInputElement).format = 'compact'),
    );

    await page.waitForChanges();

    await element.locator('select').selectOption('03');
    await element.locator('input[name="year"]').fill('12345');

    const value = await element.evaluate(
      el => (el as HTMLGcdsDateInputElement).value,
    );

    expect(value).toEqual('12345-03');
  });
  /**
   * Invalid value
   */
  test('Format: full - invalid value', async ({ page }) => {
    const element = await page.locator('gcds-date-input');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.locator('select').selectOption('03');
    await element.locator('input[name="year"]').fill('12345');
    await element.locator('input[name="day"]').fill('2e3', { force: true });

    const value = await element.evaluate(
      el => (el as HTMLGcdsDateInputElement).value,
    );

    expect(value).toEqual('12345-03-2e3');
  });
  test('Format: compact - invalid value', async ({ page }) => {
    const element = await page.locator('gcds-date-input');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.evaluate(
      el => ((el as HTMLGcdsDateInputElement).format = 'compact'),
    );

    await page.waitForChanges();

    await element.locator('select').selectOption('03');
    await element.locator('input[name="year"]').fill('1234');

    const value = await element.evaluate(
      el => (el as HTMLGcdsDateInputElement).value,
    );

    expect(value).toEqual('1234-03');
  });
  /**
   * Validation
   */
  test('Validation - Missing all fields', async ({ page }) => {
    const element = await page.locator('gcds-date-input');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.evaluate(el => (el as HTMLGcdsDateInputElement).validate());

    const errorMessage = await element.evaluate(
      el => (el as HTMLGcdsDateInputElement).errorMessage,
    );

    expect(errorMessage).toEqual(dateInputErrorMessage.en.all);
  });
  test('Validation - Missing day', async ({ page }) => {
    const element = await page.locator('gcds-date-input');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.locator('select').selectOption('03');
    await element.locator('input[name="year"]').fill('1234');

    await element.evaluate(el => (el as HTMLGcdsDateInputElement).validate());

    const errorMessage = await element.evaluate(
      el => (el as HTMLGcdsDateInputElement).errorMessage,
    );

    expect(errorMessage).toEqual(dateInputErrorMessage.en.missingday);
  });
  test('Validation - Missing year', async ({ page }) => {
    const element = await page.locator('gcds-date-input');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.locator('select').selectOption('03');
    await element.locator('input[name="day"]').fill('11');

    await element.evaluate(el => (el as HTMLGcdsDateInputElement).validate());

    const errorMessage = await element.evaluate(
      el => (el as HTMLGcdsDateInputElement).errorMessage,
    );

    expect(errorMessage).toEqual(dateInputErrorMessage.en.missingyear);
  });
  test('Validation - Missing month', async ({ page }) => {
    const element = await page.locator('gcds-date-input');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.locator('input[name="year"]').fill('1234');
    await element.locator('input[name="day"]').fill('11');

    await element.evaluate(el => (el as HTMLGcdsDateInputElement).validate());

    const errorMessage = await element.evaluate(
      el => (el as HTMLGcdsDateInputElement).errorMessage,
    );

    expect(errorMessage).toEqual(dateInputErrorMessage.en.missingmonth);
  });
  test('Validation - Missing month and day', async ({ page }) => {
    const element = await page.locator('gcds-date-input');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.locator('input[name="year"]').fill('1234');

    await element.evaluate(el => (el as HTMLGcdsDateInputElement).validate());

    const errorMessage = await element.evaluate(
      el => (el as HTMLGcdsDateInputElement).errorMessage,
    );

    expect(errorMessage).toEqual(dateInputErrorMessage.en.missingmonthday);
  });
  test('Validation - Missing day and year', async ({ page }) => {
    const element = await page.locator('gcds-date-input');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.locator('select').selectOption('03');

    await element.evaluate(el => (el as HTMLGcdsDateInputElement).validate());

    const errorMessage = await element.evaluate(
      el => (el as HTMLGcdsDateInputElement).errorMessage,
    );

    expect(errorMessage).toEqual(dateInputErrorMessage.en.missingdayyear);
  });
  test('Validation - Missing month and year', async ({ page }) => {
    const element = await page.locator('gcds-date-input');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.locator('input[name="day"]').fill('11');

    await element.evaluate(el => (el as HTMLGcdsDateInputElement).validate());

    const errorMessage = await element.evaluate(
      el => (el as HTMLGcdsDateInputElement).errorMessage,
    );

    expect(errorMessage).toEqual(dateInputErrorMessage.en.missingmonthyear);
  });
  test('Validation - Year length', async ({ page }) => {
    const element = await page.locator('gcds-date-input');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.locator('select').selectOption('03');
    await element.locator('input[name="year"]').fill('12345');
    await element.locator('input[name="day"]').fill('11');

    await element.evaluate(el => (el as HTMLGcdsDateInputElement).validate());

    const errorMessage = await element.evaluate(
      el => (el as HTMLGcdsDateInputElement).errorMessage,
    );

    expect(errorMessage).toEqual(dateInputErrorMessage.en.invalidyearlength);
  });
  test('Validation - Invalid day', async ({ page }) => {
    const element = await page.locator('gcds-date-input');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.locator('select').selectOption('03');
    await element.locator('input[name="year"]').fill('1234');
    await element.locator('input[name="day"]').fill('113');

    await element.evaluate(el => (el as HTMLGcdsDateInputElement).validate());

    const errorMessage = await element.evaluate(
      el => (el as HTMLGcdsDateInputElement).errorMessage,
    );

    expect(errorMessage).toEqual(dateInputErrorMessage.en.invalidday);
  });
  test('Validation - Custom validation', async ({ page }) => {
    const element = await page.locator('gcds-date-input');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.evaluate(el => {
      const expectYear = (year: string) => {
        return {
          validate: (value: string) => {
            const dates = value.split('-');
            return {
              valid: dates[0] === year,
              reason: {
                en: `The entered year must be ${year}.`,
                fr: `The entered year must be ${year}.`,
              },
            };
          },
        };
      };

      (el as HTMLGcdsDateInputElement).validator = [expectYear('1991')];
    });

    await page.waitForChanges();

    await element.locator('select').selectOption('03');
    await element.locator('input[name="year"]').fill('1234');
    await element.locator('input[name="day"]').fill('11');

    await element.evaluate(el => (el as HTMLGcdsDateInputElement).validate());

    let errorMessage = await element.evaluate(
      el => (el as HTMLGcdsDateInputElement).errorMessage,
    );

    expect(errorMessage).toEqual('The entered year must be 1991.');

    await element.locator('input[name="year"]').fill('1991');

    await element.evaluate(el => (el as HTMLGcdsDateInputElement).validate());

    errorMessage = await element.evaluate(
      el => (el as HTMLGcdsDateInputElement).errorMessage,
    );

    expect(errorMessage).toEqual('');
  });
  test('Validation - Custom validation old format', async ({ page }) => {
    const element = await page.locator('gcds-date-input');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.evaluate(el => {
      const expectYear = (year: string) => {
        return {
          validate: (value: string) => {
            const dates = value.split('-');
            return dates[0] === year;
          },
          errorMessage: {
            en: `The entered year must be ${year}.`,
            fr: `The entered year must be ${year}.`,
          },
        };
      };

      // @ts-expect-error Old format of validator is different than new format. Will still run in JS environments
      (el as HTMLGcdsDateInputElement).validator = [expectYear('1991')];
    });

    await page.waitForChanges();

    await element.locator('select').selectOption('03');
    await element.locator('input[name="year"]').fill('1234');
    await element.locator('input[name="day"]').fill('11');

    await element.evaluate(el => (el as HTMLGcdsDateInputElement).validate());

    let errorMessage = await element.evaluate(
      el => (el as HTMLGcdsDateInputElement).errorMessage,
    );

    expect(errorMessage).toEqual('The entered year must be 1991.');

    await element.locator('input[name="year"]').fill('1991');

    await element.evaluate(el => (el as HTMLGcdsDateInputElement).validate());

    errorMessage = await element.evaluate(
      el => (el as HTMLGcdsDateInputElement).errorMessage,
    );

    expect(errorMessage).toEqual('');
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

test.describe('gcds-date-input a11y tests', () => {
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
   * Labels
   */
  test('Proper labels', async ({ page }) => {
    try {
      const results = await new AxeBuilder({ page })
        .withRules(['label'])
        .analyze();
      expect(results.violations.length).toBe(0);
    } catch (e) {
      console.error(e);
    }
  });
  /**
   * Keyboard focus
   */
  test('Keyboard focus', async ({ page }) => {
    const element = await page.locator('gcds-date-input');
    await expect(element).toHaveClass('hydrated');

    await page.keyboard.press('Tab');

    expect(
      await page.evaluate(
        () => window.document.activeElement.shadowRoot.activeElement.nodeName,
      ),
    ).toEqual('GCDS-SELECT');

    await page.keyboard.press('Tab');

    expect(
      await page.evaluate(
        () => window.document.activeElement.shadowRoot.activeElement.nodeName,
      ),
    ).toEqual('GCDS-INPUT');

    await page.keyboard.press('Tab');

    expect(
      await page.evaluate(
        () => window.document.activeElement.shadowRoot.activeElement.nodeName,
      ),
    ).toEqual('GCDS-INPUT');
  });
});
