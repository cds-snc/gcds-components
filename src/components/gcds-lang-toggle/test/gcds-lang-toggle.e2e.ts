import { newE2EPage } from '@stencil/core/testing';

describe('gcds-lang-toggle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-lang-toggle></gcds-lang-toggle>');

    const element = await page.find('gcds-lang-toggle');
    expect(element).toHaveClass('hydrated');
  });
});
