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
          <div class="gcds-container size-full">
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
        <gcds-container size="xl" />
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-container size="xl">
        <mock:shadow-root>
          <div class="gcds-container size-xl">
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
        <gcds-container size="lg" />
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-container size="lg">
        <mock:shadow-root>
          <div class="gcds-container size-lg">
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
        <gcds-container size="md" />
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-container size="md">
        <mock:shadow-root>
          <div class="gcds-container size-md">
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
        <gcds-container size="sm" />
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-container size="sm">
        <mock:shadow-root>
          <div class="gcds-container size-sm">
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
        <gcds-container size="xs" />
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-container size="xs">
        <mock:shadow-root>
          <div class="gcds-container size-xs">
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
        <gcds-container size="lg" centered />
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-container size="lg" centered>
        <mock:shadow-root>
          <div class="gcds-container size-lg container-centered">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </gcds-container>
    `);
  });
});
