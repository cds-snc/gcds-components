import { newE2EPage } from '@stencil/core/testing';

describe('gcds-menu-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-menu-group></gcds-menu-group>');

    const element = await page.find('gcds-menu-group');
    expect(element).toHaveClass('hydrated');
  });
});
