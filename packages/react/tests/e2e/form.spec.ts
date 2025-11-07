import { test, expect } from '@playwright/test';

test('Form component state', async ({ page }) => {
  await page.goto('http://localhost:5173/forms');

  // Change name gcds-input
  await expect(page.locator('#input-name')).toHaveText('');
  await page.locator('input[name="name"]').fill('John');
  await expect(page.locator('#input-name')).toHaveText('John');

  // Change number gcds-input
  await expect(page.locator('#input-number')).toHaveText('0');
  await page.locator('input[name="number"]').fill('23');
  await expect(page.locator('#input-number')).toHaveText('23');

  // Change textarea
  await expect(page.locator('#input-message')).toHaveText('');
  await page
    .locator('textarea[name="message"]')
    .fill('This is a message showing state working correctly.');
  await expect(page.locator('#input-message')).toHaveText(
    'This is a message showing state working correctly.',
  );

  // Change full gcds-date-input
  await expect(page.locator('#input-date-full')).toHaveText('');
  await page
    .locator('gcds-date-input[name="dateFull"] input[name="day"]')
    .fill('25');
  await page
    .locator('gcds-date-input[name="dateFull"] select[name="month"]')
    .selectOption('12');
  await page
    .locator('gcds-date-input[name="dateFull"] input[name="year"]')
    .fill('2024');
  await page.locator('gcds-date-input[name="dateFull"]').blur();
  await expect(page.locator('#input-date-full')).toHaveText('2024-12-25');

  // Change compact gcds-date-input
  await expect(page.locator('#input-date-compact')).toHaveText('');
  await page
    .locator('gcds-date-input[name="dateCompact"] select[name="month"]')
    .selectOption('12');
  await page
    .locator('gcds-date-input[name="dateCompact"] input[name="year"]')
    .fill('2024');
  await page.locator('gcds-date-input[name="dateCompact"]').blur();
  await expect(page.locator('#input-date-compact')).toHaveText('2024-12');

  // Change gcds-select
  await expect(page.locator('#input-select')).toHaveText('');
  await page.locator('gcds-select select[name="select"]').selectOption('3');
  await expect(page.locator('#input-select')).toHaveText('3');

  // Change gcds-radios
  await expect(page.locator('#input-radios')).toHaveText('');
  await page
    .locator('gcds-radios input[value="radio2"]')
    .check({ force: true });
  await expect(page.locator('#input-radios')).toHaveText('radio2');
  await page
    .locator('gcds-radios input[value="radio1"]')
    .check({ force: true });
  await expect(page.locator('#input-radios')).toHaveText('radio1');

  // Change gcds-checkboxes
  await expect(page.locator('#input-check')).toHaveText('');
  await page
    .locator('gcds-checkboxes input[value="check2"]')
    .check({ force: true });
  await expect(page.locator('#input-check')).toHaveText('check2');
  await page
    .locator('gcds-checkboxes input[value="check1"]')
    .check({ force: true });
  await expect(page.locator('#input-check')).toHaveText('check2,check1');
  await page
    .locator('gcds-checkboxes input[value="check2"]')
    .uncheck({ force: true });
  await expect(page.locator('#input-check')).toHaveText('check1');
});

test('Form component state - setting programatically', async ({ page }) => {
  await page.goto('http://localhost:5173/forms');

  await expect(page.locator('#input-name')).toHaveText('');
  await expect(page.locator('#input-number')).toHaveText('0');
  await expect(page.locator('#input-message')).toHaveText('');
  await expect(page.locator('#input-date-full')).toHaveText('');
  await expect(page.locator('#input-date-compact')).toHaveText('');
  await expect(page.locator('#input-select')).toHaveText('');
  await expect(page.locator('#input-radios')).toHaveText('');
  await expect(page.locator('#input-check')).toHaveText('');

  await page.locator('#assignAll').click();

  await expect(page.locator('#input-name')).toHaveText('John Doe');
  await expect(page.locator('input[name="name"]')).toHaveValue('John Doe');

  await expect(page.locator('#input-number')).toHaveText('23');
  await expect(page.locator('input[name="number"]')).toHaveValue('23');

  await expect(page.locator('#input-message')).toHaveText(
    'This is a message showing state working correctly.',
  );
  await expect(page.locator('textarea[name="message"]')).toHaveValue(
    'This is a message showing state working correctly.',
  );

  await expect(page.locator('#input-date-full')).toHaveText('2024-12-25');
  await expect(
    page.locator('gcds-date-input[name="dateFull"] input[name="day"]'),
  ).toHaveValue('25');
  await expect(
    page.locator('gcds-date-input[name="dateFull"] select[name="month"]'),
  ).toHaveValue('12');
  await expect(
    page.locator('gcds-date-input[name="dateFull"] input[name="year"]'),
  ).toHaveValue('2024');

  await expect(page.locator('#input-date-compact')).toHaveText('2024-12');
  await expect(
    page.locator('gcds-date-input[name="dateCompact"] select[name="month"]'),
  ).toHaveValue('12');
  await expect(
    page.locator('gcds-date-input[name="dateCompact"] input[name="year"]'),
  ).toHaveValue('2024');

  await expect(page.locator('#input-select')).toHaveText('3');
  await expect(page.locator('gcds-select select[name="select"]')).toHaveValue(
    '3',
  );

  await expect(page.locator('#input-radios')).toHaveText('radio2');
  await expect(page.locator('gcds-radios input[value="radio2"]')).toBeChecked();
  await expect(
    page.locator('gcds-radios input[value="radio1"]'),
  ).not.toBeChecked();

  await expect(page.locator('#input-check')).toHaveText('check2,check1');
  await expect(
    page.locator('gcds-checkboxes input[value="check2"]'),
  ).toBeChecked();
  await expect(
    page.locator('gcds-checkboxes input[value="check1"]'),
  ).toBeChecked();
  await expect(
    page.locator('gcds-checkboxes input[value="check3"]'),
  ).not.toBeChecked();
  await expect(page.locator('#input-check')).toHaveText('check2,check1');

  await page.locator('#reset').click();

  await expect(page.locator('#input-name')).toHaveText('');
  await expect(page.locator('#input-number')).toHaveText('0');
  await expect(page.locator('#input-message')).toHaveText('');
  await expect(page.locator('#input-date-full')).toHaveText('');
  await expect(page.locator('#input-date-compact')).toHaveText('');
  await expect(page.locator('#input-select')).toHaveText('');
  await expect(page.locator('#input-radios')).toHaveText('');
  await expect(page.locator('#input-check')).toHaveText('');
});

test(`Error summary`, async ({ page }) => {
  await page.goto('http://localhost:5173/forms');

  expect(await page.locator('gcds-error-summary a').count()).toBe(0);

  await expect(page.locator('#input-name')).toHaveText('');
  await expect(page.locator('#input-message')).toHaveText('');
  await expect(page.locator('#input-date-full')).toHaveText('');
  await expect(page.locator('#input-date-compact')).toHaveText('');
  await expect(page.locator('#input-select')).toHaveText('');
  await expect(page.locator('#input-radios')).toHaveText('');
  await expect(page.locator('#input-check')).toHaveText('');

  await page.locator('button[type="submit"]').click();

  await page.waitForTimeout(500); // Wait for error summary to render

  let errorLinks = await page.locator('gcds-error-summary a').all();

  expect(errorLinks.length).toBe(7);

  await errorLinks[0].click();
  await expect(page.locator('input[name="name"]')).toBeFocused();
  await page.locator('input[name="name"]').fill('John');

  await errorLinks[1].click();
  await expect(page.locator('textarea[name="message"]')).toBeFocused();
  await page.locator('textarea[name="message"]').fill('This is a message.');

  await errorLinks[2].click();
  const dateFull = page.locator('gcds-date-input[name="dateFull"]');

  await expect(
    await dateFull.evaluate(el => el === document.activeElement),
  ).toBe(true);
  await dateFull.evaluate(el => el.setAttribute('value', '2024-12-31'));

  await errorLinks[3].click();
  const dateCompact = page.locator('gcds-date-input[name="dateCompact"]');

  await expect(
    await dateCompact.evaluate(el => el === document.activeElement),
  ).toBe(true);
  await dateCompact.evaluate(el => el.setAttribute('value', '2024-12'));

  await errorLinks[4].click();
  await expect(page.locator('gcds-select select[name="select"]')).toBeFocused();
  await page.locator('gcds-select select[name="select"]').selectOption('1');

  await errorLinks[5].click();
  await expect(page.locator('gcds-radios fieldset')).toBeFocused();
  await page
    .locator('gcds-radios input[value="radio1"]')
    .check({ force: true });

  await errorLinks[6].click();
  await expect(page.locator('gcds-checkboxes fieldset')).toBeFocused();
  await page
    .locator('gcds-checkboxes input[value="check1"]')
    .check({ force: true });

  await page.locator('button[type="submit"]').click();

  await page.waitForTimeout(500); // Wait for error summary to render

  errorLinks = await page.locator('gcds-error-summary a').all();

  expect(errorLinks.length).toBe(0);
});
