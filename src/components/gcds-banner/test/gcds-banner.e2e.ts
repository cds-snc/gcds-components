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