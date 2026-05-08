import { expect } from '@playwright/test';
import { test } from '../../../../tests/base';

test.describe('gcds-table', () => {
  test('renders', async ({ page }) => {
    const element = page.locator('gcds-table');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    // Check if it has the 'hydrated' class
    // Verify component hydrates successfully in real browser
    await expect(element).toHaveClass('hydrated');
  });

  /**
   * Data & Column Rendering Tests - Performance
   */
  test('Large Dataset Rendering Performance', async ({ page }) => {
    const element = page.locator('gcds-table');

    // Wait for element to attach and become visible
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    // Generate 500+ rows of test data
    const largeDataset = Array.from({ length: 500 }, (_, i) => ({
      number: 1000 + i,
      name: `Pokemon ${i + 1}`,
      height: (i % 50) + 1,
      weight: 100 + (i % 100) * 5,
      base_experience: 50 + (i % 150),
    }));

    // Assign large dataset to table with pagination enabled
    await element.evaluate((el, data) => {
      const table = el as any;
      table.pagination = true;
      table.paginationSize = 10;
      table.data = data;
    }, largeDataset);

    await page.waitForChanges();

    // Verify table renders without freezing (measure render time)
    const startTime = Date.now();

    // Wait for pagination-limited DOM to render
    await page.waitForSelector('tbody tr', { timeout: 5000 });

    const renderTime = Date.now() - startTime;

    // Verify render completes within acceptable time (< 2000ms for 500+ rows)
    expect(renderTime).toBeLessThan(2000);

    // Verify only current page rows are in DOM (pagination should limit DOM nodes)
    const visibleRows = await page.locator('tbody tr');
    const rowCount = await visibleRows.count();

    // Should show 10 rows (page size) since pagination is enabled
    expect(rowCount).toBe(10);

    // // Verify no freezing - subsequent page navigation is responsive
    // const pageSize = await element.evaluate((el) => {
    //   const pagination = (el as any).paginationState;
    //   return pagination.pageSize;
    // });

    // expect(pageSize).toBe(10);

    // // Verify total row count is correct
    // const totalRows = await element.evaluate((el) => {
    //   const table = (el as any).table;
    //   return table.getPreFilteredRowModel().rows.length;
    // });
    //
    // expect(totalRows).toBe(500);
  });

  test('sort direction cycles on Pokédex header: asc -> desc -> none -> asc', async ({ page }) => {
    const element = page.locator('gcds-table');

    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });

    await element.evaluate(el => {
      const table = el as any;
      table.sort = true;
      table.columns = [
        { field: 'number', header: 'Pokédex', align: 'end', rowHeader: true },
        { field: 'name', header: 'Name' },
        { field: 'height', header: 'Height', align: 'end' },
      ];
      table.data = [
        { number: 8, name: 'Wartortle', height: 10 },
        { number: 7, name: 'Squirtle', height: 5 },
        { number: 9, name: 'Blastoise', height: 16 },
      ];
    });

    await page.waitForChanges();

    const pokedexHeader = element.locator('thead th').first();
    const pokedexSortButton = pokedexHeader.locator('button');

    const getPokedexValues = async () => {
      const cells = element.locator('tbody tr [data-column="Pokédex"]');
      const count = await cells.count();
      const values: number[] = [];

      for (let i = 0; i < count; i++) {
        const text = (await cells.nth(i).innerText()).trim();
        values.push(Number(text));
      }

      return values;
    };

    // 1st click: ascending
    await pokedexSortButton.click();
    await page.waitForChanges();
    await expect(pokedexHeader).toHaveAttribute('aria-sort', 'ascending');
    await expect.poll(getPokedexValues).toEqual([7, 8, 9]);

    // 2nd click: descending
    await pokedexSortButton.click();
    await page.waitForChanges();
    await expect(pokedexHeader).toHaveAttribute('aria-sort', 'descending');
    await expect.poll(getPokedexValues).toEqual([9, 8, 7]);

    // 3rd click: none
    await pokedexSortButton.click();
    await page.waitForChanges();
    await expect(pokedexHeader).toHaveAttribute('aria-sort', 'none');
    await expect.poll(getPokedexValues).toEqual([8, 7, 9]);

    // 4th click: ascending again
    await pokedexSortButton.click();
    await page.waitForChanges();
    await expect(pokedexHeader).toHaveAttribute('aria-sort', 'ascending');
    await expect.poll(getPokedexValues).toEqual([7, 8, 9]);
  });
});
