import { newSpecPage } from '@stencil/core/testing';
import { GcdsLabel} from './gcds-label';

describe('gcds-label', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [GcdsLabel],
      html: '<gcds-label label-for="id-input-renders" label="Label" />',
    });
    expect(root).toEqualHtml(`
      <gcds-label id="label-for-id-input-renders" label="Label" label-for="id-input-renders">
        <label htmlFor="id-input-renders">
          <span>Label</span>
        </label>
      </gcds-label>
    `);
  });
});
