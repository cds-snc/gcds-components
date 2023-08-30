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
          <button class="details__summary" aria-expanded="false">
            Learn more about this topic
          </button>
          <div class="details__panel">
            <slot></slot>
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
          <button class="details__summary" aria-expanded="true">
            Learn more about this topic
          </button>
          <div class="details__panel">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </gcds-details>
    `);
  });
});
