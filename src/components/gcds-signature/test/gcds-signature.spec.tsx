import { newSpecPage } from '@stencil/core/testing';
import { GcdsSignature } from '../gcds-signature';

describe('gcds-signature', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsSignature],
      html: `<gcds-signature></gcds-signature>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-signature>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gcds-signature>
    `);
  });
});
