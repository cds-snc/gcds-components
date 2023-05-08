import { newE2EPage } from '@stencil/core/testing';

describe('gcds-site-menu1', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-site-menu1></gcds-site-menu1>');

    const element = await page.find('gcds-site-menu1');
    expect(element).toHaveClass('hydrated');
  });
});
