import { expect } from '@playwright/test';
import { test } from '../../../../tests/base.visual';

/**
 * Visual regression tests
 *
 * Baselines live in __screenshots__/gcds-button.visual.ts/.
 * To update baselines after an intentional visual change, trigger the
 * "Update visual snapshots" workflow in GitHub Actions on your branch.
 */
test.describe('gcds-button', () => {
  test('default', async ({ page }) => {
    // Screenshot just the component, not the surrounding preview chrome
    await expect(
      page.locator('[data-variant="default"] .preview-component'),
    ).toHaveScreenshot('default.png');
  });

  test('disabled', async ({ page }) => {
    await expect(
      page.locator('[data-variant="disabled"] .preview-component'),
    ).toHaveScreenshot('disabled.png');
  });

  test('role-danger', async ({ page }) => {
    await expect(
      page.locator('[data-variant="role-danger"] .preview-component'),
    ).toHaveScreenshot('role-danger.png');
  });

  test('role-secondary', async ({ page }) => {
    await expect(
      page.locator('[data-variant="role-secondary"] .preview-component'),
    ).toHaveScreenshot('role-secondary.png');
  });

  test('role-start', async ({ page }) => {
    await expect(
      page.locator('[data-variant="role-start"] .preview-component'),
    ).toHaveScreenshot('role-start.png');
  });

  test('size-small', async ({ page }) => {
    await expect(
      page.locator('[data-variant="size-small"] .preview-component'),
    ).toHaveScreenshot('size-small.png');
  });

  test('type-link', async ({ page }) => {
    await expect(
      page.locator('[data-variant="type-link"] .preview-component'),
    ).toHaveScreenshot('type-link.png');
  });
});
