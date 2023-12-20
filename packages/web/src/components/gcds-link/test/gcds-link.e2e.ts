import { newE2EPage } from '@stencil/core/testing';
const { AxePuppeteer } = require('@axe-core/puppeteer');

describe('gcds-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<gcds-link>Link Text</gcds-link>');
    const element = await page.find('gcds-link');
    expect(element.textContent).toEqual('Link Text');
  });
});

/*
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

describe('gcds-link a11y tests', () => {
  // Links have discernible text and color contrast
  it('Link name and color contrast', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<gcds-link type="link" href="#">Link Text</gcds-link>',
    );

    const colorContrastTest = new AxePuppeteer(page)
      .withRules(['link-name'], ['color-contrast'])
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  it('Keyboard focus: link', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<gcds-link type="link" href="#">Link Label</gcds-link>',
    );

    const linkText = await (await page.find('gcds-link >>> a')).innerText;

    await page.keyboard.press('Tab');

    expect(
      await page.evaluate(
        () => window.document.activeElement.shadowRoot.textContent,
      ),
    ).toEqual(linkText);
  });
});
