import { newE2EPage } from '@stencil/core/testing';
const { AxePuppeteer } = require('@axe-core/puppeteer');

describe('gcds-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<gcds-button>Button Label</gcds-button>');
    const element = await page.find('gcds-button');
    expect(element.textContent).toEqual('Button Label');
  });
  it('fires gcdsClick event', async () => {
    const page = await newE2EPage();

    await page.setContent('<gcds-button>Button Label</gcds-button>');
    const gcdsClick = await page.spyOnEvent('gcdsClick');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');

    await page.waitForChanges();

    expect(gcdsClick.events.length).toBe(1);
  });
  it('disabled - will not fire gcdsClick event', async () => {
    const page = await newE2EPage();

    await page.setContent('<gcds-button disabled>Button Label</gcds-button>');
    const gcdsClick = await page.spyOnEvent('gcdsClick');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');

    await page.waitForChanges();

    expect(gcdsClick.events.length).toBe(0);
  });
});

/*
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

describe('gcds-button a11y tests', () => {
  it('Colour contrast: Start button-role, button-styles', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-button button-role="start">Button Label</gcds-button>
      <gcds-button button-role="start" disabled>Button Label</gcds-button>
    `);

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('color-contrast')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  it('Colour contrast: Primary button-role, button-styles', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-button button-role="primary">Button Label</gcds-button>
      <gcds-button button-role="primary" disabled>Button Label</gcds-button>
      <gcds-button button-role="primary" size="small">Button Label</gcds-button>
      <gcds-button button-role="primary" size="small" disabled>Button Label</gcds-button>
    `);

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('color-contrast')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  it('Colour contrast: Secondary button-role, button-styles', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-button button-role="secondary">Button Label</gcds-button>
      <gcds-button button-role="secondary" disabled>Button Label</gcds-button>
      <gcds-button button-role="secondary" size="small">Button Label</gcds-button>
      <gcds-button button-role="secondary" size="small" disabled>Button Label</gcds-button>
    `);

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('color-contrast')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  it('Colour contrast: danger button-role, button-styles', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-button button-role="danger">Button Label</gcds-button>
      <gcds-button button-role="danger" disabled>Button Label</gcds-button>
      <gcds-button button-role="danger" size="small">Button Label</gcds-button>
      <gcds-button button-role="danger" size="small" disabled>Button Label</gcds-button>
    `);

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('color-contrast')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  it('Colour contrast: Button focus state', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-button>Button Label</gcds-button>
    `);

    await page.keyboard.press('Tab');

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('color-contrast')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  // Buttons have discernible text
  it('Button name', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<gcds-button button-role="primary" button-style="solid">Button Label</gcds-button>',
    );

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('button-name')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  // Links have discernible text
  it('Link name', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<gcds-button type="link" href="#" button-role="primary" button-style="solid">Button Label</gcds-button>',
    );

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('link-name')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  // Keyboard focus
  it('Keyboard focus: button', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-button>Button Label</gcds-button>');

    const buttonText = await (
      await page.find('gcds-button >>> button')
    ).innerText;

    await page.keyboard.press('Tab');

    expect(
      await page.evaluate(
        () => window.document.activeElement.shadowRoot.textContent,
      ),
    ).toEqual(buttonText);
  });

  it('Keyboard focus: link', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<gcds-button type="link" href="#">Link Label</gcds-button>',
    );

    const linkText = await (await page.find('gcds-button >>> a')).innerText;

    await page.keyboard.press('Tab');

    expect(
      await page.evaluate(
        () => window.document.activeElement.shadowRoot.textContent,
      ),
    ).toEqual(linkText);
  });
});
