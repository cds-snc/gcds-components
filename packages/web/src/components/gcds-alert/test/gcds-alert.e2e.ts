import { AxeBuilder } from '@axe-core/playwright';

import { expect } from '@playwright/test';
import { test } from '../../../../tests/base';

test.describe('gcds-alert', () => {
  test('renders', async ({ page }) => {
    const alerts = await page.locator('gcds-alert');
    const count = await alerts.count();

    for (let i = 0; i < count; i++) {
      const alert = alerts.nth(i);

      // Wait for element to attach and become visible, allowing up to 10s
      await alert.waitFor({ state: 'attached' });
      await alert.waitFor({ state: 'visible' });
      await alert.waitFor({ timeout: 10000 });

      // Check if it has the 'hydrated' class
      await expect(alert).toHaveClass('hydrated');
    }
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */
const roles = ['danger', 'info', 'success', 'warning'];

test.describe('gcds-alert a11y tests', () => {
  /**
   * Colour contrast test
   */
  roles.forEach(role => {
    test(`colour contrast ${role} alert`, async ({ page }) => {
      await page.setContent(`
        <gcds-alert heading="Main notification title" alert-role="${role}">
          <p>Testing slot content.</p>
        </gcds-alert>
      `);

      // Wait for shadow DOM to be available and component to hydrate
      await page.waitForFunction(() => {
        const alert = document.querySelector('gcds-alert');
        return (
          alert && alert.shadowRoot && alert.classList.contains('hydrated')
        );
      });

      const results = await new AxeBuilder({ page })
        .withRules(['color-contrast'])
        .analyze();

      expect(results.violations).toHaveLength(0);
    });
  });
});
