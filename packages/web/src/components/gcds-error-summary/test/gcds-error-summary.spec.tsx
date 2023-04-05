import { newSpecPage } from '@stencil/core/testing';
import { GcdsErrorSummary } from '../gcds-error-summary';

describe('gcds-error-summary', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsErrorSummary],
      html: `<gcds-error-summary></gcds-error-summary>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-error-summary>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gcds-error-summary>
    `);
  });
});
