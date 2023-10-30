import { newSpecPage } from '@stencil/core/testing';
import { GcdsIcon } from '../gcds-icon';

describe('gcds-icon', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [GcdsIcon],
      html: '<gcds-icon name="angle-down" />',
    });
    expect(root).toEqualHtml(`
      <gcds-icon name="angle-down">
        <mock:shadow-root>
          <span aria-hidden="true" role="img" class="gcds-icon fa fa-solid fa-angle-down size-text"></span>
        </mock:shadow-root>
      </gcds-icon>
    `);
  });

  it('renders margin left', async () => {
    const { root } = await newSpecPage({
      components: [GcdsIcon],
      html: '<gcds-icon name="angle-down" margin-left="100" />',
    });
    expect(root).toEqualHtml(`
      <gcds-icon name="angle-down" margin-left="100">
        <mock:shadow-root>
          <span aria-hidden="true" role="img" class="gcds-icon fa fa-solid fa-angle-down size-text ml-100"></span>
        </mock:shadow-root>
      </gcds-icon>
    `);
  });

  it('renders margin right', async () => {
    const { root } = await newSpecPage({
      components: [GcdsIcon],
      html: '<gcds-icon name="angle-down" margin-right="100" />',
    });
    expect(root).toEqualHtml(`
      <gcds-icon name="angle-down" margin-right="100">
        <mock:shadow-root>
          <span aria-hidden="true" role="img" class="gcds-icon fa fa-solid fa-angle-down size-text mr-100"></span>
        </mock:shadow-root>
      </gcds-icon>
    `);
  });

  it('renders size', async () => {
    const { root } = await newSpecPage({
      components: [GcdsIcon],
      html: '<gcds-icon name="angle-down" size="h3" />',
    });
    expect(root).toEqualHtml(`
      <gcds-icon name="angle-down" size="h3">
        <mock:shadow-root>
          <span aria-hidden="true" role="img" class="gcds-icon fa fa-solid fa-angle-down size-h3"></span>
        </mock:shadow-root>
      </gcds-icon>
    `);
  });

  it('renders hidden for screen readers', async () => {
    const { root } = await newSpecPage({
      components: [GcdsIcon],
      html: '<gcds-icon name="angle-down" />',
    });
    expect(root).toEqualHtml(`
      <gcds-icon name="angle-down">
        <mock:shadow-root>
          <span aria-hidden="true" role="img" class="gcds-icon fa fa-solid fa-angle-down size-text"></span>
        </mock:shadow-root>
      </gcds-icon>
    `);
  });

  it('renders with label', async () => {
    const { root } = await newSpecPage({
      components: [GcdsIcon],
      html: '<gcds-icon name="angle-down" label="This is a description" />',
    });
    expect(root).toEqualHtml(`
      <gcds-icon name="angle-down" label="This is a description">
        <mock:shadow-root>
          <span aria-hidden="false" aria-label="This is a description" role="img" class="gcds-icon fa fa-solid fa-angle-down size-text"></span>
        </mock:shadow-root>
      </gcds-icon>
    `);
  });

  it('renders icon style', async () => {
    const { root } = await newSpecPage({
      components: [GcdsIcon],
      html: '<gcds-icon name="angle-down" size="h3" icon-style="regular"/>',
    });
    expect(root).toEqualHtml(`
      <gcds-icon name="angle-down" size="h3" icon-style="regular">
        <mock:shadow-root>
          <span aria-hidden="true" role="img" class="gcds-icon fa fa-regular fa-angle-down size-h3"></span>
        </mock:shadow-root>
      </gcds-icon>
    `);
  });

  it('renders fixed width icons', async () => {
    const { root } = await newSpecPage({
      components: [GcdsIcon],
      html: '<gcds-icon name="angle-down" size="h3" fixed-width/>',
    });
    expect(root).toEqualHtml(`
      <gcds-icon name="angle-down" size="h3" fixed-width>
        <mock:shadow-root>
          <span aria-hidden="true" role="img" class="gcds-icon fa fa-solid fa-angle-down size-h3 fixed-width"></span>
        </mock:shadow-root>
      </gcds-icon>
    `);
  });
});
