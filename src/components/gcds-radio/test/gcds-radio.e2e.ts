import { newE2EPage } from '@stencil/core/testing';

describe('gcds-radio', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-radio></gcds-radio>');

    const element = await page.find('gcds-radio');
    expect(element).toHaveClass('hydrated');
  });
});
