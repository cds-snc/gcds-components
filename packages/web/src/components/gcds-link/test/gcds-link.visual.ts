import { expect } from '@playwright/test';
import { test } from '../../../../tests/base.visual';

/**
 * Visual regression tests
 *
 * Baselines live in __screenshots__/gcds-link.visual.ts/.
 * To update baselines after an intentional visual change, trigger the
 * "Update visual snapshots" workflow in GitHub Actions on your branch.
 */
test.describe('gcds-link', () => {
  test('default', async ({ page }) => {
    // Screenshot just the component, not the surrounding preview chrome
    await expect(
      page.locator('[data-variant="default"] .preview-component'),
    ).toHaveScreenshot('default.png');
  });

  test('display-block', async ({ page }) => {
    await expect(
      page.locator('[data-variant="display-block"] .preview-component'),
    ).toHaveScreenshot('display-block.png');
  });

  test('external', async ({ page }) => {
    await expect(
      page.locator('[data-variant="external"] .preview-component'),
    ).toHaveScreenshot('external.png');
  });

  test('link-role-light', async ({ page }) => {
    await expect(
      page.locator('[data-variant="link-role-light"] .preview-component'),
    ).toHaveScreenshot('link-role-light.png');
  });

  test('size-regular', async ({ page }) => {
    await expect(
      page.locator('[data-variant="size-regular"] .preview-component'),
    ).toHaveScreenshot('size-regular.png');
  });

  test('size-small', async ({ page }) => {
    await expect(
      page.locator('[data-variant="size-small"] .preview-component'),
    ).toHaveScreenshot('size-small.png');
  });
});
