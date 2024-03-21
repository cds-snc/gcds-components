import { newSpecPage } from '@stencil/core/testing';
import { GcdsTopNav } from '../gcds-top-nav';

import '../../../utils/test/matchMedia.mock';

describe('gcds-top-nav', () => {
  it('renders - english', async () => {
    const page = await newSpecPage({
      components: [GcdsTopNav],
      html: `<gcds-top-nav label="top-nav"></gcds-top-nav>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-top-nav label="top-nav">
        <mock:shadow-root>
          <div class="gcds-top-nav">
            <nav aria-label="top-nav - Use the enter key to select a menu item and travel to its page. Use the left and right arrow keys to navigate between menu and submenu items. Use the right arrow key to open submenus when they are available. Use the left arrow or escape keys to close a menu.">
              <ul class="gcds-top-nav__container">
                <gcds-nav-group class="gcds-mobile-nav gcds-mobile-nav-topnav" menuLabel="Menu" closeTrigger="Close" openTrigger="Menu" lang="en">
                  <slot name="home"></slot>
                  <li class="nav-container__list nav-list--left">
                    <ul class="nav-container__list nav-list--left">
                      <slot></slot>
                    </ul>
                  </li>
                </gcds-nav-group>
              </ul>
            </nav>
          </div>
        </mock:shadow-root>
      </gcds-top-nav>
    `);
  });
  it('renders - french', async () => {
    const page = await newSpecPage({
      components: [GcdsTopNav],
      html: `<gcds-top-nav label="top-nav" lang="fr"></gcds-top-nav>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-top-nav label="top-nav" lang="fr">
        <mock:shadow-root>
          <div class="gcds-top-nav">
            <nav aria-label="top-nav - Utiliser la touche d'entrée pour sélectionner un élément du menu et voyager à la page indiquée. Utiliser les flèches gauches et droites pour naviguer entre les éléments et les sous-éléments du menu. Ouvrir les sous-éléments du menu avec la flèche droite lorsqu'il sont disponible. Fermer le menu avec la flèche gauche ou la touche d'échappement.">
              <ul class="gcds-top-nav__container">
                <gcds-nav-group class="gcds-mobile-nav gcds-mobile-nav-topnav" menuLabel="Menu" closeTrigger="Fermer" openTrigger="Menu" lang="fr">
                  <slot name="home"></slot>
                  <li class="nav-container__list nav-list--left">
                    <ul class="nav-container__list nav-list--left">
                      <slot></slot>
                    </ul>
                  </li>
                </gcds-nav-group>
              </ul>
            </nav>
          </div>
        </mock:shadow-root>
      </gcds-top-nav>
    `);
  });

  it('renders w/ alignment="center"', async () => {
    const page = await newSpecPage({
      components: [GcdsTopNav],
      html: `<gcds-top-nav label="top-nav" alignment="center"></gcds-top-nav>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-top-nav label="top-nav" alignment="center">
        <mock:shadow-root>
          <div class="gcds-top-nav">
            <nav aria-label="top-nav - Use the enter key to select a menu item and travel to its page. Use the left and right arrow keys to navigate between menu and submenu items. Use the right arrow key to open submenus when they are available. Use the left arrow or escape keys to close a menu.">
              <ul class="gcds-top-nav__container">
                <gcds-nav-group class="gcds-mobile-nav gcds-mobile-nav-topnav" menuLabel="Menu" closeTrigger="Close" openTrigger="Menu" lang="en">
                  <slot name="home"></slot>
                  <li class="nav-container__list nav-list--center">
                    <ul class="nav-container__list nav-list--center">
                      <slot></slot>
                    </ul>
                  </li>
                </gcds-nav-group>
              </ul>
            </nav>
          </div>
        </mock:shadow-root>
      </gcds-top-nav>
    `);
  });
  it('renders w/ alignment="right"', async () => {
    const page = await newSpecPage({
      components: [GcdsTopNav],
      html: `<gcds-top-nav label="top-nav" alignment="right"></gcds-top-nav>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-top-nav label="top-nav" alignment="right">
        <mock:shadow-root>
          <div class="gcds-top-nav">
            <nav aria-label="top-nav - Use the enter key to select a menu item and travel to its page. Use the left and right arrow keys to navigate between menu and submenu items. Use the right arrow key to open submenus when they are available. Use the left arrow or escape keys to close a menu.">
              <ul class="gcds-top-nav__container">
                <gcds-nav-group class="gcds-mobile-nav gcds-mobile-nav-topnav" menuLabel="Menu" closeTrigger="Close" openTrigger="Menu" lang="en">
                  <slot name="home"></slot>
                  <li class="nav-container__list nav-list--right">
                    <ul class="nav-container__list nav-list--right">
                      <slot></slot>
                    </ul>
                  </li>
                </gcds-nav-group>
              </ul>
            </nav>
          </div>
        </mock:shadow-root>
      </gcds-top-nav>
    `);
  });
});
