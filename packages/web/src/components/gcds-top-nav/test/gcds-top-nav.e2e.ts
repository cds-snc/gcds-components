import { newE2EPage } from '@stencil/core/testing';
const { AxePuppeteer } = require('@axe-core/puppeteer');

describe('gcds-top-nav', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-top-nav></gcds-top-nav>');

    const element = await page.find('gcds-top-nav');
    expect(element).toHaveClass('hydrated');
  });
});

/*
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

describe('gcds-top-nav a11y tests', () => {
  it('Colour contrast: topbar', async () => {
    const page = await newE2EPage();
    await page.setViewport({
      width: 1140,
      height: 800,
    });
    await page.setContent(`
      <gcds-top-nav label="top-nav" alignment="right" lang="en">
        <gcds-nav-link href="#red" slot="home">Home</gcds-nav-link>
        <gcds-nav-link href="#red">Installation</gcds-nav-link>
        <gcds-nav-link href="#red">Foundations</gcds-nav-link>
        <gcds-nav-link href="#red" current >Components</gcds-nav-link>
        <gcds-nav-group heading="Contact us">
          <gcds-nav-link href="#red">Form</gcds-nav-link>
          <gcds-nav-link href="#red">GitHub</gcds-nav-link>
          <gcds-nav-link href="#red">Slack</gcds-nav-link>
        </gcds-nav-group>
      </gcds-top-nav>`);

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('color-contrast')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });
});
