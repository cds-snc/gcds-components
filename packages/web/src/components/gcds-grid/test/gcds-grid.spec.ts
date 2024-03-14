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
          <ul class="display-grid gcds-grid" style="--gcds-grid-columns: 1fr; --gcds-grid-columns-tablet: 1fr 1fr; --gcds-grid-columns-desktop: 1fr 1fr 1fr 1fr;">
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
          <ul class="display-grid gcds-grid" style="--gcds-grid-columns: 1fr; --gcds-grid-columns-tablet: 1fr 1fr;">
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
          <ul class="display-grid gcds-grid" style="--gcds-grid-columns: 1fr;">
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
          <div class="display-grid gcds-grid" style="--gcds-grid-columns: 1fr;">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </gcds-grid>
    `);
  });
});
