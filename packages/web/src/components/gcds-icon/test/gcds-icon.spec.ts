import { newSpecPage } from '@stencil/core/testing';
import { GcdsIcon} from '../gcds-icon';

describe('gcds-icon', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [GcdsIcon],
      html: '<gcds-icon name="angle-down" />',
    });
    expect(root).toEqualHtml(`
      <gcds-icon name="angle-down">
        <mock:shadow-root>
          <span aria-hidden="true" role="img" class="gcds-icon fa fa-regular fa-angle-down size-inherit"></span>
        </mock:shadow-root>
      </gcds-icon>
    `);
  });

  it('renders margin left', async () => {
    const { root } = await newSpecPage({
      components: [GcdsIcon],
      html: '<gcds-icon name="angle-down" margin-left="spacing-100" />',
    });
    expect(root).toEqualHtml(`
      <gcds-icon name="angle-down" margin-left="spacing-100">
        <mock:shadow-root>
          <span aria-hidden="true" role="img" class="gcds-icon fa fa-regular fa-angle-down size-inherit ml-spacing-100"></span>
        </mock:shadow-root>
      </gcds-icon>
    `);
  });

  it('renders margin right', async () => {
    const { root } = await newSpecPage({
      components: [GcdsIcon],
      html: '<gcds-icon name="angle-down" margin-right="spacing-100" />',
    });
    expect(root).toEqualHtml(`
      <gcds-icon name="angle-down" margin-right="spacing-100">
        <mock:shadow-root>
          <span aria-hidden="true" role="img" class="gcds-icon fa fa-regular fa-angle-down size-inherit mr-spacing-100"></span>
        </mock:shadow-root>
      </gcds-icon>
    `);
  });

  it('renders size', async () => {
    const { root } = await newSpecPage({
      components: [GcdsIcon],
      html: '<gcds-icon name="angle-down" size="md" />',
    });
    expect(root).toEqualHtml(`
      <gcds-icon name="angle-down" size="md">
        <mock:shadow-root>
          <span aria-hidden="true" role="img" class="gcds-icon fa fa-regular fa-angle-down size-md"></span>
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
          <span aria-hidden="true" role="img" class="gcds-icon fa fa-regular fa-angle-down size-inherit"></span>
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
          <span aria-hidden="false" aria-label="This is a description" role="img" class="gcds-icon fa fa-regular fa-angle-down size-inherit"></span>
        </mock:shadow-root>
      </gcds-icon>
    `);
  });
});
