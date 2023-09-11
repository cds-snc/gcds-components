import { newE2EPage } from '@stencil/core/testing';
const { AxePuppeteer } = require('@axe-core/puppeteer');

describe('gcds-lang-toggle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-lang-toggle></gcds-lang-toggle>');

    const element = await page.find('gcds-lang-toggle');
    expect(element).toHaveClass('hydrated');
  });
});

/*
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

describe('gcds-lang-toggle a11y tests', () => {
  // Links have discernible text
  it('Link name', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-lang-toggle href="/fr/" lang="en"></gcds-lang-toggle>
      <gcds-lang-toggle href="/en/" lang="fr"></gcds-lang-toggle>
    `);

    const linkNameTest = new AxePuppeteer(page)
      .withRules('link-name')
      .analyze();
    const results = await linkNameTest;

    expect(results.violations.length).toBe(0);
  });
});
