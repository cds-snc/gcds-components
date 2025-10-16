import { test, expect } from '@playwright/test';

test('Page has loaded and rendered', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Vue app for E2E tests/);

  const gcdsHeading = await page.locator('gcds-heading h1');
  await expect(gcdsHeading).toBeVisible();

  const gcdsHeadingText = await page.locator('gcds-heading');
  await expect(gcdsHeadingText).toHaveText('GCDS Vue test app');
});
