import { newE2EPage } from '@stencil/core/testing';

describe('gcds-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<gcds-label label="Label Test" label-for="label-test" />');
    const element = await (await page.find('gcds-label >>> label'));
    expect(element.textContent).toEqual('Label Test');
  });
});
