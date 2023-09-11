import { newE2EPage } from '@stencil/core/testing';

describe('gcds-fieldset', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-fieldset></gcds-fieldset>');

    const element = await page.find('gcds-fieldset');
    expect(element).toHaveClass('hydrated');
  });
  it('disable passed inputs', async () => {
    const page = await newE2EPage();
    await page.setContent(`
    <gcds-fieldset
      legend="Fieldset legend"
      fieldset-id="field"
      disabled
    >
      <gcds-radio label="Choice 1" name="radio" radio-id="choice1"></gcds-radio>
      <gcds-radio label="Choice 2" name="radio" radio-id="choice2"></gcds-radio>
    </gcds-fieldset>
    `);

    const element = await page.find('gcds-fieldset');
    const elementChild = await element.find('gcds-radio');
    expect(elementChild).toHaveAttribute('disabled');
  });
});
