import { test, expect } from '@playwright/test';

test('Form component ngModel', async ({ page }) => {
  await page.goto('http://localhost:4200/forms');

  // Change name gcds-input
  await page.locator('input[name="name"]').fill('John');
  await expect(page.locator('#input-name')).toHaveText('John');

  // Change number gcds-input
  await page.locator('input[name="number"]').fill('23');
  await expect(page.locator('#input-number')).toHaveText('23');

  // Change textarea
  await page
    .locator('textarea[name="message"]')
    .fill('This is a message showing ngModel working correctly.');
  await expect(page.locator('#input-message')).toHaveText(
    'This is a message showing ngModel working correctly.',
  );

  // Change full gcds-date-input
  await page
    .locator('gcds-date-input[name="date-full"] input[name="day"]')
    .fill('25');
  await page
    .locator('gcds-date-input[name="date-full"] select[name="month"]')
    .selectOption('12');
  await page
    .locator('gcds-date-input[name="date-full"] input[name="year"]')
    .fill('2024');
  await page.locator('gcds-date-input[name="date-full"]').blur();
  await expect(page.locator('#input-date')).toHaveText('2024-12-25');

  // Change compact gcds-date-input
  await page
    .locator('gcds-date-input[name="date-compact"] select[name="month"]')
    .selectOption('12');
  await page
    .locator('gcds-date-input[name="date-compact"] input[name="year"]')
    .fill('2024');
  await page.locator('gcds-date-input[name="date-compact"]').blur();
  await expect(page.locator('#input-date')).toHaveText('2024-12');

  // Change gcds-select
  await page.locator('gcds-select select[name="select"]').selectOption('3');
  await expect(page.locator('#input-select')).toHaveText('3');

  // Change gcds-radios
  await page
    .locator('gcds-radios input[value="radio2"]')
    .check({ force: true });
  await expect(page.locator('#input-radios')).toHaveText('radio2');
  await page
    .locator('gcds-radios input[value="radio1"]')
    .check({ force: true });
  await expect(page.locator('#input-radios')).toHaveText('radio1');

  // Change gcds-checkboxes
  await page
    .locator('gcds-checkboxes input[value="check2"]')
    .check({ force: true });
  await expect(page.locator('#input-check')).toHaveText('check2');
  await page
    .locator('gcds-checkboxes input[value="check1"]')
    .check({ force: true });
  await expect(page.locator('#input-check')).toHaveText('check2,check1');
});
