import { newSpecPage } from '@stencil/core/testing';
import { GcdsLink } from '../gcds-link';

describe('gcds-link', () => {
  it('renders with no passed properties', async () => {
    const { root } = await newSpecPage({
      components: [GcdsLink],
      html: '<gcds-link>Link text</gcds-link>',
    });
    expect(root).toEqualHtml(`
      <gcds-link>
        <mock:shadow-root>
          <a class="d-inline link--regular" part="link" href="#" role="link" tabindex="0">
            <slot name="left"></slot>
            <slot></slot>
            <slot name="right"></slot>
          </a>
        </mock:shadow-root>
        Link text
      </gcds-link>
    `);
  });

  /*
   * Variant tests
   */

  it('renders external link with label + icon', async () => {
    const { root } = await newSpecPage({
      components: [GcdsLink],
      html: `<gcds-link href="https://google.com" target="_blank">External Link</gcds-link>`,
    });
    expect(root).toEqualHtml(`
      <gcds-link href="https://google.com" target="_blank">
        <mock:shadow-root>
          <a class="d-inline link--regular" href="https://google.com" part="link" target="_blank" rel="noopener" role="link" tabindex="0">
            <slot name="left"></slot>
            <slot></slot>
            <gcds-icon name="external-link" label="Opens in a new tab." margin-left="200" />
          </a>
        </mock:shadow-root>
        External Link
      </gcds-link>
    `);
  });

  it('renders download attribute', async () => {
    const { root } = await newSpecPage({
      components: [GcdsLink],
      html: `<gcds-link href="https://google.com" download>Download file</gcds-link>`,
    });
    expect(root).toEqualHtml(`
      <gcds-link href="https://google.com" download>
        <mock:shadow-root>
          <a class="d-inline link--regular" href="https://google.com" part="link" download role="link" tabindex="0">
            <slot name="left"></slot>
            <slot></slot>
            <slot name="right"></slot>
          </a>
        </mock:shadow-root>
        Download file
      </gcds-link>
    `);
  });
});
