import { expect } from '@playwright/test';
import { test } from '../../../../tests/base.visual';

/**
 * Visual regression tests
 *
 * Baselines live in __screenshots__/gcds-icon.visual.ts/.
 * To update baselines after an intentional visual change, trigger the
 * "Update visual snapshots" workflow in GitHub Actions on your branch.
 */
test.describe('gcds-icon', () => {
  test('default', async ({ page }) => {
    // Screenshot just the component, not the surrounding preview chrome
    await expect(
      page.locator('[data-variant="default"] .preview-component'),
    ).toHaveScreenshot('default.png');
  });

  test('margin-left', async ({ page }) => {
    await expect(
      page.locator('[data-variant="margin-left"] .preview-component'),
    ).toHaveScreenshot('margin-left.png');
  });

  test('margin-right', async ({ page }) => {
    await expect(
      page.locator('[data-variant="margin-right"] .preview-component'),
    ).toHaveScreenshot('margin-right.png');
  });

  test('size-h1', async ({ page }) => {
    await expect(
      page.locator('[data-variant="size-h1"] .preview-component'),
    ).toHaveScreenshot('size-h1.png');
  });

  test('size-text-small', async ({ page }) => {
    await expect(
      page.locator('[data-variant="size-text-small"] .preview-component'),
    ).toHaveScreenshot('size-text-small.png');
  });
});
