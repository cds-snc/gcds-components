import { newE2EPage } from '@stencil/core/testing';
const { AxePuppeteer } = require('@axe-core/puppeteer');

describe('gcds-file-uploader', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<gcds-file-uploader label="file uploader label" name="file" uploader-id="file-uploader" />',
    );

    const element = await page.find('gcds-file-uploader');
    expect(element).toHaveClass('hydrated');
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

describe('gcds-file-uploader a11y tests', () => {
  /**
   * Aria-invalid true if error test
   */
  it('aria-invalid', async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<gcds-file-uploader label="Label" uploader-id="aria-invalid" name="file" error-message="Field required" />',
    );
    const element = await await page.find('gcds-file-uploader >>> input');
    expect(element.getAttribute('aria-invalid')).toEqual('true');
  });

  /**
   * Colour contrast test
   */
  it('colour contrast', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-file-uploader label="Label" name="file" uploader-id="colour-contrast"></gcds-file-uploader>
    `);

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('color-contrast')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  /**
   * File uploader keyboard focus
   */
  it('file uploader keyboard focus', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-file-uploader label="Label" name="file" uploader-id="keyboard-focus" />
    `);

    const fileUploaderField = await (
      await page.find('gcds-file-uploader >>> input')
    ).innerText;

    await page.keyboard.press('Tab');

    expect(
      await page.evaluate(
        () =>
          window.document.activeElement.shadowRoot.activeElement.textContent,
      ),
    ).toEqual(fileUploaderField);
  });

  /**
   * File uploader label test
   */
  it('file-uploader contains label', async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<gcds-file-uploader label="Label" name="file" uploader-id="contains-label" />',
    );
    const element = await await page.find('gcds-file-uploader >>> gcds-label');
    expect(element.getAttribute('id')).toEqual('label-for-contains-label');
  });
});
