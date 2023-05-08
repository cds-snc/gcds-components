import { newE2EPage } from '@stencil/core/testing';

describe('gcds-menu-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-menu-link></gcds-menu-link>');

    const element = await page.find('gcds-menu-link');
    expect(element).toHaveClass('hydrated');
  });
});
