import { newE2EPage } from '@stencil/core/testing';
const { AxePuppeteer } = require('@axe-core/puppeteer');

describe('gcds-breadcrumbs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-breadcrumbs></gcds-breadcrumbs>');

    const element = await page.find('gcds-breadcrumbs');
    expect(element).toHaveClass('hydrated');
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

describe('gcds-breadcrumbs a11y tests', () => {
  /**
   * Colour contrast test
   */
  it('colour contrast', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-breadcrumbs>
        <nav aria-label="Breadcrumb" class="gcds-breadcrumbs">
          <ol class="has-canada-link">
            <gcds-breadcrumbs-item href="https://www.canada.ca/en.html">
              Canada.ca
            </gcds-breadcrumbs-item>
            <slot></slot>
          </ol>
        </nav>
      </gcds-breadcrumbs>
    `);

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('color-contrast')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });
});
