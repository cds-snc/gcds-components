import { newE2EPage } from '@stencil/core/testing';
const { AxePuppeteer } = require('@axe-core/puppeteer');

describe('gcds-radio', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<gcds-radio label="Radio label" name="radio" radio-id="radio" />',
    );

    const element = await page.find('gcds-radio');
    expect(element).toHaveClass('hydrated');
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

describe('gcds-radio a11y tests', () => {
  /**
   * Colour contrast test
   */
  it('colour contrast', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-radio label="Label" radio-id="colour-contrast" />
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
      <gcds-radio label="Label" radio-id="colour-contrast" />
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
      <gcds-radio label="Label" radio-id="colour-contrast" has-error />
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
      <gcds-radio label="Label" radio-id="colour-contrast" disabled />
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
      <gcds-radio label="Label" radio-id="keyboard-focus" />
    `);

    const inputField = await (
      await page.find('gcds-radio >>> input')
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
  it('radio contains label', async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<gcds-radio label="Label" radio-id="contains-label" />',
    );
    const element = await await page.find('gcds-radio >>> gcds-label');
    expect(element.getAttribute('id')).toEqual('label-for-contains-label');
  });
});
