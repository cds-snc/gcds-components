import { expect } from '@playwright/test';
import { test } from '../../../../tests/base.visual';

/**
 * Visual regression tests
 *
 * Baselines live in __screenshots__/gcds-signature.visual.ts/.
 * To update baselines after an intentional visual change, trigger the
 * "Update visual snapshots" workflow in GitHub Actions on your branch.
 */
test.describe('gcds-signature', () => {
  test('default', async ({ page }) => {
    // Screenshot just the component, not the surrounding preview chrome
    await expect(
      page.locator('[data-variant="default"] .preview-component'),
    ).toHaveScreenshot('default.png');
  });

  test('type-wordmark', async ({ page }) => {
    await expect(
      page.locator('[data-variant="type-wordmark"] .preview-component'),
    ).toHaveScreenshot('type-wordmark.png');
  });

  test('variant-white', async ({ page }) => {
    await expect(
      page.locator('[data-variant="variant-white"] .preview-component'),
    ).toHaveScreenshot('variant-white.png');
  });
});
