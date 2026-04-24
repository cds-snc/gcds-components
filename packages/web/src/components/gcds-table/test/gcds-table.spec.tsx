/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import { newSpecPage } from '@stencil/core/testing';
import { GcdsTable } from '../gcds-table';

describe('gcds-table', () => {
  const baseColumns = [
    { field: 'name', header: 'Name', sort: true },
    { field: 'age', header: 'Age', align: 'end' as const },
  ];

  const baseData = [
    { name: 'Alice', age: 31 },
    { name: 'Bob', age: 28 },
    { name: 'Chris', age: 40 },
  ];

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

});
