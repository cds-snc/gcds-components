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
      html: `<gcds-button type="button">Button Label</gcds-button>`,
    });
    expect(root).toEqualHtml(`
      <gcds-button type="button">
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
      html: `<gcds-button type="reset">Button Label</gcds-button>`,
    });
    expect(root).toEqualHtml(`
      <gcds-button type="reset">
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
      html: `<gcds-button type="submit">Button Label</gcds-button>`,
    });
    expect(root).toEqualHtml(`
      <gcds-button type="submit">
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
      html: `<gcds-button type="link" href="#">Link Label</gcds-button>`,
    });
    expect(root).toEqualHtml(`
      <gcds-button href="#" type="link">
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

  it('renders task primary', async () => {
    const { root } = await newSpecPage({
      components: [GcdsButton],
      html: `<gcds-button task="primary">Button Label</gcds-button>`,
    });
    expect(root).toEqualHtml(`
      <gcds-button task="primary">
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

  it('renders task secondary', async () => {
    const { root } = await newSpecPage({
      components: [GcdsButton],
      html: `<gcds-button task="secondary">Button Label</gcds-button>`,
    });
    expect(root).toEqualHtml(`
      <gcds-button task="secondary">
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

  it('renders task danger', async () => {
    const { root } = await newSpecPage({
      components: [GcdsButton],
      html: `<gcds-button task="danger">Button Label</gcds-button>`,
    });
    expect(root).toEqualHtml(`
      <gcds-button task="danger">
        <mock:shadow-root>
          <button class="danger solid" type="button">
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

  it('renders variant solid', async () => {
    const { root } = await newSpecPage({
      components: [GcdsButton],
      html: `<gcds-button variant="solid">Button Label</gcds-button>`,
    });
    expect(root).toEqualHtml(`
      <gcds-button variant="solid">
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

  it('renders variant outline', async () => {
    const { root } = await newSpecPage({
      components: [GcdsButton],
      html: `<gcds-button variant="outline">Button Label</gcds-button>`,
    });
    expect(root).toEqualHtml(`
      <gcds-button variant="outline">
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

  it('renders variant text-only', async () => {
    const { root } = await newSpecPage({
      components: [GcdsButton],
      html: `<gcds-button variant="text-only">Button Label</gcds-button>`,
    });
    expect(root).toEqualHtml(`
      <gcds-button variant="text-only">
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
