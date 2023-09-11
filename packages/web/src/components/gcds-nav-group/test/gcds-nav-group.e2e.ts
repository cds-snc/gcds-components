import { newE2EPage } from '@stencil/core/testing';
const { AxePuppeteer } = require('@axe-core/puppeteer');

describe('gcds-nav-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<gcds-nav-group menu-label="Nav group submenu" open-trigger="Nav group"></gcds-nav-group>',
    );

    const element = await page.find('gcds-nav-group');
    expect(element).toHaveClass('hydrated');
  });

  it('renders w/ gcds-nav-links', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-nav-group menu-label="Nav group submenu" open-trigger="Nav group">
        <gcds-nav-link href="#link1">Nav Link 1</gcds-nav-link>
        <gcds-nav-link href="#link2">Nav Link 2</gcds-nav-link>
        <gcds-nav-link href="#link3">Nav Link 3</gcds-nav-link>
      </gcds-nav-group>
    `);

    await page.keyboard.press('Tab');
    expect(
      await page.evaluate(() =>
        window.document.activeElement.shadowRoot.activeElement.textContent.trim(),
      ),
    ).toEqual('Nav group');

    await page.waitForChanges();
    await page.keyboard.press('Enter');
    await page.keyboard.press('Tab');
    expect(
      await page.evaluate(() => window.document.activeElement.nodeName),
    ).toEqual('GCDS-NAV-LINK');
  });
});

/*
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

describe('gcds-nav-group a11y tests', () => {
  it('Colour contrast', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-nav-group menu-label="Nav group submenu" open-trigger="Nav group"></gcds-nav-group>
    `);

    const defaultColorContrastTest = new AxePuppeteer(page)
      .withRules('color-contrast')
      .analyze();
    let results = await defaultColorContrastTest;

    expect(results.violations.length).toBe(0);

    await page.keyboard.press('Tab');

    const focusColorContrastTest = new AxePuppeteer(page)
      .withRules('color-contrast')
      .analyze();
    results = await focusColorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  it('Accessible button', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-nav-group menu-label="Nav group submenu" open-trigger="Nav group"></gcds-nav-group>
    `);

    const buttonNameTest = new AxePuppeteer(page)
      .withRules('button-name')
      .analyze();
    const results = await buttonNameTest;

    expect(results.violations.length).toBe(0);
  });
});
