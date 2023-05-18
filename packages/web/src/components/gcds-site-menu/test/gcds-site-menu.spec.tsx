import { newSpecPage } from '@stencil/core/testing';
import { GcdsSiteMenu } from '../gcds-site-menu';

import '../../../utils/test/matchMedia.mock';

describe('gcds-site-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsSiteMenu],
      html: `<gcds-site-menu></gcds-site-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-site-menu role="navigation">
        <mock:shadow-root>

          <div class="gcds-site-menu__container">
            <slot name="left"></slot>
            <ul class="menu-container__list menu-list--left" role="menu">
              <slot></slot>
            </ul>
            <slot name="right"></slot>
          </div>
        </mock:shadow-root>
        <gcds-menu-group class="gcds-mobile-menu"></gcds-menu-group>
      </gcds-site-menu>
    `);
  });
});
