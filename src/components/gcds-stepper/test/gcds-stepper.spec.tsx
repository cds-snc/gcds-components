import { newSpecPage } from '@stencil/core/testing';
import { GcdsStepper } from '../gcds-stepper';

describe('gcds-stepper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsStepper],
      html: `<gcds-stepper current-step="2" total-steps="6"></gcds-stepper>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-stepper current-step="2" total-steps="6">
        <mock:shadow-root>
          <h6 class="gcds-stepper">Step 2 of 6</h6>
        </mock:shadow-root>
      </gcds-stepper>
    `);
  });

  /**
    * Renders current + total steps
    */
  it('renders steps', async () => {
    const page = await newSpecPage({
      components: [GcdsStepper],
      html: `<gcds-stepper current-step="2" total-steps="6"></gcds-stepper>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-stepper current-step="2" total-steps="6">
        <mock:shadow-root>
          <h6 class="gcds-stepper">Step 2 of 6</h6>
        </mock:shadow-root>
      </gcds-stepper>
    `);
  });

  /**
    * Renders stepper in french
    */
  it('renders stepper in french', async () => {
    const page = await newSpecPage({
      components: [GcdsStepper],
      html: `<gcds-stepper current-step="2" total-steps="6" lang="fr"></gcds-stepper>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-stepper current-step="2" total-steps="6" lang="fr">
        <mock:shadow-root>
          <h6 class="gcds-stepper">Étape 2 sur 6</h6>
        </mock:shadow-root>
      </gcds-stepper>
    `);
  });
});
