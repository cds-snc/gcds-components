import { expect } from '@playwright/test';
import { test } from '../../../../tests/base.visual';

const tests = [
  'default',
  'search',
  'menu',
  'topic-menu',
  'breadcrumbs',
  'account',
  'breadcrumbs-account',
  'topicmenu-account',
  'all-slots-topnav',
  'all-slots-topicmenu'
];

/**
 * Visual regression tests
 *
 * Baselines live in __screenshots__/gcds-header.visual.ts/.
 * To update baselines after an intentional visual change, trigger the
 * "Update visual snapshots" workflow in GitHub Actions on your branch.
 */
/*
 * Since the header has a lot of unique styling depending on screen size
 * test the ehader on desktop, tablet and mobile sizing.
 */
test.describe('gcds-header - desktop', () => {
  test.use({ viewport: { width: 1280, height: 1080 } });
  tests.map(name => {
    test(`${name}`, async ({ page }) => {
      // Screenshot just the component, not the surrounding preview chrome
      await expect(

        page.locator(`[data-variant="${name}"] .preview-component`),
      ).toHaveScreenshot(`desktop-${name}.png`);
    });
  });
});
test.describe('gcds-header - tablet', () => {
  test.use({ viewport: { width: 768, height: 1080 } });
  tests.map(name => {
    test(`${name}`, async ({ page }) => {
      // Screenshot just the component, not the surrounding preview chrome
      await expect(

        page.locator(`[data-variant="${name}"] .preview-component`),
      ).toHaveScreenshot(`tablet-${name}.png`);
    });
  });
});
test.describe('gcds-header - mobile', () => {
  test.use({ viewport: { width: 480, height: 640 } });
  tests.map(name => {
    test(`${name}`, async ({ page }) => {
      // Screenshot just the component, not the surrounding preview chrome
      await expect(

        page.locator(`[data-variant="${name}"] .preview-component`),
      ).toHaveScreenshot(`mobile-${name}.png`);
    });
  });
});
