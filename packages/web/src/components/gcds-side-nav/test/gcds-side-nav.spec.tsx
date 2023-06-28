import { newSpecPage } from '@stencil/core/testing';
import { GcdsSideNav } from '../gcds-side-nav';

import '../../../utils/test/matchMedia.mock';

describe('gcds-side-nav', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsSideNav],
      html: `<gcds-side-nav></gcds-side-nav>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-side-nav>
        <mock:shadow-root>
          <nav>
            <h2 class="gcds-side-nav__heading"></h2>
            <gcds-nav-group class="gcds-mobile-nav" heading="Menu" role="menu" toggle-icon-closed="bars" toggle-icon-open="close">
              <slot></slot>
            </gcds-nav-group>
          </nav>
        </mock:shadow-root>
      </gcds-side-nav>
    `);
  });
});
