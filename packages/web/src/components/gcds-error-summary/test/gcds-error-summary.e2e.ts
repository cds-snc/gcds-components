import { newE2EPage } from '@stencil/core/testing';

describe('gcds-error-summary', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-error-summary></gcds-error-summary>');

    const element = await page.find('gcds-error-summary');
    expect(element).toHaveClass('hydrated');
  });
});
