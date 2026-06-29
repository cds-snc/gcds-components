import { expect } from '@playwright/test';
import { test } from '../../../../tests/base.visual';

/**
 * Visual regression tests
 *
 * Baselines live in __screenshots__/gcds-card.visual.ts/.
 * To update baselines after an intentional visual change, trigger the
 * "Update visual snapshots" workflow in GitHub Actions on your branch.
 */
test.describe('gcds-card', () => {
  test('default', async ({ page }) => {
    // Screenshot just the component, not the surrounding preview chrome
    await expect(
      page.locator('[data-variant="default"] .preview-component'),
    ).toHaveScreenshot('default.png');
  });

  test('badge', async ({ page }) => {
    await expect(
      page.locator('[data-variant="badge"] .preview-component'),
    ).toHaveScreenshot('badge.png');
  });

  test('image', async ({ page }) => {
    await expect(
      page.locator('[data-variant="image"] .preview-component'),
    ).toHaveScreenshot('image.png');
  });
});
