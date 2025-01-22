import { newSpecPage } from '@stencil/core/testing';
import { GcdsGrid } from '../gcds-grid';

describe('gcds-grid', () => {
  it('renders - desktop, tablet and mobile', async () => {
    const { root } = await newSpecPage({
      components: [GcdsGrid],
      html: `
        <gcds-grid columns-desktop="1fr 1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr" tag="ul" />
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-grid columns-desktop="1fr 1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr" tag="ul">
        <mock:shadow-root>
          <ul class="display-grid gcds-grid" style="--gcds-grid-columns: 1fr; --gcds-grid-columns-tablet: 1fr 1fr; --gcds-grid-columns-desktop: 1fr 1fr 1fr 1fr; --gcds-grid-gap: var(--gcds-grid-gap-300);">
            <slot></slot>
          </ul>
        </mock:shadow-root>
      </gcds-grid>
    `);
  });

  it('renders - tablet and mobile', async () => {
    const { root } = await newSpecPage({
      components: [GcdsGrid],
      html: `
        <gcds-grid columns-tablet="1fr 1fr" columns="1fr" tag="ul" />
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-grid columns-tablet="1fr 1fr" columns="1fr" tag="ul">
        <mock:shadow-root>
          <ul class="display-grid gcds-grid" style="--gcds-grid-columns: 1fr; --gcds-grid-columns-tablet: 1fr 1fr; --gcds-grid-gap: var(--gcds-grid-gap-300);">
            <slot></slot>
          </ul>
        </mock:shadow-root>
      </gcds-grid>
    `);
  });

  it('renders - mobile', async () => {
    const { root } = await newSpecPage({
      components: [GcdsGrid],
      html: `
        <gcds-grid columns="1fr" tag="ul" />
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-grid columns="1fr" tag="ul">
        <mock:shadow-root>
          <ul class="display-grid gcds-grid" style="--gcds-grid-columns: 1fr; --gcds-grid-gap: var(--gcds-grid-gap-300);">
            <slot></slot>
          </ul>
        </mock:shadow-root>
      </gcds-grid>
    `);
  });

  it('renders - div when passed an invalid tag value', async () => {
    const { root } = await newSpecPage({
      components: [GcdsGrid],
      html: `
        <gcds-grid columns="1fr" tag="p" />
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-grid columns="1fr" tag="p">
        <mock:shadow-root>
          <div class="display-grid gcds-grid" style="--gcds-grid-columns: 1fr; --gcds-grid-gap: var(--gcds-grid-gap-300);">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </gcds-grid>
    `);
  });

  // Gap tests
  it('renders - with correct default gap value', async () => {
    const { root } = await newSpecPage({
      components: [GcdsGrid],
      html: `
        <gcds-grid columns="1fr" tag="ul" />
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-grid columns="1fr" tag="ul">
        <mock:shadow-root>
          <ul class="display-grid gcds-grid" style="--gcds-grid-columns: 1fr; --gcds-grid-gap: var(--gcds-grid-gap-300);">
            <slot></slot>
          </ul>
        </mock:shadow-root>
      </gcds-grid>
    `);
  });

  it('renders - with valid gap value', async () => {
    const { root } = await newSpecPage({
      components: [GcdsGrid],
      html: `
        <gcds-grid columns="1fr" tag="ul" gap="500" />
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-grid columns="1fr" tag="ul" gap="500">
        <mock:shadow-root>
          <ul class="display-grid gcds-grid" style="--gcds-grid-columns: 1fr; --gcds-grid-gap: var(--gcds-grid-gap-500);">
            <slot></slot>
          </ul>
        </mock:shadow-root>
      </gcds-grid>
    `);
  });

  it('renders - default gap value when passed an invalid value', async () => {
    const { root } = await newSpecPage({
      components: [GcdsGrid],
      html: `
        <gcds-grid columns="1fr" tag="ul" gap="222" />
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-grid columns="1fr" tag="ul" gap="222">
        <mock:shadow-root>
          <ul class="display-grid gcds-grid" style="--gcds-grid-columns: 1fr; --gcds-grid-gap: var(--gcds-grid-gap-300);">
            <slot></slot>
          </ul>
        </mock:shadow-root>
      </gcds-grid>
    `);
  });

  it('renders - with valid gap tablet value', async () => {
    const { root } = await newSpecPage({
      components: [GcdsGrid],
      html: `
        <gcds-grid columns="1fr" tag="ul" gap-tablet="500" />
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-grid columns="1fr" tag="ul" gap-tablet="500">
        <mock:shadow-root>
          <ul class="display-grid gcds-grid" style="--gcds-grid-columns: 1fr; --gcds-grid-gap: var(--gcds-grid-gap-300); --gcds-grid-gap-tablet: var(--gcds-grid-gap-500);">
            <slot></slot>
          </ul>
        </mock:shadow-root>
      </gcds-grid>
    `);
  });

  it('does not render gap tablet when passed invalid value', async () => {
    const { root } = await newSpecPage({
      components: [GcdsGrid],
      html: `
        <gcds-grid columns="1fr" tag="ul" gap-tablet="222" />
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-grid columns="1fr" tag="ul" gap-tablet="222">
        <mock:shadow-root>
          <ul class="display-grid gcds-grid" style="--gcds-grid-columns: 1fr; --gcds-grid-gap: var(--gcds-grid-gap-300);">
            <slot></slot>
          </ul>
        </mock:shadow-root>
      </gcds-grid>
    `);
  });

  it('renders - with valid gap desktop value', async () => {
    const { root } = await newSpecPage({
      components: [GcdsGrid],
      html: `
        <gcds-grid columns="1fr" tag="ul" gap-desktop="500" />
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-grid columns="1fr" tag="ul" gap-desktop="500">
        <mock:shadow-root>
          <ul class="display-grid gcds-grid" style="--gcds-grid-columns: 1fr; --gcds-grid-gap: var(--gcds-grid-gap-300); --gcds-grid-gap-desktop: var(--gcds-grid-gap-500);">
            <slot></slot>
          </ul>
        </mock:shadow-root>
      </gcds-grid>
    `);
  });

  it('does not render gap desktop when passed invalid value', async () => {
    const { root } = await newSpecPage({
      components: [GcdsGrid],
      html: `
        <gcds-grid columns="1fr" tag="ul" gap-desktop="222" />
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-grid columns="1fr" tag="ul" gap-desktop="222">
        <mock:shadow-root>
          <ul class="display-grid gcds-grid" style="--gcds-grid-columns: 1fr; --gcds-grid-gap: var(--gcds-grid-gap-300);">
            <slot></slot>
          </ul>
        </mock:shadow-root>
      </gcds-grid>
    `);
  });
});
