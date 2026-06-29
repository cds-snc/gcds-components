import { expect } from '@playwright/test';
import { test } from '../../../../tests/base.visual';

/**
 * Visual regression tests
 *
 * Baselines live in __screenshots__/gcds-label.visual.ts/.
 * To update baselines after an intentional visual change, trigger the
 * "Update visual snapshots" workflow in GitHub Actions on your branch.
 */
test.describe('gcds-label', () => {
  test('default', async ({ page }) => {
    // Screenshot just the component, not the surrounding preview chrome
    await expect(
      page.locator('[data-variant="default"] .preview-component'),
    ).toHaveScreenshot('default.png');
  });

  test('hide-label', async ({ page }) => {
    await expect(
      page.locator('[data-variant="hide-label"] .preview-component'),
    ).toHaveScreenshot('hide-label.png');
  });

  test('required', async ({ page }) => {
    await expect(
      page.locator('[data-variant="required"] .preview-component'),
    ).toHaveScreenshot('required.png');
  });
});
