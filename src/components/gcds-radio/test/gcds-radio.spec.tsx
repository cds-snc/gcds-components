import { newSpecPage } from '@stencil/core/testing';
import { GcdsRadio } from '../gcds-radio';

describe('gcds-radio', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsRadio],
      html: `<gcds-radio></gcds-radio>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-radio>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gcds-radio>
    `);
  });
});
