import { newE2EPage } from '@stencil/core/testing';
const { AxePuppeteer } = require('@axe-core/puppeteer');

describe('gcds-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-header></gcds-header>');

    const element = await page.find('gcds-header');
    expect(element).toHaveClass('hydrated');
  });
});

/*
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

describe('gcds-header a11y tests', () => {
  // Banner is top level
  it('Top level banner', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-header></gcds-header>
    `);

    const topLevelTest = new AxePuppeteer(page)
      .withRules('landmark-banner-is-top-level')
      .analyze();
    const results = await topLevelTest;

    expect(results.violations.length).toBe(0);
  });
});
