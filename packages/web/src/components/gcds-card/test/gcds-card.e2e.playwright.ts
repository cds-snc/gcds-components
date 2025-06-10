const { AxeBuilder } = require('@axe-core/playwright');

import { expect } from '@playwright/test';
import { test } from '@stencil/playwright';

test.beforeEach(async ({ page }) => {
  await page.goto('/components/gcds-card/test/gcds-card.e2e.html');

  await page.waitForFunction(() => {
    const host = document.querySelector('gcds-card');
    return host && host.shadowRoot;
  });
});

test.describe('gcds-card', () => {
  test('should render', async ({ page }) => {
    const card = await page.locator('gcds-card');
    await expect(card).toHaveClass(`hydrated`);
  });
  test('fires gcdsClick and click event', async ({ page }) => {
    await page.goto('/components/gcds-card/test/gcds-card.e2e.html');

    const gcdsClick = await page.spyOnEvent('gcdsClick');
    const click = await page.spyOnEvent('click');

    await page.locator('a').click();

    expect(gcdsClick.events.length).toBe(1);
    expect(click.events.length).toBe(1);
  });
});

/*
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

test.describe('gcds-card a11y tests', () => {
  test('Colour contrast', async ({ page }) => {
    try {
      const results = await new AxeBuilder({ page })
        .withRules(['color-contrast'])
        .analyze();
      expect(results.violations.length).toBe(0);
    } catch (e) {
      console.error(e);
    }
  });

  test('Link name', async ({ page }) => {
    try {
      const results = await new AxeBuilder({ page })
        .withRules(['link-name'])
        .analyze();
      expect(results.violations.length).toBe(0);
    } catch (e) {
      console.error(e);
    }
  });

  test('Keyboard focus', async ({ page }) => {
    const linkText = await (
      await page.locator('.gcds-card__title')
    ).innerText();

    await page.keyboard.press('Tab');

    expect(
      await page.evaluate(
        () =>
          window.document.activeElement.shadowRoot.activeElement.textContent,
      ),
    ).toEqual(linkText);
  });

  test('Alt text - no alt text', async ({ page }) => {
    try {
      const results = await new AxeBuilder({ page })
        .withRules(['image-alt'])
        .analyze();
      expect(results.violations.length).toBe(0);
    } catch (e) {
      console.error(e);
    }
  });

  test('Alt text w/ img-alt prop', async ({ page }) => {
    await page
      .locator('gcds-card')
      .evaluate(el => ((el as HTMLGcdsCardElement).imgAlt = ''));

    await page.waitForChanges();

    try {
      const results = await new AxeBuilder({ page })
        .withRules(['image-alt'])
        .analyze();
      expect(results.violations.length).toBe(0);
    } catch (e) {
      console.error(e);
    }
  });
});
