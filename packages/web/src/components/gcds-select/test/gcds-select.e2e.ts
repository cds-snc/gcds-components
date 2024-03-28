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
