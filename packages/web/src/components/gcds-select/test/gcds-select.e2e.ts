import { newE2EPage } from '@stencil/core/testing';
const { AxePuppeteer } = require('@axe-core/puppeteer');

describe('gcds-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<gcds-select label="select label" select-id="select" name="select" />',
    );

    const element = await page.find('gcds-select');
    expect(element).toHaveClass('hydrated');
  });
  it('Validation', async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<gcds-select label="select label" select-id="select" name="select" required default-value="Select an option">
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </gcds-select`,
    );

    const select = await page.find('gcds-select');

    select.callMethod('validate');
    await page.waitForChanges();

    const error = await page.$eval(
      'gcds-select >>> gcds-error-message',
      el => el.innerText,
    );

    expect(error).toBe('Choose an option to continue.');

    await page.select('gcds-select >>> select', 'Yes');

    select.callMethod('validate');
    await page.waitForChanges();

    expect(await page.$('gcds-select >>> gcds-error-message')).toBe(null);
  });
  it('Validation - Custom validator', async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<gcds-select label="select label" select-id="select" name="select" required default-value="Select an option">
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </gcds-select`,
    );

    await page.evaluate(() => {
      const select = document.querySelector('gcds-select');

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

      (select as HTMLGcdsSelectElement).validator = [matchAnswer('Yes')];
    });

    const select = await page.find('gcds-select');

    await page.select('gcds-select >>> select', 'No');

    select.callMethod('validate');
    await page.waitForChanges();

    const error = await page.$eval(
      'gcds-select >>> gcds-error-message',
      el => el.innerText,
    );

    expect(error).toBe('The selected answer must be "Yes"');

    await page.type('gcds-select >>> select', 'Yes');

    select.callMethod('validate');
    await page.waitForChanges();

    expect(await page.$('gcds-select >>> gcds-error-message')).toBe(null);
  });
  it('Validation - Custom validator old format', async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<gcds-select label="select label" select-id="select" name="select" required default-value="Select an option">
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </gcds-select`,
    );

    await page.evaluate(() => {
      const select = document.querySelector('gcds-select');

      const matchAnswer = (answer: string) => {
        return {
          validate: (value: string) => {
            return value === answer;
          },
          errorMessage: {
            en: `The selected answer must be "${answer}"`,
            fr: `The selected answer must be "${answer}"`,
          },
        };
      };

      // @ts-expect-error Old format of validator is different than new format. Will still run in JS environments
      (select as HTMLGcdsSelectElement).validator = [matchAnswer('Yes')];
    });

    const select = await page.find('gcds-select');

    await page.select('gcds-select >>> select', 'No');

    select.callMethod('validate');
    await page.waitForChanges();

    const error = await page.$eval(
      'gcds-select >>> gcds-error-message',
      el => el.innerText,
    );

    expect(error).toBe('The selected answer must be "Yes"');

    await page.type('gcds-select >>> select', 'Yes');

    select.callMethod('validate');
    await page.waitForChanges();

    expect(await page.$('gcds-select >>> gcds-error-message')).toBe(null);
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

describe('gcds-select a11y tests', () => {
  /**
   * Aria-invalid true if error test
   */
  it('aria-invalid', async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<gcds-select label="Label" select-id="aria-invalid" name="select" error-message="Field required" />',
    );
    const element = await await page.find('gcds-select >>> select');
    expect(element.getAttribute('aria-invalid')).toEqual('true');
  });

  /**
   * Colour contrast test
   */
  it('colour contrast', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-select label="Label" select-id="colour-contrast" name="select">
        <option>This is option 1</option>
        <option>This is option 2</option>
        <option>This is option 3</option>
      </gcds-select>
    `);

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('color-contrast')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  /**
   * Select keyboard focus
   */
  it('select keyboard focus', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-select label="Label" select-id="keyboard-focus" name="select"/>
    `);

    const selectField = await (
      await page.find('gcds-select >>> select')
    ).innerText;

    await page.keyboard.press('Tab');

    expect(
      await page.evaluate(
        () =>
          window.document.activeElement.shadowRoot.activeElement.textContent,
      ),
    ).toEqual(selectField);
  });

  /**
   * select label test
   */
  it('select contains label', async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<gcds-select label="Label" select-id="contains-label" name="select"/>',
    );
    const element = await await page.find('gcds-select >>> gcds-label');
    expect(element.getAttribute('id')).toEqual('label-for-contains-label');
  });
});
