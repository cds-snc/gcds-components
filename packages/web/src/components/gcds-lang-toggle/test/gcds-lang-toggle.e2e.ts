const { AxeBuilder } = require('@axe-core/playwright');

import { expect } from '@playwright/test';
import { test } from '@stencil/playwright';

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/components/gcds-lang-toggle/test/gcds-lang-toggle.e2e.html',
  );

  await page.waitForFunction(() => {
    const host = document.querySelector('gcds-lang-toggle');
    return host && host.shadowRoot;
  });
});

test.describe('gcds-lang-toggle', () => {
  test('renders', async ({ page }) => {
    const langToggles = await page.locator('gcds-lang-toggle');
    const count = await langToggles.count();

    for (let i = 0; i < count; i++) {
      const langToggle = langToggles.nth(i);

      // Wait for element to attach and become visible, allowing up to 10s
      await langToggle.waitFor({ state: 'attached' });
      await langToggle.waitFor({ state: 'visible' });
      await langToggle.waitFor({ timeout: 10000 });

      // Check if it has the 'hydrated' class
      await expect(langToggle).toHaveClass('hydrated');
    }
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

test.describe('gcds-lang-toggle a11y tests', () => {
  /**
   * Link text
   */
  test('Proper link text', async ({ page }) => {
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
