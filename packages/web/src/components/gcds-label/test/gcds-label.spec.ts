import { newSpecPage } from '@stencil/core/testing';
import { GcdsLabel } from '../gcds-label';

describe('gcds-label', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [GcdsLabel],
      html: '<gcds-label label-for="input-renders" label="Label" />',
    });
    expect(root).toEqualHtml(`
      <gcds-label id="label-for-input-renders" label="Label" label-for="input-renders">
        <label class="gcds-label" htmlFor="input-renders">
          <span>Label</span>
        </label>
      </gcds-label>
    `);
  });

  /**
   * Hidden label tests
   */
  it('renders hidden label', async () => {
    const { root } = await newSpecPage({
      components: [GcdsLabel],
      html: '<gcds-label label-for="input-renders" label="Label" hide-label />',
    });
    expect(root).toEqualHtml(`
      <gcds-label id="label-for-input-renders" label="Label" label-for="input-renders" hide-label>
        <label class="gcds-label label--hidden" htmlFor="input-renders">
          <span>Label</span>
        </label>
      </gcds-label>
    `);
  });

  /**
   * Required tests
   */

  it('renders required label in EN', async () => {
    const { root } = await newSpecPage({
      components: [GcdsLabel],
      html: '<gcds-label label-for="input-renders" label="Label" required />',
    });
    expect(root).toEqualHtml(`
      <gcds-label id="label-for-input-renders" label="Label" label-for="input-renders" required="">
        <label class="gcds-label" htmlFor="input-renders">
          <span>Label</span>
          <span aria-hidden="true" class="label--required">(required)</span>
        </label>
      </gcds-label>
    `);
  });

  it('renders required label in FR', async () => {
    const { root } = await newSpecPage({
      components: [GcdsLabel],
      html: '<gcds-label label-for="input-renders" label="Label" lang="fr" required />',
    });
    expect(root).toEqualHtml(`
      <gcds-label id="label-for-input-renders" label="Label" label-for="input-renders" lang="fr" required="">
        <label class="gcds-label" htmlFor="input-renders">
          <span>Label</span>
          <span aria-hidden="true" class="label--required">(obligatoire)</span>
        </label>
      </gcds-label>
    `);
  });
});
