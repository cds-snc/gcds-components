import { newSpecPage } from '@stencil/core/testing';
import { GcdsBreadcrumbs } from '../gcds-breadcrumbs';

describe('gcds-breadcrumbs', () => {
  it('renders - English', async () => {
    const page = await newSpecPage({
      components: [GcdsBreadcrumbs],
      html: `
        <gcds-breadcrumbs>
          <gcds-breadcrumbs-item href="/contact">
            Contact
          </gcds-breadcrumbs-item>
        </gcds-breadcrumbs>
      `,
    });
    expect(page.root).toEqualHtml(`
      <gcds-breadcrumbs>
        <mock:shadow-root>
          <nav aria-label="Breadcrumb" class="gcds-breadcrumbs">
            <ol class="has-canada-link">
              <gcds-breadcrumbs-item href="https://www.canada.ca/en.html">
                Canada.ca
              </gcds-breadcrumbs-item>
              <slot></slot>
            </ol>
          </nav>
        </mock:shadow-root>
        <gcds-breadcrumbs-item href="/contact">
          Contact
        </gcds-breadcrumbs-item>
      </gcds-breadcrumbs>
    `);
  });

  it('renders - French', async () => {
    const page = await newSpecPage({
      components: [GcdsBreadcrumbs],
      html: `
        <gcds-breadcrumbs lang="fr">
          <gcds-breadcrumbs-item href="/contact">
            Contact
          </gcds-breadcrumbs-item>
        </gcds-breadcrumbs>
      `,
    });
    expect(page.root).toEqualHtml(`
      <gcds-breadcrumbs lang="fr">
        <mock:shadow-root>
          <nav aria-label="Chemin de navigation" class="gcds-breadcrumbs">
            <ol class="has-canada-link">
              <gcds-breadcrumbs-item href="https://www.canada.ca/fr.html">
                Canada.ca
              </gcds-breadcrumbs-item>
              <slot></slot>
            </ol>
          </nav>
        </mock:shadow-root>
        <gcds-breadcrumbs-item href="/contact">
          Contact
        </gcds-breadcrumbs-item>
      </gcds-breadcrumbs>
    `);
  });

  it('hide canada.ca link', async () => {
    const page = await newSpecPage({
      components: [GcdsBreadcrumbs],
      html: `
        <gcds-breadcrumbs hide-canada-link>
          <gcds-breadcrumbs-item href="/contact">
            Contact
          </gcds-breadcrumbs-item>
        </gcds-breadcrumbs>
      `,
    });
    expect(page.root).toEqualHtml(`
      <gcds-breadcrumbs hide-canada-link>
        <mock:shadow-root>
          <nav aria-label="Breadcrumb" class="gcds-breadcrumbs">
            <ol>
              <slot></slot>
            </ol>
          </nav>
        </mock:shadow-root>
        <gcds-breadcrumbs-item href="/contact">
          Contact
        </gcds-breadcrumbs-item>
      </gcds-breadcrumbs>
    `);
  });
});
