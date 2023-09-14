import { newSpecPage } from '@stencil/core/testing';
import { GcdsHeading } from '../gcds-heading';

describe('gcds-heading', () => {
  it('renders heading level 1', async () => {
    const { root } = await newSpecPage({
      components: [GcdsHeading],
      html: `
        <gcds-heading tag="h1">Heading level 1</gcds-heading>
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-heading tag="h1">
        <h1 class="gcds-heading">
          Heading level 1
        </h1>
      </gcds-heading>
    `);
  });

  it('renders heading level 2', async () => {
    const { root } = await newSpecPage({
      components: [GcdsHeading],
      html: `
        <gcds-heading tag="h2">Heading level 2</gcds-heading>
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-heading tag="h2">
        <h2 class="gcds-heading">
          Heading level 2
        </h2>
      </gcds-heading>
    `);
  });

  it('renders heading level 3', async () => {
    const { root } = await newSpecPage({
      components: [GcdsHeading],
      html: `
        <gcds-heading tag="h3">Heading level 3</gcds-heading>
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-heading tag="h3">
        <h3 class="gcds-heading">
          Heading level 3
        </h3>
      </gcds-heading>
    `);
  });

  it('renders heading level 4', async () => {
    const { root } = await newSpecPage({
      components: [GcdsHeading],
      html: `
        <gcds-heading tag="h4">Heading level 4</gcds-heading>
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-heading tag="h4">
        <h4 class="gcds-heading">
          Heading level 4
        </h4>
      </gcds-heading>
    `);
  });

  it('renders heading level 5', async () => {
    const { root } = await newSpecPage({
      components: [GcdsHeading],
      html: `
        <gcds-heading tag="h5">Heading level 5</gcds-heading>
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-heading tag="h5">
        <h5 class="gcds-heading">
          Heading level 5
        </h5>
      </gcds-heading>
    `);
  });

  it('renders heading level 6', async () => {
    const { root } = await newSpecPage({
      components: [GcdsHeading],
      html: `
        <gcds-heading tag="h6">Heading level 6</gcds-heading>
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-heading tag="h6">
        <h6 class="gcds-heading">
          Heading level 6
        </h6>
      </gcds-heading>
    `);
  });

  /**
   * Spacing tests
   */
  it('renders margin top', async () => {
    const { root } = await newSpecPage({
      components: [GcdsHeading],
      html: `
        <gcds-heading tag="h2" margin-top="400">Margin top</gcds-heading>
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-heading tag="h2" margin-top="400">
        <h2 class="gcds-heading mt-400">
          Margin top
        </h2>
      </gcds-heading>
    `);
  });

  it('renders margin bottom', async () => {
    const { root } = await newSpecPage({
      components: [GcdsHeading],
      html: `
        <gcds-heading tag="h2" margin-bottom="400">Margin bottom</gcds-heading>
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-heading tag="h2" margin-bottom="400">
        <h2 class="gcds-heading mb-400">
          Margin bottom
        </h2>
      </gcds-heading>
    `);
  });
});
