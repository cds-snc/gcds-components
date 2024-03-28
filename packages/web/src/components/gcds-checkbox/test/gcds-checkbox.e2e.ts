import { newE2EPage } from '@stencil/core/testing';
const { AxePuppeteer } = require('@axe-core/puppeteer');

describe('gcds-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<gcds-checkbox label="checkbox label" name="checkbox" checkbox-id="checkbox" />',
    );

    const element = await page.find('gcds-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

describe('gcds-checkbox a11y tests', () => {
  /**
   * Aria-invalid true if error test
   */
  it('aria-invalid', async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<gcds-checkbox label="Label" checkbox-id="aria-invalid" error-message="Has error" />',
    );
    const element = await await page.find('gcds-checkbox >>> input');
    expect(element.getAttribute('aria-invalid')).toEqual('true');
  });

  /**
   * Colour contrast test
   */
  it('colour contrast', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-checkbox label="Label" checkbox-id="colour-contrast" />
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
      <gcds-checkbox label="Label" checkbox-id="colour-contrast" />
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
      <gcds-checkbox label="Label" checkbox-id="colour-contrast" has-error />
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
      <gcds-checkbox label="Label" checkbox-id="colour-contrast" disabled />
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
      <gcds-checkbox label="Label" checkbox-id="keyboard-focus" />
    `);

    const inputField = await (
      await page.find('gcds-checkbox >>> input')
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
      '<gcds-checkbox label="Label" checkbox-id="contains-label" />',
    );
    const element = await await page.find('gcds-checkbox >>> gcds-label');
    expect(element.getAttribute('id')).toEqual('label-for-contains-label');
  });
});
