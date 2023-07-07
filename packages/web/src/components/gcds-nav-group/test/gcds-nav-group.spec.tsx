import { newSpecPage } from '@stencil/core/testing';
import { GcdsNavGroup } from '../gcds-nav-group';

describe('gcds-nav-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsNavGroup],
      html: `<gcds-nav-group heading="Nav group"></gcds-nav-group>`,
    });
    expect(page.root).toEqualHtml(`
    <gcds-nav-group heading="Nav group" role="presentation">
      <mock:shadow-root>
        <button aria-describedby="trigger-controls" aria-expanded="false" aria-haspopup="true" class="gcds-nav-group__trigger gcds-trigger--expandable" role="menuitem">
          <gcds-icon name="angle-down"></gcds-icon>
          Nav group
        </button>
        <ul aria-label="Nav group" class="gcds-nav--expandable gcds-nav-group__list" role="menu">
          <slot></slot>
        </ul>
        <span aria-hidden="true" class="gcds-nav-group__trigger-desc" id="trigger-controls">
          . Open or close Nav group submenu.
        </span>
      </mock:shadow-root>
    </gcds-nav-group>
    `);
  });
  it('renders open', async () => {
    const page = await newSpecPage({
      components: [GcdsNavGroup],
      html: `<gcds-nav-group heading="Nav group" open></gcds-nav-group>`,
    });
    expect(page.root).toEqualHtml(`
    <gcds-nav-group class="gcds-nav-group-expanded" heading="Nav group" role="presentation" open>
      <mock:shadow-root>
        <button aria-describedby="trigger-controls" aria-expanded="true" aria-haspopup="true" class="gcds-nav-group__trigger gcds-trigger--expandable" role="menuitem">
          <gcds-icon name="angle-up"></gcds-icon>
          Nav group
        </button>
        <ul aria-label="Nav group" class="gcds-nav--expandable gcds-nav-group__list" role="menu">
          <slot></slot>
        </ul>
        <span aria-hidden="true" class="gcds-nav-group__trigger-desc" id="trigger-controls">
          . Open or close Nav group submenu.
        </span>
      </mock:shadow-root>
    </gcds-nav-group>
    `);
  });
});
