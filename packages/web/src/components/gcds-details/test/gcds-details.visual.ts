import { expect } from '@playwright/test';
import { test } from '../../../../tests/base.visual';

/**
 * Visual regression tests
 *
 * Baselines live in __screenshots__/gcds-details.visual.ts/.
 * To update baselines after an intentional visual change, trigger the
 * "Update visual snapshots" workflow in GitHub Actions on your branch.
 */
test.describe('gcds-details', () => {
  test('default', async ({ page }) => {
    await expect(
      page.locator('[data-variant="default"] .preview-component'),
    ).toHaveScreenshot('default.png');
  });

  test('open', async ({ page }) => {
    await expect(
      page.locator('[data-variant="open"] .preview-component'),
    ).toHaveScreenshot('open.png');
  });
});
