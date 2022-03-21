import { newE2EPage } from '@stencil/core/testing';
const { AxePuppeteer } = require('@axe-core/puppeteer');

describe('gcds-site-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent(`
    <gcds-site-menu lang="en">
      <ul>
        <li>
          <a href="/page">Menu item 01</a>
        </li>
        <li>
          <a href="/page">Menu item 02</a>
        </li>
        <li>
          <a href="/page">Menu item 03</a>
          <ul>
            <li>
              <a href="/page">SubMenu item 01</a>
            </li>
            <li>
              <a href="/page">SubMenu item 02</a>
            </li>
            <li>
              <a href="/page">SubMenu item 03</a>
            </li>
          </ul>
        </li>
      </ul>
    </gcds-site-menu>`);

    const element = await page.find('gcds-site-menu');
    expect(element).toHaveAttribute('menu-desktop-layout');
  });
});

/*
* Accessibility tests
* Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
*/

describe('gcds-site-menu a11y tests', () => {

  // Colour contrast

  it('Colour contrast: topbar', async () => {
    const page = await newE2EPage();
    await page.setViewport({
      width: 1140,
      height: 800
    });
    await page.setContent(`
    <gcds-site-menu menu-desktop-layout="topbar" lang="en">
      <ul>
        <li>
          <a href="/page">Menu item 01</a>
        </li>
        <li>
          <a href="/page">Menu item 02</a>
        </li>
        <li>
          <a href="/page">Menu item 03</a>
          <ul>
            <li>
              <a href="/page">SubMenu item 01</a>
            </li>
            <li>
              <a href="/page">SubMenu item 02</a>
            </li>
            <li>
              <a href="/page">SubMenu item 03</a>
            </li>
          </ul>
        </li>
      </ul>
    </gcds-site-menu>`);
    
    const colorContrastTest = new AxePuppeteer(page).withRules('color-contrast').analyze();
    let results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });
  it('Colour contrast: sidebar', async () => {
    const page = await newE2EPage();
    await page.setViewport({
      width: 1140,
      height: 800
    });
    await page.setContent(`
    <gcds-site-menu menu-desktop-layout="sidebar" lang="en">
      <ul>
        <li>
          <a href="/page">Menu item 01</a>
        </li>
        <li>
          <a href="/page">Menu item 02</a>
        </li>
        <li>
          <a href="/page">Menu item 03</a>
          <ul>
            <li>
              <a href="/page">SubMenu item 01</a>
            </li>
            <li>
              <a href="/page">SubMenu item 02</a>
            </li>
            <li>
              <a href="/page">SubMenu item 03</a>
            </li>
          </ul>
        </li>
      </ul>
    </gcds-site-menu>`);
    
    const colorContrastTest = new AxePuppeteer(page).withRules('color-contrast').analyze();
    let results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });
  it('Colour contrast: mobile drawer', async () => {
    const page = await newE2EPage();
    await page.setViewport({
      width: 400,
      height: 800
    });
    await page.setContent(`
    <gcds-site-menu menu-desktop-layout="topbar" menu-mobile-layout="drawer" lang="en">
      <ul>
        <li>
          <a href="/page">Menu item 01</a>
        </li>
        <li>
          <a href="/page">Menu item 02</a>
        </li>
        <li>
          <a href="/page">Menu item 03</a>
          <ul>
            <li>
              <a href="/page">SubMenu item 01</a>
            </li>
            <li>
              <a href="/page">SubMenu item 02</a>
            </li>
            <li>
              <a href="/page">SubMenu item 03</a>
            </li>
          </ul>
        </li>
      </ul>
    </gcds-site-menu>`);

    await page.keyboard.press("Tab");

    await page.keyboard.press("Enter");
    
    const colorContrastTest = new AxePuppeteer(page).withRules('color-contrast').analyze();
    let results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  // Accessible elements

  it('Accessible buttons', async () => {
    const page = await newE2EPage();
    await page.setContent(`
    <gcds-site-menu menu-desktop-layout="topbar" menu-mobile-layout="drawer" lang="en">
      <ul>
        <li>
          <a href="/page">Menu item 01</a>
        </li>
        <li>
          <a href="/page">Menu item 02</a>
        </li>
        <li>
          <a href="/page">Menu item 03</a>
          <ul>
            <li>
              <a href="/page">SubMenu item 01</a>
            </li>
            <li>
              <a href="/page">SubMenu item 02</a>
            </li>
            <li>
              <a href="/page">SubMenu item 03</a>
            </li>
          </ul>
        </li>
      </ul>
    </gcds-site-menu>`);
    
    const buttonNameTest = new AxePuppeteer(page).withRules('button-name').analyze();
    let results = await buttonNameTest;

    expect(results.violations.length).toBe(0);
  });

  // Keyboard navigation

  it('Keyboard navigation', async () => {
    const page = await newE2EPage();
    await page.setViewport({
      width: 1140,
      height: 800
    });
    await page.setContent(`
    <gcds-site-menu menu-desktop-layout="topbar" menu-mobile-layout="drawer" lang="en">
      <ul>
        <li>
          <a href="/page">Menu item 01</a>
        </li>
        <li>
          <a href="/page">Menu item 02</a>
        </li>
        <li>
          <a href="/page">Menu item 03</a>
          <ul>
            <li>
              <a href="/page">SubMenu item 01</a>
            </li>
            <li>
              <a href="/page">SubMenu item 02</a>
            </li>
            <li>
              <a href="/page">SubMenu item 03</a>
            </li>
          </ul>
        </li>
      </ul>
    </gcds-site-menu>`);

    await page.keyboard.press("Tab");
    expect(await page.evaluate(() => window.document.activeElement.shadowRoot.activeElement.textContent)).toEqual("Menu item 01");
    await page.keyboard.press("ArrowDown");
    expect(await page.evaluate(() => window.document.activeElement.shadowRoot.activeElement.textContent)).toEqual("Menu item 02");
    await page.keyboard.press("ArrowDown");
    expect(await page.evaluate(() => window.document.activeElement.shadowRoot.activeElement.textContent)).toEqual("Menu item 03");
    await page.keyboard.press("ArrowRight");
    expect(await page.evaluate(() => window.document.activeElement.shadowRoot.activeElement.textContent)).toEqual("SubMenu item 01");
    await page.keyboard.press("ArrowDown");
    expect(await page.evaluate(() => window.document.activeElement.shadowRoot.activeElement.textContent)).toEqual("SubMenu item 02");
    await page.keyboard.press("ArrowDown");
    expect(await page.evaluate(() => window.document.activeElement.shadowRoot.activeElement.textContent)).toEqual("SubMenu item 03");
    await page.keyboard.press("ArrowDown");
    expect(await page.evaluate(() => window.document.activeElement.shadowRoot.activeElement.textContent)).toEqual("Menu item 03");
    await page.keyboard.press("ArrowDown");
    expect(await page.evaluate(() => window.document.activeElement.shadowRoot.activeElement.textContent)).toEqual("Open or close Menu item 03's submenu.+-");
    await page.keyboard.press("ArrowDown");
    expect(await page.evaluate(() => window.document.activeElement.shadowRoot.activeElement.textContent)).toEqual("SubMenu item 01");
    await page.keyboard.press("Escape");
    expect(await page.evaluate(() => window.document.activeElement.shadowRoot.activeElement.textContent)).toEqual("Menu item 03");
    await page.keyboard.press("ArrowRight");
    expect(await page.evaluate(() => window.document.activeElement.shadowRoot.activeElement.textContent)).toEqual("SubMenu item 01");
    await page.keyboard.press("ArrowLeft");
    expect(await page.evaluate(() => window.document.activeElement.shadowRoot.activeElement.textContent)).toEqual("Menu item 03");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowDown");
    expect(await page.evaluate(() => window.document.activeElement.shadowRoot.activeElement.textContent)).toEqual("Menu item 01");
  });
});