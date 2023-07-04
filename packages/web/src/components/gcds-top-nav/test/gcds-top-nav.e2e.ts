import { newE2EPage } from '@stencil/core/testing';

describe('gcds-top-nav', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-top-nav></gcds-top-nav>');

    const element = await page.find('gcds-top-nav');
    expect(element).toHaveClass('hydrated');
  });
});
