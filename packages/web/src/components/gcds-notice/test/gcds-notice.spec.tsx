import { newSpecPage } from '@stencil/core/testing';
import { GcdsNotice } from '../gcds-notice';

describe('gcds-alert', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsNotice],
      html: `<gcds-notice notice-title="GC Design System notice" type="success">
        <gcds-text>Provide additonal information</gcds-text>
      </gcds-notice>`,
    });
    expect(page.root)
      .toEqualHtml(`<gcds-notice notice-title="GC Design System notice" type="success">
      <mock:shadow-root>
        <div class="gcds-notice notice--type-success">
          <gcds-container size="full">
            <div class="notice__content">
              <gcds-heading class="notice__heading" margintop="0" tag="h2">
                <strong class="notice__type">
                  Success
                </strong>
                <gcds-sr-only>
                  :
                </gcds-sr-only>
                GC Design System notice
              </gcds-heading>
              <slot></slot>
            </div>
          </gcds-container>
        </div>
      </mock:shadow-root>
      <gcds-text>
        Provide additonal information
      </gcds-text>
    </gcds-notice>
    `);
  });

  it('renders - success type', async () => {
    const page = await newSpecPage({
      components: [GcdsNotice],
      html: `<gcds-notice notice-title="GC Design System notice" type="success">
        <gcds-text>Provide additonal information</gcds-text>
      </gcds-notice>`,
    });
    expect(page.root)
      .toEqualHtml(`<gcds-notice notice-title="GC Design System notice" type="success">
      <mock:shadow-root>
        <div class="gcds-notice notice--type-success">
          <gcds-container size="full">
            <div class="notice__content">
              <gcds-heading class="notice__heading" margintop="0" tag="h2">
                <strong class="notice__type">
                  Success
                </strong>
                <gcds-sr-only>
                  :
                </gcds-sr-only>
                GC Design System notice
              </gcds-heading>
              <slot></slot>
            </div>
          </gcds-container>
        </div>
      </mock:shadow-root>
      <gcds-text>
        Provide additonal information
      </gcds-text>
    </gcds-notice>
    `);
  });

  it('renders - danger type', async () => {
    const page = await newSpecPage({
      components: [GcdsNotice],
      html: `<gcds-notice notice-title="GC Design System notice" type="danger">
        <gcds-text>Provide additonal information</gcds-text>
      </gcds-notice>`,
    });
    expect(page.root)
      .toEqualHtml(`<gcds-notice notice-title="GC Design System notice" type="danger">
      <mock:shadow-root>
        <div class="gcds-notice notice--type-danger">
          <gcds-container size="full">
            <div class="notice__content">
              <gcds-heading class="notice__heading" margintop="0" tag="h2">
                <strong class="notice__type">
                  Danger
                </strong>
                <gcds-sr-only>
                  :
                </gcds-sr-only>
                GC Design System notice
              </gcds-heading>
              <slot></slot>
            </div>
          </gcds-container>
        </div>
      </mock:shadow-root>
      <gcds-text>
        Provide additonal information
      </gcds-text>
    </gcds-notice>
    `);
  });

  it('renders - info type', async () => {
    const page = await newSpecPage({
      components: [GcdsNotice],
      html: `<gcds-notice notice-title="GC Design System notice" type="info">
        <gcds-text>Provide additonal information</gcds-text>
      </gcds-notice>`,
    });
    expect(page.root)
      .toEqualHtml(`<gcds-notice notice-title="GC Design System notice" type="info">
      <mock:shadow-root>
        <div class="gcds-notice notice--type-info">
          <gcds-container size="full">
            <div class="notice__content">
              <gcds-heading class="notice__heading" margintop="0" tag="h2">
                <strong class="notice__type">
                  Information
                </strong>
                <gcds-sr-only>
                  :
                </gcds-sr-only>
                GC Design System notice
              </gcds-heading>
              <slot></slot>
            </div>
          </gcds-container>
        </div>
      </mock:shadow-root>
      <gcds-text>
        Provide additonal information
      </gcds-text>
    </gcds-notice>
    `);
  });

  it('renders - warning type', async () => {
    const page = await newSpecPage({
      components: [GcdsNotice],
      html: `<gcds-notice notice-title="GC Design System notice" type="warning">
        <gcds-text>Provide additonal information</gcds-text>
      </gcds-notice>`,
    });
    expect(page.root)
      .toEqualHtml(`<gcds-notice notice-title="GC Design System notice" type="warning">
      <mock:shadow-root>
        <div class="gcds-notice notice--type-warning">
          <gcds-container size="full">
            <div class="notice__content">
              <gcds-heading class="notice__heading" margintop="0" tag="h2">
                <strong class="notice__type">
                  Warning
                </strong>
                <gcds-sr-only>
                  :
                </gcds-sr-only>
                GC Design System notice
              </gcds-heading>
              <slot></slot>
            </div>
          </gcds-container>
        </div>
      </mock:shadow-root>
      <gcds-text>
        Provide additonal information
      </gcds-text>
    </gcds-notice>
    `);
  });

  it('renders - success type - fr', async () => {
    const page = await newSpecPage({
      components: [GcdsNotice],
      html: `<gcds-notice notice-title="GC Design System notice" type="success" lang="fr">
        <gcds-text>Provide additonal information</gcds-text>
      </gcds-notice>`,
    });
    expect(page.root)
      .toEqualHtml(`<gcds-notice notice-title="GC Design System notice" type="success" lang="fr">
      <mock:shadow-root>
        <div class="gcds-notice notice--type-success">
          <gcds-container size="full">
            <div class="notice__content">
              <gcds-heading class="notice__heading" margintop="0" tag="h2">
                <strong class="notice__type">
                  Succès
                </strong>
                <gcds-sr-only>
                  :
                </gcds-sr-only>
                GC Design System notice
              </gcds-heading>
              <slot></slot>
            </div>
          </gcds-container>
        </div>
      </mock:shadow-root>
      <gcds-text>
        Provide additonal information
      </gcds-text>
    </gcds-notice>
    `);
  });

  it('renders - danger type - fr', async () => {
    const page = await newSpecPage({
      components: [GcdsNotice],
      html: `<gcds-notice notice-title="GC Design System notice" type="danger" lang="fr">
        <gcds-text>Provide additonal information</gcds-text>
      </gcds-notice>`,
    });
    expect(page.root)
      .toEqualHtml(`<gcds-notice notice-title="GC Design System notice" type="danger" lang="fr">
      <mock:shadow-root>
        <div class="gcds-notice notice--type-danger">
          <gcds-container size="full">
            <div class="notice__content">
              <gcds-heading class="notice__heading" margintop="0" tag="h2">
                <strong class="notice__type">
                  Danger
                </strong>
                <gcds-sr-only>
                  :
                </gcds-sr-only>
                GC Design System notice
              </gcds-heading>
              <slot></slot>
            </div>
          </gcds-container>
        </div>
      </mock:shadow-root>
      <gcds-text>
        Provide additonal information
      </gcds-text>
    </gcds-notice>
    `);
  });

  it('renders - info type - fr', async () => {
    const page = await newSpecPage({
      components: [GcdsNotice],
      html: `<gcds-notice notice-title="GC Design System notice" type="info" lang="fr">
        <gcds-text>Provide additonal information</gcds-text>
      </gcds-notice>`,
    });
    expect(page.root)
      .toEqualHtml(`<gcds-notice notice-title="GC Design System notice" type="info" lang="fr">
      <mock:shadow-root>
        <div class="gcds-notice notice--type-info">
          <gcds-container size="full">
            <div class="notice__content">
              <gcds-heading class="notice__heading" margintop="0" tag="h2">
                <strong class="notice__type">
                  Information
                </strong>
                <gcds-sr-only>
                  :
                </gcds-sr-only>
                GC Design System notice
              </gcds-heading>
              <slot></slot>
            </div>
          </gcds-container>
        </div>
      </mock:shadow-root>
      <gcds-text>
        Provide additonal information
      </gcds-text>
    </gcds-notice>
    `);
  });

  it('renders - warning type - fr', async () => {
    const page = await newSpecPage({
      components: [GcdsNotice],
      html: `<gcds-notice notice-title="GC Design System notice" type="warning" lang="fr">
        <gcds-text>Provide additonal information</gcds-text>
      </gcds-notice>`,
    });
    expect(page.root)
      .toEqualHtml(`<gcds-notice notice-title="GC Design System notice" type="warning" lang="fr">
      <mock:shadow-root>
        <div class="gcds-notice notice--type-warning">
          <gcds-container size="full">
            <div class="notice__content">
              <gcds-heading class="notice__heading" margintop="0" tag="h2">
                <strong class="notice__type">
                  Avertissement
                </strong>
                <gcds-sr-only>
                  :
                </gcds-sr-only>
                GC Design System notice
              </gcds-heading>
              <slot></slot>
            </div>
          </gcds-container>
        </div>
      </mock:shadow-root>
      <gcds-text>
        Provide additonal information
      </gcds-text>
    </gcds-notice>
    `);
  });

  it('does not render - no type', async () => {
    const page = await newSpecPage({
      components: [GcdsNotice],
      html: `<gcds-notice notice-title="GC Design System notice">
        <gcds-text>Provide additonal information</gcds-text>
      </gcds-notice>`,
    });
    expect(page.root)
      .toEqualHtml(`<gcds-notice notice-title="GC Design System notice">
      <mock:shadow-root>
      </mock:shadow-root>
      <gcds-text>
        Provide additonal information
      </gcds-text>
    </gcds-notice>
    `);
  });

  it('does not render - no notice title', async () => {
    const page = await newSpecPage({
      components: [GcdsNotice],
      html: `<gcds-notice type="danger">
        <gcds-text>Provide additonal information</gcds-text>
      </gcds-notice>`,
    });
    expect(page.root).toEqualHtml(`<gcds-notice type="danger">
      <mock:shadow-root>
      </mock:shadow-root>
      <gcds-text>
        Provide additonal information
      </gcds-text>
    </gcds-notice>
    `);
  });

  it('does not render - no passed message', async () => {
    const page = await newSpecPage({
      components: [GcdsNotice],
      html: `<gcds-notice notice-title="GC Design System notice" type="danger">
      </gcds-notice>`,
    });
    expect(page.root)
      .toEqualHtml(`<gcds-notice notice-title="GC Design System notice" type="danger">
      <mock:shadow-root>
      </mock:shadow-root>
    </gcds-notice>
    `);
  });
});
