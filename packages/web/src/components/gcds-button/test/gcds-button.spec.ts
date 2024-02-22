import { newSpecPage } from '@stencil/core/testing';
import { GcdsButton } from '../gcds-button';

describe('gcds-button', () => {
  it('renders with no passed properties', async () => {
    const { root } = await newSpecPage({
      components: [GcdsButton],
      html: '<gcds-button>Button Label</gcds-button>',
    });
    expect(root).toEqualHtml(`
      <gcds-button>
        <mock:shadow-root>
          <button class="gcds-button button--regular button--role-primary" part="button" type="button">
            <slot></slot>
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
          <button class="gcds-button button--role-primary button--regular" part="button" type="button">
            <slot></slot>
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
          <button class="gcds-button button--role-primary button--regular" part="button" type="reset">
            <slot></slot>
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
          <button class="gcds-button button--role-primary button--regular" part="button" type="submit">
            <slot></slot>
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
          <a class="gcds-button button--role-primary button--regular" part="button" href="#">
            <slot></slot>
          </a>
        </mock:shadow-root>
        Link Label
      </gcds-button>
    `);
  });

  /*
   * Task tests
   */

  it('renders button-role primary', async () => {
    const { root } = await newSpecPage({
      components: [GcdsButton],
      html: `<gcds-button button-role="primary">Button Label</gcds-button>`,
    });
    expect(root).toEqualHtml(`
      <gcds-button button-role="primary">
        <mock:shadow-root>
          <button class="gcds-button button--role-primary button--regular" part="button" type="button">
            <slot></slot>
          </button>
        </mock:shadow-root>
        Button Label
      </gcds-button>
    `);
  });

  it('renders button-role secondary', async () => {
    const { root } = await newSpecPage({
      components: [GcdsButton],
      html: `<gcds-button button-role="secondary">Button Label</gcds-button>`,
    });
    expect(root).toEqualHtml(`
      <gcds-button button-role="secondary">
        <mock:shadow-root>
          <button class="gcds-button button--role-secondary button--regular" part="button" type="button">
            <slot></slot>
          </button>
        </mock:shadow-root>
        Button Label
      </gcds-button>
    `);
  });

  it('renders button-role danger', async () => {
    const { root } = await newSpecPage({
      components: [GcdsButton],
      html: `<gcds-button button-role="danger">Button Label</gcds-button>`,
    });
    expect(root).toEqualHtml(`
      <gcds-button button-role="danger">
        <mock:shadow-root>
          <button class="gcds-button button--role-danger button--regular" part="button" type="button">
            <slot></slot>
          </button>
        </mock:shadow-root>
        Button Label
      </gcds-button>
    `);
  });

  /*
   * Variant tests
   */

  it('renders external link with label + icon', async () => {
    const { root } = await newSpecPage({
      components: [GcdsButton],
      html: `<gcds-button type="link" button-style="text-only" href="https://google.com" target="_blank">Button Label</gcds-button>`,
    });
    expect(root).toEqualHtml(`
      <gcds-button type="link" button-style="text-only" href="https://google.com" target="_blank">
        <mock:shadow-root>
          <a class="gcds-button button--role-primary button--regular" href="https://google.com" part="button" target="_blank">
            <slot></slot>
            <gcds-icon name="external-link" label="Opens in a new tab." margin-left="200" />
          </a>
        </mock:shadow-root>
        Button Label
      </gcds-button>
    `);
  });
});
