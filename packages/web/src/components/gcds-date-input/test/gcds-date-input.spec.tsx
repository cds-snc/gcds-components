import { newSpecPage } from '@stencil/core/testing';
import { GcdsDateInput } from '../gcds-date-input';

describe('gcds-date-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsDateInput],
      html: `<gcds-date-input></gcds-date-input>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-date-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gcds-date-input>
    `);
  });
});
