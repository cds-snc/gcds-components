import { newSpecPage } from '@stencil/core/testing';
import { GcdsContainer} from '../gcds-container';

describe('gcds-grid', () => {
  it('renders container size full by default', async () => {
    const { root } = await newSpecPage({
      components: [GcdsContainer],
      html: `
        <gcds-container />
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-container>
        <mock:shadow-root>
          <div class="gcds-container container-full">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </gcds-container>
    `);
  });

  it('renders container size xl', async () => {
    const { root } = await newSpecPage({
      components: [GcdsContainer],
      html: `
        <gcds-container container="xl" />
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-container container="xl">
        <mock:shadow-root>
          <div class="gcds-container container-xl">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </gcds-container>
    `);
  });

  it('renders container size lg', async () => {
    const { root } = await newSpecPage({
      components: [GcdsContainer],
      html: `
        <gcds-container container="lg" />
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-container container="lg">
        <mock:shadow-root>
          <div class="gcds-container container-lg">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </gcds-container>
    `);
  });

  it('renders container size md', async () => {
    const { root } = await newSpecPage({
      components: [GcdsContainer],
      html: `
        <gcds-container container="md" />
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-container container="md">
        <mock:shadow-root>
          <div class="gcds-container container-md">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </gcds-container>
    `);
  });

  it('renders container size sm', async () => {
    const { root } = await newSpecPage({
      components: [GcdsContainer],
      html: `
        <gcds-container container="sm" />
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-container container="sm">
        <mock:shadow-root>
          <div class="gcds-container container-sm">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </gcds-container>
    `);
  });

  it('renders container size xs', async () => {
    const { root } = await newSpecPage({
      components: [GcdsContainer],
      html: `
        <gcds-container container="xs" />
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-container container="xs">
        <mock:shadow-root>
          <div class="gcds-container container-xs">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </gcds-container>
    `);
  });

  it('renders container centered', async () => {
    const { root } = await newSpecPage({
      components: [GcdsContainer],
      html: `
        <gcds-container container="lg" centered />
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-container container="lg" centered>
        <mock:shadow-root>
          <div class="gcds-container container-lg container-centered">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </gcds-container>
    `);
  });
});
