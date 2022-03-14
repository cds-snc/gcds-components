import { newE2EPage } from '@stencil/core/testing';

describe('gcds-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<gcds-input label="Label" id="renders-label" />');
    const element = await (await page.find('gcds-input >>> gcds-label'));
    expect(element.getAttribute('id')).toEqual('label-for-renders-label');
  });
});
