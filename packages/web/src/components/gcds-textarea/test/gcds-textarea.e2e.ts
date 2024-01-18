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

  it('input has aria-labelledby for label', async () => {
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
