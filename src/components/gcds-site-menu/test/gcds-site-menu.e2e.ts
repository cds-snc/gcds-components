import { newE2EPage } from '@stencil/core/testing';

describe('gcds-site-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-site-menu></gcds-site-menu>');

    const element = await page.find('gcds-site-menu');
    expect(element).toHaveClass('hydrated');
  });
});
