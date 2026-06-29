import { expect } from '@playwright/test';
import { test } from '../../../../tests/base.visual';

/**
 * Visual regression tests
 *
 * Baselines live in __screenshots__/gcds-topic-menu.visual.ts/.
 * To update baselines after an intentional visual change, trigger the
 * "Update visual snapshots" workflow in GitHub Actions on your branch.
 *
 * gcds-topic-menu loads its menu items from canada.ca at runtime, so its rendered content depends on that remote response. Baselines may need regenerating if the upstream menu changes.
 */
test.describe('gcds-topic-menu', () => {
  test('default', async ({ page }) => {
    // Screenshot just the component, not the surrounding preview chrome
    await expect(
      page.locator('[data-variant="default"] .preview-component'),
    ).toHaveScreenshot('default.png');
  });

  test('home', async ({ page }) => {
    await expect(
      page.locator('[data-variant="home"] .preview-component'),
    ).toHaveScreenshot('home.png');
  });
});
