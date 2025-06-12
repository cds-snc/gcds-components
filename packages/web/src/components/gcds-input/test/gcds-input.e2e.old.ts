import { newE2EPage } from '@stencil/core/testing';
const { AxePuppeteer } = require('@axe-core/puppeteer');

describe('gcds-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<gcds-input label="Label" input-id="input-renders" name="input-renders-name"/>',
    );
    const element = await await page.find('gcds-input >>> input');
    expect(element.getAttribute('id')).toEqual('input-renders');
  });

  it('Submit using enter', async () => {
    const page = await newE2EPage();

    await page.setContent(
      `<form noValidate>
      <gcds-input label="Label" input-id="enter-submit" name="enter-submit"/>
      </form>`,
    );

    await page.keyboard.press('Tab');
    await page.keyboard.press('r');
    await page.keyboard.press('e');
    await page.keyboard.press('d');
    await page.keyboard.press('Enter');

    await page.waitForChanges();

    expect(page.url()).toContain('?enter-submit=red');
  });

  it('Validation', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<gcds-input label="Label" input-id="input-renders" name="input-renders-name" required></gcds-input>',
    );

    const input = await page.find('gcds-input');

    input.callMethod('validate');
    await page.waitForChanges();

    const error = await page.$eval(
      'gcds-input >>> gcds-error-message',
      el => el.innerText,
    );

    expect(error).toBe('Enter information to continue.');

    await page.type('gcds-input >>> input', 'red');

    input.callMethod('validate');
    await page.waitForChanges();

    expect(await page.$('gcds-input >>> gcds-error-message')).toBe(null);
  });

  it('Validation - custom validator', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<gcds-input label="Label" input-id="input-renders" name="input-renders-name" required></gcds-input>',
    );

    await page.evaluate(() => {
      const input = document.querySelector('gcds-input');

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

      (input as HTMLGcdsInputElement).validator = [minLength(2)];
    });

    await page.waitForChanges();

    const input = await page.find('gcds-input');

    input.callMethod('validate');
    await page.waitForChanges();

    const error = await page.$eval(
      'gcds-input >>> gcds-error-message',
      el => el.innerText,
    );

    expect(error).toBe('The entered value must be longer than 2 characters');

    await page.type('gcds-input >>> input', 'red');

    input.callMethod('validate');
    await page.waitForChanges();

    expect(await page.$('gcds-input >>> gcds-error-message')).toBe(null);
  });

  it('Validation - custom validator old format', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<gcds-input label="Label" input-id="input-renders" name="input-renders-name" required></gcds-input>',
    );

    await page.evaluate(() => {
      const input = document.querySelector('gcds-input');

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
      (input as HTMLGcdsInputElement).validator = [minLength(2)];
    });

    await page.waitForChanges();

    const input = await page.find('gcds-input');

    input.callMethod('validate');
    await page.waitForChanges();

    const error = await page.$eval(
      'gcds-input >>> gcds-error-message',
      el => el.innerText,
    );

    expect(error).toBe('The entered value must be longer than 2 characters');

    await page.type('gcds-input >>> input', 'red');

    input.callMethod('validate');
    await page.waitForChanges();

    expect(await page.$('gcds-input >>> gcds-error-message')).toBe(null);
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

describe('gcds-input a11y tests', () => {
  /**
   * Aria-invalid true if error test
   */
  it('aria-invalid', async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<gcds-input label="Label" input-id="aria-invalid" name="aria-invalid-name" error-message="Field required" />',
    );
    const element = await await page.find('gcds-input >>> input');
    expect(element.getAttribute('aria-invalid')).toEqual('true');
  });

  /**
   * Colour contrast test
   */
  it('colour contrast', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-input label="Label" input-id="colour-contrast" name="colour-contrast-name" input-value="Testing the contrast" />
    `);

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('color-contrast')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  /**
   * Input keyboard focus
   */
  it('input keyboard focus', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-input label="Label" input-id="keyboard-focus" name="keyboard-focus-name" />
    `);

    const inputField = await (
      await page.find('gcds-input >>> input')
    ).innerText;

    await page.keyboard.press('Tab');

    expect(
      await page.evaluate(
        () =>
          window.document.activeElement.shadowRoot.activeElement.textContent,
      ),
    ).toEqual(inputField);
  });

  /**
   * Input label test
   */
  it('input contains label', async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<gcds-input label="Label" input-id="contains-label" name="contains-label-name" />',
    );
    const element = await await page.find('gcds-input >>> gcds-label');
    expect(element.getAttribute('id')).toEqual('label-for-contains-label');
  });

  it('input has aria-labelledby for label', async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<gcds-input label="Label" input-id="aria-labelledby" name="aria-labelledby-name" />',
    );
    const element = await await page.find('gcds-input >>> input');
    expect(element.getAttribute('aria-labelledby')).toEqual(
      'label-for-aria-labelledby',
    );
  });
});
