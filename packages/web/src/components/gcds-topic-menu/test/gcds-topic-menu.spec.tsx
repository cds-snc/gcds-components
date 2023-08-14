import { newSpecPage } from '@stencil/core/testing';
import { GcdsTopicMenu } from '../gcds-topic-menu';

describe('gcds-topic-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsTopicMenu],
      html: `<gcds-topic-menu></gcds-topic-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-topic-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gcds-topic-menu>
    `);
  });
});
