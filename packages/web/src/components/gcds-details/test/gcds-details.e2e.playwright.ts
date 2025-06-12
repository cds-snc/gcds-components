const { AxeBuilder } = require('@axe-core/playwright');

import { expect } from '@playwright/test';
import { test } from '@stencil/playwright';

test.beforeEach(async ({ page }) => {
  await page.goto('/components/gcds-details/test/gcds-details.e2e.html');

  await page.waitForFunction(() => {
    const host = document.querySelector('gcds-details');
    return host && host.shadowRoot;
  });
});

test.describe('gcds-details', () => {
  test('renders', async ({ page }) => {
    const element = await page.locator('gcds-details');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    // Check if it has the 'hydrated' class
    await expect(element).toHaveClass('hydrated');
  });

  test('fires gcdsClick and click event', async ({ page }) => {
    const gcdsClick = await page.spyOnEvent('gcdsClick');
    const click = await page.spyOnEvent('click');

    await page.locator('button').first().click();

    expect(gcdsClick.events.length).toBe(1);
    expect(click.events.length).toBe(1);
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

test.describe('gcds-details a11y tests', () => {
  /**
   * Colour contrast test
   */
  test('colour contrast', async ({ page }) => {
    try {
      const results = await new AxeBuilder({ page })
        .withRules(['color-contrast'])
        .analyze();
      expect(results.violations.length).toBe(0);
    } catch (e) {
      console.error(e);
    }
  });

  test('button name', async ({ page }) => {
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
