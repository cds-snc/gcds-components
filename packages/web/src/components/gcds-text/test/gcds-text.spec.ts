import { newSpecPage } from '@stencil/core/testing';
import { GcdsText } from '../gcds-text';

describe('gcds-text', () => {
  it('renders text', async () => {
    const { root } = await newSpecPage({
      components: [GcdsText],
      html: `
        <gcds-text>This is some text.</gcds-text>
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-text>
        <mock:shadow-root>
          <p class="gcds-text limit role-primary">
            <slot></slot>
          </p>
        </mock:shadow-root>
        This is some text.
      </gcds-text>
    `);
  });

  /**
    Text roles
   */
  it('renders primary text', async () => {
    const { root } = await newSpecPage({
      components: [GcdsText],
      html: `
        <gcds-text text-role="primary">This is some text.</gcds-text>
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-text text-role="primary">
        <mock:shadow-root>
          <p class="gcds-text limit role-primary">
            <slot></slot>
          </p>
        </mock:shadow-root>
        This is some text.
      </gcds-text>
    `);
  });

  it('renders secondary text', async () => {
    const { root } = await newSpecPage({
      components: [GcdsText],
      html: `
        <gcds-text text-role="secondary">This is some text.</gcds-text>
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-text text-role="secondary">
        <mock:shadow-root>
          <p class="gcds-text limit role-secondary">
            <slot></slot>
          </p>
        </mock:shadow-root>
        This is some text.
      </gcds-text>
    `);
  });

  it('renders light text', async () => {
    const { root } = await newSpecPage({
      components: [GcdsText],
      html: `
        <gcds-text text-role="light">This is some text.</gcds-text>
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-text text-role="light">
        <mock:shadow-root>
          <p class="gcds-text limit role-light">
            <slot></slot>
          </p>
        </mock:shadow-root>
        This is some text.
      </gcds-text>
    `);
  });

  /**
    Character limits
   */
  it('renders text with character limit by default', async () => {
    const { root } = await newSpecPage({
      components: [GcdsText],
      html: `
        <gcds-text>This is some text.</gcds-text>
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-text>
        <mock:shadow-root>
          <p class="gcds-text limit role-primary">
            <slot></slot>
          </p>
        </mock:shadow-root>
        This is some text.
      </gcds-text>
    `);
  });

  it('renders text without character limit', async () => {
    const { root } = await newSpecPage({
      components: [GcdsText],
      html: `
        <gcds-text character-limit="false">This is some text.</gcds-text>
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-text character-limit="false">
        <mock:shadow-root>
          <p class="gcds-text role-primary">
            <slot></slot>
          </p>
        </mock:shadow-root>
        This is some text.
      </gcds-text>
    `);
  });

  /**
    Display
   */
  it('renders text as block by default', async () => {
    const { root } = await newSpecPage({
      components: [GcdsText],
      html: `
        <gcds-text>This is some text.</gcds-text>
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-text>
        <mock:shadow-root>
          <p class="gcds-text limit role-primary">
            <slot></slot>
          </p>
        </mock:shadow-root>
        This is some text.
      </gcds-text>
    `);
  });

  it('renders text as flex', async () => {
    const { root } = await newSpecPage({
      components: [GcdsText],
      html: `
        <gcds-text display="flex">This is some text.</gcds-text>
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-text display="flex">
        <mock:shadow-root>
          <p class="gcds-text d-flex limit role-primary">
            <slot></slot>
          </p>
        </mock:shadow-root>
        This is some text.
      </gcds-text>
    `);
  });

  /**
    Spacing tests
   */
  it('renders margin-top', async () => {
    const { root } = await newSpecPage({
      components: [GcdsText],
      html: `
        <gcds-text margin-top="400">This is some text.</gcds-text>
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-text margin-top="400">
        <mock:shadow-root>
          <p class="gcds-text limit role-primary mt-400">
            <slot></slot>
          </p>
        </mock:shadow-root>
        This is some text.
      </gcds-text>
    `);
  });

  it('renders margin-bottom', async () => {
    const { root } = await newSpecPage({
      components: [GcdsText],
      html: `
        <gcds-text margin-bottom="400">This is some text.</gcds-text>
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-text margin-bottom="400">
        <mock:shadow-root>
          <p class="gcds-text limit role-primary mb-400">
            <slot></slot>
          </p>
        </mock:shadow-root>
        This is some text.
      </gcds-text>
    `);
  });

  /**
    Size
   */
  it('renders body text size by default', async () => {
    const { root } = await newSpecPage({
      components: [GcdsText],
      html: `
        <gcds-text>This is some text.</gcds-text>
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-text>
        <mock:shadow-root>
          <p class="gcds-text limit role-primary">
            <slot></slot>
          </p>
        </mock:shadow-root>
        This is some text.
      </gcds-text>
    `);
  });

  it('renders caption text size', async () => {
    const { root } = await newSpecPage({
      components: [GcdsText],
      html: `
        <gcds-text size="caption">This is some text.</gcds-text>
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-text size="caption">
        <mock:shadow-root>
          <p class="gcds-text limit role-primary">
            <small><slot></slot></small>
          </p>
        </mock:shadow-root>
        This is some text.
      </gcds-text>
    `);
  });

  /**
    Text style
   */
  it('renders text style italic', async () => {
    const { root } = await newSpecPage({
      components: [GcdsText],
      html: `
        <gcds-text text-style="italic">This is some text.</gcds-text>
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-text text-style="italic">
        <mock:shadow-root>
          <p class="gcds-text limit role-primary italic">
            <slot></slot>
          </p>
        </mock:shadow-root>
        This is some text.
      </gcds-text>
    `);
  });

  /**
    Weight
   */
  it('renders text weight bold', async () => {
    const { root } = await newSpecPage({
      components: [GcdsText],
      html: `
        <gcds-text weight="bold">This is some text.</gcds-text>
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-text weight="bold">
        <mock:shadow-root>
          <p class="gcds-text limit role-primary">
            <strong><slot></slot></strong>
          </p>
        </mock:shadow-root>
        This is some text.
      </gcds-text>
    `);
  });
});
