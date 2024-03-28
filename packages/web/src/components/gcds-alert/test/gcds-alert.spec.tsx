import { newSpecPage } from '@stencil/core/testing';
import { GcdsAlert } from '../gcds-alert';

describe('gcds-alert', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsAlert],
      html: `<gcds-alert heading="Main notification title"></gcds-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-alert heading="Main notification title">
        <mock:shadow-root>
          <div aria-label="This is an info alert." class="gcds-alert alert--role-info" role="alert">
            <gcds-container centered="" size="full">
              <div class="alert__container">
                <gcds-icon aria-hidden="true" class="alert__icon" name="info-circle" size="h5" margin-right="250"></gcds-icon>

                <div class="alert__content">
                  <p class="alert__heading"><strong>Main notification title</strong></p>
                  <slot></slot>
                </div>

                <button class="alert__close-btn" aria-label="Close alert.">
                  <gcds-icon aria-hidden="true" name="times" size="text"></gcds-icon>
                </button>
              </div>
            </gcds-container>
          </div>
        </mock:shadow-root>
      </gcds-alert>
    `);
  });

  /**
   * Role tests
   */

  it('renders alert-role="danger"', async () => {
    const page = await newSpecPage({
      components: [GcdsAlert],
      html: `<gcds-alert heading="Main notification title" alert-role="danger"></gcds-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-alert heading="Main notification title" alert-role="danger">
        <mock:shadow-root>
          <div aria-label="This is a critical alert." class="gcds-alert alert--role-danger" role="alert">
            <gcds-container centered="" size="full">
              <div class="alert__container">
                <gcds-icon aria-hidden="true" class="alert__icon" name="exclamation-circle" size="h5" margin-right="250"></gcds-icon>

                <div class="alert__content">
                  <p class="alert__heading"><strong>Main notification title</strong></p>
                  <slot></slot>
                </div>

                <button class="alert__close-btn" aria-label="Close alert.">
                  <gcds-icon aria-hidden="true" name="times" size="text"></gcds-icon>
                </button>
              </div>
            </gcds-container>
          </div>
        </mock:shadow-root>
      </gcds-alert>
    `);
  });

  it('renders alert-role="info"', async () => {
    const page = await newSpecPage({
      components: [GcdsAlert],
      html: `<gcds-alert heading="Main notification title" alert-role="info"></gcds-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-alert heading="Main notification title" alert-role="info">
        <mock:shadow-root>
          <div aria-label="This is an info alert." class="gcds-alert alert--role-info" role="alert">
            <gcds-container centered="" size="full">
              <div class="alert__container">
                <gcds-icon aria-hidden="true" class="alert__icon" name="info-circle" size="h5" margin-right="250"></gcds-icon>

                <div class="alert__content">
                  <p class="alert__heading"><strong>Main notification title</strong></p>
                  <slot></slot>
                </div>

                <button class="alert__close-btn" aria-label="Close alert.">
                  <gcds-icon aria-hidden="true" name="times" size="text"></gcds-icon>
                </button>
              </div>
            </gcds-container>
          </div>
        </mock:shadow-root>
      </gcds-alert>
    `);
  });

  it('renders alert-role="success"', async () => {
    const page = await newSpecPage({
      components: [GcdsAlert],
      html: `<gcds-alert heading="Main notification title" alert-role="success"></gcds-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-alert heading="Main notification title" alert-role="success">
        <mock:shadow-root>
          <div aria-label="This is a success alert." class="gcds-alert alert--role-success" role="alert">
            <gcds-container centered="" size="full">
              <div class="alert__container">
                <gcds-icon aria-hidden="true" class="alert__icon" name="check-circle" size="h5" margin-right="250"></gcds-icon>

                <div class="alert__content">
                  <p class="alert__heading"><strong>Main notification title</strong></p>
                  <slot></slot>
                </div>

                <button class="alert__close-btn" aria-label="Close alert.">
                  <gcds-icon aria-hidden="true" name="times" size="text"></gcds-icon>
                </button>
              </div>
            </gcds-container>
          </div>
        </mock:shadow-root>
      </gcds-alert>
    `);
  });

  it('renders alert-role="warning"', async () => {
    const page = await newSpecPage({
      components: [GcdsAlert],
      html: `<gcds-alert heading="Main notification title" alert-role="warning"></gcds-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-alert heading="Main notification title" alert-role="warning">
        <mock:shadow-root>
          <div aria-label="This is a warning alert." class="gcds-alert alert--role-warning" role="alert">
            <gcds-container centered="" size="full">
              <div class="alert__container">
                <gcds-icon aria-hidden="true" class="alert__icon" name="exclamation-triangle" size="h5" margin-right="250"></gcds-icon>

                <div class="alert__content">
                  <p class="alert__heading"><strong>Main notification title</strong></p>
                  <slot></slot>
                </div>

                <button class="alert__close-btn" aria-label="Close alert.">
                  <gcds-icon aria-hidden="true" name="times" size="text"></gcds-icon>
                </button>
              </div>
            </gcds-container>
          </div>
        </mock:shadow-root>
      </gcds-alert>
    `);
  });

  /**
   * Role tests french
   */

  it('renders alert-role="danger" in french', async () => {
    const page = await newSpecPage({
      components: [GcdsAlert],
      html: `<gcds-alert lang="fr" heading="Main notification title" alert-role="danger"></gcds-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-alert lang="fr" heading="Main notification title" alert-role="danger">
        <mock:shadow-root>
          <div aria-label="Ceci est une alerte d'effacement." class="gcds-alert alert--role-danger" role="alert">
            <gcds-container centered="" size="full">
              <div class="alert__container">
                <gcds-icon aria-hidden="true" class="alert__icon" name="exclamation-circle" size="h5" margin-right="250"></gcds-icon>

                <div class="alert__content">
                  <p class="alert__heading"><strong>Main notification title</strong></p>
                  <slot></slot>
                </div>

                <button class="alert__close-btn" aria-label="Fermer l'alerte.">
                  <gcds-icon aria-hidden="true" name="times" size="text"></gcds-icon>
                </button>
              </div>
            </gcds-container>
          </div>
        </mock:shadow-root>
      </gcds-alert>
    `);
  });

  it('renders alert-role="info" in french', async () => {
    const page = await newSpecPage({
      components: [GcdsAlert],
      html: `<gcds-alert lang="fr" heading="Main notification title" alert-role="info"></gcds-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-alert lang="fr" heading="Main notification title" alert-role="info">
        <mock:shadow-root>
          <div aria-label="Ceci est une alerte d'information." class="gcds-alert alert--role-info" role="alert">
            <gcds-container centered="" size="full">
              <div class="alert__container">
                <gcds-icon aria-hidden="true" class="alert__icon" name="info-circle" size="h5" margin-right="250"></gcds-icon>

                <div class="alert__content">
                  <p class="alert__heading"><strong>Main notification title</strong></p>
                  <slot></slot>
                </div>

                <button class="alert__close-btn" aria-label="Fermer l'alerte.">
                  <gcds-icon aria-hidden="true" name="times" size="text"></gcds-icon>
                </button>
              </div>
            </gcds-container>
          </div>
        </mock:shadow-root>
      </gcds-alert>
    `);
  });

  it('renders alert-role="success" in french', async () => {
    const page = await newSpecPage({
      components: [GcdsAlert],
      html: `<gcds-alert lang="fr" heading="Main notification title" alert-role="success"></gcds-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-alert lang="fr" heading="Main notification title" alert-role="success">
        <mock:shadow-root>
          <div aria-label="Ceci est une alerte de succès." class="gcds-alert alert--role-success" role="alert">
            <gcds-container centered="" size="full">
              <div class="alert__container">
                <gcds-icon aria-hidden="true" class="alert__icon" name="check-circle" size="h5" margin-right="250"></gcds-icon>

                <div class="alert__content">
                  <p class="alert__heading"><strong>Main notification title</strong></p>
                  <slot></slot>
                </div>

                <button class="alert__close-btn" aria-label="Fermer l'alerte.">
                  <gcds-icon aria-hidden="true" name="times" size="text"></gcds-icon>
                </button>
              </div>
            </gcds-container>
          </div>
        </mock:shadow-root>
      </gcds-alert>
    `);
  });

  it('renders alert-role="warning" in french', async () => {
    const page = await newSpecPage({
      components: [GcdsAlert],
      html: `<gcds-alert lang="fr" heading="Main notification title" alert-role="warning"></gcds-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-alert lang="fr" heading="Main notification title" alert-role="warning">
        <mock:shadow-root>
          <div aria-label="Ceci est une alerte d'avertissement." class="gcds-alert alert--role-warning" role="alert">
            <gcds-container centered="" size="full">
              <div class="alert__container">
                <gcds-icon aria-hidden="true" class="alert__icon" name="exclamation-triangle" size="h5" margin-right="250"></gcds-icon>

                <div class="alert__content">
                  <p class="alert__heading"><strong>Main notification title</strong></p>
                  <slot></slot>
                </div>

                <button class="alert__close-btn" aria-label="Fermer l'alerte.">
                  <gcds-icon aria-hidden="true" name="times" size="text"></gcds-icon>
                </button>
              </div>
            </gcds-container>
          </div>
        </mock:shadow-root>
      </gcds-alert>
    `);
  });

  /**
   * Fixed position test
   */

  it('renders with position fixed', async () => {
    const page = await newSpecPage({
      components: [GcdsAlert],
      html: `<gcds-alert heading="Main notification title" is-fixed></gcds-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-alert heading="Main notification title" is-fixed>
        <mock:shadow-root>
          <div aria-label="This is an info alert." class="gcds-alert alert--role-info alert--is-fixed" role="alert">
            <gcds-container centered="" size="full">
              <div class="alert__container">
                <gcds-icon aria-hidden="true" class="alert__icon" name="info-circle" size="h5" margin-right="250"></gcds-icon>

                <div class="alert__content">
                  <p class="alert__heading"><strong>Main notification title</strong></p>
                  <slot></slot>
                </div>

                <button class="alert__close-btn" aria-label="Close alert.">
                  <gcds-icon aria-hidden="true" name="times" size="text"></gcds-icon>
                </button>
              </div>
            </gcds-container>
          </div>
        </mock:shadow-root>
      </gcds-alert>
    `);
  });

  it('renders without position fixed', async () => {
    const page = await newSpecPage({
      components: [GcdsAlert],
      html: `<gcds-alert heading="Main notification title"></gcds-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-alert heading="Main notification title">
        <mock:shadow-root>
          <div aria-label="This is an info alert." class="gcds-alert alert--role-info" role="alert">
            <gcds-container centered="" size="full">
              <div class="alert__container">
                <gcds-icon aria-hidden="true" class="alert__icon" name="info-circle" size="h5" margin-right="250"></gcds-icon>

                <div class="alert__content">
                  <p class="alert__heading"><strong>Main notification title</strong></p>
                  <slot></slot>
                </div>

                <button class="alert__close-btn" aria-label="Close alert.">
                  <gcds-icon aria-hidden="true" name="times" size="text"></gcds-icon>
                </button>
              </div>
            </gcds-container>
          </div>
        </mock:shadow-root>
      </gcds-alert>
    `);
  });

  /**
   * Container width tests
   */

  it('renders container width full if position is fixed', async () => {
    const page = await newSpecPage({
      components: [GcdsAlert],
      html: `<gcds-alert heading="Main notification title" container="full" is-fixed></gcds-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-alert heading="Main notification title" container="full" is-fixed>
        <mock:shadow-root>
          <div aria-label="This is an info alert." class="gcds-alert alert--role-info alert--is-fixed" role="alert">
            <gcds-container centered="" size="full">
              <div class="alert__container">
                <gcds-icon aria-hidden="true" class="alert__icon" name="info-circle" size="h5" margin-right="250"></gcds-icon>

                <div class="alert__content">
                  <p class="alert__heading"><strong>Main notification title</strong></p>
                  <slot></slot>
                </div>

                <button class="alert__close-btn" aria-label="Close alert.">
                  <gcds-icon aria-hidden="true" name="times" size="text"></gcds-icon>
                </button>
              </div>
            </gcds-container>
          </div>
        </mock:shadow-root>
      </gcds-alert>
    `);
  });

  it('renders container width xl if position is fixed', async () => {
    const page = await newSpecPage({
      components: [GcdsAlert],
      html: `<gcds-alert heading="Main notification title" container="xl" is-fixed></gcds-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-alert heading="Main notification title" container="xl" is-fixed>
        <mock:shadow-root>
          <div aria-label="This is an info alert." class="gcds-alert alert--role-info alert--is-fixed" role="alert">
            <gcds-container centered="" size="xl">
              <div class="alert__container">
                <gcds-icon aria-hidden="true" class="alert__icon" name="info-circle" size="h5" margin-right="250"></gcds-icon>

                <div class="alert__content">
                  <p class="alert__heading"><strong>Main notification title</strong></p>
                  <slot></slot>
                </div>

                <button class="alert__close-btn" aria-label="Close alert.">
                  <gcds-icon aria-hidden="true" name="times" size="text"></gcds-icon>
                </button>
              </div>
            </gcds-container>
          </div>
        </mock:shadow-root>
      </gcds-alert>
    `);
  });

  it('renders container width lg if position is fixed', async () => {
    const page = await newSpecPage({
      components: [GcdsAlert],
      html: `<gcds-alert heading="Main notification title" container="lg" is-fixed></gcds-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-alert heading="Main notification title" container="lg" is-fixed>
        <mock:shadow-root>
          <div aria-label="This is an info alert." class="gcds-alert alert--role-info alert--is-fixed" role="alert">
            <gcds-container centered="" size="lg">
              <div class="alert__container">
                <gcds-icon aria-hidden="true" class="alert__icon" name="info-circle" size="h5" margin-right="250"></gcds-icon>

                <div class="alert__content">
                  <p class="alert__heading"><strong>Main notification title</strong></p>
                  <slot></slot>
                </div>

                <button class="alert__close-btn" aria-label="Close alert.">
                  <gcds-icon aria-hidden="true" name="times" size="text"></gcds-icon>
                </button>
              </div>
            </gcds-container>
          </div>
        </mock:shadow-root>
      </gcds-alert>
    `);
  });

  it('renders container width md if position is fixed', async () => {
    const page = await newSpecPage({
      components: [GcdsAlert],
      html: `<gcds-alert heading="Main notification title" container="md" is-fixed></gcds-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-alert heading="Main notification title" container="md" is-fixed>
        <mock:shadow-root>
          <div aria-label="This is an info alert." class="gcds-alert alert--role-info alert--is-fixed" role="alert">
            <gcds-container centered="" size="md">
              <div class="alert__container">
                <gcds-icon aria-hidden="true" class="alert__icon" name="info-circle" size="h5" margin-right="250"></gcds-icon>

                <div class="alert__content">
                  <p class="alert__heading"><strong>Main notification title</strong></p>
                  <slot></slot>
                </div>

                <button class="alert__close-btn" aria-label="Close alert.">
                  <gcds-icon aria-hidden="true" name="times" size="text"></gcds-icon>
                </button>
              </div>
            </gcds-container>
          </div>
        </mock:shadow-root>
      </gcds-alert>
    `);
  });

  it('renders container width sm if position is fixed', async () => {
    const page = await newSpecPage({
      components: [GcdsAlert],
      html: `<gcds-alert heading="Main notification title" container="sm" is-fixed></gcds-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-alert heading="Main notification title" container="sm" is-fixed>
        <mock:shadow-root>
          <div aria-label="This is an info alert." class="gcds-alert alert--role-info alert--is-fixed" role="alert">
            <gcds-container centered="" size="sm">
              <div class="alert__container">
                <gcds-icon aria-hidden="true" class="alert__icon" name="info-circle" size="h5" margin-right="250"></gcds-icon>

                <div class="alert__content">
                  <p class="alert__heading"><strong>Main notification title</strong></p>
                  <slot></slot>
                </div>

                <button class="alert__close-btn" aria-label="Close alert.">
                  <gcds-icon aria-hidden="true" name="times" size="text"></gcds-icon>
                </button>
              </div>
            </gcds-container>
          </div>
        </mock:shadow-root>
      </gcds-alert>
    `);
  });

  it('renders container width xs if position is fixed', async () => {
    const page = await newSpecPage({
      components: [GcdsAlert],
      html: `<gcds-alert heading="Main notification title" container="xs" is-fixed></gcds-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-alert heading="Main notification title" container="xs" is-fixed>
        <mock:shadow-root>
          <div aria-label="This is an info alert." class="gcds-alert alert--role-info alert--is-fixed" role="alert">
            <gcds-container centered="" size="xs">
              <div class="alert__container">
                <gcds-icon aria-hidden="true" class="alert__icon" name="info-circle" size="h5" margin-right="250"></gcds-icon>

                <div class="alert__content">
                  <p class="alert__heading"><strong>Main notification title</strong></p>
                  <slot></slot>
                </div>

                <button class="alert__close-btn" aria-label="Close alert.">
                  <gcds-icon aria-hidden="true" name="times" size="text"></gcds-icon>
                </button>
              </div>
            </gcds-container>
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
      html: `<gcds-alert heading="Main notification title" hide-close-btn></gcds-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-alert heading="Main notification title" hide-close-btn>
        <mock:shadow-root>
          <div aria-label="This is an info alert." class="gcds-alert alert--role-info" role="alert">
            <gcds-container centered="" size="full">
              <div class="alert__container">
                <gcds-icon aria-hidden="true" class="alert__icon" name="info-circle" size="h5" margin-right="250"></gcds-icon>

                <div class="alert__content">
                  <p class="alert__heading"><strong>Main notification title</strong></p>
                  <slot></slot>
                </div>
              </div>
            </gcds-container>
          </div>
        </mock:shadow-root>
      </gcds-alert>
    `);
  });

  /**
   * Hide role icon test
   */

  it('renders with role icon hidden', async () => {
    const page = await newSpecPage({
      components: [GcdsAlert],
      html: `<gcds-alert heading="Main notification title" hide-role-icon></gcds-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-alert heading="Main notification title" hide-role-icon>
        <mock:shadow-root>
          <div aria-label="This is an info alert." class="gcds-alert alert--role-info" role="alert">
            <gcds-container centered="" size="full">
              <div class="alert__container">
                <div class="alert__content">
                  <p class="alert__heading"><strong>Main notification title</strong></p>
                  <slot></slot>
                </div>

                <button class="alert__close-btn" aria-label="Close alert.">
                  <gcds-icon aria-hidden="true" name="times" size="text"></gcds-icon>
                </button>
              </div>
            </gcds-container>
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
        <gcds-alert heading="Main notification title">
          <p>Testing slot content.</p>
        </gcds-alert>
      `,
    });
    expect(page.root).toEqualHtml(`
      <gcds-alert heading="Main notification title">
        <mock:shadow-root>
          <div aria-label="This is an info alert." class="gcds-alert alert--role-info" role="alert">
            <gcds-container centered="" size="full">
              <div class="alert__container">
                <gcds-icon aria-hidden="true" class="alert__icon" name="info-circle" size="h5" margin-right="250"></gcds-icon>

                <div class="alert__content">
                  <p class="alert__heading"><strong>Main notification title</strong></p>
                  <slot></slot>
                </div>

                <button class="alert__close-btn" aria-label="Close alert.">
                  <gcds-icon aria-hidden="true" name="times" size="text"></gcds-icon>
                </button>
              </div>
            </gcds-container>
          </div>
        </mock:shadow-root>
        <p>Testing slot content.</p>
      </gcds-alert>
    `);
  });
});
