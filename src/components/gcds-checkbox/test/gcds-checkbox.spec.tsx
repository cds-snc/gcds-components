import { newSpecPage } from '@stencil/core/testing';
import { GcdsCheckbox } from '../gcds-checkbox';

describe('gcds-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsCheckbox],
      html: `<gcds-checkbox></gcds-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gcds-checkbox>
    `);
  });
});
