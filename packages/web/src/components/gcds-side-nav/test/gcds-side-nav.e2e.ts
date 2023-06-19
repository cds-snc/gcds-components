import { newE2EPage } from '@stencil/core/testing';

describe('gcds-side-nav', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-side-nav></gcds-side-nav>');

    const element = await page.find('gcds-side-nav');
    expect(element).toHaveClass('hydrated');
  });
});
