import { newSpecPage } from '@stencil/core/testing';
import { GcdsSidebarMenu } from '../gcds-sidebar-menu';

describe('gcds-sidebar-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsSidebarMenu],
      html: `<gcds-sidebar-menu></gcds-sidebar-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-sidebar-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gcds-sidebar-menu>
    `);
  });
});
