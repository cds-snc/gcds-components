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
