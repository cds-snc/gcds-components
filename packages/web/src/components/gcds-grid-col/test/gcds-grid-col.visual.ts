import { expect } from '@playwright/test';
import { test } from '../../../../tests/base.visual';

/**
 * Visual regression tests
 *
 * Baselines live in __screenshots__/gcds-grid-col.visual.ts/.
 * To update baselines after an intentional visual change, trigger the
 * "Update visual snapshots" workflow in GitHub Actions on your branch.
 *
 * gcds-grid-col only behaves as a column inside a gcds-grid parent, so each variant wraps it accordingly. tablet/desktop set the column span.
 */
test.describe('gcds-grid-col', () => {
  test('default', async ({ page }) => {
    // Screenshot just the component, not the surrounding preview chrome
    await expect(
      page.locator('[data-variant="default"] .preview-component'),
    ).toHaveScreenshot('default.png');
  });

  test('desktop', async ({ page }) => {
    await expect(
      page.locator('[data-variant="desktop"] .preview-component'),
    ).toHaveScreenshot('desktop.png');
  });

  test('tablet', async ({ page }) => {
    await expect(
      page.locator('[data-variant="tablet"] .preview-component'),
    ).toHaveScreenshot('tablet.png');
  });
});
