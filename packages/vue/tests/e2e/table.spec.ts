import { test, expect } from '@playwright/test';

test('Table has rendered', async ({ page }) => {
  await page.goto('http://localhost:5173/table');

  // Table has rendered and is visible
  const table = await page.locator('table');
  await expect(table).toBeVisible();

  // API has loaded
  await expect
    .poll(
      async () => {
        const data = await page
          .locator('gcds-table')
          .evaluate(el => (el as any).data);
        return data?.length;
      },
      {
        message: 'API has failed to load',
        timeout: 10000,
      },
    )
    .toBeGreaterThan(0);

  // Caption slot properly labels the table
  await expect(table).toHaveAccessibleName(
    'Pokémon Table of the best Pokémon (first generation).',
  );

  // Table columns have been populated with the correct headers
  const headers = await page.locator('thead th');
  await expect(headers).toHaveCount(7);
  await expect(headers.nth(0)).toHaveText('Pokédex');
  await expect(headers.nth(1)).toHaveText('Name');
  await expect(headers.nth(2)).toHaveText('Sprite');
  await expect(headers.nth(3)).toHaveText('Height');
  await expect(headers.nth(4)).toHaveText('Weight');
  await expect(headers.nth(5)).toHaveText('Base experience');
  await expect(headers.nth(6)).toHaveText('Actions');

  // Table rows have been populated with the correct data
  const rows = await page.locator('tbody tr');
  await expect(rows).toHaveCount(10);

  // Rows have slots for content
  const slots = await page.locator('tbody tr slot');
  await expect(slots).toHaveCount(20);
  await expect(slots.nth(0)).toHaveAttribute('name', 'cell-0-sprite');
  await expect(slots.nth(1)).toHaveAttribute('name', 'cell-0-actions');

  // Slots have been populated with the correct content
  const slottedElements = await page.locator('span[slot]');
  await expect(slottedElements).toHaveCount(302);
  await expect(slottedElements.nth(0)).toHaveAttribute('slot', 'cell-0-sprite');
  await expect(slottedElements.nth(0).locator('img')).toHaveAttribute(
    'src',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  );
  await expect(slottedElements.nth(1)).toHaveAttribute(
    'slot',
    'cell-0-actions',
  );
  await expect(slottedElements.nth(1).locator('gcds-button')).toHaveText(
    'Console log row data',
  );

  // Slotted button console logs the row data when clicked
  const logPromise = page.waitForEvent('console');

  await slottedElements.nth(1).locator('gcds-button').click();

  const msg = await logPromise;
  const value = await msg.args()[0].jsonValue();
  expect(value).toEqual({
    base_experience: 64,
    height: 7,
    name: 'bulbasaur',
    number: 1,
    weight: 69,
  });
});
