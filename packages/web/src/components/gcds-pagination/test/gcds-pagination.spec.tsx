import { newSpecPage } from '@stencil/core/testing';
import { GcdsPagination } from '../gcds-pagination';

describe('gcds-pagination', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsPagination],
      html: `<gcds-pagination></gcds-pagination>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-pagination>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gcds-pagination>
    `);
  });
});
