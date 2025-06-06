const { AxeBuilder } = require('@axe-core/playwright');

import { expect } from '@playwright/test';
import { test } from '@stencil/playwright';

test.describe('gcds-button', () => {
  test('should render', async ({ page }) => {
    await page.goto('/components/gcds-button/test/gcds-button.e2e.html');

    const buttons = await page.locator('gcds-button');
    for (let i = 0; i < (await buttons.count()); i++) {
      await expect(buttons.nth(i)).toHaveClass(`hydrated`);
    }
  });
  test('fires gcdsClick and click event', async ({ page }) => {
    await page.goto('/components/gcds-button/test/gcds-button.e2e.html');

    const gcdsClick = await page.spyOnEvent('gcdsClick');
    const click = await page.spyOnEvent('click');

    await page.locator('button').first().click();

    expect(gcdsClick.events.length).toBe(1);
    expect(click.events.length).toBe(1);
  });
  test('disabled - will not fire gcdsClick and click event', async ({
    page,
  }) => {
    await page.goto('/components/gcds-button/test/gcds-button.e2e.html');

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
  test('Colour contrast', async ({ page }) => {
    await page.goto('/components/gcds-button/test/gcds-button.e2e.html');

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
  test('Proper link names', async ({ page }) => {
    await page.goto('/components/gcds-button/test/gcds-button.e2e.html');

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
    await page.goto('/components/gcds-button/test/gcds-button.e2e.html');

    try {
      const results = await new AxeBuilder({ page })
        .withRules(['button-name'])
        .analyze();

      expect(results.violations.length).toBe(0);
    } catch (e) {
      console.error(e);
    }
  });
});
