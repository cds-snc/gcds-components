import { newE2EPage } from '@stencil/core/testing';
const { AxePuppeteer } = require('@axe-core/puppeteer');

describe('gcds-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<gcds-button>Button Label</gcds-button>');
    const element = await page.find('gcds-button');
    expect(element.textContent).toEqual('Button Label');
  });
});

/*
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

describe('gcds-button a11y tests', () => {

  it('Colour contrast: Primary task, variants and states', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-button task="primary">Button Label</gcds-button>
      <gcds-button task="primary" state="hover">Button Label</gcds-button>
      <gcds-button task="primary" state="active">Button Label</gcds-button>
      <gcds-button task="primary" state="focus">Button Label</gcds-button>
      <gcds-button task="primary" state="disabled">Button Label</gcds-button>

      <gcds-button task="primary" variant="outline">Button Label</gcds-button>
      <gcds-button task="primary" variant="outline" state="hover">Button Label</gcds-button>
      <gcds-button task="primary" variant="outline" state="active">Button Label</gcds-button>
      <gcds-button task="primary" variant="outline" state="focus">Button Label</gcds-button>
      <gcds-button task="primary" variant="outline" state="disabled">Button Label</gcds-button>

      <gcds-button task="primary" variant="text-only">Button Label</gcds-button>
      <gcds-button task="primary" variant="text-only" state="hover">Button Label</gcds-button>
      <gcds-button task="primary" variant="text-only" state="active">Button Label</gcds-button>
      <gcds-button task="primary" variant="text-only" state="focus">Button Label</gcds-button>
      <gcds-button task="primary" variant="text-only" state="disabled">Button Label</gcds-button>
    `);
    
    const colorContrastTest = new AxePuppeteer(page).withRules('color-contrast').analyze();
    let results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  it('Colour contrast: Secondary task, variants and states', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-button task="secondary">Button Label</gcds-button>
      <gcds-button task="secondary" state="hover">Button Label</gcds-button>
      <gcds-button task="secondary" state="active">Button Label</gcds-button>
      <gcds-button task="secondary" state="focus">Button Label</gcds-button>
      <gcds-button task="secondary" state="disabled">Button Label</gcds-button>

      <gcds-button task="secondary" variant="outline">Button Label</gcds-button>
      <gcds-button task="secondary" variant="outline" state="hover">Button Label</gcds-button>
      <gcds-button task="secondary" variant="outline" state="active">Button Label</gcds-button>
      <gcds-button task="secondary" variant="outline" state="focus">Button Label</gcds-button>
      <gcds-button task="secondary" variant="outline" state="disabled">Button Label</gcds-button>

      <gcds-button task="secondary" variant="text-only">Button Label</gcds-button>
      <gcds-button task="secondary" variant="text-only" state="hover">Button Label</gcds-button>
      <gcds-button task="secondary" variant="text-only" state="active">Button Label</gcds-button>
      <gcds-button task="secondary" variant="text-only" state="focus">Button Label</gcds-button>
      <gcds-button task="secondary" variant="text-only" state="disabled">Button Label</gcds-button>
    `);
    
    const colorContrastTest = new AxePuppeteer(page).withRules('color-contrast').analyze();
    let results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  it('Colour contrast: Danger task, variants and states', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-button task="danger">Button Label</gcds-button>
      <gcds-button task="danger" state="hover">Button Label</gcds-button>
      <gcds-button task="danger" state="active">Button Label</gcds-button>
      <gcds-button task="danger" state="focus">Button Label</gcds-button>
      <gcds-button task="danger" state="disabled">Button Label</gcds-button>

      <gcds-button task="danger" variant="outline">Button Label</gcds-button>
      <gcds-button task="danger" variant="outline" state="hover">Button Label</gcds-button>
      <gcds-button task="danger" variant="outline" state="active">Button Label</gcds-button>
      <gcds-button task="danger" variant="outline" state="focus">Button Label</gcds-button>
      <gcds-button task="danger" variant="outline" state="disabled">Button Label</gcds-button>

      <gcds-button task="danger" variant="text-only">Button Label</gcds-button>
      <gcds-button task="danger" variant="text-only" state="hover">Button Label</gcds-button>
      <gcds-button task="danger" variant="text-only" state="active">Button Label</gcds-button>
      <gcds-button task="danger" variant="text-only" state="focus">Button Label</gcds-button>
      <gcds-button task="danger" variant="text-only" state="disabled">Button Label</gcds-button>
    `);
    
    const colorContrastTest = new AxePuppeteer(page).withRules('color-contrast').analyze();
    let results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  })

  // Buttons have discernible text
  it('Button name', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-button task="primary" variant="solid">Button Label</gcds-button>');
    
    const colorContrastTest = new AxePuppeteer(page).withRules('button-name').analyze();
    let results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  // Links have discernible text
  it('Link name', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-button type="link" href="#" task="primary" variant="solid">Button Label</gcds-button>');
    
    const colorContrastTest = new AxePuppeteer(page).withRules('link-name').analyze();
    let results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  // Keyboard focus
  it('Keyboard focus: button', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-button>Button Label</gcds-button>');

    const buttonText = await (await page.find('gcds-button >>> button')).innerText;

    await page.keyboard.press("Tab");

    expect(await page.evaluate(() => window.document.activeElement.shadowRoot.textContent)).toEqual(buttonText);
  });

  it('Keyboard focus: link', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-button type="link" href="#">Link Label</gcds-button>');

    const linkText = await (await page.find('gcds-button >>> a')).innerText;

    await page.keyboard.press("Tab");

    expect(await page.evaluate(() => window.document.activeElement.shadowRoot.textContent)).toEqual(linkText);
  });
});
