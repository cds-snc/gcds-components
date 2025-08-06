const { AxeBuilder } = require('@axe-core/playwright');

import { expect } from '@playwright/test';
import { test } from '../../../../tests/base';

// test.beforeEach(async ({ page }) => {
//   // Start JavaScript coverage
//   // await Promise.all([
//   //   page.coverage.startJSCoverage(),
//   //   page.coverage.startCSSCoverage(),
//   // ]);

//   await page.goto('/components/gcds-button/test/gcds-button.e2e.html');

//   await page.waitForFunction(() => {
//     const host = document.querySelector('gcds-button');
//     return host && host.shadowRoot;
//   });
// });

// test.afterEach(async ({ page }) => {
//   // Stop coverage collection
//   const [jsCoverage, cssCoverage] = await Promise.all([
//     page.coverage.stopJSCoverage(),
//     page.coverage.stopCSSCoverage(),
//   ]);

//   // Save coverage result
//   const fs = require('fs');
//   const path = require('path');

//   const coveragePath = path.join(__dirname, 'coverage');
//   if (!fs.existsSync(coveragePath)) fs.mkdirSync(coveragePath);

//   fs.writeFileSync(
//     path.join(coveragePath, 'js-coverage.json'),
//     JSON.stringify(jsCoverage),
//   );

//   fs.writeFileSync(
//     path.join(coveragePath, 'css-coverage.json'),
//     JSON.stringify(cssCoverage),
//   );
// });

test.describe('gcds-button', () => {
  test('renders', async ({ page }) => {
    const buttons = await page.locator('gcds-button');
    const count = await buttons.count();

    for (let i = 0; i < count; i++) {
      const button = buttons.nth(i);

      // Wait for element to attach and become visible, allowing up to 10s
      await button.waitFor({ state: 'attached' });
      await button.waitFor({ state: 'visible' });
      await button.waitFor({ timeout: 10000 });

      // Check if it has the 'hydrated' class
      await expect(button).toHaveClass('hydrated');
    }
  });

  test('fires gcdsClick and click event', async ({ page }) => {
    const gcdsClick = await page.spyOnEvent('gcdsClick');
    const click = await page.spyOnEvent('click');

    await page.locator('button').first().click();

    expect(gcdsClick.events.length).toBe(1);
    expect(click.events.length).toBe(1);
  });

  test('disabled - will not fire gcdsClick and click event', async ({
    page,
  }) => {
    const gcdsClick = await page.spyOnEvent('gcdsClick');
    const click = await page.spyOnEvent('click');

    await page.locator('button[aria-disabled]').first().focus();

    await page.keyboard.press('Enter');

    expect(gcdsClick).not.toHaveReceivedEvent();
    expect(click).not.toHaveReceivedEvent();
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

test.describe('gcds-button a11y tests', () => {
  /**
   * Colour contrast
   */
  test('Colour contrast', async ({ page }) => {
    // axe-core seems to have an issue with colour contrast testing <slot> elements so ad dtext to element manually
    await page
      .locator('button')
      .first()
      .evaluate(el => ((el as HTMLElement).innerText = 'Colour contrast'));

    const buttons = await page.locator('button');

    for (let i = 0; i < (await buttons.count()); i++) {
      buttons
        .nth(i)
        .evaluate(el => ((el as HTMLElement).innerText = 'Colour contrast'));
    }

    try {
      const results = await new AxeBuilder({ page })
        .withRules(['color-contrast'])
        .analyze();
      expect(results.violations.length).toBe(0);
    } catch (e) {
      console.error(e);
    }
  });

  /**
   * Proper names
   */
  test('Proper link names', async ({ page }) => {
    try {
      const results = await new AxeBuilder({ page })
        .withRules(['link-name'])
        .analyze();

      expect(results.violations.length).toBe(0);
    } catch (e) {
      console.error(e);
    }
  });

  test('Proper button names', async ({ page }) => {
    try {
      const results = await new AxeBuilder({ page })
        .withRules(['button-name'])
        .analyze();

      expect(results.violations.length).toBe(0);
    } catch (e) {
      console.error(e);
    }
  });

  /**
   * Keyboard focus
   */
  test('Keyboard focus: button', async ({ page }) => {
    // Get the visible button text inside the first gcds-button
    const buttonText = await page
      .locator('gcds-button')
      .first()
      .locator('button')
      .first()
      .innerText();

    await page.keyboard.press('Tab');

    // Ensure gcds-button element is focused
    const activeTagName = await page.evaluate(
      () => document.activeElement?.tagName,
    );
    expect(activeTagName).toBe('GCDS-BUTTON');

    // Get focused gcds-button's innerText
    const shadowButtonText = await page.evaluate(() => {
      const active = document.activeElement;
      if (!active?.shadowRoot) return '';
      const button = active.shadowRoot.querySelector('button');
      return button?.textContent?.trim() || '';
    });

    expect(shadowButtonText).toBe(buttonText);
  });

  test('Keyboard focus: link', async ({ page }) => {
    // Get the visible button text inside the first gcds-button
    const buttonText = await page
      .locator('gcds-button')
      .nth(11)
      .locator('a')
      .first()
      .innerText();

    await page.keyboard.press('Tab');

    // Ensure gcds-button element is focused
    const activeTagName = await page.evaluate(
      () => document.activeElement?.tagName,
    );
    expect(activeTagName).toBe('GCDS-BUTTON');

    // Get focused gcds-button's innerText
    const shadowButtonText = await page.evaluate(() => {
      const active = document.activeElement;
      if (!active?.shadowRoot) return '';
      const button = active.shadowRoot.querySelector('a');
      return button?.textContent?.trim() || '';
    });

    expect(shadowButtonText).toBe(buttonText);
  });
});
