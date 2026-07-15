import { expect } from '@playwright/test';
import { test } from '../../../../tests/base.visual';

/**
 * Visual regression tests
 *
 * Baselines live in __screenshots__/gcds-container.visual.ts/.
 * To update baselines after an intentional visual change, trigger the
 * "Update visual snapshots" workflow in GitHub Actions on your branch.
 */
test.describe('gcds-container', () => {
  test('default', async ({ page }) => {
    // Screenshot just the component, not the surrounding preview chrome
    await expect(
      page.locator('[data-variant="default"] .preview-component'),
    ).toHaveScreenshot('default.png');
  });

  test('alignment-center', async ({ page }) => {
    await expect(
      page.locator('[data-variant="alignment-center"] .preview-component'),
    ).toHaveScreenshot('alignment-center.png');
  });

  test('border', async ({ page }) => {
    await expect(
      page.locator('[data-variant="border"] .preview-component'),
    ).toHaveScreenshot('border.png');
  });

  test('padding', async ({ page }) => {
    await expect(
      page.locator('[data-variant="padding"] .preview-component'),
    ).toHaveScreenshot('padding.png');
  });

  test('size-sm', async ({ page }) => {
    await expect(
      page.locator('[data-variant="size-sm"] .preview-component'),
    ).toHaveScreenshot('size-sm.png');
  });
});
