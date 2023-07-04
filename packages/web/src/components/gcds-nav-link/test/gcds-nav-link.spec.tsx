import { newSpecPage } from '@stencil/core/testing';
import { GcdsNavLink } from '../gcds-nav-link';

describe('gcds-nav-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsNavLink],
      html: `<gcds-nav-link></gcds-nav-link>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-nav-link class="gcds-nav-link--sidenav" role="presentation">
        <mock:shadow-root>
          <a class="gcds-nav-link" role="menuitem">
            <slot></slot>
          </a>
        </mock:shadow-root>
      </gcds-nav-link>
    `);
  });
});
