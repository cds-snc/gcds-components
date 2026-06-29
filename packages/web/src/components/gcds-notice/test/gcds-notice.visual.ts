import { expect } from '@playwright/test';
import { test } from '../../../../tests/base.visual';

/**
 * Visual regression tests
 *
 * Baselines live in __screenshots__/gcds-notice.visual.ts/.
 * To update baselines after an intentional visual change, trigger the
 * "Update visual snapshots" workflow in GitHub Actions on your branch.
 */
test.describe('gcds-notice', () => {
  test('default', async ({ page }) => {
    // Screenshot just the component, not the surrounding preview chrome
    await expect(
      page.locator('[data-variant="default"] .preview-component'),
    ).toHaveScreenshot('default.png');
  });

  test('notice-role-danger', async ({ page }) => {
    await expect(
      page.locator('[data-variant="notice-role-danger"] .preview-component'),
    ).toHaveScreenshot('notice-role-danger.png');
  });

  test('notice-role-success', async ({ page }) => {
    await expect(
      page.locator('[data-variant="notice-role-success"] .preview-component'),
    ).toHaveScreenshot('notice-role-success.png');
  });

  test('notice-role-warning', async ({ page }) => {
    await expect(
      page.locator('[data-variant="notice-role-warning"] .preview-component'),
    ).toHaveScreenshot('notice-role-warning.png');
  });
});
