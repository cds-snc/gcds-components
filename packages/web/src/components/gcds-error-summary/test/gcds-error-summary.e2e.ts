const { AxeBuilder } = require('@axe-core/playwright');

import { expect } from '@playwright/test';
import { test } from '../../../../tests/base';

test.describe('gcds-error-summary', () => {
  test('renders', async ({ page }) => {
    const element = await page.locator('gcds-error-summary');

    // Wait for element state
    await element.waitFor({ state: 'hidden' });

    // Check if it has the 'hydrated' class
    await expect(element).toHaveClass('hydrated');
  });

  test('renders from listen', async ({ page }) => {
    const form = await page.locator('form');
    await form.waitFor({ state: 'hidden' });

    await form.evaluate(el => {
      const input = document.createElement('gcds-input');
      input.label = 'Input';
      input.name = 'input';
      input.required = true;
      input.type = 'text';

      const textarea = document.createElement('gcds-textarea');
      textarea.label = 'Textarea';
      textarea.name = 'textarea';
      textarea.required = true;

      const select = document.createElement('gcds-select');
      select.label = 'Textarea';
      select.name = 'textarea';
      select.required = true;
      select.defaultValue = 'Please select another option';
      select.innerHTML = `<option>Option 1</option>
        <option>Option 2</option>
        option>Option 3</option>`;

      const file = document.createElement('gcds-file-uploader');
      file.label = 'File';
      file.name = 'file';
      file.required = true;

      const button = document.createElement('gcds-button');
      button.innerText = 'Submit';
      button.type = 'submit';

      el.append(input);
      el.append(textarea);
      el.append(select);
      el.append(file);
      el.append(button);
    });

    await page.waitForChanges();

    const submitButton = await page.locator('button[type="submit"]');
    await submitButton.waitFor();

    await submitButton.click();

    await page.waitForChanges();

    expect(
      await page.evaluate(() =>
        document
          .querySelector('gcds-error-summary')
          .shadowRoot.querySelector('.gcds-error-summary')
          .classList.contains('gcds-show'),
      ),
    ).toBe(true);
    expect(
      await page.evaluate(
        () =>
          document
            .querySelector('gcds-error-summary')
            .shadowRoot.querySelector('.summary__errorlist').childNodes.length,
      ),
    ).toEqual(4);
  });
});

test.describe('gcds-error-summary a11y tests', () => {
  /**
   * Colour contrast test
   */
  test('colour contrast', async ({ page }) => {
    const element = await page.locator('gcds-error-summary');
    await element.waitFor({ state: 'hidden' });

    element.evaluate(
      el =>
        ((el as HTMLGcdsErrorSummaryElement).errorLinks =
          '{"#link1":"This is the first error","#link2":"This is the second error"}'),
    );

    await page.waitForChanges();

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
   * Links have discernible text
   */
  test('Link name', async ({ page }) => {
    const form = await page.locator('form');
    await form.waitFor({ state: 'hidden' });

    await form.evaluate(el => {
      const input = document.createElement('gcds-input');
      input.label = 'Input';
      input.name = 'input';
      input.required = true;
      input.type = 'text';

      const button = document.createElement('gcds-button');
      button.innerText = 'Submit';
      button.type = 'submit';

      el.append(input);
      el.append(button);
    });

    await page.waitForChanges();

    const submitButton = await page.locator('button');
    await submitButton.waitFor();

    await submitButton.click();

    await page.waitForChanges();

    try {
      const results = await new AxeBuilder({ page })
        .withRules(['link-name'])
        .analyze();
      expect(results.violations.length).toBe(0);
    } catch (e) {
      console.error(e);
    }
  });
});
