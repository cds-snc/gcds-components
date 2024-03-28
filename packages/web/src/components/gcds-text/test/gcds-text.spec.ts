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
          <p class="gcds-text limit role-primary mt-0 mb-400" part="text">
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
          <p class="gcds-text limit role-primary mt-0 mb-400" part="text">
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
          <p class="gcds-text limit role-secondary mt-0 mb-400" part="text">
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
          <p class="gcds-text limit role-light mt-0 mb-400" part="text">
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
          <p class="gcds-text limit role-primary mt-0 mb-400" part="text">
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
          <p class="gcds-text role-primary mt-0 mb-400" part="text">
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
          <p class="gcds-text limit role-primary mt-0 mb-400" part="text">
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
      <gcds-text class="d-flex" display="flex">
        <mock:shadow-root>
          <p class="gcds-text limit role-primary mt-0 mb-400" part="text">
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
          <p class="gcds-text limit role-primary mt-400 mb-400" part="text">
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
        <gcds-text margin-bottom="600">This is some text.</gcds-text>
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-text margin-bottom="600">
        <mock:shadow-root>
          <p class="gcds-text limit role-primary mt-0 mb-600" part="text">
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
          <p class="gcds-text limit role-primary mt-0 mb-400" part="text">
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
          <p class="gcds-text limit role-primary mt-0 mb-400" part="text">
            <small><slot></slot></small>
          </p>
        </mock:shadow-root>
        This is some text.
      </gcds-text>
    `);
  });
});
