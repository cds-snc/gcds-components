import { newSpecPage } from '@stencil/core/testing';
import { GcdsSiteMenu } from '../gcds-site-menu';

describe('gcds-site-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsSiteMenu],
      html: `<gcds-site-menu></gcds-site-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-site-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gcds-site-menu>
    `);
  });
});
