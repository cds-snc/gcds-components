import { newSpecPage } from '@stencil/core/testing';
import { GcdsMenuLink } from '../gcds-menu-link';

describe('gcds-menu-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsMenuLink],
      html: `<gcds-menu-link></gcds-menu-link>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-menu-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gcds-menu-link>
    `);
  });
});
