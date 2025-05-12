import { newE2EPage } from '@stencil/core/testing';
const { AxePuppeteer } = require('@axe-core/puppeteer');

const checkboxOptions =
  '[{ "label": "Checkbox 1 label", "id": "checkbox1", "value": "checkbox1"}, { "label": "Checkbox 2 label", "id": "checkbox2", "value": "checkbox2"}, { "label": "Checkbox 3 label", "id": "checkbox3", "value": "checkbox3"}]';

describe('gcds-checkboxes', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<gcds-checkboxes label="checkbox label" name="checkbox" checkbox-id="checkbox" />',
    );

    const element = await page.find('gcds-checkboxes');
    expect(element).toHaveClass('hydrated');
  });
  it('Emit gcds custom events', async () => {
    const page = await newE2EPage();

    await page.setContent(
      `<gcds-checkboxes
          legend="Group of checkboxes"
          name="checkgroup"
          options='${checkboxOptions}'
        ></gcds-checkboxes>`,
    );

    const gcdsInput = await page.spyOnEvent('gcdsInput');
    const gcdsChange = await page.spyOnEvent('gcdsChange');
    const gcdsBlur = await page.spyOnEvent('gcdsBlur');
    const gcdsFocus = await page.spyOnEvent('gcdsFocus');

    await page.locator('gcds-checkboxes >>> input').click();
    await page.waitForChanges();

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(gcdsInput.events.length).toBeGreaterThanOrEqual(1);
    expect(gcdsChange.events.length).toBeGreaterThanOrEqual(1);
    expect(gcdsBlur.events.length).toBeGreaterThanOrEqual(1);
    expect(gcdsFocus.events.length).toBeGreaterThanOrEqual(1);
  });
  it('Disabled - no events', async () => {
    const page = await newE2EPage();

    await page.setContent(
      `<gcds-checkboxes
          legend="Group of checkboxes"
          name="checkgroup"
          options='${checkboxOptions}'
        ></gcds-checkboxes>`,
    );

    const gcdsInput = await page.spyOnEvent('gcdsInput');

    await page.locator('gcds-checkboxes >>> input').click();
    await page.waitForChanges();

    expect(gcdsInput.events.length).toBe(1);

    await page.evaluate(() => {
      // Find the gcds-checkboxes element
      const checkboxes = document.querySelector(
        'gcds-checkboxes[name="checkgroup"]',
      );

      // Assign checkbox options to options property
      (checkboxes as HTMLGcdsCheckboxesElement).disabled = true;
    });

    await page.locator('gcds-checkboxes >>> input').click();
    await page.waitForChanges();

    expect(gcdsInput.events.length).toBe(1);
  });
  it('assign options using JS', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-checkboxes
          legend="Group of checkboxes"
          name="checkgroup"
        ></gcds-checkboxes>
    `);

    await page.evaluate(() => {
      // Create checkbox options array
      const options = [
        {
          label: 'Checkbox 1 label',
          id: 'checkbox1',
          value: 'checkbox2',
        },
        {
          label: 'Checkbox 2 label',
          id: 'checkbox1',
          value: 'checkbox2',
        },
      ];

      // Find the gcds-checkboxes element
      const checkboxes = document.querySelector(
        'gcds-checkboxes[name="checkgroup"]',
      );

      // Assign checkbox options to options property
      (checkboxes as HTMLGcdsCheckboxesElement).options = options;
    });

    await page.waitForChanges();

    const labelText = await (
      await page.find('gcds-checkboxes >>> gcds-label')
    ).innerText;

    expect(labelText).toEqual('Checkbox 1 label');
  });
  it('assign value using JS', async () => {
    const page = await newE2EPage();
    await page.setContent(`
        <gcds-checkboxes
          legend="Group of checkboxes"
          name="checkgroup"
          options='${checkboxOptions}'
        ></gcds-checkboxes>
    `);

    let input = await page.$('gcds-checkboxes >>> input[value="checkbox1"]');

    expect(await (await input.getProperty('checked')).jsonValue()).toBe(false);

    await page.evaluate(() => {
      // Find the gcds-radios element
      const checkboxes = document.querySelector(
        'gcds-checkboxes[name="checkgroup"]',
      );

      // Assign checkbox options to options property
      (checkboxes as HTMLGcdsCheckboxesElement).value = ['checkbox1'];
    });

    await page.waitForChanges();

    input = await page.$('gcds-checkboxes >>> input[value="checkbox1"]');

    expect(await (await input.getProperty('checked')).jsonValue()).toBe(true);
  });
  it('Form reset', async () => {
    const page = await newE2EPage();

    await page.setContent(
      `<form novalidate>
      <gcds-checkboxes
          legend="Group of checkboxes"
          name="checkgroup"
          options='${checkboxOptions}'
        ></gcds-checkboxes>

        <gcds-button type="reset">Reset</gcds-button>
      </form>`,
    );

    let input = await page.$('gcds-checkboxes >>> input[value="checkbox1"]');

    expect(await (await input.getProperty('checked')).jsonValue()).toBe(false);

    await page.locator('gcds-checkboxes >>> input').click();
    await page.waitForChanges();

    input = await page.$('gcds-checkboxes >>> input[value="checkbox1"]');

    expect(await (await input.getProperty('checked')).jsonValue()).toBe(true);

    await page.locator('gcds-button >>> button').click();
    await page.waitForChanges();

    input = await page.$('gcds-checkboxes >>> input[value="checkbox1"]');

    expect(await (await input.getProperty('checked')).jsonValue()).toBe(false);
  });
  it('Validation', async () => {
    const page = await newE2EPage();

    await page.setContent(
      `<gcds-checkboxes
          legend="Group of checkboxes"
          name="checkgroup"
          required
          options='${checkboxOptions}'
        ></gcds-checkboxes>`,
    );

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.waitForChanges();

    const error = await page.$eval(
      'gcds-checkboxes >>> gcds-error-message',
      el => el.innerText,
    );

    expect(error).toBe('Choose an option to continue.');

    await page.locator('gcds-checkboxes >>> input').click();
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await page.$('gcds-checkboxes >>> gcds-error-message')).toBe(null);
  });
  it('Keyboard controls', async () => {
    const page = await newE2EPage();

    await page.setContent(
      `<gcds-checkboxes
          legend="Group of checkboxes"
          name="checkgroup"
          options='${checkboxOptions}'
        ></gcds-checkboxes>`,
    );

    let input = await page.$('gcds-checkboxes >>> input[value="checkbox1"]');

    expect(await (await input.getProperty('checked')).jsonValue()).toBe(false);

    await page.keyboard.press('Tab');
    await page.keyboard.press('Space');
    await page.waitForChanges();

    input = await page.$('gcds-checkboxes >>> input[value="checkbox1"]');

    expect(await (await input.getProperty('checked')).jsonValue()).toBe(true);
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

describe('gcds-checkboxes a11y tests', () => {
  /**
   * Aria-invalid true if error test
   */
  it('aria-invalid', async () => {
    const page = await newE2EPage();

    await page.setContent(
      `<gcds-checkboxes
          legend="Group of checkboxes"
          name="checkgroup"
          error-message="Has error"
          options='${checkboxOptions}'
        ></gcds-checkboxes>`,
    );
    const element = await await page.find('gcds-checkboxes >>> input');
    expect(element.getAttribute('aria-invalid')).toEqual('true');
  });

  /**
   * Colour contrast test
   */
  it('colour contrast', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-checkboxes
          legend="Group of checkboxes"
          name="checkgroup"
          options='${checkboxOptions}'
        ></gcds-checkboxes>
    `);

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('color-contrast')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });
  it('colour contrast - focus', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-checkboxes
          legend="Group of checkboxes"
          name="checkgroup"
          options='${checkboxOptions}'
        ></gcds-checkboxes>
    `);

    await page.keyboard.press('Tab');

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('color-contrast')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });
  it('colour contrast - error', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-checkboxes
          legend="Group of checkboxes"
          name="checkgroup"
          error-message="Has error"
          options='${checkboxOptions}'
        ></gcds-checkboxes>
    `);

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('color-contrast')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });
  it('colour contrast - disabled', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-checkboxes
          legend="Group of checkboxes"
          name="checkgroup"
          disabled
          options='${checkboxOptions}'
        ></gcds-checkboxes>
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
  it('checkbox keyboard focus', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-checkboxes
          legend="Group of checkboxes"
          name="checkgroup"
          options='${checkboxOptions}'
        ></gcds-checkboxes>
    `);

    const inputField = await (
      await page.find('gcds-checkboxes >>> input')
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
  it('checkbox contains label', async () => {
    const page = await newE2EPage();

    await page.setContent(
      `<gcds-checkboxes
          legend="Group of checkboxes"
          name="checkgroup"
          options='${checkboxOptions}'
        ></gcds-checkboxes>`,
    );
    const element = await await page.find('gcds-checkboxes >>> gcds-label');
    expect(element.getAttribute('id')).toEqual('label-for-checkbox1');
  });
});
