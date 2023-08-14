import { newE2EPage } from '@stencil/core/testing';

describe('gcds-topic-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-topic-menu></gcds-topic-menu>');

    const element = await page.find('gcds-topic-menu');
    expect(element).toHaveClass('hydrated');
  });
});
