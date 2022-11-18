import { newE2EPage } from '@stencil/core/testing';

describe('gcds-pagination', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-pagination></gcds-pagination>');

    const element = await page.find('gcds-pagination');
    expect(element).toHaveClass('hydrated');
  });
});
