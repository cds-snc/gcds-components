import { newSpecPage } from '@stencil/core/testing';
import { GcdsDetails } from '../gcds-details';

describe('gcds-details', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsDetails],
      html: `<gcds-details details-title="Learn more about this topic"></gcds-details>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-details details-title="Learn more about this topic">
        <mock:shadow-root>
          <div class="gcds-details">
            <button id="details__summary" class="details__summary" aria-expanded="false" aria-controls="details__panel">
              Learn more about this topic
            </button>
            <div id="details__panel" class="details__panel" aria-labelledby="details__summary">
              <slot></slot>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-details>
    `);
  });

  it('displays the details panel open', async () => {
    const page = await newSpecPage({
      components: [GcdsDetails],
      html: `<gcds-details details-title="Learn more about this topic" open></gcds-details>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-details details-title="Learn more about this topic" open>
        <mock:shadow-root>
          <div class="gcds-details">
            <button id="details__summary" class="details__summary" aria-expanded="true" aria-controls="details__panel">
              Learn more about this topic
            </button>
            <div id="details__panel" class="details__panel" aria-labelledby="details__summary">
              <slot></slot>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-details>
    `);
  });
});
