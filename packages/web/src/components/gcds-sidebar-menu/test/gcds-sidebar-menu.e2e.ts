import { newE2EPage } from '@stencil/core/testing';

describe('gcds-sidebar-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-sidebar-menu></gcds-sidebar-menu>');

    const element = await page.find('gcds-sidebar-menu');
    expect(element).toHaveClass('hydrated');
  });
});
