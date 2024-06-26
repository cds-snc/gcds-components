import { newSpecPage } from '@stencil/core/testing';
import { GcdsStepper } from '../gcds-stepper';

describe('gcds-stepper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsStepper],
      html: `<gcds-stepper current-step="2" total-steps="6">Section title</gcds-stepper>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-stepper current-step="2" total-steps="6">
        <mock:shadow-root>
          <gcds-heading tag="h2" class="gcds-stepper" margin-top="0" margin-bottom="300">
            <span class="gcds-stepper__steps">
              Step 2 of 6
              <gcds-sr-only> : </gcds-sr-only>
            </span>
            <slot></slot
          </gcds-heading>
        </mock:shadow-root>
        Section title
      </gcds-stepper>
    `);
  });

  /**
   * Renders current + total steps
   */
  it('renders steps', async () => {
    const page = await newSpecPage({
      components: [GcdsStepper],
      html: `<gcds-stepper current-step="2" total-steps="6">Section title</gcds-stepper>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-stepper current-step="2" total-steps="6">
        <mock:shadow-root>
          <gcds-heading tag="h2" class="gcds-stepper" margin-top="0" margin-bottom="300">
            <span class="gcds-stepper__steps">
              Step 2 of 6
              <gcds-sr-only> : </gcds-sr-only>
            </span>
            <slot></slot
          </gcds-heading>
        </mock:shadow-root>
        Section title
      </gcds-stepper>
    `);
  });

  /**
   * Renders as a heading 1
   */
  it('renders steps', async () => {
    const page = await newSpecPage({
      components: [GcdsStepper],
      html: `<gcds-stepper current-step="2" total-steps="6">Section title</gcds-stepper>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-stepper current-step="2" total-steps="6">
        <mock:shadow-root>
          <gcds-heading tag="h2" class="gcds-stepper" margin-top="0" margin-bottom="300">
            <span class="gcds-stepper__steps">
              Step 2 of 6
              <gcds-sr-only> : </gcds-sr-only>
            </span>
            <slot></slot
          </gcds-heading>
        </mock:shadow-root>
        Section title
      </gcds-stepper>
    `);
  });

  /**
   * Renders as a heading 2
   */
  it('renders steps', async () => {
    const page = await newSpecPage({
      components: [GcdsStepper],
      html: `<gcds-stepper current-step="2" total-steps="6" tag="h2">Section title</gcds-stepper>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-stepper current-step="2" total-steps="6" tag="h2">
        <mock:shadow-root>
          <gcds-heading tag="h2" class="gcds-stepper" margin-top="0" margin-bottom="300">
            <span class="gcds-stepper__steps">
              Step 2 of 6
              <gcds-sr-only> : </gcds-sr-only>
            </span>
            <slot></slot
          </gcds-heading>
        </mock:shadow-root>
        Section title
      </gcds-stepper>
    `);
  });

  /**
   * Renders as a heading 3
   */
  it('renders steps', async () => {
    const page = await newSpecPage({
      components: [GcdsStepper],
      html: `<gcds-stepper current-step="2" total-steps="6" tag="h3">Section title</gcds-stepper>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-stepper current-step="2" total-steps="6" tag="h3">
        <mock:shadow-root>
          <gcds-heading tag="h3" class="gcds-stepper" margin-top="0" margin-bottom="300">
            <span class="gcds-stepper__steps">
              Step 2 of 6
              <gcds-sr-only> : </gcds-sr-only>
            </span>
            <slot></slot
          </gcds-heading>
        </mock:shadow-root>
        Section title
      </gcds-stepper>
    `);
  });

  /**
   * Renders stepper in french
   */
  it('renders stepper in french', async () => {
    const page = await newSpecPage({
      components: [GcdsStepper],
      html: `<gcds-stepper current-step="2" total-steps="6" lang="fr">Section title</gcds-stepper>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-stepper current-step="2" total-steps="6" lang="fr">
        <mock:shadow-root>
          <gcds-heading tag="h2" class="gcds-stepper" margin-top="0" margin-bottom="300">
            <span class="gcds-stepper__steps">
              Étape 2 sur 6
              <gcds-sr-only> : </gcds-sr-only>
            </span>
            <slot></slot
          </gcds-heading>
        </mock:shadow-root>
        Section title
      </gcds-stepper>
    `);
  });
});
