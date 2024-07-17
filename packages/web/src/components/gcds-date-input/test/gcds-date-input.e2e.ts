import { newE2EPage } from '@stencil/core/testing';

describe('gcds-date-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-date-input></gcds-date-input>');

    const element = await page.find('gcds-date-input');
    expect(element).toHaveClass('hydrated');
  });
});
