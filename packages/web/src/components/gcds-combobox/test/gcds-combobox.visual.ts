import { expect } from '@playwright/test';
import { test } from '../../../../tests/base.visual';

/**
 * Visual regression tests
 *
 * Baselines live in __screenshots__/gcds-combobox.visual.ts/.
 * To update baselines after an intentional visual change, trigger the
 * "Update visual snapshots" workflow in GitHub Actions on your branch.
 */
test.describe('gcds-combobox', () => {
  for (const variant of [
    'default',
    'selected',
    'disabled',
    'error-message',
    'hint',
    'required',
    'select-all',
    'french',
  ]) {
    test(variant, async ({ page }) => {
      await expect(
        page.locator(`[data-variant="${variant}"] .preview-component`),
      ).toHaveScreenshot(`${variant}.png`);
    });
  }
});
