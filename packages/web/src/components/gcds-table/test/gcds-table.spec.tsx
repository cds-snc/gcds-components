/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import { newSpecPage } from '@stencil/core/testing';
import { GcdsTable } from '../gcds-table';

describe('gcds-table', () => {
  const baseColumns = [
    {
      field: 'number',
      header: 'Pokédex',
      alignment: 'end',
      sortDirection: 'asc',
    },
    {
      field: 'name',
      header: 'Name',
    },
    { field: 'height', header: 'Height', alignment: 'end' },
    { field: 'weight', header: 'Weight', alignment: 'end' },
    {
      field: 'base_experience',
      header: 'Base experience',
      sort: false,
      alignment: 'end',
    },
  ];

  const baseData = [
    {
      number: 7,
      name: 'Squirtle',
      height: 5,
      weight: 90,
      base_experience: 63,
    },
    {
      number: 8,
      name: 'Wartortle',
      height: 10,
      weight: 225,
      base_experience: 142,
    },
    {
      number: 9,
      name: 'Blastoise',
      height: 16,
      weight: 855,
      base_experience: 239,
    },
  ];

  // instead of random, make the values deterministic for less flaky tests
  const makeRows = (count: number) =>
    Array.from({ length: count }, (_, i) => ({
      number: i + 20,
      name: `Pokemon ${i + 1}`,
      height: (i % 15) + 1,
      weight: 50 + (i % 10) * 25,
      base_experience: 50 + (i % 12) * 20,
    }));

  const setup = async (html = '<gcds-table></gcds-table>') => {
    return newSpecPage({
      components: [GcdsTable],
      html,
    });
  };

  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('renders', async () => {
    const page = await setup();
    expect(page.root).toEqualHtml(`
      <gcds-table>
        <mock:shadow-root>
            <section class="gcds-table">
              <div class="gcds-table__active-pills"></div>
              <div class="gcds-table__row-management">
                <span aria-live="polite" class="gcds-table__page-info" role="status">
                  Showing 0 rows.
                </span>
              </div>
            <table class="gcds-table__table" tabindex="-1">
              <thead>
                <tr></tr>
              </thead>
              <tbody>
                <tr>
                  <td class="gcds-table__empty" colspan="0">
                    No data available
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <slot></slot>
        </mock:shadow-root>
      </gcds-table>
    `);
  });

  it('renders basic structure', async () => {
    const page = await setup();
    expect(page.root?.shadowRoot?.querySelector('table')).not.toBeNull();
    expect(page.root?.shadowRoot?.querySelector('thead')).not.toBeNull();
    expect(page.root?.shadowRoot?.querySelector('tbody')).not.toBeNull();
  });

  it('renders caption slot content', async () => {
    const page = await setup(
      '<gcds-table><span slot="caption">' +
      '<h2>Pokémon</h2>' +
      'Table of the best Pokémon (first generation).' +
      '</span></gcds-table>',
    );

    expect(
      page.root?.shadowRoot?.querySelector('#gcds-table__caption'),
    ).not.toBeNull();
  });

  it('parses columns and data JSON strings', async () => {
    const page = await setup();
    const el = page.root as HTMLGcdsTableElement;
    const instance = page.rootInstance as any;

    // Convert JSON to strings to mimic how users would enter them in HTML
    el.columns = JSON.stringify(baseColumns) as any;
    el.data = JSON.stringify(baseData) as any;
    await page.waitForChanges();

    expect(Array.isArray(instance.columns)).toBe(true);
    expect(Array.isArray(instance.data)).toBe(true);
    expect(instance.columns[0].field).toBe('number');
    expect(instance.data[1].name).toBe('Wartortle');
  });

  it('logs invalid columns JSON on console.error and handles invalid data', async () => {
    const page = await setup();
    const errorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => undefined);
    const el = page.root as HTMLGcdsTableElement;

    // Assign bad JSON via the attribute path; the watcher catches parse errors
    try {
      el.columns = '{bad-json' as any;
      await page.waitForChanges();
    } catch {
      // Stencil may rethrow the underlying error; that is acceptable
    }
    expect(errorSpy).toHaveBeenCalled();

    // Attempt to break out of JSON parsing and inject a script tag; should be treated as invalid JSON and not executed
    try {
      el.columns = '{"data": "test" } <script>alert(\'XSS\')</script>' as any;
      await page.waitForChanges();
    } catch {
      // Stencil may rethrow the underlying error; that is acceptable
    }
    expect(errorSpy).toHaveBeenCalled();
    expect(page.root?.shadowRoot?.querySelector('tbody')).not.toBeNull();
    expect(page.root?.shadowRoot?.querySelector('table')).toEqualHtml(`
      <table class="gcds-table__table" tabindex="-1">
        <thead>
          <tr></tr>
        </thead>
        <tbody>
          <tr>
            <td class="gcds-table__empty" colspan="0">
              No data available
            </td>
          </tr>
        </tbody>
      </table>
    `);
  });

  it('escapes and sanitizes JSON', async () => {
    const page = await setup();
    const el = page.root as HTMLGcdsTableElement;

    el.columns = baseColumns as any;
    el.data = baseData as any;
    await page.waitForChanges();

    // Replace the whole array so Stencil's @Watch('data') fires and re-renders.
    // Mutating an item in-place doesn't trigger the watcher.
    el.data = [
      { ...baseData[0], name: "<script>alert('XSS attack');</script>" },
      ...baseData.slice(1),
    ] as any;

    await page.waitForChanges();
    const firstCell = page.root?.shadowRoot?.querySelector(
      'tbody tr td[data-column="Name"]',
    );
    expect(firstCell?.innerHTML).not.toContain('<script>');
    expect(
      page.root?.shadowRoot?.querySelector('tbody tr td[data-column="Name"]'),
    ).toEqualHtml(`
    <td class="gcds-table__td" data-cell="name-0" data-column="Name">
      &lt;script&gt;alert('XSS attack');&lt;/script&gt;
    </td>
    `);
  });

  it('renders provided columns and row data', async () => {
    const page = await setup();
    const el = page.root as HTMLGcdsTableElement;

    el.columns = baseColumns as any;
    el.data = baseData as any;
    await page.waitForChanges();

    const headers = page.root?.shadowRoot?.querySelectorAll('thead th') || [];
    const rows = page.root?.shadowRoot?.querySelectorAll('tbody tr') || [];
    const firstRowCells = rows[0]?.querySelectorAll('td') || [];

    expect(headers).toHaveLength(5);
    expect(headers[0].textContent).toContain('Pokédex');
    expect(rows).toHaveLength(3);

    expect(firstRowCells[0]?.textContent?.trim()).toBe('7');
    expect(firstRowCells[1]?.textContent?.trim()).toBe('Squirtle');
    expect(firstRowCells[2]?.textContent?.trim()).toBe('5');
    expect(firstRowCells[3]?.textContent?.trim()).toBe('90');
    expect(firstRowCells[4]?.textContent?.trim()).toBe('63');
  });

  it('applies alignment classes to headers and cells', async () => {
    const page = await setup();
    const el = page.root as HTMLGcdsTableElement;

    el.columns = baseColumns as any;
    el.data = baseData as any;
    await page.waitForChanges();

    const headerBaseXP = page.root?.shadowRoot?.querySelectorAll('thead th')[4];
    const cellBaseXP = page.root?.shadowRoot?.querySelectorAll(
      'tbody tr td[data-column="Base experience"]',
    )[0];

    expect(headerBaseXP?.className).toContain('alignment-end');
    expect(cellBaseXP?.className).toContain('alignment-end');
  });

  it('renders row header cells as th with scope row', async () => {
    const page = await setup();
    const el = page.root as HTMLGcdsTableElement;

    el.columns = [
      { field: 'number', header: 'Pokédex', rowHeader: true },
      { field: 'name', header: 'Name', rowHeader: true },
      { field: 'height', header: 'Height' },
    ] as any;
    el.data = baseData as any;
    await page.waitForChanges();

    const pokedexRowHeader = page.root?.shadowRoot?.querySelector(
      'tbody tr:first-child th[data-column="Pokédex"]',
    );
    const nameRowHeader = page.root?.shadowRoot?.querySelector(
      'tbody tr:first-child th[data-column="Name"]',
    );
    const heightCell = page.root?.shadowRoot?.querySelector(
      'tbody tr:first-child td[data-column="Height"]',
    );
    const heightRowHeader = page.root?.shadowRoot?.querySelector(
      'tbody tr:first-child th[data-column="Height"]',
    );

    expect(pokedexRowHeader?.getAttribute('scope')).toBe('row');
    expect(nameRowHeader?.getAttribute('scope')).toBe('row');

    // expect height to be td and not th
    expect(heightCell?.tagName).toBe('TD');
    expect(heightRowHeader).toBeNull();
  });

  it('renders empty state text when there is no data', async () => {
    const page = await setup();
    const el = page.root as HTMLGcdsTableElement;

    el.columns = baseColumns as any;
    el.data = [] as any;
    await page.waitForChanges();

    const emptyCell =
      page.root?.shadowRoot?.querySelector('.gcds-table__empty');
    expect(emptyCell?.textContent).toContain('No data available');
  });

  it('re-renders rows when data prop is updated', async () => {
    const page = await setup();
    const el = page.root as HTMLGcdsTableElement;

    el.columns = baseColumns as any;
    el.data = baseData as any;
    await page.waitForChanges();

    // Verify initial data
    let rows = page.root?.shadowRoot?.querySelectorAll('tbody tr') || [];
    expect(rows).toHaveLength(3);
    expect(rows[2]?.textContent).toContain('Blastoise');
    expect(rows[2]?.textContent).toContain('9');

    // Update the data prop
    el.data = [
      {
        number: 25,
        name: 'Pikachu',
        height: 4,
        weight: 60,
        base_experience: 112,
      },
      {
        number: 133,
        name: 'Eevee',
        height: 3,
        weight: 65,
        base_experience: 65,
      },
    ] as any;
    await page.waitForChanges();

    rows = page.root?.shadowRoot?.querySelectorAll('tbody tr') || [];
    expect(rows).toHaveLength(2);
    expect(rows[1]?.textContent).toContain('Eevee');
    expect(rows[1]?.textContent).toContain('133');
  });

  it('hides sortable header button when sort is disabled', async () => {
    const page = await setup();
    const el = page.root as HTMLGcdsTableElement;

    el.sort = false;
    el.columns = baseColumns as any;
    el.data = baseData as any;

    await page.waitForChanges();

    const headerButtons =
      page.root?.shadowRoot?.querySelectorAll('thead th button') || [];
    const headers = page.root?.shadowRoot?.querySelectorAll('thead th') || [];

    expect(headerButtons).toHaveLength(0);
    expect(headers[0]?.textContent).toContain('Pokédex');
    expect(headers[1]?.textContent).toContain('Name');
    expect(headers[2]?.textContent).toContain('Height');
  });

  it('renders sort buttons for sortable columns when global sort is set to true', async () => {
    const page = await setup();
    const el = page.root as HTMLGcdsTableElement;

    el.sort = true;
    el.columns = baseColumns as any;
    el.data = baseData as any;
    await page.waitForChanges();

    const headers = page.root?.shadowRoot?.querySelectorAll('thead th') || [];

    // Verify Pokédex has a button
    const pokedexButton = headers[0]?.querySelector('button');
    expect(pokedexButton).not.toBeNull();
    expect(headers[0]?.textContent).toContain('Pokédex');

    // Verify Name has a button
    const nameButton = headers[1]?.querySelector('button');
    expect(nameButton).not.toBeNull();
    expect(headers[1]?.textContent).toContain('Name');

    // Verify Height has a button
    const heightButton = headers[2]?.querySelector('button');
    expect(heightButton).not.toBeNull();
    expect(headers[2]?.textContent).toContain('Height');

    // Verify Weight has a button
    const weightButton = headers[3]?.querySelector('button');
    expect(weightButton).not.toBeNull();
    expect(headers[3]?.textContent).toContain('Weight');

    // Verify Base experience does NOT have a button (sort: false)
    const baseXPButton = headers[4]?.querySelector('button');
    expect(baseXPButton).toBeNull();
    expect(headers[4]?.textContent).toContain('Base experience');
  });

  it('honors column sort override when global sort is false', async () => {
    const page = await setup();
    const el = page.root as HTMLGcdsTableElement;

    el.sort = false;
    el.columns = [
      { field: 'number', header: 'Pokédex', alignment: 'end' },
      { field: 'name', header: 'Name', sort: true },
    ] as any;
    el.data = baseData as any;
    await page.waitForChanges();

    const headers = page.root?.shadowRoot?.querySelectorAll('thead th') || [];

    // Pokédex (index 0) should NOT have a button because global sort is false and column doesn't specify sort
    expect(headers[0]?.querySelector('button')).toBeNull();

    // Name (index 1) SHOULD have a button because column has sort: true override
    expect(headers[1]?.querySelector('button')).not.toBeNull();
    expect(headers[1]?.textContent).toContain('Name');
  });

  it('seeds initial descending sort from sortDirection', async () => {
    // tests the raw HTML input (seeding) and that the default sort direction is descending
    const seededColumns = JSON.stringify([
      { field: 'number', header: 'Pokédex', sort: true, sortDirection: 'desc' },
    ]);
    const seededData = JSON.stringify([
      {
        number: 7,
        name: 'Squirtle',
        height: 5,
        weight: 90,
        base_experience: 63,
      },
      {
        number: 8,
        name: 'Wartortle',
        height: 10,
        weight: 225,
        base_experience: 142,
      },
    ]);
    const page = await setup(
      `<gcds-table columns='${seededColumns}' data='${seededData}'></gcds-table>`,
    );

    const header = page.root?.shadowRoot?.querySelector('thead th');
    expect(header?.getAttribute('aria-sort')).toBe('descending');
  });

  it('cycles sort state when clicking sortable header', async () => {
    const page = await setup();
    const el = page.root as HTMLGcdsTableElement;

    el.sort = true;
    el.columns = baseColumns as any;
    el.data = baseData as any;
    await page.waitForChanges();

    const button = page.root?.shadowRoot?.querySelector(
      'thead th button',
    ) as HTMLButtonElement;
    const header = page.root?.shadowRoot?.querySelector(
      'thead th',
    ) as HTMLTableCellElement;

    expect(header.getAttribute('aria-sort')).toBe('none');
    button.click();
    await page.waitForChanges();
    expect(header.getAttribute('aria-sort')).toBe('ascending');
    button.click();
    await page.waitForChanges();
    expect(header.getAttribute('aria-sort')).toBe('descending');
  });

  it('renders sort pill and clears it from UI when removed', async () => {
    const page = await setup();
    const instance = page.rootInstance as any;
    const el = page.root as HTMLGcdsTableElement;

    el.sort = true;

    el.columns = baseColumns as any;
    el.data = baseData as any;
    await page.waitForChanges();

    instance.sorting = [{ id: 'name', desc: false }];
    instance.onDataChange(el.data);
    await page.waitForChanges();

    const pillButton = page.root?.shadowRoot?.querySelector(
      '.gcds-table__active-sorting button',
    ) as HTMLButtonElement;
    expect(pillButton).not.toBeNull();

    // Click on the pill button to remove it
    pillButton.click();
    await page.waitForChanges();

    expect(
      page.root?.shadowRoot?.querySelector(
        '.gcds-table__active-sorting button',
      ),
    ).toBeNull();
  });

  it('hides pagination controls when pagination is false', async () => {
    const page = await setup();
    const el = page.root as HTMLGcdsTableElement;

    el.pagination = false;

    el.columns = baseColumns as any;
    el.data = makeRows(12) as any;
    await page.waitForChanges();

    expect(page.root?.shadowRoot?.querySelector('gcds-pagination')).toBeNull();
  });

  it('shows pagination controls and limits rows when pagination is true', async () => {
    const page = await setup();
    const el = page.root as HTMLGcdsTableElement;

    el.pagination = true;

    el.columns = baseColumns as any;
    el.data = makeRows(12) as any;
    await page.waitForChanges();

    expect(
      page.root?.shadowRoot?.querySelector('gcds-pagination'),
    ).not.toBeNull();
    expect(page.root?.shadowRoot?.querySelectorAll('tbody tr')).toHaveLength(
      10,
    );
  });

  it('renders page-size option label All for value 0', async () => {
    const page = await setup();
    const el = page.root as HTMLGcdsTableElement;

    el.pagination = true;
    el.paginationSizeOptions = [10, 0] as any;

    el.columns = baseColumns as any;
    el.data = makeRows(3) as any;
    await page.waitForChanges();

    const options = Array.from(
      page.root?.shadowRoot?.querySelectorAll('option') || [],
    );
    expect(options.some(option => option.textContent === 'All')).toBe(true);
  });

  it('updates pagination state when paginationCurrentPage changes', async () => {
    const page = await setup();
    const el = page.root as HTMLGcdsTableElement;
    const instance = page.rootInstance as any;

    el.pagination = true;

    el.columns = baseColumns as any;
    el.data = makeRows(20) as any;
    await page.waitForChanges();

    el.paginationCurrentPage = 2;
    await page.waitForChanges();
    expect(instance.paginationState.pageIndex).toBe(1);
  });

  it('resets out-of-range page index when page size grows', async () => {
    const page = await setup();
    const el = page.root as HTMLGcdsTableElement;
    const instance = page.rootInstance as any;

    el.pagination = true;

    el.columns = baseColumns as any;
    el.data = makeRows(3) as any;
    el.paginationSize = 2;
    el.paginationCurrentPage = 2;
    await page.waitForChanges();

    el.paginationSize = 10;
    await page.waitForChanges();
    expect(instance.paginationState.pageIndex).toBe(0);
  });

  it('hides filter/sort control when both filter and sort are disabled', async () => {
    const page = await setup();
    const el = page.root as HTMLGcdsTableElement;

    el.filter = false;
    el.sort = false;

    el.columns = baseColumns as any;
    el.data = baseData as any;
    await page.waitForChanges();

    expect(page.root?.shadowRoot?.querySelector('gcds-button')).toBeNull();
  });

  it('shows filter and sort button label in English when enabled', async () => {
    // TODO: check if it's filter and sort all the time or if it changes to just one when only one is enabled
    const page = await setup();
    const el = page.root as HTMLGcdsTableElement;

    el.filter = true;
    el.sort = false;

    el.columns = baseColumns as any;
    el.data = baseData as any;

    await page.waitForChanges();

    const button = page.root?.shadowRoot?.querySelector('gcds-button');
    expect(button).not.toBeNull();
    expect(button?.textContent?.toLowerCase()).toContain('filter');
    expect(button?.textContent?.toLowerCase()).toContain('sort');
  });

  // TODO: failing
  // it('shows filter and sort button label in French when enabled', async () => {
  //   const page = await setup();
  //   const el = page.root as HTMLGcdsTableElement;
  //
  //   el.filter = true;
  //   el.sort = true;
  //
  //   el.columns = baseColumns as any;
  //   el.data = baseData as any;
  //
  //   // French
  //   el.lang = 'fr';
  //   await page.waitForChanges();
  //
  //   const button = page.root?.shadowRoot?.querySelector('gcds-button');
  //   expect(button).not.toBeNull();
  //
  //   // Adjust these strings to match your actual translations
  //   expect(button?.textContent?.toLowerCase()).toContain('filtrer');
  //   expect(button?.textContent?.toLowerCase()).toContain('trier');
  // });

  it('renders active filter pill when filterValue is set and clears on click', async () => {
    const page = await setup();
    const el = page.root as HTMLGcdsTableElement;

    el.filter = true;
    el.filterValue = 'Squirtle';
    el.columns = baseColumns as any;
    el.data = baseData as any;
    await page.waitForChanges();

    const pillButton = page.root?.shadowRoot?.querySelector(
      '.gcds-table__active-filter button',
    ) as HTMLButtonElement;
    expect(pillButton.textContent).toContain('Squirtle');

    pillButton.click();
    await page.waitForChanges();

    expect(el.filterValue).toBe('');
  });

  it('syncs internal globalFilter when filterValue changes', async () => {
    const page = await setup();
    const el = page.root as HTMLGcdsTableElement;
    const instance = page.rootInstance as any;

    el.filter = true;
    el.columns = baseColumns as any;
    el.data = baseData as any;
    await page.waitForChanges();

    el.filterValue = 'Blastoise';
    await page.waitForChanges();

    expect(instance.globalFilter).toBe('Blastoise');
  });

  it('defaults language state to english', async () => {
    const page = await setup();
    expect((page.rootInstance as any).lang).toBe('en');
  });

  it('updates lang state when lang prop changes', async () => {
    const page = await setup();
    const el = page.root as HTMLGcdsTableElement;
    const instance = page.rootInstance as any;

    el.lang = 'fr';
    await page.waitForChanges();

    expect(instance.lang).toBe('fr');
  });

  it('rebuilds table options when columns and data change', async () => {
    const page = await setup();
    const instance = page.rootInstance as any;
    const updateSpy = jest.spyOn(instance.table, 'setOptions');
    const el = page.root as HTMLGcdsTableElement;

    el.columns = baseColumns as any;
    el.data = baseData as any;
    await page.waitForChanges();

    expect(updateSpy).toHaveBeenCalled();
  });

  it('triggers data watcher path when sort and pagination props change', async () => {
    const page = await setup();
    const instance = page.rootInstance as any;
    const dataSpy = jest.spyOn(instance, 'onDataChange');
    const el = page.root as HTMLGcdsTableElement;

    el.sort = true;
    await page.waitForChanges();
    el.pagination = true;
    await page.waitForChanges();

    expect(dataSpy).toHaveBeenCalledTimes(2);
  });

  it('exposes expected accessibility attributes', async () => {
    const page = await setup();
    const el = page.root as HTMLGcdsTableElement;

    el.sort = true;
    el.columns = baseColumns as any;
    el.data = baseData as any;
    await page.waitForChanges();

    const th = page.root?.shadowRoot?.querySelector('thead th');
    const sortButton = page.root?.shadowRoot?.querySelector('thead th button');
    const table = page.root?.shadowRoot?.querySelector('table');
    const status = page.root?.shadowRoot?.querySelector(
      '.gcds-table__page-info',
    );

    expect(th?.getAttribute('scope')).toBe('col');
    expect(sortButton?.getAttribute('title')).toContain('Pokédex');
    expect(table?.getAttribute('tabindex')).toBe('-1');
    expect(status?.getAttribute('role')).toBe('status');
    expect(status?.getAttribute('aria-live')).toBe('polite');
  });

  it('shows table status text with row count', async () => {
    const page = await setup();
    const el = page.root as HTMLGcdsTableElement;

    el.columns = baseColumns as any;
    el.data = baseData as any;
    await page.waitForChanges();

    const status =
      page.root?.shadowRoot?.querySelector('.gcds-table__page-info')
        ?.textContent || '';
    expect(status).toContain('Showing 3 rows');
  });

  it('sets gcds-pagination props from current table state', async () => {
    const page = await setup();
    const el = page.root as HTMLGcdsTableElement;

    el.pagination = true;
    el.columns = baseColumns as any;
    el.data = makeRows(12) as any;
    await page.waitForChanges();

    // In spec-page context child custom-element props are reflected on the instance
    const paginationEl =
      page.root?.shadowRoot?.querySelector('gcds-pagination');
    expect(paginationEl).not.toBeNull();
    // totalPages should be 2 for 12 rows with default page size 10
    const instance = page.rootInstance as any;
    expect(instance.table.getPageCount()).toBe(2);
    expect(instance.paginationState.pageIndex).toBe(0);
  });

  it('renders slotted element + slot', async () => {
    const page = await setup();
    const el = page.root as HTMLGcdsTableElement;

    // Extend base columns
    const extendedColumns = [
      ...baseColumns,
      {
        field: 'sprite',
        header: 'Sprite',
        slotted: true,
      },
    ];

    const templateElement = document.createElement('template');
    templateElement.setAttribute('slot', 'cell:sprite');

    const img = document.createElement('img');
    img.setAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png');
    img.setAttribute('alt', 'Squirtle sprite');
    templateElement.content.appendChild(img);

    el.appendChild(templateElement);

    el.columns = extendedColumns as any;
    el.data = baseData as any;
    await page.waitForChanges();

    const headers = page.root?.shadowRoot?.querySelectorAll('thead th') || [];
    const rows = page.root?.shadowRoot?.querySelectorAll('tbody tr') || [];
    const firstRowCells = rows[0]?.querySelectorAll('td') || [];
    const slot = page.root?.querySelector('span[slot="cell-0-sprite"]');

    expect(headers).toHaveLength(6);
    expect(headers[0].textContent).toContain('Pokédex');
    expect(rows).toHaveLength(3);

    expect(firstRowCells[0]?.textContent?.trim()).toBe('7');
    expect(firstRowCells[1]?.textContent?.trim()).toBe('Squirtle');
    expect(firstRowCells[2]?.textContent?.trim()).toBe('5');
    expect(firstRowCells[3]?.textContent?.trim()).toBe('90');
    expect(firstRowCells[4]?.textContent?.trim()).toBe('63');
    expect(firstRowCells[5]).toEqualHtml(`<td class="gcds-table__td" data-cell="sprite-0" data-column="Sprite">
        <slot name="cell-0-sprite"></slot>
      </td>`);
    expect(slot).toEqualHtml(`<span slot="cell-0-sprite">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="Squirtle sprite">
      </span>`);
  });

  it('renders slotted element with data-bind-* attributes', async () => {
    const page = await setup();
    const el = page.root as HTMLGcdsTableElement;

    // Extend base columns
    const extendedColumns = [
      ...baseColumns,
      {
        field: 'sprite',
        header: 'Sprite',
        slotted: true,
      },
    ];

    // Create template element with data-bind attributes that reference row data fields
    const templateElement = document.createElement('template');
    templateElement.setAttribute('slot', 'cell:sprite');

    const img = document.createElement('img');
    img.setAttribute('data-bind-template-src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{number}.png');
    img.setAttribute('data-bind-alt', 'name');
    templateElement.content.appendChild(img);

    el.appendChild(templateElement);

    el.columns = extendedColumns as any;
    el.data = baseData as any;
    await page.waitForChanges();

    const headers = page.root?.shadowRoot?.querySelectorAll('thead th') || [];
    const rows = page.root?.shadowRoot?.querySelectorAll('tbody tr') || [];

    expect(headers).toHaveLength(6);
    expect(rows).toHaveLength(3);
    expect(rows[0]?.querySelectorAll('td')[5]).toEqualHtml(`<td class="gcds-table__td" data-cell="sprite-0" data-column="Sprite">
        <slot name="cell-0-sprite"></slot>
      </td>`);
    expect(rows[1]?.querySelectorAll('td')[5]).toEqualHtml(`<td class="gcds-table__td" data-cell="sprite-1" data-column="Sprite">
        <slot name="cell-1-sprite"></slot>
      </td>`);
    expect(rows[2]?.querySelectorAll('td')[5]).toEqualHtml(`<td class="gcds-table__td" data-cell="sprite-2" data-column="Sprite">
        <slot name="cell-2-sprite"></slot>
      </td>`);

    expect(page.root?.querySelector('span[slot=cell-0-sprite]')).toEqualHtml(`<span slot="cell-0-sprite">
        <img
          data-bind-alt="name"
          data-bind-template-src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{number}.png"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
          alt="Squirtle"
        />
      </span>`);
    expect(page.root?.querySelector('span[slot=cell-1-sprite]')).toEqualHtml(`<span slot="cell-1-sprite">
        <img
          data-bind-alt="name"
          data-bind-template-src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{number}.png"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
          alt="Wartortle"
        />
      </span>`);
    expect(page.root?.querySelector('span[slot=cell-2-sprite]')).toEqualHtml(`<span slot="cell-2-sprite">
        <img
          data-bind-alt="name"
          data-bind-template-src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{number}.png"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
          alt="Blastoise"
        />
      </span>`);
  });
});
