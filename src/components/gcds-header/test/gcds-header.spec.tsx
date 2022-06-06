import { newSpecPage } from '@stencil/core/testing';
import { GcdsHeader } from '../gcds-header';

describe('gcds-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsHeader],
      html: `<gcds-header></gcds-header>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gcds-header>
    `);
  });
});
