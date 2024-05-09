import { newSpecPage } from '@stencil/core/testing';
import { GcdsSideNav } from '../gcds-side-nav';

import '../../../utils/test/matchMedia.mock';

describe('gcds-side-nav', () => {
  it('renders - english', async () => {
    const page = await newSpecPage({
      components: [GcdsSideNav],
      html: `<gcds-side-nav label="Side-nav"></gcds-side-nav>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-side-nav label="Side-nav">
        <mock:shadow-root>
          <nav class="gcds-side-nav" aria-label="Side-nav - Use the enter key to select a menu item and travel to its page. Use the left and right arrow keys to navigate between menu and submenu items. Use the right arrow key to open submenus when they are available. Use the left arrow or escape keys to close a menu.">
            <h2 class="gcds-side-nav__heading">
              Side-nav
            </h2>
            <ul>
              <gcds-nav-group class="gcds-mobile-nav" menuLabel="Menu" closeTrigger="Close" openTrigger="Menu" lang="en">
                <slot></slot>
              </gcds-nav-group>
            </ul>
          </nav>
        </mock:shadow-root>
      </gcds-side-nav>
    `);
  });
  it('renders - french', async () => {
    const page = await newSpecPage({
      components: [GcdsSideNav],
      html: `<gcds-side-nav label="Side-nav" lang="fr"></gcds-side-nav>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-side-nav label="Side-nav" lang="fr">
        <mock:shadow-root>
          <nav class="gcds-side-nav" aria-label="Side-nav - Utiliser la touche d'entrée pour sélectionner un élément du menu et voyager à la page indiquée. Utiliser les flèches gauches et droites pour naviguer entre les éléments et les sous-éléments du menu. Ouvrir les sous-éléments du menu avec la flèche droite lorsqu'il sont disponible. Fermer le menu avec la flèche gauche ou la touche d'échappement.">
            <h2 class="gcds-side-nav__heading">
              Side-nav
            </h2>
            <ul>
              <gcds-nav-group class="gcds-mobile-nav" menuLabel="Menu" closeTrigger="Fermer" openTrigger="Menu" lang="fr">
                <slot></slot>
              </gcds-nav-group>
            </ul>
          </nav>
        </mock:shadow-root>
      </gcds-side-nav>
    `);
  });
});
