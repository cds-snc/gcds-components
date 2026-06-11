import { expect } from '@playwright/test';
import { test } from '../../../../tests/base.visual';

/**
 * Visual regression tests
 *
 * Baselines live in __screenshots__/gcds-fieldset.visual.ts/.
 * To update baselines after an intentional visual change, trigger the
 * "Update visual snapshots" workflow in GitHub Actions on your branch.
 */
test.describe('gcds-fieldset', () => {
  test('default', async ({ page }) => {
    // Screenshot just the component, not the surrounding preview chrome
    await expect(
      page.locator('[data-variant="default"] .preview-component'),
    ).toHaveScreenshot('default.png');
  });

  test('hint', async ({ page }) => {
    await expect(
      page.locator('[data-variant="hint"] .preview-component'),
    ).toHaveScreenshot('hint.png');
  });

  test('legend-size', async ({ page }) => {
    await expect(
      page.locator('[data-variant="legend-size"] .preview-component'),
    ).toHaveScreenshot('legend-size.png');
  });
});
