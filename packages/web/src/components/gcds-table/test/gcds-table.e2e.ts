import { expect, type Locator } from '@playwright/test';
import { test } from '../../../../tests/base';

test.describe('gcds-table', () => {
  const tableColumns = [
    { field: 'number', header: 'Pokédex', rowHeader: true, sort: true },
    {
      field: 'name',
      header: 'Name',
      sort: true,
    },
    { field: 'height', header: 'Height', sort: true },
    { field: 'weight', header: 'Weight', sort: true },
  ];

  const makeRows = (count: number) =>
    Array.from({ length: count }, (_, i) => ({
      number: i + 1,
      name: `Pokemon ${i + 1}`,
      height: 10 + i,
      weight: 100 + i,
    }));

  const getVisiblePokedexValues = async (element: Locator) => {
    const cells = element.locator('tbody tr [data-column="Pokédex"]');
    const count = await cells.count();
    const values: number[] = [];

    for (let i = 0; i < count; i++) {
      const text = (await cells.nth(i).innerText()).trim();
      values.push(Number(text));
    }

    return values;
  };

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
      const table = el as HTMLGcdsTableElement;
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

  test('sort direction cycles on Pokédex header: asc -> desc -> none -> asc', async ({
    page,
  }) => {
    const element = page.locator('gcds-table');

    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });

    await element.evaluate(el => {
      const table = el as HTMLGcdsTableElement;
      table.sort = true;
      table.columns = [
        {
          field: 'number',
          header: 'Pokédex',
          alignment: 'end',
          rowHeader: true,
        },
        {
          field: 'name',
          header: 'Name',
        },
        { field: 'height', header: 'Height', alignment: 'end' },
      ];
      table.data = [
        { number: 8, name: 'Wartortle', height: 10 },
        {
          number: 7,
          name: 'Squirtle',
          height: 5,
        },
        { number: 9, name: 'Blastoise', height: 16 },
      ];
    });

    await page.waitForChanges();

    const pokedexHeader = element.locator('thead th').first();
    const pokedexSortButton = pokedexHeader.locator('button');

    // 1st click: ascending
    await pokedexSortButton.click();
    await page.waitForChanges();
    await expect(pokedexHeader).toHaveAttribute('aria-sort', 'ascending');
    await expect
      .poll(() => getVisiblePokedexValues(element))
      .toEqual([7, 8, 9]);

    // 2nd click: descending
    await pokedexSortButton.click();
    await page.waitForChanges();
    await expect(pokedexHeader).toHaveAttribute('aria-sort', 'descending');
    await expect
      .poll(() => getVisiblePokedexValues(element))
      .toEqual([9, 8, 7]);

    // 3rd click: none
    await pokedexSortButton.click();
    await page.waitForChanges();
    await expect(pokedexHeader).toHaveAttribute('aria-sort', 'none');
    await expect
      .poll(() => getVisiblePokedexValues(element))
      .toEqual([8, 7, 9]);

    // 4th click: ascending again
    await pokedexSortButton.click();
    await page.waitForChanges();
    await expect(pokedexHeader).toHaveAttribute('aria-sort', 'ascending');
    await expect
      .poll(() => getVisiblePokedexValues(element))
      .toEqual([7, 8, 9]);
  });

  test('page size selection updates visible row count', async ({ page }) => {
    const element = page.locator('gcds-table');
    const rows = makeRows(12);

    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });

    await element.evaluate(
      (el, payload) => {
        const table = el as HTMLGcdsTableElement;
        table.pagination = true;
        table.columns = payload.columns as HTMLGcdsTableElement['columns'];
        table.paginationSizeOptions = [1, 3, 5, 10];
        table.data = payload.rows;
      },
      {
        columns: tableColumns,
        rows,
      },
    );

    await page.waitForChanges();

    const pageSizeSelect = element.locator('gcds-select select');
    await expect(pageSizeSelect).toBeVisible();

    const optionValues = await pageSizeSelect
      .locator('option')
      .evaluateAll(options =>
        options.map(option => Number((option as HTMLOptionElement).value)),
      );
    expect(optionValues).toEqual([1, 3, 5, 10]);

    await pageSizeSelect.selectOption('3');
    await page.waitForChanges();
    await expect(element.locator('tbody tr')).toHaveCount(3);

    await pageSizeSelect.selectOption('5');
    await page.waitForChanges();
    await expect(element.locator('tbody tr')).toHaveCount(5);

    await pageSizeSelect.selectOption('10');
    await page.waitForChanges();
    await expect(element.locator('tbody tr')).toHaveCount(10);
  });

  test('All rows option shows all rows and hides pagination controls', async ({
    page,
  }) => {
    const element = page.locator('gcds-table');
    const rows = makeRows(12);

    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });

    await element.evaluate(
      (el, payload) => {
        const table = el as HTMLGcdsTableElement;
        table.pagination = true;
        table.columns = payload.columns as HTMLGcdsTableElement['columns'];
        table.paginationSizeOptions = [1, 3, 5, 10, 0];
        table.data = payload.rows;
      },
      {
        columns: tableColumns,
        rows,
      },
    );

    await page.waitForChanges();

    // Select all
    const pageSizeSelect = element.locator('gcds-select select');
    await pageSizeSelect.selectOption('0');
    await page.waitForChanges();

    await expect(element.locator('tbody tr')).toHaveCount(12);
    await expect(element.locator('gcds-pagination')).toHaveCount(0);
  });

  test('pagination page navigation updates rows and current page', async ({
    page,
  }) => {
    const element = page.locator('gcds-table');
    const rows = makeRows(12);

    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });

    await element.evaluate(
      (el, payload) => {
        const table = el as HTMLGcdsTableElement;
        table.pagination = true;
        table.paginationSize = 5;
        table.columns = payload.columns as HTMLGcdsTableElement['columns'];
        table.data = payload.rows;
      },
      {
        columns: tableColumns,
        rows,
      },
    );

    await page.waitForChanges();

    // Starts on page 1
    await expect(
      element.locator('gcds-pagination a[aria-current="page"]'),
    ).toHaveText('1');
    await expect
      .poll(() => getVisiblePokedexValues(element))
      .toEqual([1, 2, 3, 4, 5]);

    // Next from page 1 -> page 2
    await element.locator('gcds-pagination .list-btn-next a').first().click();
    await page.waitForChanges();
    await expect(
      element.locator('gcds-pagination a[aria-current="page"]'),
    ).toHaveText('2');
    await expect
      .poll(() => getVisiblePokedexValues(element))
      .toEqual([6, 7, 8, 9, 10]);

    // Go to page 3
    await element
      .locator('gcds-pagination a')
      .filter({ hasText: /^3$/ })
      .click();
    await page.waitForChanges();
    await expect(
      element.locator('gcds-pagination a[aria-current="page"]'),
    ).toHaveText('3');
    await expect
      .poll(() => getVisiblePokedexValues(element))
      .toEqual([11, 12]);

    // Next does not go past the last page
    await expect(
      element.locator('gcds-pagination .list-btn-next a'),
    ).toHaveCount(0);

    // Previous from page 3 -> page 2
    await element.locator('gcds-pagination .list-btn-prev a').first().click();
    await page.waitForChanges();
    await expect(
      element.locator('gcds-pagination a[aria-current="page"]'),
    ).toHaveText('2');
    await expect
      .poll(() => getVisiblePokedexValues(element))
      .toEqual([6, 7, 8, 9, 10]);
  });

  test('table auto-scrolls into view when page changes', async ({ page }) => {
    const element = page.locator('gcds-table');
    const rows = makeRows(12);

    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });

    await element.evaluate(
      (el, payload) => {
        const table = el as HTMLGcdsTableElement;
        table.pagination = true;
        table.paginationSize = 5;
        table.columns = payload.columns as HTMLGcdsTableElement['columns'];
        table.data = payload.rows;
      },
      {
        columns: tableColumns,
        rows,
      },
    );

    await page.waitForChanges();

    await element.evaluate(el => {
      const table = el.shadowRoot?.querySelector('table');
      if (!table) return;

      let calls = 0;
      table.scrollIntoView = (() => {
        calls += 1;
        el.setAttribute('data-scroll-calls', String(calls));
      }) as typeof table.scrollIntoView;
    });

    await page.evaluate(() => window.scrollTo(0, 1000));

    await element
      .locator('gcds-pagination a')
      .filter({ hasText: /^2$/ })
      .click();
    await page.waitForChanges();

    await expect(element).toHaveAttribute('data-scroll-calls', '1');
    await expect(
      element.locator('gcds-pagination a[aria-current="page"]'),
    ).toHaveText('2');
  });
});
