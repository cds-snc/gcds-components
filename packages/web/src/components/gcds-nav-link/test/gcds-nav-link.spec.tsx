import { newSpecPage } from '@stencil/core/testing';
import { GcdsNavLink } from '../gcds-nav-link';

import gcdsLinkI18n from '../../gcds-link/i18n/i18n'

describe('gcds-nav-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsNavLink],
      html: `<gcds-nav-link href="#link">Nav Link</gcds-nav-link>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-nav-link href="#link" role="listitem">
        <mock:shadow-root>
          <a href="#link" class="gcds-nav-link gcds-nav-link--sidenav" tabindex="0">
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
          <a aria-current="page" class="gcds-nav-link gcds-nav-link--sidenav" href="#link" tabindex="0">
            <slot></slot>
          </a>
        </mock:shadow-root>
        Nav Link
      </gcds-nav-link>
    `);
  });
  it('renders external', async () => {
    const page = await newSpecPage({
      components: [GcdsNavLink],
      html: `<gcds-nav-link href="#link" external>Nav Link</gcds-nav-link>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-nav-link external="" href="#link" role="listitem">
        <mock:shadow-root>
          <a rel="noopener noreferrer" target="_blank" class="gcds-nav-link gcds-nav-link--sidenav" href="#link" tabindex="0">
            <slot></slot>
            <span class="text-icon-group">
              <gcds-icon name="external" label="${gcdsLinkI18n.en.external}" />
            </span>
          </a>
        </mock:shadow-root>
        Nav Link
      </gcds-nav-link>
    `);
  });
});
