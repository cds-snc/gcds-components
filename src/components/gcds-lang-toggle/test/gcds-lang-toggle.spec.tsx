import { newSpecPage } from '@stencil/core/testing';
import { GcdsLangToggle } from '../gcds-lang-toggle';

describe('gcds-lang-toggle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsLangToggle],
      html: `<gcds-lang-toggle></gcds-lang-toggle>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-lang-toggle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gcds-lang-toggle>
    `);
  });
});
