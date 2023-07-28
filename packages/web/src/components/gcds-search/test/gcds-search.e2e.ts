import { newE2EPage } from '@stencil/core/testing';

describe('gcds-search', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-search></gcds-search>');

    const element = await page.find('gcds-search');
    expect(element).toHaveClass('hydrated');
  });
});
