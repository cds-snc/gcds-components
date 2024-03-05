import { newSpecPage } from '@stencil/core/testing';
import { GcdsSrOnly } from '../gcds-sr-only';

describe('gcds-sr-only', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsSrOnly],
      html: `<gcds-sr-only>Hidden text</gcds-sr-only>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-sr-only>
        <mock:shadow-root>
          <p><slot></slot></p>
        </mock:shadow-root>
        Hidden text
      </gcds-sr-only>
    `);
  });
});
