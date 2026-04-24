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
  
});
