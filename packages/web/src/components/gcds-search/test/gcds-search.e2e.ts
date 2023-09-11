import { newE2EPage } from '@stencil/core/testing';
const { AxePuppeteer } = require('@axe-core/puppeteer');

describe('gcds-search', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-search></gcds-search>');

    const element = await page.find('gcds-search');
    expect(element).toHaveClass('hydrated');
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

describe('gcds-search a11y tests', () => {
  /**
   * Colour contrast test
   */
  it('colour contrast', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-search />
    `);

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('color-contrast')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  /**
   * Buttons have discernible text
   */
  it('Button name', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-search />
    `);

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('button-name')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });
});
