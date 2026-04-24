/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import { newSpecPage } from '@stencil/core/testing';
import { GcdsTable } from '../gcds-table';

describe('gcds-table', () => {
  const baseColumns = [
    {
      field: "number",
      header: "Pokédex",
      align: "end",
      sortDirection: "asc"
    },
    {
      field: "name",
      header: "Name"
    },
    { field: "height", header: "Height", align: "end" },
    { field: "weight", header: "Weight", align: "end" },
    {
      field: "base_experience",
      header: "Base experience",
      sort: false,
      align: "end"
    }
  ];


  const baseData = [
    {
      number: 7,
      name: "Squirtle",
      height: 5,
      weight: 90,
      base_experience: 63
    },
    {
      number: 8,
      name: "Wartortle",
      height: 10,
      weight: 225,
      base_experience: 142
    },
    {
      number: 9,
      name: "Blastoise",
      height: 16,
      weight: 855,
      base_experience: 239
    }
  ]

  // const makeRows = (count: number) =>
  //   Array.from({ length: count }, (_, i) => ({ name: `Person ${i + 1}`, age: i + 1 }));

  const setup = async (html = '<gcds-table></gcds-table>') => {
    return newSpecPage({
      components: [GcdsTable],
      html,
    });
  };

  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('renders', async()=>{
    const page = await setup();
    expect(page.root).toEqualHtml(`
      <gcds-table>
        <mock:shadow-root>
            <section class="gcds-table">
              <hr>
              <div class="gcds-table__active-pills"></div>
            <span aria-live="polite" class="gcds-table__page-info" role="status">
              Showing 0 rows.
            </span>
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
        </mock:shadow-root>
      </gcds-table>
    `);
  })

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

    expect(page.root?.shadowRoot?.querySelector('caption slot[name="caption"]')).not.toBeNull();
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
    const firstCell = page.root?.shadowRoot?.querySelector('tbody tr td[data-column="Name"]');
    expect(firstCell?.innerHTML).not.toContain('<script>');
    expect(page.root?.shadowRoot?.querySelector('tbody tr td[data-column="Name"]')).toEqualHtml(`
    <td class="gcds-table__td" data-column="Name">
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

  it('applies align classes to headers and cells', async () => {
    const page = await setup();
    const el = page.root as HTMLGcdsTableElement;

    el.columns = baseColumns as any;
    el.data = baseData as any;
    await page.waitForChanges();

    const headerBaseXP = page.root?.shadowRoot?.querySelectorAll('thead th')[4];
    const cellBaseXP = page.root?.shadowRoot?.querySelectorAll('tbody tr td[data-column="Base experience"]')[0];

    expect(headerBaseXP?.className).toContain('align-end');
    expect(cellBaseXP?.className).toContain('align-end');
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

  it('invokes renderCell callback with value and row', async () => {
    const renderCell = jest.fn((value: unknown) => String(value));
    const page = await setup();
    const el = page.root as HTMLGcdsTableElement;

    el.columns = [
      { field: 'number', header: 'Pokédex' },
      { field: 'name', header: 'Name', renderCell },
    ] as any;
    el.data = baseData as any;
    await page.waitForChanges();

    expect(renderCell).toHaveBeenCalled();

    // TODO: Expect to render x how many rows there are (3 in this case)
    // However, right now it's being called 9 times, so this needs to be revisited
    // expect(renderCell).toHaveBeenCalledTimes(3);
    expect(renderCell).toHaveBeenNthCalledWith(1, 'Squirtle', baseData[0]);
  });

  it('renders empty state text when there is no data', async () => {
    const page = await setup();
    const el = page.root as HTMLGcdsTableElement;

    el.columns = baseColumns as any;
    el.data = [] as any;
    await page.waitForChanges();

    const emptyCell = page.root?.shadowRoot?.querySelector('.gcds-table__empty');
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

    const headerButtons = page.root?.shadowRoot?.querySelectorAll('thead th button') || [];
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
      { field: 'number', header: 'Pokédex', align: 'end' },
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


});
