const { AxeBuilder } = require('@axe-core/playwright');

import { expect } from '@playwright/test';
import { test } from '@stencil/playwright';

test.describe('gcds-breadcrumbs', () => {
  test('should render gen', async ({ page }) => {
    await page.goto(
      '/components/gcds-breadcrumbs/test/gcds-breadcrumbs.e2e.html',
    );

    const component = await page.locator('gcds-breadcrumbs');
    await expect(component).toHaveClass(`hydrated`);

    const items = await page.locator('gcds-breadcrumbs-item').first();
    await expect(items).toHaveRole('listitem');
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

test.describe('gcds-breadcrumbs a11y tests', () => {
  test('Colour contrast', async ({ page }) => {
    await page.goto(
      '/components/gcds-breadcrumbs/test/gcds-breadcrumbs.e2e.html',
    );

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
    await page.goto(
      '/components/gcds-breadcrumbs/test/gcds-breadcrumbs.e2e.html',
    );

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
    await page.goto(
      '/components/gcds-breadcrumbs/test/gcds-breadcrumbs.e2e.html',
    );

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
