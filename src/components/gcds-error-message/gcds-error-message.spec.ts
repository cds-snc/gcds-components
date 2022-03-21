import { newSpecPage } from '@stencil/core/testing';
import { GcdsErrorMessage} from './gcds-error-message';

describe('gcds-error-message', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [GcdsErrorMessage],
      html: '<gcds-error-message message-id="input-renders" message="This field is required" />',
    });
    expect(root).toEqualHtml(`
      <gcds-error-message message-id="input-renders" message="This field is required" id="error-message-id-input-renders">
        <mock:shadow-root>
          <p class="error-message" role="alert">
            <strong>This field is required</strong>
          </p>
        </mock:shadow-root>
      </gcds-error-message>
    `);
  });
});
