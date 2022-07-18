import { newE2EPage } from '@stencil/core/testing';
const { AxePuppeteer } = require('@axe-core/puppeteer');

describe('gcds-banner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-banner></gcds-banner>');

    const element = await page.find('gcds-banner');
    expect(element).toHaveClass('hydrated');
  });
});


/**
   * Accessibility tests
   * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
   */

describe('gcds-banner a11y tests', () => {
  /**
   * Colour contrast test
   */
  it('colour contrast primary banner', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-banner>
        <span slot="banner-text"> This is an example of a primary banner.</span>
      </gcds-banner>
    `);

    const colorContrastTest = new AxePuppeteer(page).withRules('color-contrast').analyze();
    let results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  it('colour contrast secondary banner', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-banner banner-role="secondary">
        <span slot="banner-text"> This is an example of a secondary banner.</span>
      </gcds-banner>
    `);

    const colorContrastTest = new AxePuppeteer(page).withRules('color-contrast').analyze();
    let results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  it('colour contrast destructive banner', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-banner banner-role="destructive">
        <span slot="banner-text"> This is an example of a destructive banner.</span>
      </gcds-banner>
    `);

    const colorContrastTest = new AxePuppeteer(page).withRules('color-contrast').analyze();
    let results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  it('colour contrast warning banner', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-banner banner-role="warning">
        <span slot="banner-text"> This is an example of a warning banner.</span>
      </gcds-banner>
    `);

    const colorContrastTest = new AxePuppeteer(page).withRules('color-contrast').analyze();
    let results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });
});
