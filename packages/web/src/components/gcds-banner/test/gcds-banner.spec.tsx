import { newSpecPage } from '@stencil/core/testing';
import { GcdsBanner } from '../gcds-banner';

describe('gcds-banner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsBanner],
      html: `<gcds-banner></gcds-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-banner>
        <mock:shadow-root>
          <div aria-label="Banner" class="gcds-banner role-primary" role="status">
            <div class="banner-content container-lg">
              <figure class="banner-icon icon-left">
                <slot name="banner-icon-left"></slot>
              </figure>

              <div class="banner-details">
                <p><slot name="banner-text"></slot></p>
                <slot name="banner-cta"></slot>
              </div>

              <figure class="banner-icon icon-right">
                <slot name="banner-icon-right"></slot>
              </figure>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-banner>
    `);
  });

  /**
    * Role tests
    */

  it('renders banner-role="primary"', async () => {
    const page = await newSpecPage({
      components: [GcdsBanner],
      html: `<gcds-banner banner-role="primary"></gcds-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-banner banner-role="primary">
        <mock:shadow-root>
          <div aria-label="Banner" class="gcds-banner role-primary" role="status">
            <div class="banner-content container-lg">
              <figure class="banner-icon icon-left">
                <slot name="banner-icon-left"></slot>
              </figure>

              <div class="banner-details">
                <p><slot name="banner-text"></slot></p>
                <slot name="banner-cta"></slot>
              </div>

              <figure class="banner-icon icon-right">
                <slot name="banner-icon-right"></slot>
              </figure>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-banner>
    `);
  });

  it('renders banner-role="secondary"', async () => {
    const page = await newSpecPage({
      components: [GcdsBanner],
      html: `<gcds-banner banner-role="secondary"></gcds-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-banner banner-role="secondary">
        <mock:shadow-root>
          <div aria-label="Banner" class="gcds-banner role-secondary" role="status">
            <div class="banner-content container-lg">
              <figure class="banner-icon icon-left">
                <slot name="banner-icon-left"></slot>
              </figure>

              <div class="banner-details">
                <p><slot name="banner-text"></slot></p>
                <slot name="banner-cta"></slot>
              </div>

              <figure class="banner-icon icon-right">
                <slot name="banner-icon-right"></slot>
              </figure>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-banner>
    `);
  });

  /**
    * Fixed position test
    */

  it('renders fixed position', async () => {
    const page = await newSpecPage({
      components: [GcdsBanner],
      html: `<gcds-banner position-fixed></gcds-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-banner position-fixed>
        <mock:shadow-root>
          <div aria-label="Banner" class="gcds-banner role-primary is-fixed" role="status">
            <div class="banner-content container-lg">
              <figure class="banner-icon icon-left">
                <slot name="banner-icon-left"></slot>
              </figure>

              <div class="banner-details">
                <p><slot name="banner-text"></slot></p>
                <slot name="banner-cta"></slot>
              </div>

              <figure class="banner-icon icon-right">
                <slot name="banner-icon-right"></slot>
              </figure>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-banner>
    `);
  });

  /**
    * Max content width tests
    */

  it('renders max content width fluid', async () => {
    const page = await newSpecPage({
      components: [GcdsBanner],
      html: `<gcds-banner max-content-width="fluid"></gcds-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-banner max-content-width="fluid">
        <mock:shadow-root>
          <div aria-label="Banner" class="gcds-banner role-primary" role="status">
            <div class="banner-content container-fluid">
              <figure class="banner-icon icon-left">
                <slot name="banner-icon-left"></slot>
              </figure>

              <div class="banner-details">
                <p><slot name="banner-text"></slot></p>
                <slot name="banner-cta"></slot>
              </div>

              <figure class="banner-icon icon-right">
                <slot name="banner-icon-right"></slot>
              </figure>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-banner>
    `);
  });

  it('renders max content width lg', async () => {
    const page = await newSpecPage({
      components: [GcdsBanner],
      html: `<gcds-banner max-content-width="lg"></gcds-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-banner max-content-width="lg">
        <mock:shadow-root>
          <div aria-label="Banner" class="gcds-banner role-primary" role="status">
            <div class="banner-content container-lg">
              <figure class="banner-icon icon-left">
                <slot name="banner-icon-left"></slot>
              </figure>

              <div class="banner-details">
                <p><slot name="banner-text"></slot></p>
                <slot name="banner-cta"></slot>
              </div>

              <figure class="banner-icon icon-right">
                <slot name="banner-icon-right"></slot>
              </figure>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-banner>
    `);
  });

  it('renders max content width md', async () => {
    const page = await newSpecPage({
      components: [GcdsBanner],
      html: `<gcds-banner max-content-width="md"></gcds-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-banner max-content-width="md">
        <mock:shadow-root>
          <div aria-label="Banner" class="gcds-banner role-primary" role="status">
            <div class="banner-content container-md">
              <figure class="banner-icon icon-left">
                <slot name="banner-icon-left"></slot>
              </figure>

              <div class="banner-details">
                <p><slot name="banner-text"></slot></p>
                <slot name="banner-cta"></slot>
              </div>

              <figure class="banner-icon icon-right">
                <slot name="banner-icon-right"></slot>
              </figure>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-banner>
    `);
  });

  it('renders max content width sm', async () => {
    const page = await newSpecPage({
      components: [GcdsBanner],
      html: `<gcds-banner max-content-width="sm"></gcds-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-banner max-content-width="sm">
        <mock:shadow-root>
          <div aria-label="Banner" class="gcds-banner role-primary" role="status">
            <div class="banner-content container-sm">
              <figure class="banner-icon icon-left">
                <slot name="banner-icon-left"></slot>
              </figure>

              <div class="banner-details">
                <p><slot name="banner-text"></slot></p>
                <slot name="banner-cta"></slot>
              </div>

              <figure class="banner-icon icon-right">
                <slot name="banner-icon-right"></slot>
              </figure>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-banner>
    `);
  });

  it('renders max content width xs', async () => {
    const page = await newSpecPage({
      components: [GcdsBanner],
      html: `<gcds-banner max-content-width="xs"></gcds-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-banner max-content-width="xs">
        <mock:shadow-root>
          <div aria-label="Banner" class="gcds-banner role-primary" role="status">
            <div class="banner-content container-xs">
              <figure class="banner-icon icon-left">
                <slot name="banner-icon-left"></slot>
              </figure>

              <div class="banner-details">
                <p><slot name="banner-text"></slot></p>
                <slot name="banner-cta"></slot>
              </div>

              <figure class="banner-icon icon-right">
                <slot name="banner-icon-right"></slot>
              </figure>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-banner>
    `);
  });
});
