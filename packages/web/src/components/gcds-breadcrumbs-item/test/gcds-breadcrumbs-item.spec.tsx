import { newSpecPage } from '@stencil/core/testing';
import { GcdsBreadcrumbsItem } from '../gcds-breadcrumbs-item';

describe('gcds-breadcrumbs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsBreadcrumbsItem],
      html: `
        <gcds-breadcrumbs-item href="/contact">
          Contact
        </gcds-breadcrumbs-item>
      `,
    });
    expect(page.root).toEqualHtml(`
      <gcds-breadcrumbs-item class="gcds-breadcrumbs-item" href="/contact" role="listitem">
        <mock:shadow-root>
          <gcds-link href="/contact" size="regular">
            <slot></slot>
          </gcds-link>
        </mock:shadow-root>
        Contact
      </gcds-breadcrumbs-item>
    `);
  });
});
