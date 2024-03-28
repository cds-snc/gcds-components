import { newSpecPage } from '@stencil/core/testing';
import { GcdsErrorMessage } from '../gcds-error-message';

describe('gcds-error-message', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [GcdsErrorMessage],
      html: '<gcds-error-message message-id="input-renders" message="This field is required" />',
    });
    expect(root).toEqualHtml(`
      <gcds-error-message message-id="input-renders" message="This field is required" id="error-message-input-renders" class="gcds-error-message-wrapper">
        <mock:shadow-root>
          <gcds-text class="error-message" role="alert" margin-bottom="0">
            This field is required
          </gcds-text>
        </mock:shadow-root>
      </gcds-error-message>
    `);
  });
});
