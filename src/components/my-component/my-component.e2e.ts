import { newE2EPage } from '@stencil/core/testing';
const { AxePuppeteer } = require('@axe-core/puppeteer');

describe('gc-ds-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<gc-ds-button></gc-ds-button>');
    const element = await page.find('gc-ds-button');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the label data', async () => {
    const page = await newE2EPage();

    await page.setContent('<gc-ds-button></gc-ds-button>');
    const component = await page.find('gc-ds-button');
    const element = await page.find('gc-ds-button >>> button');
    expect(element.textContent).toEqual(`Fallback Button Label`);

    component.setProperty('label', 'Vanilla JS button');
    await page.waitForChanges();
    expect(element.textContent).toEqual(` Vanilla JS button`);
  });
});

/*
 * Accessibility tests
 */

describe('gc-ds-button a11y tests', () => {
  it('pass colour contrast', async () => {
    const page = await newE2EPage();
    await page.setContent('<gc-ds-button></gc-ds-button>');
    
    const colorContrastTest = new AxePuppeteer(page).withRules('color-contrast').analyze();
    let results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  it('can focus with keyboard', async () => {
    const page = await newE2EPage();
    await page.setContent('<gc-ds-button></gc-ds-button>');

    const buttonText = await (await page.find('gc-ds-button >>> button')).innerText;

    await page.keyboard.press("Tab");

    expect(await page.evaluate(() => window.document.activeElement.shadowRoot.textContent)).toEqual(buttonText);
  });
});
