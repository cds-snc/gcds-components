const { AxeBuilder } = require('@axe-core/playwright');

import { expect } from '@playwright/test';
import { test } from '@stencil/playwright';

test.beforeEach(async ({ page }) => {
  await page.goto(
    '/components/gcds-phase-banner/test/gcds-phase-banner.e2e.html',
  );

  await page.waitForFunction(() => {
    const host = document.querySelector('gcds-phase-banner');
    return host && host.shadowRoot;
  });
});

test.describe('gcds-phase-banner', () => {
  test('renders', async ({ page }) => {
    const banners = await page.locator('gcds-phase-banner');
    const count = await banners.count();

    for (let i = 0; i < count; i++) {
      const banner = banners.nth(i);

      // Wait for element to attach and become visible, allowing up to 10s
      await banner.waitFor({ state: 'attached' });
      await banner.waitFor({ state: 'visible' });
      await banner.waitFor({ timeout: 10000 });

      // Check if it has the 'hydrated' class
      await expect(banner).toHaveClass('hydrated');
    }
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */
const roles = ['primary', 'secondary'];

test.describe('gcds-phase-banner a11y tests', () => {
  /**
   * Colour contrast test
   */
  roles.forEach(role => {
    test(`colour contrast ${role} phase-banner`, async ({ page }) => {
      await page.setContent(`
        <gcds-phase-banner banner-role="${role}">
          <gcds-icon name="info-circle" slot="banner-icon-left"></gcds-icon>
          <p slot="banner-text">Exciting announcement.</p>
        </gcds-phase-banner>
      `);

      // Wait for shadow DOM to be available and component to hydrate
      await page.waitForFunction(() => {
        const banner = document.querySelector('gcds-phase-banner');
        return (
          banner && banner.shadowRoot && banner.classList.contains('hydrated')
        );
      });

      const results = await new AxeBuilder({ page })
        .withRules(['color-contrast'])
        .analyze();

      expect(results.violations.length).toBe(0);
    });
  });
});
