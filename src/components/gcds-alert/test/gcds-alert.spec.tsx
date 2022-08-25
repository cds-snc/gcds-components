import { newSpecPage } from '@stencil/core/testing';
import { GcdsAlert } from '../gcds-alert';

describe('gcds-alert', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsAlert],
      html: `<gcds-alert alert-heading="Main notification title"></gcds-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-alert alert-heading="Main notification title">
        <mock:shadow-root>
          <div aria-label="This is an info alert." class="gcds-alert role-info is-fixed" role="alert">
            <div class="alert-container container-lg">
              <h2 class="alert-heading">
                <gcds-icon aria-hidden="true" class="alert-icon" size="md" name="info-circle"></gcds-icon>

                <span>Main notification title</span>

                <button class="alert-close-btn" aria-label="Close alert.">
                  <gcds-icon aria-hidden="true" name="times" size="sm"></gcds-icon>
                </button>
              </h2>

              <div class="alert-content">
                <slot></slot>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-alert>
    `);
  });

  /**
    * Role tests
    */

  it('renders alert-role="destructive"', async () => {
    const page = await newSpecPage({
      components: [GcdsAlert],
      html: `<gcds-alert alert-heading="Main notification title" alert-role="destructive"></gcds-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-alert alert-heading="Main notification title" alert-role="destructive">
        <mock:shadow-root>
          <div aria-label="This is a destructive alert." class="gcds-alert role-destructive is-fixed" role="alert">
            <div class="alert-container container-lg">
              <h2 class="alert-heading">
                <gcds-icon aria-hidden="true" class="alert-icon" size="md" name="exclamation-circle"></gcds-icon>

                <span>Main notification title</span>

                <button class="alert-close-btn" aria-label="Close alert.">
                  <gcds-icon aria-hidden="true" name="times" size="sm"></gcds-icon>
                </button>
              </h2>

              <div class="alert-content">
                <slot></slot>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-alert>
    `);
  });

  it('renders alert-role="info"', async () => {
    const page = await newSpecPage({
      components: [GcdsAlert],
      html: `<gcds-alert alert-heading="Main notification title" alert-role="info"></gcds-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-alert alert-heading="Main notification title" alert-role="info">
        <mock:shadow-root>
          <div aria-label="This is an info alert." class="gcds-alert role-info is-fixed" role="alert">
            <div class="alert-container container-lg">
              <h2 class="alert-heading">
                <gcds-icon aria-hidden="true" class="alert-icon" size="md" name="info-circle"></gcds-icon>

                <span>Main notification title</span>

                <button class="alert-close-btn" aria-label="Close alert.">
                  <gcds-icon aria-hidden="true" name="times" size="sm"></gcds-icon>
                </button>
              </h2>

              <div class="alert-content">
                <slot></slot>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-alert>
    `);
  });

  it('renders alert-role="success"', async () => {
    const page = await newSpecPage({
      components: [GcdsAlert],
      html: `<gcds-alert alert-heading="Main notification title" alert-role="success"></gcds-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-alert alert-heading="Main notification title" alert-role="success">
        <mock:shadow-root>
          <div aria-label="This is a success alert." class="gcds-alert role-success is-fixed" role="alert">
            <div class="alert-container container-lg">
              <h2 class="alert-heading">
                <gcds-icon aria-hidden="true" class="alert-icon" size="md" name="check-circle"></gcds-icon>

                <span>Main notification title</span>

                <button class="alert-close-btn" aria-label="Close alert.">
                  <gcds-icon aria-hidden="true" name="times" size="sm"></gcds-icon>
                </button>
              </h2>

              <div class="alert-content">
                <slot></slot>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-alert>
    `);
  });

  it('renders alert-role="warning"', async () => {
    const page = await newSpecPage({
      components: [GcdsAlert],
      html: `<gcds-alert alert-heading="Main notification title" alert-role="warning"></gcds-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-alert alert-heading="Main notification title" alert-role="warning">
        <mock:shadow-root>
          <div aria-label="This is a warning alert." class="gcds-alert role-warning is-fixed" role="alert">
            <div class="alert-container container-lg">
              <h2 class="alert-heading">
                <gcds-icon aria-hidden="true" class="alert-icon" size="md" name="exclamation-triangle"></gcds-icon>

                <span>Main notification title</span>

                <button class="alert-close-btn" aria-label="Close alert.">
                  <gcds-icon aria-hidden="true" name="times" size="sm"></gcds-icon>
                </button>
              </h2>

              <div class="alert-content">
                <slot></slot>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-alert>
    `);
  });

  /**
    * Fixed position test
    */

  it('renders with position fixed by default', async () => {
    const page = await newSpecPage({
      components: [GcdsAlert],
      html: `<gcds-alert alert-heading="Main notification title"></gcds-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-alert alert-heading="Main notification title">
        <mock:shadow-root>
          <div aria-label="This is an info alert." class="gcds-alert role-info is-fixed" role="alert">
            <div class="alert-container container-lg">
              <h2 class="alert-heading">
                <gcds-icon aria-hidden="true" class="alert-icon" size="md" name="info-circle"></gcds-icon>

                <span>Main notification title</span>

                <button class="alert-close-btn" aria-label="Close alert.">
                  <gcds-icon aria-hidden="true" name="times" size="sm"></gcds-icon>
                </button>
              </h2>

              <div class="alert-content">
                <slot></slot>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-alert>
    `);
  });

  it('renders without position fixed', async () => {
    const page = await newSpecPage({
      components: [GcdsAlert],
      html: `<gcds-alert position-fixed="false" alert-heading="Main notification title"></gcds-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-alert position-fixed="false" alert-heading="Main notification title">
        <mock:shadow-root>
          <div aria-label="This is an info alert." class="gcds-alert role-info" role="alert">
            <div class="alert-container">
              <h2 class="alert-heading">
                <gcds-icon aria-hidden="true" class="alert-icon" size="md" name="info-circle"></gcds-icon>

                <span>Main notification title</span>

                <button class="alert-close-btn" aria-label="Close alert.">
                  <gcds-icon aria-hidden="true" name="times" size="sm"></gcds-icon>
                </button>
              </h2>

              <div class="alert-content">
                <slot></slot>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-alert>
    `);
  });

  /**
    * Max content width tests
    */

  it('renders max content width fluid', async () => {
    const page = await newSpecPage({
      components: [GcdsAlert],
      html: `<gcds-alert alert-heading="Main notification title" max-content-width="fluid"></gcds-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-alert alert-heading="Main notification title" max-content-width="fluid">
        <mock:shadow-root>
          <div aria-label="This is an info alert." class="gcds-alert role-info is-fixed" role="alert">
            <div class="alert-container container-fluid">
              <h2 class="alert-heading">
                <gcds-icon aria-hidden="true" class="alert-icon" size="md" name="info-circle"></gcds-icon>

                <span>Main notification title</span>

                <button class="alert-close-btn" aria-label="Close alert.">
                  <gcds-icon aria-hidden="true" name="times" size="sm"></gcds-icon>
                </button>
              </h2>

              <div class="alert-content">
                <slot></slot>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-alert>
    `);
  });

  it('renders max content width lg', async () => {
    const page = await newSpecPage({
      components: [GcdsAlert],
      html: `<gcds-alert alert-heading="Main notification title" max-content-width="lg"></gcds-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-alert alert-heading="Main notification title" max-content-width="lg">
        <mock:shadow-root>
          <div aria-label="This is an info alert." class="gcds-alert role-info is-fixed" role="alert">
            <div class="alert-container container-lg">
              <h2 class="alert-heading">
                <gcds-icon aria-hidden="true" class="alert-icon" size="md" name="info-circle"></gcds-icon>

                <span>Main notification title</span>

                <button class="alert-close-btn" aria-label="Close alert.">
                  <gcds-icon aria-hidden="true" name="times" size="sm"></gcds-icon>
                </button>
              </h2>

              <div class="alert-content">
                <slot></slot>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-alert>
    `);
  });

  it('renders max content width md', async () => {
    const page = await newSpecPage({
      components: [GcdsAlert],
      html: `<gcds-alert alert-heading="Main notification title" max-content-width="md"></gcds-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-alert alert-heading="Main notification title" max-content-width="md">
        <mock:shadow-root>
          <div aria-label="This is an info alert." class="gcds-alert role-info is-fixed" role="alert">
            <div class="alert-container container-md">
              <h2 class="alert-heading">
                <gcds-icon aria-hidden="true" class="alert-icon" size="md" name="info-circle"></gcds-icon>

                <span>Main notification title</span>

                <button class="alert-close-btn" aria-label="Close alert.">
                  <gcds-icon aria-hidden="true" name="times" size="sm"></gcds-icon>
                </button>
              </h2>

              <div class="alert-content">
                <slot></slot>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-alert>
    `);
  });

  it('renders max content width sm', async () => {
    const page = await newSpecPage({
      components: [GcdsAlert],
      html: `<gcds-alert alert-heading="Main notification title" max-content-width="sm"></gcds-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-alert alert-heading="Main notification title" max-content-width="sm">
        <mock:shadow-root>
          <div aria-label="This is an info alert." class="gcds-alert role-info is-fixed" role="alert">
            <div class="alert-container container-sm">
              <h2 class="alert-heading">
                <gcds-icon aria-hidden="true" class="alert-icon" size="md" name="info-circle"></gcds-icon>

                <span>Main notification title</span>

                <button class="alert-close-btn" aria-label="Close alert.">
                  <gcds-icon aria-hidden="true" name="times" size="sm"></gcds-icon>
                </button>
              </h2>

              <div class="alert-content">
                <slot></slot>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-alert>
    `);
  });

  it('renders max content width xs', async () => {
    const page = await newSpecPage({
      components: [GcdsAlert],
      html: `<gcds-alert alert-heading="Main notification title" max-content-width="xs"></gcds-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-alert alert-heading="Main notification title" max-content-width="xs">
        <mock:shadow-root>
          <div aria-label="This is an info alert." class="gcds-alert role-info is-fixed" role="alert">
            <div class="alert-container container-xs">
              <h2 class="alert-heading">
                <gcds-icon aria-hidden="true" class="alert-icon" size="md" name="info-circle"></gcds-icon>

                <span>Main notification title</span>

                <button class="alert-close-btn" aria-label="Close alert.">
                  <gcds-icon aria-hidden="true" name="times" size="sm"></gcds-icon>
                </button>
              </h2>

              <div class="alert-content">
                <slot></slot>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-alert>
    `);
  });

  /**
    * Hide close button test
    */

  it('renders with close button hidden', async () => {
    const page = await newSpecPage({
      components: [GcdsAlert],
      html: `<gcds-alert alert-heading="Main notification title" hide-close-btn></gcds-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-alert alert-heading="Main notification title" hide-close-btn>
        <mock:shadow-root>
          <div aria-label="This is an info alert." class="gcds-alert role-info is-fixed" role="alert">
            <div class="alert-container container-lg">
              <h2 class="alert-heading">
                <gcds-icon aria-hidden="true" class="alert-icon" size="md" name="info-circle"></gcds-icon>

                <span>Main notification title</span>
              </h2>

              <div class="alert-content">
                <slot></slot>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-alert>
    `);
  });

  /**
    * Slot content test
    */

  it('renders with slot content', async () => {
    const page = await newSpecPage({
      components: [GcdsAlert],
      html: `
        <gcds-alert alert-heading="Main notification title">
          <p>Testing slot content.</p>
        </gcds-alert>
      `,
    });
    expect(page.root).toEqualHtml(`
      <gcds-alert alert-heading="Main notification title">
        <mock:shadow-root>
          <div aria-label="This is an info alert." class="gcds-alert role-info is-fixed" role="alert">
            <div class="alert-container container-lg">
              <h2 class="alert-heading">
                <gcds-icon aria-hidden="true" class="alert-icon" size="md" name="info-circle"></gcds-icon>

                <span>Main notification title</span>

                <button class="alert-close-btn" aria-label="Close alert.">
                  <gcds-icon aria-hidden="true" name="times" size="sm"></gcds-icon>
                </button>
              </h2>

              <div class="alert-content">
                <slot></slot>
              </div>
            </div>
          </div>
        </mock:shadow-root>
        <p>Testing slot content.</p>
      </gcds-alert>
    `);
  });
});
