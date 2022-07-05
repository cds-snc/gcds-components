import { newE2EPage } from '@stencil/core/testing';

describe('gcds-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-checkbox></gcds-checkbox>');

    const element = await page.find('gcds-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
