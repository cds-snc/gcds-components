import { newE2EPage } from '@stencil/core/testing';
const { AxePuppeteer } = require('@axe-core/puppeteer');

describe('gcds-alert', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-alert></gcds-alert>');

    const element = await page.find('gcds-alert');
    expect(element).toHaveClass('hydrated');
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

describe('gcds-alert a11y tests', () => {
  /**
   * Colour contrast test
   */
  it('colour contrast danger alert', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-alert heading="Main notification title" alert-role="danger">
        <p>Testing slot content.</p>
      </gcds-alert>
    `);

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('color-contrast')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  it('colour contrast info alert', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-alert heading="Main notification title" alert-role="info">
        <p>Testing slot content.</p>
      </gcds-alert>
    `);

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('color-contrast')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  it('colour contrast success alert', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-alert heading="Main notification title" alert-role="success">
        <p>Testing slot content.</p>
      </gcds-alert>
    `);

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('color-contrast')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  it('colour contrast warning alert', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-alert heading="Main notification title" alert-role="warning">
        <p>Testing slot content.</p>
      </gcds-alert>
    `);

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('color-contrast')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });
});
