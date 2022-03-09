import { newE2EPage } from '@stencil/core/testing';

describe('gcds-error-message', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<gcds-error-message message="This field is required" message-id="error-message-test" />');
    const element = await (await page.find('gcds-error-message >>> p.error-message'));
    expect(element.textContent).toEqual('This field is required');
  });
});
