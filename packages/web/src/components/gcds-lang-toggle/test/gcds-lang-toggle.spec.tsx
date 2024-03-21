import { newSpecPage } from '@stencil/core/testing';
import { GcdsLangToggle } from '../gcds-lang-toggle';

describe('gcds-lang-toggle', () => {
  it('renders English', async () => {
    const page = await newSpecPage({
      components: [GcdsLangToggle],
      html: `<gcds-lang-toggle href="/fr/" lang="en"></gcds-lang-toggle>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-lang-toggle href="/fr/" lang="en">
        <mock:shadow-root>
          <nav aria-labelledby="lang-toggle__heading">
            <gcds-sr-only id="lang-toggle__heading" tag="h2">
              Language selection
            </gcds-sr-only>
            <a href="/fr/" lang="fr">
              <span>Français</span>
              <abbr title="Français">fr</abbr>
            </a>
          </nav>
        </mock:shadow-root>
      </gcds-lang-toggle>
    `);
  });

  it('renders French', async () => {
    const page = await newSpecPage({
      components: [GcdsLangToggle],
      html: `<gcds-lang-toggle href="/en/" lang="fr"></gcds-lang-toggle>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-lang-toggle href="/en/" lang="fr">
        <mock:shadow-root>
          <nav aria-labelledby="lang-toggle__heading">
            <gcds-sr-only id="lang-toggle__heading" tag="h2">
              Sélection de la langue
            </gcds-sr-only>
            <a href="/en/" lang="en">
              <span>English</span>
              <abbr title="English">en</abbr>
            </a>
          </nav>
        </mock:shadow-root>
      </gcds-lang-toggle>
    `);
  });
});
