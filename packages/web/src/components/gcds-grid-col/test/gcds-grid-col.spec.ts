import { newSpecPage } from '@stencil/core/testing';
import { GcdsGridCol } from '../gcds-grid-col';

describe('gcds-grid-col', () => {
  it('renders - desktop, tablet and mobile', async () => {
    const { root } = await newSpecPage({
      components: [GcdsGridCol],
      html: `
        <gcds-grid-col tablet="3" desktop="6" tag="p">Example content.</gcds-grid-col>
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-grid-col tablet="3" desktop="6" tag="p" style="--gcds-grid-col-tablet: 3; --gcds-grid-col-desktop: 6;">
        <mock:shadow-root>

          <p class="gcds-grid-col">
            <slot></slot>
          </p>
        </mock:shadow-root>
        Example content.
      </gcds-grid-col>
    `);
  });

  it('renders - tablet and mobile', async () => {
    const { root } = await newSpecPage({
      components: [GcdsGridCol],
      html: `
        <gcds-grid-col tablet="3" tag="p">Example content.</gcds-grid-col>
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-grid-col tablet="3" tag="p" style="--gcds-grid-col-tablet: 3; --gcds-grid-col-desktop: 6;">
        <mock:shadow-root>

          <p class="gcds-grid-col">
            <slot></slot>
          </p>
        </mock:shadow-root>
        Example content.
      </gcds-grid-col>
    `);
  });

  it('renders - mobile', async () => {
    const { root } = await newSpecPage({
      components: [GcdsGridCol],
      html: `
        <gcds-grid-col tag="p">Example content.</gcds-grid-col>
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-grid-col tag="p" style="--gcds-grid-col-tablet: 6; --gcds-grid-col-desktop: 12;">
        <mock:shadow-root>

          <p class="gcds-grid-col">
            <slot></slot>
          </p>
        </mock:shadow-root>
        Example content.
      </gcds-grid-col>
    `);
  });
});
