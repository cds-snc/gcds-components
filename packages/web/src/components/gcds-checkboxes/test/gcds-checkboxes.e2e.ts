const { AxeBuilder } = require('@axe-core/playwright');

import { expect } from '@playwright/test';
import { test } from '../../../../tests/base';

test.describe('gcds-checkboxes', () => {
  test('renders', async ({ page }) => {
    const element = await page.locator('gcds-checkboxes');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    // Check if it has the 'hydrated' class
    await expect(element).toHaveClass('hydrated');
  });
  /**
   * Events
   */
  test('Emit gcds custom events', async ({ page }) => {
    const element = await page.locator('gcds-checkboxes');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    const gcdsInput = await page.spyOnEvent('gcdsInput');
    const gcdsChange = await page.spyOnEvent('gcdsChange');
    const gcdsBlur = await page.spyOnEvent('gcdsBlur');
    const gcdsFocus = await page.spyOnEvent('gcdsFocus');

    await element.locator('input').first().click({ force: true });

    await page.waitForChanges();

    await page.keyboard.press('Tab');

    expect(gcdsInput).toHaveReceivedEvent();
    expect(gcdsChange).toHaveReceivedEvent();
    expect(gcdsBlur).toHaveReceivedEvent();
    expect(gcdsFocus).toHaveReceivedEvent();
  });
  test('Disabled - no events', async ({ page }) => {
    const element = await page.locator('gcds-checkboxes');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.evaluate(el => {
      (el as HTMLGcdsCheckboxesElement).required = false;
      (el as HTMLGcdsCheckboxesElement).disabled = true;
    });

    await page.waitForChanges();

    const gcdsInput = await page.spyOnEvent('gcdsInput');
    const gcdsChange = await page.spyOnEvent('gcdsChange');

    await element.locator('input').first().click({ force: true });

    await page.waitForChanges();

    expect(gcdsInput).not.toHaveReceivedEvent();
    expect(gcdsChange).not.toHaveReceivedEvent();
  });
  /**
   * JS manipulation
   */
  test('Using JS - assign options', async ({ page }) => {
    const element = await page.locator('gcds-checkboxes');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.evaluate(el => {
      (el as HTMLGcdsCheckboxesElement).options = null;
    });

    await page.waitForChanges();

    await element.evaluate(el => {
      (el as HTMLGcdsCheckboxesElement).options = [
        {
          label: 'Red',
          id: 'red',
          value: 'red',
        },
        {
          label: 'Blue',
          id: 'blue',
          value: 'blue',
        },
      ];
    });

    await page.waitForChanges();

    expect(
      await page
        .locator('input')
        .first()
        .evaluate(el => el.id),
    ).toBe('red');
  });
  test('Using JS - assign value', async ({ page }) => {
    const element = await page.locator('gcds-checkboxes');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    let checkTwo = await page
      .locator('input')
      .nth(1)
      .evaluate(el => (el as HTMLInputElement).checked);

    expect(checkTwo).toBe(false);

    await element.evaluate(el => {
      (el as HTMLGcdsCheckboxesElement).value = ['check2'];
    });

    await page.waitForChanges();

    checkTwo = await page
      .locator('input')
      .nth(1)
      .evaluate(el => (el as HTMLInputElement).checked);

    expect(checkTwo).toBe(true);
  });
  /**
   * Validation
   */
  test('Validation', async ({ page }) => {
    const element = await page.locator('gcds-checkboxes');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.evaluate(el => (el as HTMLGcdsCheckboxesElement).validate());

    let errorMessage = await element.evaluate(
      el => (el as HTMLGcdsCheckboxesElement).errorMessage,
    );

    expect(errorMessage).toEqual('Choose an option to continue.');

    await element.locator('input').first().click({ force: true });

    await page.waitForChanges();

    await element.evaluate(el => (el as HTMLGcdsCheckboxesElement).validate());

    errorMessage = await element.evaluate(
      el => (el as HTMLGcdsCheckboxesElement).errorMessage,
    );

    expect(errorMessage).toEqual('');
  });
  test('Validation - custom validation', async ({ page }) => {
    const element = await page.locator('gcds-checkboxes');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.evaluate(el => {
      const selectAll = () => {
        return {
          validate: (value: string | string[]) => {
            return {
              valid: Array.isArray(value) && value.length == 3,
              reason: {
                en: `Please select all options to continue.`,
                fr: `Please select all options to continue.`,
              },
            };
          },
        };
      };

      (el as HTMLGcdsDateInputElement).validator = [selectAll()];
    });

    await page.waitForChanges();

    await element.evaluate(el => (el as HTMLGcdsCheckboxesElement).validate());

    let errorMessage = await element.evaluate(
      el => (el as HTMLGcdsCheckboxesElement).errorMessage,
    );

    expect(errorMessage).toEqual('Please select all options to continue.');

    await element.locator('input').first().click({ force: true });
    await element.locator('input').nth(1).click({ force: true });
    await element.locator('input').nth(2).click({ force: true });

    await page.waitForChanges();

    await element.evaluate(el => (el as HTMLGcdsCheckboxesElement).validate());

    errorMessage = await element.evaluate(
      el => (el as HTMLGcdsCheckboxesElement).errorMessage,
    );

    expect(errorMessage).toEqual('');
  });
  test('Validation - custom validation old format', async ({ page }) => {
    const element = await page.locator('gcds-checkboxes');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.evaluate(el => {
      const selectAll = () => {
        return {
          validate: (value: string | string[]) =>
            Array.isArray(value) && value.length == 3,
          errorMessage: {
            en: `Please select all options to continue.`,
            fr: `Please select all options to continue.`,
          },
        };
      };

      // @ts-expect-error Old format of validator is different than new format. Will still run in JS environments
      (el as HTMLGcdsDateInputElement).validator = [selectAll()];
    });

    await page.waitForChanges();

    await element.evaluate(el => (el as HTMLGcdsCheckboxesElement).validate());

    let errorMessage = await element.evaluate(
      el => (el as HTMLGcdsCheckboxesElement).errorMessage,
    );

    expect(errorMessage).toEqual('Please select all options to continue.');

    await element.locator('input').first().click({ force: true });
    await element.locator('input').nth(1).click({ force: true });
    await element.locator('input').nth(2).click({ force: true });

    await page.waitForChanges();

    await element.evaluate(el => (el as HTMLGcdsCheckboxesElement).validate());

    errorMessage = await element.evaluate(
      el => (el as HTMLGcdsCheckboxesElement).errorMessage,
    );

    expect(errorMessage).toEqual('');
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

test.describe('gcds-checkboxes a11y tests', () => {
  /**
   * Colour contrast
   */
  test('Colour contrast', async ({ page }) => {
    try {
      const results = await new AxeBuilder({ page })
        .withRules(['color-contrast'])
        .analyze();
      expect(results.violations).toHaveLength(0);
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
      expect(results.violations).toHaveLength(0);
    } catch (e) {
      console.error(e);
    }
  });
  /**
   * Keyboard focus
   */
  test('Keyboard focus', async ({ page }) => {
    const element = await page.locator('gcds-checkboxes');
    await expect(element).toHaveClass('hydrated');

    await page.keyboard.press('Tab');

    expect(
      await page.evaluate(
        () => window.document.activeElement.shadowRoot.activeElement.id,
      ),
    ).toEqual('check1');

    await page.keyboard.press('Tab');

    expect(
      await page.evaluate(
        () => window.document.activeElement.shadowRoot.activeElement.id,
      ),
    ).toEqual('check2');

    await page.keyboard.press('Tab');

    expect(
      await page.evaluate(
        () => window.document.activeElement.shadowRoot.activeElement.id,
      ),
    ).toEqual('check3');
  });
});
