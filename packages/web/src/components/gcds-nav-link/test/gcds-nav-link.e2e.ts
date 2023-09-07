import { newE2EPage } from '@stencil/core/testing';
const { AxePuppeteer } = require('@axe-core/puppeteer');

describe('gcds-nav-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-nav-link></gcds-nav-link>');

    const element = await page.find('gcds-nav-link');
    expect(element).toHaveClass('hydrated');
  });
});

/*
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

describe('gcds-nav-link a11y tests', () => {
  it('Colour contrast', async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<gcds-nav-link href="#link">Nav Link</gcds-nav-link>`,
    );

    const defaultColorContrastTest = new AxePuppeteer(page)
      .withRules('color-contrast')
      .analyze();
    const results = await defaultColorContrastTest;

    expect(results.violations.length).toBe(0);

    await page.keyboard.press('Tab');
  });

  it('Accessible link', async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<gcds-nav-link href="#link">Nav Link</gcds-nav-link>`,
    );

    const buttonNameTest = new AxePuppeteer(page)
      .withRules('link-name')
      .analyze();
    const results = await buttonNameTest;

    expect(results.violations.length).toBe(0);
  });
});
