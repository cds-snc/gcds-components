import { newSpecPage } from '@stencil/core/testing';
import { GcdsHint } from '../gcds-hint';

describe('gcds-hint', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [GcdsHint],
      html: '<gcds-hint hint-id="input-renders" hint="Hint Test" />',
    });
    expect(root).toEqualHtml(`
      <gcds-hint hint-id="input-renders" hint="Hint Test" id="hint-input-renders">
        <mock:shadow-root>
          <gcds-text class="gcds-hint" margin-bottom="200">Hint Test</gcds-text>
        </mock:shadow-root>
      </gcds-hint>
    `);
  });
});
