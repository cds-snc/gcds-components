import { newSpecPage } from '@stencil/core/testing';
import { GcdsMenuGroup } from '../gcds-menu-group';

describe('gcds-menu-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsMenuGroup],
      html: `<gcds-menu-group></gcds-menu-group>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-menu-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gcds-menu-group>
    `);
  });
});
