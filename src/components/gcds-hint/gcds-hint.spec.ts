import { newE2EPage } from '@stencil/core/testing';

describe('gcds-hint', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<gcds-hint hint="Hint Test" hint-id="hint-test" />');
    const element = await (await page.find('gcds-hint >>> p.hint'));
    expect(element.textContent).toEqual('Hint Test');
  });
});
