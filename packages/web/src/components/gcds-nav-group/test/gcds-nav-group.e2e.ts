import { newE2EPage } from '@stencil/core/testing';

describe('gcds-nav-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-nav-group></gcds-nav-group>');

    const element = await page.find('gcds-nav-group');
    expect(element).toHaveClass('hydrated');
  });
});
