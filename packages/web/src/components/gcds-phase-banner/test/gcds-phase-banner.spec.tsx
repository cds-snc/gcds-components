import { newSpecPage } from '@stencil/core/testing';
import { GcdsPhaseBanner } from '../gcds-phase-banner';

describe('gcds-phase-banner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsPhaseBanner],
      html: `<gcds-phase-banner><p>This is a banner.</p></gcds-phase-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-phase-banner>
        <mock:shadow-root>
          <div aria-label="Banner" class="gcds-phase-banner banner--role-primary" role="status">
            <gcds-container size="xl" centered="">
              <div class="banner__content">
                <figure class="banner__icon icon--left">
                  <slot name="banner-icon-left"></slot>
                </figure>

                <div class="banner__details">
                  <slot name="banner-text"></slot>
                  <slot name="banner-cta"></slot>
                </div>

                <figure class="banner__icon icon--right">
                  <slot name="banner-icon-right"></slot>
                </figure>
              </div>
            </gcds-container>
          </div>
        </mock:shadow-root>
        <p>This is a banner.</p>
      </gcds-phase-banner>
    `);
  });

  /**
   * Role tests
   */

  it('renders banner-role="primary"', async () => {
    const page = await newSpecPage({
      components: [GcdsPhaseBanner],
      html: `<gcds-phase-banner banner-role="primary"><p>This is a banner.</p></gcds-phase-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-phase-banner banner-role="primary">
        <mock:shadow-root>
          <div aria-label="Banner" class="gcds-phase-banner banner--role-primary" role="status">
            <gcds-container size="xl" centered="">
              <div class="banner__content">
                <figure class="banner__icon icon--left">
                  <slot name="banner-icon-left"></slot>
                </figure>

                <div class="banner__details">
                  <slot name="banner-text"></slot>
                  <slot name="banner-cta"></slot>
                </div>

                <figure class="banner__icon icon--right">
                  <slot name="banner-icon-right"></slot>
                </figure>
              </div>
            </gcds-container>
          </div>
        </mock:shadow-root>
        <p>This is a banner.</p>
      </gcds-phase-banner>
    `);
  });

  it('renders banner-role="secondary"', async () => {
    const page = await newSpecPage({
      components: [GcdsPhaseBanner],
      html: `<gcds-phase-banner banner-role="secondary"><p>This is a banner.</p></gcds-phase-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-phase-banner banner-role="secondary">
        <mock:shadow-root>
          <div aria-label="Banner" class="gcds-phase-banner banner--role-secondary" role="status">
            <gcds-container size="xl" centered="">
              <div class="banner__content">
                <figure class="banner__icon icon--left">
                  <slot name="banner-icon-left"></slot>
                </figure>

                <div class="banner__details">
                  <slot name="banner-text"></slot>
                  <slot name="banner-cta"></slot>
                </div>

                <figure class="banner__icon icon--right">
                  <slot name="banner-icon-right"></slot>
                </figure>
              </div>
            </gcds-container>
          </div>
        </mock:shadow-root>
        <p>This is a banner.</p>
      </gcds-phase-banner>
    `);
  });

  /**
   * Fixed position test
   */

  it('renders fixed position', async () => {
    const page = await newSpecPage({
      components: [GcdsPhaseBanner],
      html: `<gcds-phase-banner is-fixed><p>This is a banner.</p></gcds-phase-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-phase-banner is-fixed>
        <mock:shadow-root>
          <div aria-label="Banner" class="gcds-phase-banner banner--role-primary banner--is-fixed" role="status">
            <gcds-container size="xl" centered="">
              <div class="banner__content">
                <figure class="banner__icon icon--left">
                  <slot name="banner-icon-left"></slot>
                </figure>

                <div class="banner__details">
                  <slot name="banner-text"></slot>
                  <slot name="banner-cta"></slot>
                </div>

                <figure class="banner__icon icon--right">
                  <slot name="banner-icon-right"></slot>
                </figure>
              </div>
            </gcds-container>
          </div>
        </mock:shadow-root>
        <p>This is a banner.</p>
      </gcds-phase-banner>
    `);
  });

  /**
   * Container width tests
   */

  it('renders container width full', async () => {
    const page = await newSpecPage({
      components: [GcdsPhaseBanner],
      html: `<gcds-phase-banner container="full"><p>This is a banner.</p></gcds-phase-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-phase-banner container="full">
        <mock:shadow-root>
          <div aria-label="Banner" class="gcds-phase-banner banner--role-primary" role="status">
            <gcds-container size="full" centered="">
              <div class="banner__content">
                <figure class="banner__icon icon--left">
                  <slot name="banner-icon-left"></slot>
                </figure>

                <div class="banner__details">
                  <slot name="banner-text"></slot>
                  <slot name="banner-cta"></slot>
                </div>

                <figure class="banner__icon icon--right">
                  <slot name="banner-icon-right"></slot>
                </figure>
              </div>
            </gcds-container>
          </div>
        </mock:shadow-root>
        <p>This is a banner.</p>
      </gcds-phase-banner>
    `);
  });

  it('renders container width xl', async () => {
    const page = await newSpecPage({
      components: [GcdsPhaseBanner],
      html: `<gcds-phase-banner container="xl"><p>This is a banner.</p></gcds-phase-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-phase-banner container="xl">
        <mock:shadow-root>
          <div aria-label="Banner" class="gcds-phase-banner banner--role-primary" role="status">
            <gcds-container size="xl" centered="">
              <div class="banner__content">
                <figure class="banner__icon icon--left">
                  <slot name="banner-icon-left"></slot>
                </figure>

                <div class="banner__details">
                  <slot name="banner-text"></slot>
                  <slot name="banner-cta"></slot>
                </div>

                <figure class="banner__icon icon--right">
                  <slot name="banner-icon-right"></slot>
                </figure>
              </div>
            </gcds-container>
          </div>
        </mock:shadow-root>
        <p>This is a banner.</p>
      </gcds-phase-banner>
    `);
  });

  it('renders container width lg', async () => {
    const page = await newSpecPage({
      components: [GcdsPhaseBanner],
      html: `<gcds-phase-banner container="lg"><p>This is a banner.</p></gcds-phase-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-phase-banner container="lg">
        <mock:shadow-root>
          <div aria-label="Banner" class="gcds-phase-banner banner--role-primary" role="status">
            <gcds-container size="lg" centered="">
              <div class="banner__content">
                <figure class="banner__icon icon--left">
                  <slot name="banner-icon-left"></slot>
                </figure>

                <div class="banner__details">
                  <slot name="banner-text"></slot>
                  <slot name="banner-cta"></slot>
                </div>

                <figure class="banner__icon icon--right">
                  <slot name="banner-icon-right"></slot>
                </figure>
              </div>
            </gcds-container>
          </div>
        </mock:shadow-root>
        <p>This is a banner.</p>
      </gcds-phase-banner>
    `);
  });

  it('renders container width md', async () => {
    const page = await newSpecPage({
      components: [GcdsPhaseBanner],
      html: `<gcds-phase-banner container="md"><p>This is a banner.</p></gcds-phase-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-phase-banner container="md">
        <mock:shadow-root>
          <div aria-label="Banner" class="gcds-phase-banner banner--role-primary" role="status">
            <gcds-container size="md" centered="">
              <div class="banner__content">
                <figure class="banner__icon icon--left">
                  <slot name="banner-icon-left"></slot>
                </figure>

                <div class="banner__details">
                  <slot name="banner-text"></slot>
                  <slot name="banner-cta"></slot>
                </div>

                <figure class="banner__icon icon--right">
                  <slot name="banner-icon-right"></slot>
                </figure>
              </div>
            </gcds-container>
          </div>
        </mock:shadow-root>
        <p>This is a banner.</p>
      </gcds-phase-banner>
    `);
  });

  it('renders container width sm', async () => {
    const page = await newSpecPage({
      components: [GcdsPhaseBanner],
      html: `<gcds-phase-banner container="sm"><p>This is a banner.</p></gcds-phase-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-phase-banner container="sm">
        <mock:shadow-root>
          <div aria-label="Banner" class="gcds-phase-banner banner--role-primary" role="status">
            <gcds-container size="sm" centered="">
              <div class="banner__content">
                <figure class="banner__icon icon--left">
                  <slot name="banner-icon-left"></slot>
                </figure>

                <div class="banner__details">
                  <slot name="banner-text"></slot>
                  <slot name="banner-cta"></slot>
                </div>

                <figure class="banner__icon icon--right">
                  <slot name="banner-icon-right"></slot>
                </figure>
              </div>
            </gcds-container>
          </div>
        </mock:shadow-root>
        <p>This is a banner.</p>
      </gcds-phase-banner>
    `);
  });

  it('renders container width xs', async () => {
    const page = await newSpecPage({
      components: [GcdsPhaseBanner],
      html: `<gcds-phase-banner container="xs"><p>This is a banner.</p></gcds-phase-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-phase-banner container="xs">
        <mock:shadow-root>
          <div aria-label="Banner" class="gcds-phase-banner banner--role-primary" role="status">
            <gcds-container size="xs" centered="">
              <div class="banner__content">
                <figure class="banner__icon icon--left">
                  <slot name="banner-icon-left"></slot>
                </figure>

                <div class="banner__details">
                  <slot name="banner-text"></slot>
                  <slot name="banner-cta"></slot>
                </div>

                <figure class="banner__icon icon--right">
                  <slot name="banner-icon-right"></slot>
                </figure>
              </div>
            </gcds-container>
          </div>
        </mock:shadow-root>
        <p>This is a banner.</p>
      </gcds-phase-banner>
    `);
  });
});
