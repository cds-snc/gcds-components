import { newSpecPage } from '@stencil/core/testing';
import { GcdsButton } from './gcds-button';

describe('gcds-button', () => {
  it('renders with no passed properties', async () => {
    const { root } = await newSpecPage({
      components: [GcdsButton],
      html: '<gcds-button>Button Label</gcds-button>',
    });
    expect(root).toEqualHtml(`
      <gcds-button>
        <mock:shadow-root>
          <button class="primary solid" type="button">
            <slot name="left"></slot>
            <slot></slot>
            <slot name="right"></slot>
          </button>
        </mock:shadow-root>
        Button Label
      </gcds-button>
    `);
  });

  /*
  * Type tests
  */

  it('renders type button', async () => {
    const { root } = await newSpecPage({
      components: [GcdsButton],
      html: `<gcds-button button-type="button">Button Label</gcds-button>`,
    });
    expect(root).toEqualHtml(`
      <gcds-button button-type="button">
        <mock:shadow-root>
          <button class="primary solid" type="button">
            <slot name="left"></slot>
            <slot></slot>
            <slot name="right"></slot>
          </button>
        </mock:shadow-root>
        Button Label
      </gcds-button>
    `);
  });

  it('renders type reset', async () => {
    const { root } = await newSpecPage({
      components: [GcdsButton],
      html: `<gcds-button button-type="reset">Button Label</gcds-button>`,
    });
    expect(root).toEqualHtml(`
      <gcds-button button-type="reset">
        <mock:shadow-root>
          <button class="primary solid" type="reset">
            <slot name="left"></slot>
            <slot></slot>
            <slot name="right"></slot>
          </button>
        </mock:shadow-root>
        Button Label
      </gcds-button>
    `);
  });

  it('renders type submit', async () => {
    const { root } = await newSpecPage({
      components: [GcdsButton],
      html: `<gcds-button button-type="submit">Button Label</gcds-button>`,
    });
    expect(root).toEqualHtml(`
      <gcds-button button-type="submit">
        <mock:shadow-root>
          <button class="primary solid" type="submit">
            <slot name="left"></slot>
            <slot></slot>
            <slot name="right"></slot>
          </button>
        </mock:shadow-root>
        Button Label
      </gcds-button>
    `);
  });

  it('renders type link', async () => {
    const { root } = await newSpecPage({
      components: [GcdsButton],
      html: `<gcds-button button-type="link" href="#">Link Label</gcds-button>`,
    });
    expect(root).toEqualHtml(`
      <gcds-button href="#" button-type="link">
        <mock:shadow-root>
          <a class="primary solid" href="#">
            <slot name="left"></slot>
            <slot></slot>
            <slot name="right"></slot>
          </a>
        </mock:shadow-root>
        Link Label
      </gcds-button>
    `);
  });

  /*
  * Task tests
  */

  it('renders button-role primary', async () => {
    const { root } = await newSpecPage({
      components: [GcdsButton],
      html: `<gcds-button button-role="primary">Button Label</gcds-button>`,
    });
    expect(root).toEqualHtml(`
      <gcds-button button-role="primary">
        <mock:shadow-root>
          <button class="primary solid" type="button">
            <slot name="left"></slot>
            <slot></slot>
            <slot name="right"></slot>
          </button>
        </mock:shadow-root>
        Button Label
      </gcds-button>
    `);
  });

  it('renders button-role secondary', async () => {
    const { root } = await newSpecPage({
      components: [GcdsButton],
      html: `<gcds-button button-role="secondary">Button Label</gcds-button>`,
    });
    expect(root).toEqualHtml(`
      <gcds-button button-role="secondary">
        <mock:shadow-root>
          <button class="secondary solid" type="button">
            <slot name="left"></slot>
            <slot></slot>
            <slot name="right"></slot>
          </button>
        </mock:shadow-root>
        Button Label
      </gcds-button>
    `);
  });

  it('renders button-role destructive', async () => {
    const { root } = await newSpecPage({
      components: [GcdsButton],
      html: `<gcds-button button-role="destructive">Button Label</gcds-button>`,
    });
    expect(root).toEqualHtml(`
      <gcds-button button-role="destructive">
        <mock:shadow-root>
          <button class="destructive solid" type="button">
            <slot name="left"></slot>
            <slot></slot>
            <slot name="right"></slot>
          </button>
        </mock:shadow-root>
        Button Label
      </gcds-button>
    `);
  });

  /*
  * Variant tests
  */

  it('renders button-style solid', async () => {
    const { root } = await newSpecPage({
      components: [GcdsButton],
      html: `<gcds-button button-style="solid">Button Label</gcds-button>`,
    });
    expect(root).toEqualHtml(`
      <gcds-button button-style="solid">
        <mock:shadow-root>
          <button class="primary solid" type="button">
            <slot name="left"></slot>
            <slot></slot>
            <slot name="right"></slot>
          </button>
        </mock:shadow-root>
        Button Label
      </gcds-button>
    `);
  });

  it('renders button-style outline', async () => {
    const { root } = await newSpecPage({
      components: [GcdsButton],
      html: `<gcds-button button-style="outline">Button Label</gcds-button>`,
    });
    expect(root).toEqualHtml(`
      <gcds-button button-style="outline">
        <mock:shadow-root>
          <button class="primary outline" type="button">
            <slot name="left"></slot>
            <slot></slot>
            <slot name="right"></slot>
          </button>
        </mock:shadow-root>
        Button Label
      </gcds-button>
    `);
  });

  it('renders button-style text-only', async () => {
    const { root } = await newSpecPage({
      components: [GcdsButton],
      html: `<gcds-button button-style="text-only">Button Label</gcds-button>`,
    });
    expect(root).toEqualHtml(`
      <gcds-button button-style="text-only">
        <mock:shadow-root>
          <button class="primary text-only" type="button">
            <slot name="left"></slot>
            <slot></slot>
            <slot name="right"></slot>
          </button>
        </mock:shadow-root>
        Button Label
      </gcds-button>
    `);
  });
});
