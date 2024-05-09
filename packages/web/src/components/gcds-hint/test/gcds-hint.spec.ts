import { newSpecPage } from '@stencil/core/testing';
import { GcdsHint } from '../gcds-hint';

describe('gcds-hint', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [GcdsHint],
      html: '<gcds-hint hint-id="input-renders">Hint Test</gcds-hint>',
    });
    expect(root).toEqualHtml(`
      <gcds-hint hint-id="input-renders" id="hint-input-renders">
        <mock:shadow-root>
          <gcds-text class="gcds-hint" margin-bottom="0" part="hint">
            <slot></slot>
          </gcds-text>
        </mock:shadow-root>
        Hint Test
      </gcds-hint>
    `);
  });
});
