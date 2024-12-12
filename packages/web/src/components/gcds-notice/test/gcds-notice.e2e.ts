import { newE2EPage } from '@stencil/core/testing';
const { AxePuppeteer } = require('@axe-core/puppeteer');

describe('gcds-notice', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent(`<gcds-notice notice-title="GC Design System notice" type="success">
        <gcds-text>Provide additonal information</gcds-text>
      </gcds-notice>`);

    const element = await page.find('gcds-notice');
    expect(element).toHaveClass('hydrated');
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

describe('gcds-notice a11y tests', () => {
  /**
   * Colour contrast test
   */
  it('colour contrast danger notice', async () => {
    const page = await newE2EPage();
    await page.setViewport({
      width: 600,
      height: 400,
    });
    await page.setContent(`
      <gcds-notice notice-title="GC Design System notice" type="danger">
        <gcds-text>Provide additonal information</gcds-text>
      </gcds-notice>
    `);

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('color-contrast')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  it('colour contrast info notice', async () => {
    const page = await newE2EPage();
    await page.setViewport({
      width: 600,
      height: 400,
    });
    await page.setContent(`
     <gcds-notice notice-title="GC Design System notice" type="info">
        <gcds-text>Provide additonal information</gcds-text>
      </gcds-notice>
    `);

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('color-contrast')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  it('colour contrast success notice', async () => {
    const page = await newE2EPage();
    await page.setViewport({
      width: 600,
      height: 400,
    });
    await page.setContent(`
      <gcds-notice notice-title="GC Design System notice" type="success">
        <gcds-text>Provide additonal information</gcds-text>
      </gcds-notice>
    `);

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('color-contrast')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  it('colour contrast warning notice', async () => {
    const page = await newE2EPage();
    await page.setViewport({
      width: 600,
      height: 400,
    });
    await page.setContent(`
      <gcds-notice notice-title="GC Design System notice" type="warning">
        <gcds-text>Provide additonal information</gcds-text>
      </gcds-notice>
    `);

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('color-contrast')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  it('heading text', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-notice notice-title="GC Design System notice" type="success">
        <gcds-text>Provide additonal information</gcds-text>
      </gcds-notice>
    `);

    const emptyHeadingtest = new AxePuppeteer(page)
      .withRules('empty-heading')
      .analyze();
    const results = await emptyHeadingtest;

    expect(results.violations.length).toBe(0);
  });
});
