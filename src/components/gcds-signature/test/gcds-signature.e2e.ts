import { newE2EPage } from '@stencil/core/testing';

describe('gcds-signature', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-signature></gcds-signature>');

    const element = await page.find('gcds-signature');
    expect(element).toHaveClass('hydrated');
  });
});
