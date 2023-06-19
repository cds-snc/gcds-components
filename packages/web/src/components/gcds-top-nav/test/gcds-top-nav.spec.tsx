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
            <slot name="home"></slot>
            <ul class="nav-container__list nav-list--left" role="menu">
              <slot></slot>
            </ul>
          </nav>
        </mock:shadow-root>
        <gcds-nav-group class="gcds-mobile-nav"></gcds-nav-group>
      </gcds-top-nav>
    `);
  });
});
