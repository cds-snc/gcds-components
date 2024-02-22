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
        <div class="gcds-lang-toggle">
          <h2>Language Selection</h2>
          <gcds-link href="/fr/" lang="fr">
            <span>Français</span>
            <abbr title="Français">fr</abbr>
          </gcds-link>
        </div>
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
        <div class="gcds-lang-toggle">
          <h2>Sélection de la langue</h2>
          <gcds-link href="/en/" lang="en">
            <span>English</span>
            <abbr title="English">en</abbr>
          </gcds-link>
        </div>
        </mock:shadow-root>
      </gcds-lang-toggle>
    `);
  });
});
