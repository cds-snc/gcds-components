import { newSpecPage } from '@stencil/core/testing';
import { GcdsIcon } from '../gcds-icon';

describe('gcds-icon', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [GcdsIcon],
      html: '<gcds-icon name="close" />',
    });
    expect(root).toEqualHtml(`
      <gcds-icon name="close">
        <mock:shadow-root>
          <span aria-hidden="true" role="img" class="gcds-icon gcds-icon-close size-inherit"></span>
        </mock:shadow-root>
      </gcds-icon>
    `);
  });

  it('renders margin left', async () => {
    const { root } = await newSpecPage({
      components: [GcdsIcon],
      html: '<gcds-icon name="close" margin-left="100" />',
    });
    expect(root).toEqualHtml(`
      <gcds-icon name="close" margin-left="100">
        <mock:shadow-root>
          <span aria-hidden="true" role="img" class="gcds-icon gcds-icon-close size-inherit ml-100"></span>
        </mock:shadow-root>
      </gcds-icon>
    `);
  });

  it('renders margin right', async () => {
    const { root } = await newSpecPage({
      components: [GcdsIcon],
      html: '<gcds-icon name="close" margin-right="100" />',
    });
    expect(root).toEqualHtml(`
      <gcds-icon name="close" margin-right="100">
        <mock:shadow-root>
          <span aria-hidden="true" role="img" class="gcds-icon gcds-icon-close size-inherit mr-100"></span>
        </mock:shadow-root>
      </gcds-icon>
    `);
  });

  it('renders size', async () => {
    const { root } = await newSpecPage({
      components: [GcdsIcon],
      html: '<gcds-icon name="close" size="h3" />',
    });
    expect(root).toEqualHtml(`
      <gcds-icon name="close" size="h3">
        <mock:shadow-root>
          <span aria-hidden="true" role="img" class="gcds-icon gcds-icon-close size-h3"></span>
        </mock:shadow-root>
      </gcds-icon>
    `);
  });

  it('renders hidden for screen readers', async () => {
    const { root } = await newSpecPage({
      components: [GcdsIcon],
      html: '<gcds-icon name="close" />',
    });
    expect(root).toEqualHtml(`
      <gcds-icon name="close">
        <mock:shadow-root>
          <span aria-hidden="true" role="img" class="gcds-icon gcds-icon-close size-inherit"></span>
        </mock:shadow-root>
      </gcds-icon>
    `);
  });

  it('renders with label', async () => {
    const { root } = await newSpecPage({
      components: [GcdsIcon],
      html: '<gcds-icon name="close" label="This is a description" />',
    });
    expect(root).toEqualHtml(`
      <gcds-icon name="close" label="This is a description">
        <mock:shadow-root>
          <span aria-hidden="false" aria-label="This is a description" role="img" class="gcds-icon gcds-icon-close size-inherit"></span>
        </mock:shadow-root>
      </gcds-icon>
    `);
  });
});
