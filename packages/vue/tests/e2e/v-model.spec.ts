import { test, expect } from '@playwright/test';

const urls = [
  { name: 'v-model', url: 'http://localhost:5173/forms' },
  { name: 'Pinia state', url: 'http://localhost:5173/forms-state' },
];

for (const { name, url } of urls) {
  test(`Form component - ${name}`, async ({ page }) => {
    await page.goto(url);

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
      .fill('This is a message showing v-model working correctly.');
    await expect(page.locator('#input-message')).toHaveText(
      'This is a message showing v-model working correctly.',
    );

    // Change full gcds-date-input
    await expect(page.locator('#input-date-full')).toHaveText('');
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
    await expect(page.locator('#input-date-full')).toHaveText('2024-12-25');

    // Change compact gcds-date-input
    await expect(page.locator('#input-date-compact')).toHaveText('');
    await page
      .locator('gcds-date-input[name="date-compact"] select[name="month"]')
      .selectOption('12');
    await page
      .locator('gcds-date-input[name="date-compact"] input[name="year"]')
      .fill('2024');
    await page.locator('gcds-date-input[name="date-compact"]').blur();
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

  test(`Setting programatically - ${name}`, async ({ page }) => {
    await page.goto(url);

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
      'This is a message showing v-model working correctly.',
    );
    await expect(page.locator('textarea[name="message"]')).toHaveValue(
      'This is a message showing v-model working correctly.',
    );

    await expect(page.locator('#input-date-full')).toHaveText('2024-12-25');
    await expect(
      page.locator('gcds-date-input[name="date-full"] input[name="day"]'),
    ).toHaveValue('25');
    await expect(
      page.locator('gcds-date-input[name="date-full"] select[name="month"]'),
    ).toHaveValue('12');
    await expect(
      page.locator('gcds-date-input[name="date-full"] input[name="year"]'),
    ).toHaveValue('2024');

    await expect(page.locator('#input-date-compact')).toHaveText('2024-12');
    await expect(
      page.locator('gcds-date-input[name="date-compact"] select[name="month"]'),
    ).toHaveValue('12');
    await expect(
      page.locator('gcds-date-input[name="date-compact"] input[name="year"]'),
    ).toHaveValue('2024');

    await expect(page.locator('#input-select')).toHaveText('3');
    await expect(page.locator('gcds-select select[name="select"]')).toHaveValue(
      '3',
    );

    await expect(page.locator('#input-radios')).toHaveText('radio2');
    await expect(
      page.locator('gcds-radios input[value="radio2"]'),
    ).toBeChecked();
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
}

test(`State remaining after router navigation`, async ({ page }) => {
  await page.goto('http://localhost:5173/forms-state');

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
    'This is a message showing v-model working correctly.',
  );
  await expect(page.locator('textarea[name="message"]')).toHaveValue(
    'This is a message showing v-model working correctly.',
  );

  await expect(page.locator('#input-date-full')).toHaveText('2024-12-25');
  await expect(
    page.locator('gcds-date-input[name="date-full"] input[name="day"]'),
  ).toHaveValue('25');
  await expect(
    page.locator('gcds-date-input[name="date-full"] select[name="month"]'),
  ).toHaveValue('12');
  await expect(
    page.locator('gcds-date-input[name="date-full"] input[name="year"]'),
  ).toHaveValue('2024');

  await expect(page.locator('#input-date-compact')).toHaveText('2024-12');
  await expect(
    page.locator('gcds-date-input[name="date-compact"] select[name="month"]'),
  ).toHaveValue('12');
  await expect(
    page.locator('gcds-date-input[name="date-compact"] input[name="year"]'),
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

  await page.locator('gcds-breadcrumbs-item a').click({ force: true });

  const gcdsHeading = await page.locator('gcds-heading h1');
  await expect(gcdsHeading).toBeVisible();

  const gcdsHeadingText = await page.locator('gcds-heading');
  await expect(gcdsHeadingText).toHaveText('GCDS Vue test app');

  await page.locator('a[href="/forms-state"]').click({ force: true });

  await expect(page.locator('#input-name')).toHaveText('John Doe');
  await expect(page.locator('input[name="name"]')).toHaveValue('John Doe');

  await expect(page.locator('#input-number')).toHaveText('23');
  await expect(page.locator('input[name="number"]')).toHaveValue('23');

  await expect(page.locator('#input-message')).toHaveText(
    'This is a message showing v-model working correctly.',
  );
  await expect(page.locator('textarea[name="message"]')).toHaveValue(
    'This is a message showing v-model working correctly.',
  );

  await expect(page.locator('#input-date-full')).toHaveText('2024-12-25');
  await expect(
    page.locator('gcds-date-input[name="date-full"] input[name="day"]'),
  ).toHaveValue('25');
  await expect(
    page.locator('gcds-date-input[name="date-full"] select[name="month"]'),
  ).toHaveValue('12');
  await expect(
    page.locator('gcds-date-input[name="date-full"] input[name="year"]'),
  ).toHaveValue('2024');

  await expect(page.locator('#input-date-compact')).toHaveText('2024-12');
  await expect(
    page.locator('gcds-date-input[name="date-compact"] select[name="month"]'),
  ).toHaveValue('12');
  await expect(
    page.locator('gcds-date-input[name="date-compact"] input[name="year"]'),
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
});
