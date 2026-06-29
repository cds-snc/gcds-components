import { expect } from '@playwright/test';
import { test } from '../../../../tests/base.visual';

/**
 * Visual regression tests
 *
 * Baselines live in __screenshots__/gcds-file-uploader.visual.ts/.
 * To update baselines after an intentional visual change, trigger the
 * "Update visual snapshots" workflow in GitHub Actions on your branch.
 */
test.describe('gcds-file-uploader', () => {
  test('default', async ({ page }) => {
    // Screenshot just the component, not the surrounding preview chrome
    await expect(
      page.locator('[data-variant="default"] .preview-component'),
    ).toHaveScreenshot('default.png');
  });

  test('disabled', async ({ page }) => {
    await expect(
      page.locator('[data-variant="disabled"] .preview-component'),
    ).toHaveScreenshot('disabled.png');
  });

  test('error-message', async ({ page }) => {
    await expect(
      page.locator('[data-variant="error-message"] .preview-component'),
    ).toHaveScreenshot('error-message.png');
  });

  test('hide-label', async ({ page }) => {
    await expect(
      page.locator('[data-variant="hide-label"] .preview-component'),
    ).toHaveScreenshot('hide-label.png');
  });

  test('hint', async ({ page }) => {
    await expect(
      page.locator('[data-variant="hint"] .preview-component'),
    ).toHaveScreenshot('hint.png');
  });

  test('required', async ({ page }) => {
    await expect(
      page.locator('[data-variant="required"] .preview-component'),
    ).toHaveScreenshot('required.png');
  });
});
