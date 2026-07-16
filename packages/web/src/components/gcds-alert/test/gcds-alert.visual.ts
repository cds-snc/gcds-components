import { expect } from '@playwright/test';
import { test } from '../../../../tests/base.visual';

/**
 * Visual regression tests
 *
 * Baselines live in __screenshots__/gcds-alert.visual.ts/.
 * To update baselines after an intentional visual change, trigger the
 * "Update visual snapshots" workflow in GitHub Actions on your branch.
 */
test.describe('gcds-alert', () => {
  test('default', async ({ page }) => {
    // Screenshot just the component, not the surrounding preview chrome
    await expect(
      page.locator('[data-variant="default"] .preview-component'),
    ).toHaveScreenshot('default.png');
  });

  test('alert-role-danger', async ({ page }) => {
    await expect(
      page.locator('[data-variant="alert-role-danger"] .preview-component'),
    ).toHaveScreenshot('alert-role-danger.png');
  });

  test('alert-role-success', async ({ page }) => {
    await expect(
      page.locator('[data-variant="alert-role-success"] .preview-component'),
    ).toHaveScreenshot('alert-role-success.png');
  });

  test('alert-role-warning', async ({ page }) => {
    await expect(
      page.locator('[data-variant="alert-role-warning"] .preview-component'),
    ).toHaveScreenshot('alert-role-warning.png');
  });

  test('hide-close-btn', async ({ page }) => {
    await expect(
      page.locator('[data-variant="hide-close-btn"] .preview-component'),
    ).toHaveScreenshot('hide-close-btn.png');
  });

  test('hide-role-icon', async ({ page }) => {
    await expect(
      page.locator('[data-variant="hide-role-icon"] .preview-component'),
    ).toHaveScreenshot('hide-role-icon.png');
  });
});
