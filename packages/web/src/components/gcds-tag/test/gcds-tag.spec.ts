import { newSpecPage } from '@stencil/core/testing';
import { GcdsTag } from '../gcds-tag';

const COLORS = ['blue', 'gray', 'green', 'purple', 'red', 'yellow'];
const SIZES = ['regular', 'small'];

describe('gcds-tag', () => {
  it('renders with default color and size', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTag],
      html: `<gcds-tag>Tag text</gcds-tag>`,
    });
    expect(root).toEqualHtml(`
      <gcds-tag>
        <mock:shadow-root>
          <span class="gcds-tag color-gray size-regular">
            <span class="gcds-tag-text">
              <slot></slot>
            </span>
          </span>
        </mock:shadow-root>
        Tag text
      </gcds-tag>
    `);
  });

  /**
   * Colors
   */
  it.each(COLORS)('renders %s tag', async color => {
    const { root } = await newSpecPage({
      components: [GcdsTag],
      html: `<gcds-tag color="${color}">Tag text</gcds-tag>`,
    });
    expect(root).toEqualHtml(`
      <gcds-tag color="${color}">
        <mock:shadow-root>
          <span class="gcds-tag color-${color} size-regular">
            <span class="gcds-tag-text">
              <slot></slot>
            </span>
          </span>
        </mock:shadow-root>
        Tag text
      </gcds-tag>
    `);
  });

  it('falls back to gray for an invalid color', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTag],
      html: `<gcds-tag color="orange">Tag text</gcds-tag>`,
    });
    expect(root.shadowRoot.querySelector('.gcds-tag')).toHaveClass(
      'color-gray',
    );
  });

  /**
   * Sizes
   */
  it.each(SIZES)('renders %s tag', async size => {
    const { root } = await newSpecPage({
      components: [GcdsTag],
      html: `<gcds-tag size="${size}">Tag text</gcds-tag>`,
    });
    expect(root).toEqualHtml(`
      <gcds-tag size="${size}">
        <mock:shadow-root>
          <span class="gcds-tag color-gray size-${size}">
            <span class="gcds-tag-text">
              <slot></slot>
            </span>
          </span>
        </mock:shadow-root>
        Tag text
      </gcds-tag>
    `);
  });

  it('falls back to regular for an invalid size', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTag],
      html: `<gcds-tag size="medium">Tag text</gcds-tag>`,
    });
    expect(root.shadowRoot.querySelector('.gcds-tag')).toHaveClass(
      'size-regular',
    );
  });

  it('updates classes when props change', async () => {
    const page = await newSpecPage({
      components: [GcdsTag],
      html: `<gcds-tag>Tag text</gcds-tag>`,
    });
    page.root.color = 'purple';
    page.root.size = 'small';
    await page.waitForChanges();

    const tag = page.root.shadowRoot.querySelector('.gcds-tag');
    expect(tag).toHaveClass('color-purple');
    expect(tag).toHaveClass('size-small');
  });
});
