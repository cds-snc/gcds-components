const { AxeBuilder } = require('@axe-core/playwright');

import { expect } from '@playwright/test';
import { test } from '../../../../tests/base';

test.describe('gcds-notice', () => {
  test('renders', async ({ page }) => {
    const notices = await page.locator('gcds-notice');
    const count = await notices.count();

    for (let i = 0; i < count; i++) {
      const notice = notices.nth(i);

      // Wait for element to attach and become visible, allowing up to 10s
      await notice.waitFor({ state: 'attached' });
      await notice.waitFor({ state: 'visible' });
      await notice.waitFor({ timeout: 10000 });

      // Check if it has the 'hydrated' class
      await expect(notice).toHaveClass('hydrated');
    }
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */
const types = ['danger', 'info', 'success', 'warning'];

test.describe('gcds-notice a11y tests', () => {
  /**
   * Colour contrast test
   */
  types.forEach(type => {
    test(`colour contrast ${type} notice`, async ({ page }) => {
      await page.setContent(`
        <gcds-notice notice-title="Title" notice-title-tag="h2" type="${type}">
          <p>Testing slot content.</p>
        </gcds-notice>
      `);

      // Wait for shadow DOM to be available and component to hydrate
      await page.waitForFunction(() => {
        const notice = document.querySelector('gcds-notice');
        return (
          notice && notice.shadowRoot && notice.classList.contains('hydrated')
        );
      });

      const results = await new AxeBuilder({ page })
        .withRules(['color-contrast'])
        .analyze();

      expect(results.violations.length).toBe(0);
    });
  });
});
