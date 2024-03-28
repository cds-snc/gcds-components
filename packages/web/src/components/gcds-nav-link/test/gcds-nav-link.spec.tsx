import { newSpecPage } from '@stencil/core/testing';
import { GcdsNavLink } from '../gcds-nav-link';

describe('gcds-nav-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsNavLink],
      html: `<gcds-nav-link href="#link">Nav Link</gcds-nav-link>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-nav-link href="#link" role="listitem">
        <mock:shadow-root>
          <a href="#link" class="gcds-nav-link gcds-nav-link--sidenav">
            <slot></slot>
          </a>
        </mock:shadow-root>
        Nav Link
      </gcds-nav-link>
    `);
  });
  it('renders current', async () => {
    const page = await newSpecPage({
      components: [GcdsNavLink],
      html: `<gcds-nav-link href="#link" current>Nav Link</gcds-nav-link>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-nav-link current="" href="#link" role="listitem">
        <mock:shadow-root>
          <a aria-current="page" class="gcds-nav-link gcds-nav-link--sidenav" href="#link">
            <slot></slot>
          </a>
        </mock:shadow-root>
        Nav Link
      </gcds-nav-link>
    `);
  });
});
