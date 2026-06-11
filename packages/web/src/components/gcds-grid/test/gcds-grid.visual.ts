import { expect } from '@playwright/test';
import { test } from '../../../../tests/base.visual';

/**
 * Visual regression tests
 *
 * Baselines live in __screenshots__/gcds-grid.visual.ts/.
 * To update baselines after an intentional visual change, trigger the
 * "Update visual snapshots" workflow in GitHub Actions on your branch.
 */
test.describe('gcds-grid', () => {
  test('default', async ({ page }) => {
    // Screenshot just the component, not the surrounding preview chrome
    await expect(
      page.locator('[data-variant="default"] .preview-component'),
    ).toHaveScreenshot('default.png');
  });

  test('columns', async ({ page }) => {
    await expect(
      page.locator('[data-variant="columns"] .preview-component'),
    ).toHaveScreenshot('columns.png');
  });

  test('equal-row-height', async ({ page }) => {
    await expect(
      page.locator('[data-variant="equal-row-height"] .preview-component'),
    ).toHaveScreenshot('equal-row-height.png');
  });

  test('gap', async ({ page }) => {
    await expect(
      page.locator('[data-variant="gap"] .preview-component'),
    ).toHaveScreenshot('gap.png');
  });
});
