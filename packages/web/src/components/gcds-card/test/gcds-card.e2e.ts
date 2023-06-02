import { newE2EPage } from '@stencil/core/testing';
const { AxePuppeteer } = require('@axe-core/puppeteer');

describe('gcds-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-card></gcds-card>');

    const element = await page.find('gcds-card');
    expect(element).toHaveClass('hydrated');
  });
});

/*
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

describe('gcds-card a11y tests', () => {
  it('Colour contrast: Primary button-role, button-styles', async () => {
    const page = await newE2EPage();
    await page.setContent(`<gcds-card
      card-title="Card"
      description="This is the card description"
      href="#card"
    ></gcds-card>`);

    const colorContrastTest = new AxePuppeteer(page).withRules('color-contrast').analyze();
    let results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  it('Link name', async () => {
    const page = await newE2EPage();
    await page.setContent(`<gcds-card
      card-title="Card"
      description="This is the card description"
      href="#card"
    ></gcds-card>`);

    const linkNameTest = new AxePuppeteer(page).withRules('link-name').analyze();
    let results = await linkNameTest;

    expect(results.violations.length).toBe(0);
  });

  it('Keyboard focus', async () => {
    const page = await newE2EPage();
    await page.setContent(`<gcds-card
      card-title="Card"
      description="This is the card description"
      href="#card"
    ></gcds-card>`);

    const linkText = await (await page.find('gcds-card >>> a')).innerText;

    await page.keyboard.press("Tab");

    expect(await page.evaluate(() => window.document.activeElement.shadowRoot.textContent)).toEqual(linkText);
  });

  it('Alt text - no img-alt prop', async () => {
    const page = await newE2EPage();
    await page.setContent(`<gcds-card
      card-title="Card"
      description="This is the card description"
      href="#card"
      img-src="https://www.canada.ca/content/dam/themes/business/features/1017_05_22_BBF_NL_Button_360x203.jpg"
    ></gcds-card>`);

    const imgAltTest = new AxePuppeteer(page).withRules('image-alt').analyze();
    let results = await imgAltTest;

    expect(results.violations.length).toBe(0);
  });

  it('Alt text w/ img-alt prop', async () => {
    const page = await newE2EPage();
    await page.setContent(`<gcds-card
      card-title="Card"
      description="This is the card description"
      href="#card"
      img-src="https://www.canada.ca/content/dam/themes/business/features/1017_05_22_BBF_NL_Button_360x203.jpg"
      img-alt="Alt text for image test"
    ></gcds-card>`);

    const imgAltTest = new AxePuppeteer(page).withRules('image-alt').analyze();
    let results = await imgAltTest;

    expect(results.violations.length).toBe(0);
  });
});