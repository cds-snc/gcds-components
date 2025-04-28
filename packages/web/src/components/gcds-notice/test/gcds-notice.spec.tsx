import { newSpecPage } from '@stencil/core/testing';
import { GcdsNotice } from '../gcds-notice';

describe('gcds-notice', () => {
  it('renders - success type', async () => {
    const page = await newSpecPage({
      components: [GcdsNotice],
      html: `<gcds-notice notice-title-tag="h2" notice-title="GC Design System notice" type="success">
        <gcds-text>Provide additonal information</gcds-text>
      </gcds-notice>`,
    });
    expect(page.root)
      .toEqualHtml(`<gcds-notice notice-title-tag="h2" notice-title="GC Design System notice" type="success">
      <mock:shadow-root>
        <section class="gcds-notice notice--type-success">
          <gcds-icon class="notice__icon" name="checkmark-circle" size="h4"></gcds-icon>
          <div>
            <gcds-heading class="notice__heading" margin-top="0" margin-bottom="100" tag="h2">
              <gcds-sr-only tag="span">Success: </gcds-sr-only>
              GC Design System notice
            </gcds-heading>
            <slot></slot>
          </div>
        </section>
      </mock:shadow-root>
      <gcds-text>
        Provide additonal information
      </gcds-text>
    </gcds-notice>
    `);
  });

  it('renders - success type - french', async () => {
    const page = await newSpecPage({
      components: [GcdsNotice],
      html: `<gcds-notice notice-title-tag="h2" notice-title="GC Design System notice" type="success" lang="fr">
        <gcds-text>Provide additonal information</gcds-text>
      </gcds-notice>`,
    });
    expect(page.root)
      .toEqualHtml(`<gcds-notice notice-title-tag="h2" notice-title="GC Design System notice" type="success" lang="fr">
      <mock:shadow-root>
        <section class="gcds-notice notice--type-success">
          <gcds-icon class="notice__icon" name="checkmark-circle" size="h4"></gcds-icon>
          <div>
            <gcds-heading class="notice__heading" margin-top="0" margin-bottom="100" tag="h2">
              <gcds-sr-only tag="span">Succès : </gcds-sr-only>
              GC Design System notice
            </gcds-heading>
            <slot></slot>
          </div>
        </section>
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
      html: `<gcds-notice notice-title-tag="h2" notice-title="GC Design System notice" type="danger">
        <gcds-text>Provide additonal information</gcds-text>
      </gcds-notice>`,
    });
    expect(page.root)
      .toEqualHtml(`<gcds-notice notice-title-tag="h2" notice-title="GC Design System notice" type="danger">
      <mock:shadow-root>
        <section class="gcds-notice notice--type-danger">
          <gcds-icon class="notice__icon" name="exclamation-circle" size="h4"></gcds-icon>
          <div>
            <gcds-heading class="notice__heading" margin-top="0" margin-bottom="100" tag="h2">
              <gcds-sr-only tag="span">Danger: </gcds-sr-only>
              GC Design System notice
            </gcds-heading>
            <slot></slot>
          </div>
        </section>
      </mock:shadow-root>
      <gcds-text>
        Provide additonal information
      </gcds-text>
    </gcds-notice>
    `);
  });

  it('renders - danger type - french', async () => {
    const page = await newSpecPage({
      components: [GcdsNotice],
      html: `<gcds-notice notice-title-tag="h2" notice-title="GC Design System notice" type="danger" lang="fr">
        <gcds-text>Provide additonal information</gcds-text>
      </gcds-notice>`,
    });
    expect(page.root)
      .toEqualHtml(`<gcds-notice notice-title-tag="h2" notice-title="GC Design System notice" type="danger" lang="fr">
      <mock:shadow-root>
        <section class="gcds-notice notice--type-danger">
          <gcds-icon class="notice__icon" name="exclamation-circle" size="h4"></gcds-icon>
          <div>
            <gcds-heading class="notice__heading" margin-top="0" margin-bottom="100" tag="h2">
              <gcds-sr-only tag="span">Danger : </gcds-sr-only>
              GC Design System notice
            </gcds-heading>
            <slot></slot>
          </div>
        </section>
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
      html: `<gcds-notice notice-title-tag="h2" notice-title="GC Design System notice" type="info">
        <gcds-text>Provide additonal information</gcds-text>
      </gcds-notice>`,
    });
    expect(page.root)
      .toEqualHtml(`<gcds-notice notice-title-tag="h2" notice-title="GC Design System notice" type="info">
      <mock:shadow-root>
        <section class="gcds-notice notice--type-info">
          <gcds-icon class="notice__icon" name="info-circle" size="h4"></gcds-icon>
          <div>
            <gcds-heading class="notice__heading" margin-top="0" margin-bottom="100" tag="h2">
              <gcds-sr-only tag="span">Information: </gcds-sr-only>
              GC Design System notice
            </gcds-heading>
            <slot></slot>
          </div>
        </section>
      </mock:shadow-root>
      <gcds-text>
        Provide additonal information
      </gcds-text>
    </gcds-notice>
    `);
  });

  it('renders - info type - french', async () => {
    const page = await newSpecPage({
      components: [GcdsNotice],
      html: `<gcds-notice notice-title-tag="h2" notice-title="GC Design System notice" type="info" lang="fr">
        <gcds-text>Provide additonal information</gcds-text>
      </gcds-notice>`,
    });
    expect(page.root)
      .toEqualHtml(`<gcds-notice notice-title-tag="h2" notice-title="GC Design System notice" type="info" lang="fr">
      <mock:shadow-root>
        <section class="gcds-notice notice--type-info">
          <gcds-icon class="notice__icon" name="info-circle" size="h4"></gcds-icon>
          <div>
            <gcds-heading class="notice__heading" margin-top="0" margin-bottom="100" tag="h2">
              <gcds-sr-only tag="span">Information : </gcds-sr-only>
              GC Design System notice
            </gcds-heading>
            <slot></slot>
          </div>
        </section>
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
      html: `<gcds-notice notice-title-tag="h2" notice-title="GC Design System notice" type="warning">
        <gcds-text>Provide additonal information</gcds-text>
      </gcds-notice>`,
    });
    expect(page.root)
      .toEqualHtml(`<gcds-notice notice-title-tag="h2" notice-title="GC Design System notice" type="warning">
      <mock:shadow-root>
        <section class="gcds-notice notice--type-warning">
          <gcds-icon class="notice__icon" name="warning-triangle" size="h4"></gcds-icon>
          <div>
            <gcds-heading class="notice__heading" margin-top="0" margin-bottom="100" tag="h2">
              <gcds-sr-only tag="span">Warning: </gcds-sr-only>
              GC Design System notice
            </gcds-heading>
            <slot></slot>
          </div>
        </section>
      </mock:shadow-root>
      <gcds-text>
        Provide additonal information
      </gcds-text>
    </gcds-notice>
    `);
  });

  it('renders - warning type - french', async () => {
    const page = await newSpecPage({
      components: [GcdsNotice],
      html: `<gcds-notice notice-title-tag="h2" notice-title="GC Design System notice" type="warning" lang="fr">
        <gcds-text>Provide additonal information</gcds-text>
      </gcds-notice>`,
    });
    expect(page.root)
      .toEqualHtml(`<gcds-notice notice-title-tag="h2" notice-title="GC Design System notice" type="warning" lang="fr">
      <mock:shadow-root>
        <section class="gcds-notice notice--type-warning">
          <gcds-icon class="notice__icon" name="warning-triangle" size="h4"></gcds-icon>
          <div>
            <gcds-heading class="notice__heading" margin-top="0" margin-bottom="100" tag="h2">
              <gcds-sr-only tag="span">Avertissement : </gcds-sr-only>
              GC Design System notice
            </gcds-heading>
            <slot></slot>
          </div>
        </section>
      </mock:shadow-root>
      <gcds-text>
        Provide additonal information
      </gcds-text>
    </gcds-notice>
    `);
  });

  it('renders - title tag h3', async () => {
    const page = await newSpecPage({
      components: [GcdsNotice],
      html: `<gcds-notice notice-title-tag="h3" notice-title="GC Design System notice" type="warning">
        <gcds-text>Provide additonal information</gcds-text>
      </gcds-notice>`,
    });
    expect(page.root)
      .toEqualHtml(`<gcds-notice notice-title-tag="h3" notice-title="GC Design System notice" type="warning">
      <mock:shadow-root>
        <section class="gcds-notice notice--type-warning">
          <gcds-icon class="notice__icon" name="warning-triangle" size="h4"></gcds-icon>
          <div>
            <gcds-heading class="notice__heading" margin-top="0" margin-bottom="100" tag="h3">
              <gcds-sr-only tag="span">Warning: </gcds-sr-only>
              GC Design System notice
            </gcds-heading>
            <slot></slot>
          </div>
        </section>
      </mock:shadow-root>
      <gcds-text>
        Provide additonal information
      </gcds-text>
    </gcds-notice>
    `);
  });

  it('renders - title tag h4', async () => {
    const page = await newSpecPage({
      components: [GcdsNotice],
      html: `<gcds-notice notice-title-tag="h4" notice-title="GC Design System notice" type="warning">
        <gcds-text>Provide additonal information</gcds-text>
      </gcds-notice>`,
    });
    expect(page.root)
      .toEqualHtml(`<gcds-notice notice-title-tag="h4" notice-title="GC Design System notice" type="warning">
      <mock:shadow-root>
        <section class="gcds-notice notice--type-warning">
          <gcds-icon class="notice__icon" name="warning-triangle" size="h4"></gcds-icon>
          <div>
            <gcds-heading class="notice__heading" margin-top="0" margin-bottom="100" tag="h4">
              <gcds-sr-only tag="span">Warning: </gcds-sr-only>
              GC Design System notice
            </gcds-heading>
            <slot></slot>
          </div>
        </section>
      </mock:shadow-root>
      <gcds-text>
        Provide additonal information
      </gcds-text>
    </gcds-notice>
    `);
  });

  it('renders - title tag h5', async () => {
    const page = await newSpecPage({
      components: [GcdsNotice],
      html: `<gcds-notice notice-title-tag="h5" notice-title="GC Design System notice" type="warning">
        <gcds-text>Provide additonal information</gcds-text>
      </gcds-notice>`,
    });
    expect(page.root)
      .toEqualHtml(`<gcds-notice notice-title-tag="h5" notice-title="GC Design System notice" type="warning">
      <mock:shadow-root>
        <section class="gcds-notice notice--type-warning">
          <gcds-icon class="notice__icon" name="warning-triangle" size="h4"></gcds-icon>
          <div>
            <gcds-heading class="notice__heading" margin-top="0" margin-bottom="100" tag="h5">
              <gcds-sr-only tag="span">Warning: </gcds-sr-only>
              GC Design System notice
            </gcds-heading>
            <slot></slot>
          </div>
        </section>
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
      html: `<gcds-notice notice-title-tag="h2" notice-title="GC Design System notice">
        <gcds-text>Provide additonal information</gcds-text>
      </gcds-notice>`,
    });
    expect(page.root)
      .toEqualHtml(`<gcds-notice notice-title-tag="h2" notice-title="GC Design System notice">
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
      html: `<gcds-notice notice-title-tag="h2" type="danger">
        <gcds-text>Provide additonal information</gcds-text>
      </gcds-notice>`,
    });
    expect(page.root).toEqualHtml(`<gcds-notice notice-title-tag="h2" type="danger">
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
      html: `<gcds-notice notice-title-tag="h5" notice-title="GC Design System notice" type="danger">
      </gcds-notice>`,
    });
    expect(page.root)
      .toEqualHtml(`<gcds-notice notice-title-tag="h5" notice-title="GC Design System notice" type="danger">
      <mock:shadow-root>
      </mock:shadow-root>
    </gcds-notice>
    `);
  });

  it('does not render - no notice title tag', async () => {
    const page = await newSpecPage({
      components: [GcdsNotice],
      html: `<gcds-notice notice-title="GC Design System notice" type="danger">
        <gcds-text>Provide additonal information</gcds-text>
      </gcds-notice>`,
    });
    expect(page.root)
      .toEqualHtml(`<gcds-notice notice-title="GC Design System notice" type="danger">
      <mock:shadow-root>
      </mock:shadow-root>
      <gcds-text>
        Provide additonal information
      </gcds-text>
    </gcds-notice>
    `);
  });

  it('does not render - invalid notice title tag value', async () => {
    const page = await newSpecPage({
      components: [GcdsNotice],
      html: `<gcds-notice notice-title-tag="h1" notice-title="GC Design System notice" type="info">
        <gcds-text>Provide additonal information</gcds-text>
      </gcds-notice>`,
    });
    expect(page.root)
      .toEqualHtml(`<gcds-notice notice-title-tag="h1" notice-title="GC Design System notice" type="info">
      <mock:shadow-root>
      </mock:shadow-root>
      <gcds-text>
        Provide additonal information
      </gcds-text>
    </gcds-notice>
    `);
  });
});
