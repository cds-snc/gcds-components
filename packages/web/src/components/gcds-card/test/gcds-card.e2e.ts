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
  it('Colour contrast', async () => {
    const page = await newE2EPage();
    await page.setContent(`<gcds-card
      card-title="Card"
      badge="Tag"
      description="This is the card description"
      href="#card"
    >
    </gcds-card>`);

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('color-contrast')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  it('Link name', async () => {
    const page = await newE2EPage();
    await page.setContent(`<gcds-card
      card-title="Card"
      description="This is the card description"
      href="#card"
    ></gcds-card>`);

    const linkNameTest = new AxePuppeteer(page)
      .withRules('link-name')
      .analyze();
    const results = await linkNameTest;

    expect(results.violations.length).toBe(0);
  });

  it('Keyboard focus', async () => {
    const page = await newE2EPage();
    await page.setContent(`<gcds-card
      card-title="Card"
      description="This is the card description"
      href="#card"
    ></gcds-card>`);

    const linkText = await (
      await page.find('gcds-card >>> .gcds-card__title')
    ).innerText;

    await page.keyboard.press('Tab');

    expect(
      await page.evaluate(
        () =>
          window.document.activeElement.shadowRoot.activeElement.textContent,
      ),
    ).toEqual(linkText);
  });

  it('Alt text - no img-alt prop', async () => {
    const page = await newE2EPage();
    await page.setContent(`<gcds-card
      card-title="Card"
      description="This is the card description"
      href="#card"
      img-src="https://picsum.photos/480/270"
    ></gcds-card>`);

    const imgAltTest = new AxePuppeteer(page).withRules('image-alt').analyze();
    const results = await imgAltTest;

    expect(results.violations.length).toBe(0);
  });

  it('Alt text w/ img-alt prop', async () => {
    const page = await newE2EPage();
    await page.setContent(`<gcds-card
      card-title="Card"
      description="This is the card description"
      href="#card"
      img-src="https://picsum.photos/480/270"
      img-alt="Alt text for image test"
    ></gcds-card>`);

    const imgAltTest = new AxePuppeteer(page).withRules('image-alt').analyze();
    const results = await imgAltTest;

    expect(results.violations.length).toBe(0);
  });
});
