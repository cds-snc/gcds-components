import { newSpecPage } from '@stencil/core/testing';
import { GcdsNavGroup } from '../gcds-nav-group';

describe('gcds-nav-group', () => {
  it('renders - english', async () => {
    const page = await newSpecPage({
      components: [GcdsNavGroup],
      html: `<gcds-nav-group menu-label="Nav group submenu" open-trigger="Nav group"></gcds-nav-group>`,
    });
    expect(page.root).toEqualHtml(`
    <gcds-nav-group menu-label="Nav group submenu" open-trigger="Nav group" role="listitem">
      <mock:shadow-root>
        <button aria-expanded="false" aria-haspopup="true" class="gcds-nav-group__trigger gcds-trigger--expandable">
          <gcds-icon name="angle-down"></gcds-icon>
          Nav group
        </button>
        <ul aria-label="Nav group submenu" class="gcds-nav--expandable gcds-nav-group__list">
          <slot></slot>
        </ul>
      </mock:shadow-root>
    </gcds-nav-group>
    `);
  });

  it('renders - french', async () => {
    const page = await newSpecPage({
      components: [GcdsNavGroup],
      html: `<gcds-nav-group menu-label="Nav group submenu" open-trigger="Nav group" lang="fr"></gcds-nav-group>`,
    });
    expect(page.root).toEqualHtml(`
    <gcds-nav-group menu-label="Nav group submenu" open-trigger="Nav group" lang="fr" role="listitem">
      <mock:shadow-root>
        <button aria-expanded="false" aria-haspopup="true" class="gcds-nav-group__trigger gcds-trigger--expandable">
          <gcds-icon name="angle-down"></gcds-icon>
          Nav group
        </button>
        <ul aria-label="Nav group submenu" class="gcds-nav--expandable gcds-nav-group__list">
          <slot></slot>
        </ul>
      </mock:shadow-root>
    </gcds-nav-group>
    `);
  });

  it('renders open', async () => {
    const page = await newSpecPage({
      components: [GcdsNavGroup],
      html: `<gcds-nav-group menu-label="Nav group submenu" open-trigger="Nav group" open></gcds-nav-group>`,
    });
    expect(page.root).toEqualHtml(`
    <gcds-nav-group menu-label="Nav group submenu" open-trigger="Nav group" role="listitem" open>
      <mock:shadow-root>
        <button aria-expanded="true" aria-haspopup="true" class="gcds-nav-group__trigger gcds-trigger--expandable">
          <gcds-icon name="angle-up"></gcds-icon>
          Nav group
        </button>
        <ul aria-label="Nav group submenu" class="gcds-nav--expandable gcds-nav-group__list">
          <slot></slot>
        </ul>
      </mock:shadow-root>
    </gcds-nav-group>
    `);
  });
});
