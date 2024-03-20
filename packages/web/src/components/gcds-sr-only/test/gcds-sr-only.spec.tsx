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
          <p>
            <slot></slot>
          </p>
        </mock:shadow-root>
        Hidden text
      </gcds-sr-only>
    `);
  });

  it('renders p tag if invalid tag value', async () => {
    const page = await newSpecPage({
      components: [GcdsSrOnly],
      html: `<gcds-sr-only tag="aside">Hidden text</gcds-sr-only>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-sr-only tag="aside">
        <mock:shadow-root>
          <p>
            <slot></slot>
          </p>
        </mock:shadow-root>
        Hidden text
      </gcds-sr-only>
    `);
  });

  it('renders heading tag', async () => {
    const page = await newSpecPage({
      components: [GcdsSrOnly],
      html: `<gcds-sr-only tag="h2">Hidden text</gcds-sr-only>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-sr-only tag="h2">
        <mock:shadow-root>
          <h2>
            <slot></slot>
          </h2>
        </mock:shadow-root>
        Hidden text
      </gcds-sr-only>
    `);
  });
});
