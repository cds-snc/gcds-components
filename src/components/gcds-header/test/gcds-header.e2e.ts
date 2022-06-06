import { newE2EPage } from '@stencil/core/testing';

describe('gcds-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-header></gcds-header>');

    const element = await page.find('gcds-header');
    expect(element).toHaveClass('hydrated');
  });
});
