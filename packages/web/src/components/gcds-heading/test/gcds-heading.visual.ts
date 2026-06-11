import { expect } from '@playwright/test';
import { test } from '../../../../tests/base.visual';

/**
 * Visual regression tests
 *
 * Baselines live in __screenshots__/gcds-heading.visual.ts/.
 * To update baselines after an intentional visual change, trigger the
 * "Update visual snapshots" workflow in GitHub Actions on your branch.
 */
test.describe('gcds-heading', () => {
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

  test('heading-role-light', async ({ page }) => {
    await expect(
      page.locator('[data-variant="heading-role-light"] .preview-component'),
    ).toHaveScreenshot('heading-role-light.png');
  });

  test('heading-role-secondary', async ({ page }) => {
    await expect(
      page.locator(
        '[data-variant="heading-role-secondary"] .preview-component',
      ),
    ).toHaveScreenshot('heading-role-secondary.png');
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
});
