import { newE2EPage } from '@stencil/core/testing';
const { AxePuppeteer } = require('@axe-core/puppeteer');

describe('gcds-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-text>This is some text.</gcds-text>');

    const element = await page.find('gcds-text');
    expect(element).toHaveClass('hydrated');
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

describe('gcds-text a11y tests', () => {
  /**
   * Colour contrast test
   */
  it('colour contrast - primary text', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-text text-role="primary">This is some primary text.</gcds-text>
    `);

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('color-contrast')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  it('colour contrast - secondary text', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-text text-role="secondary">This is some secondary text.</gcds-text>
    `);

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('color-contrast')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  it('colour contrast - light text', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-text text-role="light">This is some light text.</gcds-text>
    `);

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('color-contrast')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });
});
