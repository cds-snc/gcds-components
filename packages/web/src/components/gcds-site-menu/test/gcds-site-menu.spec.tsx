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
          <slot name="left"></slot>
            <div class="gcds-site-menu__container">
              <ul class="menu-container__list menu-list--left" role="menu">
                <slot></slot>
              </ul>
            </div>
            <slot name="right"></slot>
        </mock:shadow-root>
        <gcds-menu-group class="gcds-mobile-menu"></gcds-menu-group>
      </gcds-site-menu>
    `);
  });
});
