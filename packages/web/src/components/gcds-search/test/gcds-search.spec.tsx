import { newSpecPage } from '@stencil/core/testing';
import { GcdsSearch } from '../gcds-search';

describe('gcds-search', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsSearch],
      html: `<gcds-search></gcds-search>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-search>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gcds-search>
    `);
  });
});
