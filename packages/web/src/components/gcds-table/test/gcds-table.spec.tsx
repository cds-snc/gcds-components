import { newSpecPage } from '@stencil/core/testing';
import { GcdsTable } from '../gcds-table';

describe('gcds-table', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsTable],
      html: `<gcds-table></gcds-table>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-table>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gcds-table>
    `);
  });
});
