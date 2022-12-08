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
            <div class="banner__content container-lg">
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
            <div class="banner__content container-lg">
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
            <div class="banner__content container-lg">
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
            <div class="banner__content container-lg">
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
          </div>
        </mock:shadow-root>
        <p>This is a banner.</p>
      </gcds-phase-banner>
    `);
  });

  /**
    * Max content width tests
    */

  it('renders max content width fluid', async () => {
    const page = await newSpecPage({
      components: [GcdsPhaseBanner],
      html: `<gcds-phase-banner max-content-width="fluid"><p>This is a banner.</p></gcds-phase-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-phase-banner max-content-width="fluid">
        <mock:shadow-root>
          <div aria-label="Banner" class="gcds-phase-banner banner--role-primary" role="status">
            <div class="banner__content container-fluid">
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
          </div>
        </mock:shadow-root>
        <p>This is a banner.</p>
      </gcds-phase-banner>
    `);
  });

  it('renders max content width lg', async () => {
    const page = await newSpecPage({
      components: [GcdsPhaseBanner],
      html: `<gcds-phase-banner max-content-width="lg"><p>This is a banner.</p></gcds-phase-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-phase-banner max-content-width="lg">
        <mock:shadow-root>
          <div aria-label="Banner" class="gcds-phase-banner banner--role-primary" role="status">
            <div class="banner__content container-lg">
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
          </div>
        </mock:shadow-root>
        <p>This is a banner.</p>
      </gcds-phase-banner>
    `);
  });

  it('renders max content width md', async () => {
    const page = await newSpecPage({
      components: [GcdsPhaseBanner],
      html: `<gcds-phase-banner max-content-width="md"><p>This is a banner.</p></gcds-phase-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-phase-banner max-content-width="md">
        <mock:shadow-root>
          <div aria-label="Banner" class="gcds-phase-banner banner--role-primary" role="status">
            <div class="banner__content container-md">
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
          </div>
        </mock:shadow-root>
        <p>This is a banner.</p>
      </gcds-phase-banner>
    `);
  });

  it('renders max content width sm', async () => {
    const page = await newSpecPage({
      components: [GcdsPhaseBanner],
      html: `<gcds-phase-banner max-content-width="sm"><p>This is a banner.</p></gcds-phase-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-phase-banner max-content-width="sm">
        <mock:shadow-root>
          <div aria-label="Banner" class="gcds-phase-banner banner--role-primary" role="status">
            <div class="banner__content container-sm">
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
          </div>
        </mock:shadow-root>
        <p>This is a banner.</p>
      </gcds-phase-banner>
    `);
  });

  it('renders max content width xs', async () => {
    const page = await newSpecPage({
      components: [GcdsPhaseBanner],
      html: `<gcds-phase-banner max-content-width="xs"><p>This is a banner.</p></gcds-phase-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-phase-banner max-content-width="xs">
        <mock:shadow-root>
          <div aria-label="Banner" class="gcds-phase-banner banner--role-primary" role="status">
            <div class="banner__content container-xs">
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
          </div>
        </mock:shadow-root>
        <p>This is a banner.</p>
      </gcds-phase-banner>
    `);
  });
});
