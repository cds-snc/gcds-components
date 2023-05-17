import { newSpecPage } from '@stencil/core/testing';
import { GcdsSiteMenu1 } from '../gcds-site-menu1';

import './matchMedia.mock';

describe('gcds-site-menu1', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsSiteMenu1],
      html: `<gcds-site-menu1></gcds-site-menu1>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-site-menu1>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gcds-site-menu1>
    `);
  });
});
