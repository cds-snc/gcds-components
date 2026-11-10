import { expect } from '@playwright/test';
import { test } from '../../../../tests/base.visual';

/**
 * Visual regression tests
 *
 * Baselines live in __screenshots__/gcds-tag.visual.ts/.
 * To update baselines after an intentional visual change, trigger the
 * "Update visual snapshots" workflow in GitHub Actions on your branch.
 */
test.describe('gcds-tag', () => {
  test('default', async ({ page }) => {
    await expect(
      page.locator('[data-variant="default"] .preview-component'),
    ).toHaveScreenshot('default.png');
  });

  test('color-blue', async ({ page }) => {
    await expect(
      page.locator('[data-variant="color-blue"] .preview-component'),
    ).toHaveScreenshot('color-blue.png');
  });

  test('color-gray', async ({ page }) => {
    await expect(
      page.locator('[data-variant="color-gray"] .preview-component'),
    ).toHaveScreenshot('color-gray.png');
  });

  test('color-green', async ({ page }) => {
    await expect(
      page.locator('[data-variant="color-green"] .preview-component'),
    ).toHaveScreenshot('color-green.png');
  });

  test('color-purple', async ({ page }) => {
    await expect(
      page.locator('[data-variant="color-purple"] .preview-component'),
    ).toHaveScreenshot('color-purple.png');
  });

  test('color-red', async ({ page }) => {
    await expect(
      page.locator('[data-variant="color-red"] .preview-component'),
    ).toHaveScreenshot('color-red.png');
  });

  test('color-yellow', async ({ page }) => {
    await expect(
      page.locator('[data-variant="color-yellow"] .preview-component'),
    ).toHaveScreenshot('color-yellow.png');
  });

  test('size-small', async ({ page }) => {
    await expect(
      page.locator('[data-variant="size-small"] .preview-component'),
    ).toHaveScreenshot('size-small.png');
  });

  test('long-text', async ({ page }) => {
    await expect(
      page.locator('[data-variant="long-text"] .preview-component'),
    ).toHaveScreenshot('long-text.png');
  });
});
