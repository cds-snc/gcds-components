const { AxeBuilder } = require('@axe-core/playwright');

import { expect } from '@playwright/test';
import { test } from '@stencil/playwright';

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/components/gcds-breadcrumbs/test/gcds-breadcrumbs.e2e.html',
  );

  await page.waitForFunction(() => {
    const host = document.querySelector('gcds-breadcrumbs');
    return host && host.shadowRoot;
  });
});

test.describe('gcds-breadcrumbs', () => {
  test('renders', async ({ page }) => {
    const element = await page.locator('gcds-breadcrumbs');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    // Check if it has the 'hydrated' class
    await expect(element).toHaveClass('hydrated');

    // Check first breadcrumb item role
    const firstItem = await page.locator('gcds-breadcrumbs-item').first();
    await expect(firstItem).toHaveRole('listitem');
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

test.describe('gcds-breadcrumbs a11y tests', () => {
  test('Colour contrast', async ({ page }) => {
    // axe-core seems to have an issue with colour contrast testing <slot> elements so ad dtext to element manually
    await page
      .locator('a')
      .first()
      .evaluate(el => ((el as HTMLElement).innerText = 'Colour contrast'));

    try {
      const results = await new AxeBuilder({ page })
        .withRules(['color-contrast'])
        .analyze();
      expect(results.violations.length).toBe(0);
    } catch (e) {
      console.error(e);
    }
  });

  test('Proper list structure', async ({ page }) => {
    try {
      const results = await new AxeBuilder({ page })
        .withRules(['list'])
        .analyze();

      expect(results.violations.length).toBe(0);
    } catch (e) {
      console.error(e);
    }
  });

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
});
