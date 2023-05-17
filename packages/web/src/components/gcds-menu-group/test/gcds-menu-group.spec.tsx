import { newSpecPage } from '@stencil/core/testing';
import { GcdsMenuGroup } from '../gcds-menu-group';

describe('gcds-menu-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsMenuGroup],
      html: `<gcds-menu-group></gcds-menu-group>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-menu-group role="presentation">
        <mock:shadow-root>
          <button aria-expanded="false" aria-haspopup="true" class="gcds-menu-group__trigger gcds-trigger--expandable" role="menuitem"></button>
          <ul class="gcds-menu--expandable gcds-menu-group__list" role="menu">
            <slot></slot>
          </ul>
        </mock:shadow-root>
      </gcds-menu-group>
    `);
  });
});
