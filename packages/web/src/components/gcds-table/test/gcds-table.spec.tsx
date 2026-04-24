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

  const makeRows = (count: number) =>
    Array.from({ length: count }, (_, i) => ({ name: `Person ${i + 1}`, age: i + 1 }));

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

    // Attempt to break out of JSON struction
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

});
