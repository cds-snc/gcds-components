import { newE2EPage } from '@stencil/core/testing';

describe('gcds-nav-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-nav-link></gcds-nav-link>');

    const element = await page.find('gcds-nav-link');
    expect(element).toHaveClass('hydrated');
  });
});
