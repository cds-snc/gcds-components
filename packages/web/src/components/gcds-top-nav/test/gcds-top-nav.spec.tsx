import { newSpecPage } from '@stencil/core/testing';
import { GcdsTopNav } from '../gcds-top-nav';

import '../../../utils/test/matchMedia.mock';

describe('gcds-top-nav', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsTopNav],
      html: `<gcds-top-nav></gcds-top-nav>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-top-nav>
        <mock:shadow-root>
          <nav class="gcds-top-nav__container">
            <gcds-nav-group class="gcds-mobile-nav gcds-mobile-nav-topnav" heading="Menu">
              <slot name="home"></slot>
              <ul class="nav-container__list nav-list--left" role="menu">
                <slot></slot>
              </ul>
            </gcds-nav-group>
          </nav>
        </mock:shadow-root>
      </gcds-top-nav>
    `);
  });
});
