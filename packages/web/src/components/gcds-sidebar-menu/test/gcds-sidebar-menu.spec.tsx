import { newSpecPage } from '@stencil/core/testing';
import { GcdsSidebarMenu } from '../gcds-sidebar-menu';

import '../../../utils/test/matchMedia.mock';

describe('gcds-sidebar-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsSidebarMenu],
      html: `<gcds-sidebar-menu></gcds-sidebar-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-sidebar-menu>
        <mock:shadow-root>
          <nav>
            <h2 class="gcds-sidebar-menu__heading"></h2>
            <ul class="gcds-sidebar-menu__list" role="menu">
              <slot></slot>
            </ul>
          </nav>
        </mock:shadow-root>
        <gcds-menu-group class="gcds-mobile-menu"></gcds-menu-group>
      </gcds-sidebar-menu>
    `);
  });
});
