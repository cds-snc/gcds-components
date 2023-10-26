import { newE2EPage } from '@stencil/core/testing';

describe('gcds-sr-only', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-sr-only></gcds-sr-only>');

    const element = await page.find('gcds-sr-only');
    expect(element).toHaveClass('hydrated');
  });
});
