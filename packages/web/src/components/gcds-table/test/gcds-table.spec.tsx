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

  it('renders basic structure', async () => {
    const page = await setup();
    expect(page.root?.shadowRoot?.querySelector('table')).not.toBeNull();
    expect(page.root?.shadowRoot?.querySelector('thead')).not.toBeNull();
    expect(page.root?.shadowRoot?.querySelector('tbody')).not.toBeNull();
  });

});
