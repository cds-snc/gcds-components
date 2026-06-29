import { expect } from '@playwright/test';
import { test } from '../../../../tests/base.visual';

/**
 * Visual regression tests
 *
 * Baselines live in __screenshots__/gcds-error-summary.visual.ts/.
 * To update baselines after an intentional visual change, trigger the
 * "Update visual snapshots" workflow in GitHub Actions on your branch.
 */
test.describe('gcds-error-summary', () => {
  test('default', async ({ page }) => {
    // Screenshot just the component, not the surrounding preview chrome
    await expect(
      page.locator('[data-variant="default"] .preview-component'),
    ).toHaveScreenshot('default.png');
  });

  test('heading', async ({ page }) => {
    await expect(
      page.locator('[data-variant="heading"] .preview-component'),
    ).toHaveScreenshot('heading.png');
  });
});
