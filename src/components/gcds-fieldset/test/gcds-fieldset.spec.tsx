import { newSpecPage } from '@stencil/core/testing';
import { GcdsFieldset } from '../gcds-fieldset';

describe('gcds-fieldset', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsFieldset],
      html: `<gcds-fieldset></gcds-fieldset>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-fieldset>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gcds-fieldset>
    `);
  });
});
