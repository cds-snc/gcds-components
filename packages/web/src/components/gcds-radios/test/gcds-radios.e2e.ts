import { newE2EPage } from '@stencil/core/testing';
const { AxePuppeteer } = require('@axe-core/puppeteer');

describe('gcds-radios', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<gcds-radios
          name="radio"
          legend="Legend"
          options='[{ "label": "Label 1", "id": "radio1", "value": "radio1"},{ "label": "Label 2", "id": "radio2", "value": "radio2"}]'
        >
        </gcds-radios>`,
    );

    const element = await page.find('gcds-radios');
    expect(element).toHaveClass('hydrated');
  });
  it('Emit gcdsInput event', async () => {
    const page = await newE2EPage();

    await page.setContent(
      `<gcds-radios
          name="radio"
          legend="Legend"
          options='[{ "label": "Label 1", "id": "radio1", "value": "radio1"},{ "label": "Label 2", "id": "radio2", "value": "radio2"}]'
        >
        </gcds-radios>`,
    );

    await page.evaluate(() => {
      const radios = document.querySelector('gcds-radios[name="radio"]');

      radios.addEventListener('gcdsInput', ev => {
        (ev.target as HTMLGcdsRadiosElement).legend = 'Changed';
      });
    });

    let legendText = (await page.find('gcds-radios >>> legend')).textContent;
    expect(legendText).toBe('Legend');

    await page.waitForChanges();

    await page.locator('gcds-radios >>> input').click();

    await page.waitForChanges();

    legendText = (await page.find('gcds-radios >>> legend')).textContent;
    expect(legendText).toBe('Changed');
  });
  it('assign options using JS', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-radios
        name="radio"
        legend="Legend"
      >
      </gcds-radios>
    `);

    await page.evaluate(() => {
      // Create radio options array
      const radioOptions = [
        {
          label: 'Radio 1 label',
          id: 'radio1',
          value: 'radio1',
        },
        {
          label: 'Radio 2 label',
          id: 'radio2',
          value: 'radio2',
        },
      ];

      // Find the gcds-radios element
      const radios = document.querySelector('gcds-radios[name="radio"]');

      // Assign radio options to options property
      (radios as HTMLGcdsRadiosElement).options = radioOptions;
    });

    await page.waitForChanges();

    const labelText = await (
      await page.find('gcds-radios >>> gcds-label')
    ).innerText;

    expect(labelText).toEqual('Radio 1 label');
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

describe('gcds-radios a11y tests', () => {
  /**
   * Colour contrast test
   */
  it('colour contrast', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-radios
        name="radio"
        legend="Legend"
        options='[{ "label": "Label 1", "id": "radio1", "value": "radio1"},{ "label": "Label 2", "id": "radio2", "value": "radio2"}]'
      >
      </gcds-radios>
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
      <gcds-radios
        name="radio"
        legend="Legend"
        options='[{ "label": "Label 1", "id": "radio1", "value": "radio1"},{ "label": "Label 2", "id": "radio2", "value": "radio2"}]'
      >
      </gcds-radios>
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
      <gcds-radios
        name="radio"
        legend="Legend"
        options='[{ "label": "Label 1", "id": "radio1", "value": "radio1"},{ "label": "Label 2", "id": "radio2", "value": "radio2"}]'
      >
      </gcds-radios>
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
      <gcds-radios
        name="radio"
        legend="Legend"
        options='[{ "label": "Label 1", "id": "radio1", "value": "radio1"},{ "label": "Label 2", "id": "radio2", "value": "radio2"}]'
        disabled
      >
      </gcds-radios>
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
  it('radio keyboard focus', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-radios
        name="radio"
        legend="Legend"
        options='[{ "label": "Label 1", "id": "radio1", "value": "radio1"},{ "label": "Label 2", "id": "radio2", "value": "radio2"}]'
      >
      </gcds-radios>
    `);

    const inputField = await (
      await page.find('gcds-radios >>> input')
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
   * Input keyboard control
   */
  it('radio keyboard control', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-radios
        name="radio"
        legend="Legend"
        options='[{ "label": "Label 1", "id": "radio1", "value": "radio1"},{ "label": "Label 2", "id": "radio2", "value": "radio2"}]'
      >
      </gcds-radios>
    `);

    const inputField = await await page.findAll('gcds-radios >>> input');

    await page.keyboard.press('Tab');

    expect(
      await page.evaluate(
        () =>
          window.document.activeElement.shadowRoot.activeElement.textContent,
      ),
    ).toEqual(inputField[0].textContent);

    await page.keyboard.press('ArrowDown');

    expect(
      await page.evaluate(
        () =>
          window.document.activeElement.shadowRoot.activeElement.textContent,
      ),
    ).toEqual(inputField[1].textContent);
  });

  /**
   * Input label test
   */
  it('radio contains label', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-radios
        name="radio"
        legend="Legend"
        options='[{ "label": "Label 1", "id": "radio1", "value": "radio1"},{ "label": "Label 2", "id": "radio2", "value": "radio2"}]'
      >
      </gcds-radios>
    `);

    const element = await await page.find('gcds-radios >>> gcds-label');
    expect(element.getAttribute('id')).toEqual('label-for-radio1');
  });
});
