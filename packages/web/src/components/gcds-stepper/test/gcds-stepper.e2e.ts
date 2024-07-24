import { newE2EPage } from '@stencil/core/testing';
const { AxePuppeteer } = require('@axe-core/puppeteer');

describe('gcds-stepper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-stepper current-step="2" total-steps="6" tag="h2">Section title</gcds-stepper>');

    const element = await page.find('gcds-stepper');
    expect(element).toHaveClass('hydrated');
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

describe('gcds-stepper a11y tests', () => {
  /**
   * Colour contrast test
   */
  it('colour contrast', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-stepper current-step="2" total-steps="6" tag="h2">Section title</gcds-stepper>
    `);

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('color-contrast')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });
  /**
   * Discernable text in heading
   */
  it('heading text', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-stepper current-step="2" total-steps="6" tag="h2">Section title</gcds-stepper>
    `);

    const emptyHeadingtest = new AxePuppeteer(page)
      .withRules('empty-heading')
      .analyze();
    const results = await emptyHeadingtest;

    expect(results.violations.length).toBe(0);
  });
});
