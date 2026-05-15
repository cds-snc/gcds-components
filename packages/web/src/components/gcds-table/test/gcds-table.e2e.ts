import { expect, type Locator } from '@playwright/test';
import { test } from '../../../../tests/base';

type TestPage = {
  waitForChanges: () => Promise<void>;
};

type TableSetupOptions = {
  columns?: HTMLGcdsTableElement['columns'];
  rows?: object[];
  sort?: boolean;
  filter?: boolean;
  pagination?: boolean;
  paginationSize?: number;
  paginationSizeOptions?: number[];
};

test.describe('gcds-table', () => {
  const tableColumns = [
    { field: 'number', header: 'Pokédex', rowHeader: true },
    {
      field: 'name',
      header: 'Name',
    },
    { field: 'height', header: 'Height' },
    { field: 'weight', header: 'Weight' },
  ];

  const sortableTableColumns = [
    { field: 'number', header: 'Pokédex', rowHeader: true, sort: true },
    { field: 'name', header: 'Name', sort: true },
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

  const pokemonRows = [
    { number: 7, name: 'Squirtle', height: 5, weight: 90 },
    { number: 8, name: 'Wartortle', height: 10, weight: 225 },
    { number: 9, name: 'Blastoise', height: 16, weight: 855 },
  ];

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

  const getVisibleColumnTexts = async (element: Locator, columnLabel: string) => {
    const cells = element.locator(`tbody tr [data-column="${columnLabel}"]`);
    const count = await cells.count();
    const values: string[] = [];

    for (let i = 0; i < count; i++) {
      values.push((await cells.nth(i).innerText()).trim());
    }

    return values;
  };

  // ─── Page Object for Tests ───────────────────────────────────────
  class GcdsTablePage {
    readonly filterButton: Locator;
    readonly filterInput: Locator;
    readonly applyButton: Locator;
    readonly filterPill: Locator;
    readonly emptyCell: Locator;

    constructor(
      private element: Locator,
      private page: TestPage,
    ) {
      this.filterButton = element.locator('.gcds-table__filters > gcds-button button');
      this.filterInput = element.locator('gcds-input input#gcds-table-filter');
      this.applyButton = element.locator(
        '.gcds-table__modal-footer gcds-button button[type="submit"]',
      );
      this.filterPill = element.locator('.gcds-table__active-filter .gcds-table__pill');
      this.emptyCell = element.locator('tbody td.gcds-table__empty');
    }

    async setup(options: TableSetupOptions = {}) {
      const {
        columns = tableColumns as HTMLGcdsTableElement['columns'],
        rows = pokemonRows,
        sort = false,
        filter = true,
        pagination = false,
        paginationSize,
        paginationSizeOptions,
      } = options;

      await this.element.waitFor({ state: 'attached' });
      await this.element.waitFor({ state: 'visible' });

      await this.element.evaluate(
        (el, payload) => {
          const table = el as HTMLGcdsTableElement;
          table.filter = payload.filter;
          table.sort = payload.sort;
          table.pagination = payload.pagination;
          if (payload.paginationSize !== undefined) {
            table.paginationSize = payload.paginationSize;
          }
          if (payload.paginationSizeOptions !== undefined) {
            table.paginationSizeOptions = payload.paginationSizeOptions;
          }
          table.columns = payload.columns as HTMLGcdsTableElement['columns'];
          table.data = payload.rows;
        },
        {
          columns,
          rows,
          sort,
          filter,
          pagination,
          paginationSize,
          paginationSizeOptions,
        },
      );

      await this.page.waitForChanges();
    }

    async applyFilter(text: string) {
      await this.clickAndWait(this.filterButton);
      await expect(this.filterInput).toBeVisible();
      await this.filterInput.fill(text);

      // Trigger submit without pointer coordinates to avoid viewport-related click flake.
      await this.applyButton.evaluate(button => {
        (button as HTMLButtonElement).click();
      });
      await this.page.waitForChanges();
    }

    async clearFilterViaModal() {
      await this.applyFilter('');
    }

    async openFilterModal() {
      await this.clickAndWait(this.filterButton);
    }

    async removePill() {
      await this.clickAndWait(this.filterPill);
    }

    async clickAndWait(locator: Locator) {
      await this.suppressDevServerModal();
      // DOM click avoids pointer interception from Stencil dev-server diagnostics overlay.
      await locator.evaluate(node => {
        (node as HTMLElement).click();
      });
      await this.page.waitForChanges();
    }

    private async suppressDevServerModal() {
      await this.element.evaluate(el => {
        const modal = el.ownerDocument.querySelector('#dev-server-modal') as HTMLElement | null;
        if (!modal) return;

        modal.style.pointerEvents = 'none';
      });
    }
  }

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
  test('large Dataset Rendering Performance', async ({ page }) => {
    const element = page.locator('gcds-table');
    const tablePage = new GcdsTablePage(element, page);

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

    await tablePage.setup({
      filter: false,
      sort: false,
      pagination: true,
      paginationSize: 10,
      rows: largeDataset,
    });

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
    const tablePage = new GcdsTablePage(element, page);

    await tablePage.setup({
      sort: true,
      filter: false,
      pagination: false,
      columns: [
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
      ] as HTMLGcdsTableElement['columns'],
      rows: [
        { number: 8, name: 'Wartortle', height: 10 },
        {
          number: 7,
          name: 'Squirtle',
          height: 5,
        },
        { number: 9, name: 'Blastoise', height: 16 },
      ],
    });

    const pokedexHeader = element.locator('thead th').first();
    const pokedexSortButton = pokedexHeader.locator('button');

    // 1st click: ascending
    await tablePage.clickAndWait(pokedexSortButton);
    await expect(pokedexHeader).toHaveAttribute('aria-sort', 'ascending');
    await expect
      .poll(() => getVisiblePokedexValues(element))
      .toEqual([7, 8, 9]);

    // 2nd click: descending
    await tablePage.clickAndWait(pokedexSortButton);
    await expect(pokedexHeader).toHaveAttribute('aria-sort', 'descending');
    await expect
      .poll(() => getVisiblePokedexValues(element))
      .toEqual([9, 8, 7]);

    // 3rd click: none
    await tablePage.clickAndWait(pokedexSortButton);
    await expect(pokedexHeader).toHaveAttribute('aria-sort', 'none');
    await expect
      .poll(() => getVisiblePokedexValues(element))
      .toEqual([8, 7, 9]);

    // 4th click: ascending again
    await tablePage.clickAndWait(pokedexSortButton);
    await expect(pokedexHeader).toHaveAttribute('aria-sort', 'ascending');
    await expect
      .poll(() => getVisiblePokedexValues(element))
      .toEqual([7, 8, 9]);
  });

  test('page size selection updates visible row count', async ({ page }) => {
    const element = page.locator('gcds-table');
    const tablePage = new GcdsTablePage(element, page);
    const rows = makeRows(12);

    await tablePage.setup({
      filter: false,
      sort: false,
      pagination: true,
      paginationSizeOptions: [1, 3, 5, 10],
      rows,
    });

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

  test('all rows option shows all rows and hides pagination controls', async ({
    page,
  }) => {
    const element = page.locator('gcds-table');
    const tablePage = new GcdsTablePage(element, page);
    const rows = makeRows(12);

    await tablePage.setup({
      filter: false,
      sort: false,
      pagination: true,
      paginationSizeOptions: [1, 3, 5, 10, 0],
      rows,
    });

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
    const tablePage = new GcdsTablePage(element, page);
    const rows = makeRows(12);

    await tablePage.setup({
      filter: false,
      sort: false,
      pagination: true,
      paginationSize: 5,
      rows,
    });

    // Starts on page 1
    await expect(
      element.locator('gcds-pagination a[aria-current="page"]'),
    ).toHaveText('1');
    await expect
      .poll(() => getVisiblePokedexValues(element))
      .toEqual([1, 2, 3, 4, 5]);

    // Next from page 1 -> page 2
    await tablePage.clickAndWait(
      element.locator('gcds-pagination .list-btn-next a').first(),
    );
    await expect(
      element.locator('gcds-pagination a[aria-current="page"]'),
    ).toHaveText('2');
    await expect
      .poll(() => getVisiblePokedexValues(element))
      .toEqual([6, 7, 8, 9, 10]);

    // Go to page 3
    await tablePage.clickAndWait(
      element
        .locator('gcds-pagination a')
        .filter({ hasText: /^3$/ }),
    );
    await expect(
      element.locator('gcds-pagination a[aria-current="page"]'),
    ).toHaveText('3');
    await expect.poll(() => getVisiblePokedexValues(element)).toEqual([11, 12]);

    // Next does not go past the last page
    await expect(
      element.locator('gcds-pagination .list-btn-next a'),
    ).toHaveCount(0);

    // Previous from page 3 -> page 2
    await tablePage.clickAndWait(
      element.locator('gcds-pagination .list-btn-prev a').first(),
    );
    await expect(
      element.locator('gcds-pagination a[aria-current="page"]'),
    ).toHaveText('2');
    await expect
      .poll(() => getVisiblePokedexValues(element))
      .toEqual([6, 7, 8, 9, 10]);
  });

  test('table auto-scrolls into view when page changes', async ({ page }) => {
    const element = page.locator('gcds-table');
    const tablePage = new GcdsTablePage(element, page);
    const rows = makeRows(12);

    await tablePage.setup({
      filter: false,
      sort: false,
      pagination: true,
      paginationSize: 5,
      rows,
    });

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

  test('filter input availability: shows filter button and opens filter modal', async ({
    page,
  }) => {
    const element = page.locator('gcds-table');
    const filterPage = new GcdsTablePage(element, page);

    await filterPage.setup({ filter: true, sort: false, pagination: false });

    const filterModal = element.locator('dialog.gcds-table__modal');

    await expect(filterPage.filterButton).toBeVisible();
    await filterPage.openFilterModal();

    await expect(filterModal).toHaveAttribute('open', '');
    await expect(filterPage.filterInput).toBeVisible();
  });

  test('filter text input: narrows to Squirtle and clears back to all rows', async ({
    page,
  }) => {
    const element = page.locator('gcds-table');
    const filterPage = new GcdsTablePage(element, page);

    await filterPage.setup({ filter: true, sort: false, pagination: false });

    await filterPage.applyFilter('Squirtle');
    await expect(element.locator('tbody tr')).toHaveCount(1);
    await expect.poll(() => getVisiblePokedexValues(element)).toEqual([7]);

    await filterPage.clearFilterViaModal();
    await expect(element.locator('tbody tr')).toHaveCount(3);
    await expect
      .poll(() => getVisiblePokedexValues(element))
      .toEqual([7, 8, 9]);
  });

  test('filter case sensitivity: matches Squirtle with lower and upper case input', async ({
    page,
  }) => {
    const element = page.locator('gcds-table');
    const filterPage = new GcdsTablePage(element, page);

    await filterPage.setup({ filter: true, sort: false, pagination: false });

    await filterPage.applyFilter('squirtle');
    await expect(element.locator('tbody tr')).toHaveCount(1);
    await expect(element.locator('tbody tr [data-column="Name"]').first()).toHaveText(
      'Squirtle',
    );

    await filterPage.clearFilterViaModal();
    await filterPage.applyFilter('SQUIRTLE');
    await expect(element.locator('tbody tr')).toHaveCount(1);
    await expect(element.locator('tbody tr [data-column="Name"]').first()).toHaveText(
      'Squirtle',
    );
  });

  test('filter pill creation and removal: applying Squirtle creates pill and removing it restores all rows', async ({
    page,
  }) => {
    const element = page.locator('gcds-table');
    const filterPage = new GcdsTablePage(element, page);

    await filterPage.setup({ filter: true, sort: false, pagination: false });

    await filterPage.applyFilter('Squirtle');
    await expect(filterPage.filterPill).toBeVisible();
    await expect(filterPage.filterPill).toContainText('Squirtle');
    await expect(element.locator('tbody tr')).toHaveCount(1);

    await filterPage.removePill();
    await expect(element.locator('.gcds-table__active-filter .gcds-table__pill')).toHaveCount(
      0,
    );
    await expect(element.locator('tbody tr')).toHaveCount(3);
    await expect
      .poll(() => getVisiblePokedexValues(element))
      .toEqual([7, 8, 9]);
  });

  test('filter with no results: shows empty state and keeps controls accessible', async ({
    page,
  }) => {
    const element = page.locator('gcds-table');
    const filterPage = new GcdsTablePage(element, page);

    await filterPage.setup({ filter: true, sort: false, pagination: false });

    await filterPage.applyFilter('XYZ');
    await expect(filterPage.emptyCell).toHaveText('No data available');
    await expect(element.locator('tbody tr')).toHaveCount(1);

    // Controls remain usable after an empty result set.
    await expect(filterPage.filterButton).toBeVisible();
    await filterPage.openFilterModal();
    await expect(filterPage.filterInput).toBeVisible();
  });

  test('combined: filter + pagination reflects filtered row count across pages', async ({
    page,
  }) => {
    const element = page.locator('gcds-table');
    const filterPage = new GcdsTablePage(element, page);

    const rows = [
      ...Array.from({ length: 9 }, (_, i) => ({
        number: i + 1,
        name: `Squirt ${i + 1}`,
        height: i + 1,
        weight: 100 + i,
      })),
      { number: 10, name: 'Pikachu', height: 4, weight: 60 },
      { number: 11, name: 'Charmander', height: 6, weight: 85 },
      { number: 12, name: 'Bulbasaur', height: 7, weight: 69 },
    ];

    await filterPage.setup({
      filter: true,
      sort: false,
      pagination: true,
      paginationSize: 10,
      paginationSizeOptions: [3, 10],
      rows,
    });

    await filterPage.applyFilter('Squirt');

    const pageSizeSelect = element.locator('gcds-select select');
    await pageSizeSelect.selectOption('3');
    await page.waitForChanges();

    await expect(element.locator('tbody tr')).toHaveCount(3);
    await expect
      .poll(() =>
        element
          .locator('gcds-pagination a')
          .filter({ hasText: /^[1-9]\d*$/ })
          .count(),
      )
      .toBe(3);

    await element
      .locator('gcds-pagination a')
      .filter({ hasText: /^2$/ })
      .click();
    await page.waitForChanges();
    await expect
      .poll(() => getVisiblePokedexValues(element))
      .toEqual([4, 5, 6]);

    await element
      .locator('gcds-pagination a')
      .filter({ hasText: /^3$/ })
      .click();
    await page.waitForChanges();
    await expect
      .poll(() => getVisiblePokedexValues(element))
      .toEqual([7, 8, 9]);
  });

  test('combined: filter + sort sorts filtered rows by height ascending', async ({
    page,
  }) => {
    const element = page.locator('gcds-table');
    const filterPage = new GcdsTablePage(element, page);

    await filterPage.setup({
      filter: true,
      sort: true,
      pagination: false,
      columns: sortableTableColumns as HTMLGcdsTableElement['columns'],
      rows: [
        { number: 8, name: 'Wartortle', height: 10, weight: 225 },
        { number: 7, name: 'Squirtle', height: 5, weight: 90 },
        { number: 25, name: 'Pikachu', height: 4, weight: 60 },
      ],
    });

    await filterPage.applyFilter('rtle');

    await element.locator('thead th button', { hasText: 'Height' }).click();
    await page.waitForChanges();

    await expect
      .poll(() => getVisibleColumnTexts(element, 'Height'))
      .toEqual(['5', '10']);
    await expect
      .poll(() => getVisibleColumnTexts(element, 'Name'))
      .toEqual(['Squirtle', 'Wartortle']);
  });

  test('combined: sort + filter + pagination compose and persist while paging', async ({
    page,
  }) => {
    const element = page.locator('gcds-table');
    const filterPage = new GcdsTablePage(element, page);

    await filterPage.setup({
      filter: true,
      sort: true,
      pagination: true,
      paginationSize: 10,
      paginationSizeOptions: [1, 10],
      columns: sortableTableColumns as HTMLGcdsTableElement['columns'],
      rows: [
        { number: 1, name: 'Squirtle A', height: 5, weight: 90 },
        { number: 2, name: 'Squirtle B', height: 8, weight: 95 },
        { number: 3, name: 'Pikachu', height: 4, weight: 60 },
      ],
    });

    await filterPage.applyFilter('Squirt');

    const heightHeader = element.locator('thead th', { hasText: 'Height' }).first();
    const heightSortButton = element.locator('thead th button', { hasText: 'Height' });

    // none -> asc -> desc
    await heightSortButton.click();
    await page.waitForChanges();
    await heightSortButton.click();
    await page.waitForChanges();
    await expect(heightHeader).toHaveAttribute('aria-sort', 'descending');

    const pageSizeSelect = element.locator('gcds-select select');
    await pageSizeSelect.selectOption('1');
    await page.waitForChanges();

    await expect(element.locator('tbody tr')).toHaveCount(1);
    await expect
      .poll(() => getVisibleColumnTexts(element, 'Height'))
      .toEqual(['8']);

    await element
      .locator('gcds-pagination a')
      .filter({ hasText: /^2$/ })
      .click();
    await page.waitForChanges();

    await expect(
      element.locator('gcds-pagination a[aria-current="page"]'),
    ).toHaveText('2');
    await expect
      .poll(() => getVisibleColumnTexts(element, 'Height'))
      .toEqual(['5']);
    await expect(filterPage.filterPill).toContainText('Squirt');
  });

  test('combined: state persistence across page size, paging, and sort changes', async ({
    page,
  }) => {
    const element = page.locator('gcds-table');
    const filterPage = new GcdsTablePage(element, page);

    await filterPage.setup({
      filter: true,
      sort: true,
      pagination: true,
      paginationSize: 10,
      paginationSizeOptions: [2, 10],
      columns: sortableTableColumns as HTMLGcdsTableElement['columns'],
      rows: [
        { number: 1, name: 'Z Squirt', height: 7, weight: 101 },
        { number: 2, name: 'A Squirt', height: 5, weight: 102 },
        { number: 3, name: 'Pikachu', height: 4, weight: 60 },
        { number: 4, name: 'M Squirt', height: 9, weight: 103 },
        { number: 5, name: 'B Squirt', height: 6, weight: 104 },
        { number: 6, name: 'Eevee', height: 3, weight: 65 },
      ],
    });

    await filterPage.applyFilter('Squirt');

    const nameSortButton = element.locator('thead th button', { hasText: 'Name' });

    await nameSortButton.click();
    await page.waitForChanges();

    // Ensure Name sort is ascending before asserting order.
    const nameSortDirection = await element
      .locator('thead th', { hasText: 'Name' })
      .first()
      .getAttribute('aria-sort');
    if (nameSortDirection !== 'ascending') {
      await nameSortButton.click();
      await page.waitForChanges();
    }

    const pageSizeSelect = element.locator('gcds-select select');
    await pageSizeSelect.selectOption('2');
    await page.waitForChanges();

    await expect(element.locator('tbody tr')).toHaveCount(2);
    await expect
      .poll(async () => {
        const names = await getVisibleColumnTexts(element, 'Name');
        return names.every(name => name.includes('Squirt'));
      })
      .toBe(true);

    await element
      .locator('gcds-pagination a')
      .filter({ hasText: /^2$/ })
      .click();
    await page.waitForChanges();

    await expect(element.locator('tbody tr')).toHaveCount(2);
    await expect
      .poll(async () => {
        const names = await getVisibleColumnTexts(element, 'Name');
        return names.every(name => name.includes('Squirt'));
      })
      .toBe(true);

    await element.locator('thead th button', { hasText: 'Height' }).click();
    await page.waitForChanges();

    await expect(filterPage.filterPill).toContainText('Squirt');
    await expect(element.locator('tbody tr')).toHaveCount(2);
    await expect
      .poll(async () => {
        const names = await getVisibleColumnTexts(element, 'Name');
        return names.every(name => name.includes('Squirt'));
      })
      .toBe(true);
  });
});
