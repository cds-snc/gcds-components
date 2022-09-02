import { newE2EPage } from '@stencil/core/testing';

describe('gcds-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-footer></gcds-footer>');

    const element = await page.find('gcds-footer');
    expect(element).toHaveClass('hydrated');
  });
});
