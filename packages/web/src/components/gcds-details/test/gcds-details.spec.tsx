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
          <details class="gcds-details">
            <summary><p>Learn more about this topic</p></summary>
            <div class="details-panel">
              <slot></slot>
            </div>
          </details>
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
          <details class="gcds-details" open>
            <summary><p>Learn more about this topic</p></summary>
            <div class="details-panel">
              <slot></slot>
            </div>
          </details>
        </mock:shadow-root>
      </gcds-details>
    `);
  });
});
