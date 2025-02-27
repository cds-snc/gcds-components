import { newE2EPage } from '@stencil/core/testing';

describe('gcds-fieldset', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<gcds-fieldset legend="Fieldset legend" size="h2"></gcds-fieldset>',
    );

    const element = await page.find('gcds-fieldset');
    expect(element).toHaveClass('hydrated');
  });
});
