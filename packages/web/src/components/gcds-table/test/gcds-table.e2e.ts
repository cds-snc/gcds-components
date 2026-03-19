import { newE2EPage } from '@stencil/core/testing';

describe('gcds-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-table></gcds-table>');

    const element = await page.find('gcds-table');
    expect(element).toHaveClass('hydrated');
  });
});
