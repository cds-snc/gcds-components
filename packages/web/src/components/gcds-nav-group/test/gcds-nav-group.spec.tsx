import { newSpecPage } from '@stencil/core/testing';
import { GcdsNavGroup } from '../gcds-nav-group';

describe('gcds-nav-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsNavGroup],
      html: `<gcds-nav-group></gcds-nav-group>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-nav-group role="presentation">
        <mock:shadow-root>
          <button aria-expanded="false" aria-haspopup="true" class="gcds-nav-group__trigger gcds-trigger--expandable" role="menuitem">
            <gcds-icon name="angle-down"></gcds-icon>
          </button>
          <ul class="gcds-nav--expandable gcds-nav-group__list" role="menu">
            <slot></slot>
          </ul>
        </mock:shadow-root>
      </gcds-nav-group>
    `);
  });
});
