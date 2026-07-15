import { expect } from '@playwright/test';
import { test } from '../../../../tests/base.visual';

/**
 * Visual regression tests
 *
 * Baselines live in __screenshots__/gcds-text.visual.ts/.
 * To update baselines after an intentional visual change, trigger the
 * "Update visual snapshots" workflow in GitHub Actions on your branch.
 */
test.describe('gcds-text', () => {
  test('default', async ({ page }) => {
    // Screenshot just the component, not the surrounding preview chrome
    await expect(
      page.locator('[data-variant="default"] .preview-component'),
    ).toHaveScreenshot('default.png');
  });

  test('character-limit', async ({ page }) => {
    await expect(
      page.locator('[data-variant="character-limit"] .preview-component'),
    ).toHaveScreenshot('character-limit.png');
  });

  test('display-inline', async ({ page }) => {
    await expect(
      page.locator('[data-variant="display-inline"] .preview-component'),
    ).toHaveScreenshot('display-inline.png');
  });

  test('margin-bottom', async ({ page }) => {
    await expect(
      page.locator('[data-variant="margin-bottom"] .preview-component'),
    ).toHaveScreenshot('margin-bottom.png');
  });

  test('margin-top', async ({ page }) => {
    await expect(
      page.locator('[data-variant="margin-top"] .preview-component'),
    ).toHaveScreenshot('margin-top.png');
  });

  test('size-small', async ({ page }) => {
    await expect(
      page.locator('[data-variant="size-small"] .preview-component'),
    ).toHaveScreenshot('size-small.png');
  });

  test('text-role-light', async ({ page }) => {
    await expect(
      page.locator('[data-variant="text-role-light"] .preview-component'),
    ).toHaveScreenshot('text-role-light.png');
  });

  test('text-role-secondary', async ({ page }) => {
    await expect(
      page.locator('[data-variant="text-role-secondary"] .preview-component'),
    ).toHaveScreenshot('text-role-secondary.png');
  });
});
