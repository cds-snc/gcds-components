import { test, expect } from '@playwright/test';

test('test app has loaded', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Vue app for E2E tests/);

  // Topic menu has rendered
  const topicMenuButton = await page.locator('gcds-topic-menu button');
  await expect(topicMenuButton).toHaveText('Main Menu');

  // Breadcrumbs has rendered has rendered
  const breadcrumbsLink = await page.locator('gcds-breadcrumbs-item');
  await expect(breadcrumbsLink).toHaveText('Canada.ca');

  // Footer has rendered
  const footerLinks = await page.locator('gcds-footer a').count();
  await expect(footerLinks).toBe(26);
});

test('select - events', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Change normal HTML select option
  await page.locator('#color').selectOption('yellow');
  await expect(page.locator('#selectedColor')).toHaveText('yellow');

  // Change gcds-select with events
  await page.locator('gcds-select select').first().selectOption('green');
  await expect(page.locator('#selectedColor')).toHaveText('green');
});

test('selects - v-model', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Change normal HTML select option
  await page.locator('#colorhtml').selectOption('blue');
  await expect(page.locator('#selectedColor')).toHaveText('blue');

  // Change gcds-select with v-model
  await page.locator('gcds-select select').last().selectOption('yellow');
  await expect(page.locator('#selectedColor')).toHaveText('yellow');
});
