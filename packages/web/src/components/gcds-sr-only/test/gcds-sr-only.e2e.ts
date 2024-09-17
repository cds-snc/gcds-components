import { newE2EPage } from '@stencil/core/testing';

describe('gcds-sr-only', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-sr-only></gcds-sr-only>');

    const element = await page.find('gcds-sr-only');
    expect(element).toHaveClass('hydrated');
  });
  
  it('Check that the element confines its display to a pixel and hides the text', async () => {
    const page = await newE2EPage();
    await page.setContent( `
      <div style="padding: 20px; background-color:#8d201c; color:white">Hello</div>
      <gcds-sr-only></gcds-sr-only>
      <div style="padding: 20px; background-color:#2a7da6; color:white;">World</div>
    `);

    const sizingInfo = await page.evaluate( () => {
      const elm = document.querySelector( 'gcds-sr-only' );
      const rectPrevElm = elm.previousElementSibling.getBoundingClientRect();
      const rectNextElm = elm.nextElementSibling.getBoundingClientRect();
      return {
        offsetHeight: elm.offsetHeight,
        offsetWidth: elm.offsetWidth,
        bottomPrevElm: rectPrevElm.bottom,
        topNextElm: rectNextElm.top
      }
    });

    expect( sizingInfo.bottomPrevElm ).toEqual( sizingInfo.topNextElm );
    expect( sizingInfo.offsetHeight ).toBeGreaterThan( 0 );
    expect( sizingInfo.offsetWidth ).toBeGreaterThan( 0 );
  });
});
