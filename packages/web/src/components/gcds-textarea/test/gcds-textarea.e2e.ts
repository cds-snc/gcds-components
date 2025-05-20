import { newE2EPage } from '@stencil/core/testing';
const { AxePuppeteer } = require('@axe-core/puppeteer');

describe('gcds-textarea', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<gcds-textarea label="Label" textarea-id="textarea-renders" value="Textarea Value" />',
    );
    const element = await await page.find('gcds-textarea >>> textarea');
    expect(element.textContent).toEqual('Textarea Value');
  });
  it('Validation', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<gcds-textarea name="textarea" label="Label" textarea-id="textarea-renders" required/>',
    );

    const textarea = await page.find('gcds-textarea');

    textarea.callMethod('validate');
    await page.waitForChanges();

    const error = await page.$eval(
      'gcds-textarea >>> gcds-error-message',
      el => el.innerText,
    );

    expect(error).toBe('Enter information to continue.');

    await page.type('gcds-textarea >>> textarea', 'red');

    textarea.callMethod('validate');
    await page.waitForChanges();

    expect(await page.$('gcds-textarea >>> gcds-error-message')).toBe(null);
  });
  it('Validation - custom validator', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<gcds-textarea name="textarea" label="Label" textarea-id="textarea-renders" required/>',
    );

    await page.evaluate(() => {
      const textarea = document.querySelector('gcds-textarea');

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

      (textarea as HTMLGcdsTextareaElement).validator = [minLength(2)];
    });

    await page.waitForChanges();

    const textarea = await page.find('gcds-textarea');

    textarea.callMethod('validate');
    await page.waitForChanges();

    const error = await page.$eval(
      'gcds-textarea >>> gcds-error-message',
      el => el.innerText,
    );

    expect(error).toBe('The entered value must be longer than 2 characters');

    await page.type('gcds-textarea >>> textarea', 'red');

    textarea.callMethod('validate');
    await page.waitForChanges();

    expect(await page.$('gcds-textarea >>> gcds-error-message')).toBe(null);
  });
  it('Validation - custom validator old format', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<gcds-textarea name="textarea" label="Label" textarea-id="textarea-renders" required/>',
    );

    await page.evaluate(() => {
      const textarea = document.querySelector('gcds-textarea');

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

      // @ts-expect-error Old format of validator is different then new format. Will still run in JS environments
      (textarea as HTMLGcdsTextareaElement).validator = [minLength(2)];
    });

    await page.waitForChanges();

    const textarea = await page.find('gcds-textarea');

    textarea.callMethod('validate');
    await page.waitForChanges();

    const error = await page.$eval(
      'gcds-textarea >>> gcds-error-message',
      el => el.innerText,
    );

    expect(error).toBe('The entered value must be longer than 2 characters');

    await page.type('gcds-textarea >>> textarea', 'red');

    textarea.callMethod('validate');
    await page.waitForChanges();

    expect(await page.$('gcds-textarea >>> gcds-error-message')).toBe(null);
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

describe('gcds-textarea a11y tests', () => {
  /**
   * Aria-invalid true if error test
   */
  it('aria-invalid', async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<gcds-textarea label="Label" textarea-id="textarea-renders" error-message="Field required" />',
    );
    const element = await await page.find('gcds-textarea >>> textarea');
    expect(element.getAttribute('aria-invalid')).toEqual('true');
  });
  /**
   * Colour contrast test
   */
  it('colour contrast', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-textarea label="Label" textarea-id="textarea-renders" value="Testing the contrast" />
    `);

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('color-contrast')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  /**
   * Textarea keyboard focus
   */
  it('textarea keyboard focus', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-textarea label="Label" textarea-id="textarea-renders" />
    `);

    const textareaField = await (
      await page.find('gcds-textarea >>> textarea')
    ).innerText;

    await page.keyboard.press('Tab');

    expect(
      await page.evaluate(
        () =>
          window.document.activeElement.shadowRoot.activeElement.textContent,
      ),
    ).toEqual(textareaField);
  });

  /**
   * Textarea label test
   */
  it('textarea contains label', async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<gcds-textarea label="Label" textarea-id="textarea-renders" />',
    );
    const element = await await page.find('gcds-textarea >>> gcds-label');
    expect(element.getAttribute('id')).toEqual('label-for-textarea-renders');
  });

  it('textarea has aria-labelledby for label', async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<gcds-textarea label="Label" textarea-id="textarea-renders" />',
    );
    const element = await await page.find('gcds-textarea >>> textarea');
    expect(element.getAttribute('aria-labelledby')).toEqual(
      'label-for-textarea-renders',
    );
  });
});
