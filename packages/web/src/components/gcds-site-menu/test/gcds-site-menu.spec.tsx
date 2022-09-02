import { newSpecPage } from '@stencil/core/testing';

jest.mock('../utils/module.min', () => ({
  h2MenuAddUpDownArrowsToMainMenuItems: jest.fn(),
  h2MenuTabOrder: jest.fn(),
  h2MenuAddRightArrowToMainMenuItems: jest.fn(),
  h2MenuEnableSubmenuTriggers: jest.fn(),
  h2MenuAddMobileMenuTrigger: jest.fn(),
  h2MenuAddPageAnchor: jest.fn(),
  menuEnableBackButtonTriggers: jest.fn(),
}));

import './matchMedia.mock';
import { GcdsSiteMenu } from '../gcds-site-menu';

describe('gcds-site-menu', () => {
  it('renders - English', async () => {
    const page = await newSpecPage({
      components: [GcdsSiteMenu],
      html: `<gcds-site-menu lang="en"></gcds-site-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-site-menu data-h2-menu-wrapper lang="en" menu-desktop-layout="topbar" menu-mobile-layout="drawer">
        <mock:shadow-root>
          <gcds-button aria-expanded="false" aria-haspopup="true" aria-label="Use the enter key to open or close the main menu." data-h2-mobile-menu-trigger role="button" button-role="primary" button-type="button">
            <span data-h2-mobile-menu-trigger-open-label>
              Menu
            </span>
            <span data-h2-mobile-menu-trigger-close-label>
              Close
            </span>
          </gcds-button>
          <nav aria-label="Main navigation - Use the enter key to select a menu item and travel to its page. Use the left and right arrow keys to navigate between menu and submenu items. Use the right arrow key to open submenus when they are available. Use the left arrow or escape keys to close a menu." data-h2-menu>
            <div data-h2-menu-container data-mobile>
              <slot></slot>
            </div>
          </nav>
          <slot name="main"></slot>
        </mock:shadow-root>
      </gcds-site-menu>
    `);
  });
  it('renders - French', async () => {
    const page = await newSpecPage({
      components: [GcdsSiteMenu],
      html: `<gcds-site-menu lang="fr"></gcds-site-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-site-menu data-h2-menu-wrapper lang="fr" menu-desktop-layout="topbar" menu-mobile-layout="drawer">
        <mock:shadow-root>
          <gcds-button aria-expanded="false" aria-haspopup="true" aria-label="Utiliser la touche Entrée pour ouvrir ou fermer le menu principal." data-h2-mobile-menu-trigger role="button" button-role="primary" button-type="button">
            <span data-h2-mobile-menu-trigger-open-label>
              Menu
            </span>
            <span data-h2-mobile-menu-trigger-close-label>
              Fermer
            </span>
          </gcds-button>
          <nav aria-label="Navigation principale - Utiliser la touche d'entrée pour sélectionner un élément du menu et voyager à la page indiquée. Utiliser les flèches gauches et droites pour naviguer entre les éléments et les sous-éléments du menu. Ouvrir les sous-éléments du menu avec la flèche droite lorsqu'il sont disponible. Fermer le menu avec la flèche gauche ou la touche d'échappement." data-h2-menu>
            <div data-h2-menu-container data-mobile>
              <slot></slot>
            </div>
          </nav>
          <slot name="main"></slot>
        </mock:shadow-root>
      </gcds-site-menu>
    `);
  });
  it('renders - Basic Menu - Topbar - English', async () => {
    const page = await newSpecPage({
      components: [GcdsSiteMenu],
      html: `
        <gcds-site-menu lang="en">
          <ul>
            <li>
              <a href="/page">Menu item 01</a>
            </li>
            <li>
              <a href="/page">Menu item 02</a>
            </li>
            <li>
              <a href="/page">Menu item 03</a>
              <ul>
                <li>
                  <a href="/page">SubMenu item 01</a>
                </li>
                <li>
                  <a href="/page">SubMenu item 02</a>
                </li>
                <li>
                  <a href="/page">SubMenu item 03</a>
                </li>
              </ul>
            </li>
          </ul>
        </gcds-site-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-site-menu data-h2-menu-wrapper lang="en" menu-desktop-layout="topbar" menu-mobile-layout="drawer">
        <mock:shadow-root>
          <gcds-button aria-expanded="false" aria-haspopup="true" aria-label="Use the enter key to open or close the main menu." data-h2-mobile-menu-trigger role="button" button-role="primary" button-type="button">
            <span data-h2-mobile-menu-trigger-open-label>
              Menu
            </span>
            <span data-h2-mobile-menu-trigger-close-label>
              Close
            </span>
          </gcds-button>
          <nav aria-label="Main navigation - Use the enter key to select a menu item and travel to its page. Use the left and right arrow keys to navigate between menu and submenu items. Use the right arrow key to open submenus when they are available. Use the left arrow or escape keys to close a menu." data-h2-menu>
            <div data-h2-menu-container data-mobile>
              <slot></slot>
              <ul data-h2-menulist role="menu">
                <li role="presentation">
                  <a href="/page" role="menuitem">
                    Menu item 01
                  </a>
                </li>
                <li role="presentation">
                  <a href="/page" role="menuitem">
                    Menu item 02
                  </a>
                </li>
                <li role="presentation">
                  <span  data-trigger-label id="submenu-label-0">
                    Menu item 03
                  </span>
                  <ul data-h2-menulist role="menu">
                    <li role="presentation">
                      <a href="/page" role="menuitem">
                        SubMenu item 01
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="/page" role="menuitem">
                        SubMenu item 02
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="/page" role="menuitem">
                        SubMenu item 03
                      </a>
                    </li>
                  </ul>
                  <button aria-expanded="false" aria-haspopup="true" aria-labelledby="submenu-label-0" data-h2-submenu-trigger>
                    <span data-h2-submenu-trigger-accessibility-text>
                      Open or close Menu item 03's submenu.
                    </span>
                    <span aria-hidden="true" data-h2-submenu-trigger-add-icon>
                      <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.246399 1.38667L4.85966 5.99993L0.246399 10.6132L1.63321 12L7.63314 6.00007L1.63321 0.000137329L0.246399 1.38667Z" />
                      </svg>
                    </span>
                    <span aria-hidden="true" data-h2-submenu-trigger-remove-icon>
                      <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.63306 10.6135L3.0198 6.00021L7.63306 1.38695L6.24624 0.000139115L0.246312 6.00007L6.24624 12L7.63306 10.6135Z" />
                      </svg>
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </nav>
          <slot name="main"></slot>
        </mock:shadow-root>
      </gcds-site-menu>
    `);
  });
  it('renders - Basic Menu - Sidebar - English', async () => {
    const page = await newSpecPage({
      components: [GcdsSiteMenu],
      html: `
        <gcds-site-menu menu-desktop-layout="sidebar" lang="en">
          <ul>
            <li>
              <a href="/page">Menu item 01</a>
            </li>
            <li>
              <a href="/page">Menu item 02</a>
            </li>
            <li>
              <a href="/page">Menu item 03</a>
              <ul>
                <li>
                  <a href="/page">SubMenu item 01</a>
                </li>
                <li>
                  <a href="/page">SubMenu item 02</a>
                </li>
                <li>
                  <a href="/page">SubMenu item 03</a>
                </li>
              </ul>
            </li>
          </ul>
        </gcds-site-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-site-menu data-h2-menu-wrapper lang="en" menu-desktop-layout="sidebar" menu-mobile-layout="drawer">
        <mock:shadow-root>
          <gcds-button aria-expanded="false" aria-haspopup="true" aria-label="Use the enter key to open or close the main menu." data-h2-mobile-menu-trigger role="button" button-role="primary" button-type="button">
            <span data-h2-mobile-menu-trigger-open-label>
              Menu
            </span>
            <span data-h2-mobile-menu-trigger-close-label>
              Close
            </span>
          </gcds-button>
          <nav aria-label="Main navigation - Use the enter key to select a menu item and travel to its page. Use the left and right arrow keys to navigate between menu and submenu items. Use the right arrow key to open submenus when they are available. Use the left arrow or escape keys to close a menu." data-h2-menu>
            <div data-h2-menu-container data-mobile>
              <slot></slot>
              <ul data-h2-menulist role="menu">
                <li role="presentation">
                  <a href="/page" role="menuitem">
                    Menu item 01
                  </a>
                </li>
                <li role="presentation">
                  <a href="/page" role="menuitem">
                    Menu item 02
                  </a>
                </li>
                <li role="presentation">
                  <span data-trigger-label id="submenu-label-0">
                    Menu item 03
                  </span>
                  <ul data-h2-menulist role="menu">
                    <li role="presentation">
                      <button data-back-button>
                        Back
                      </button>
                    </li>
                    <li role="presentation">
                      <a href="/page" role="menuitem">
                        SubMenu item 01
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="/page" role="menuitem">
                        SubMenu item 02
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="/page" role="menuitem">
                        SubMenu item 03
                      </a>
                    </li>
                  </ul>
                  <button aria-expanded="false" aria-haspopup="true" aria-labelledby="submenu-label-0" data-h2-submenu-trigger>
                    <span data-h2-submenu-trigger-accessibility-text>
                      Open or close Menu item 03's submenu.
                    </span>
                    <span aria-hidden="true" data-h2-submenu-trigger-add-icon>
                      <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.246399 1.38667L4.85966 5.99993L0.246399 10.6132L1.63321 12L7.63314 6.00007L1.63321 0.000137329L0.246399 1.38667Z" />
                      </svg>
                    </span>
                    <span aria-hidden="true" data-h2-submenu-trigger-remove-icon>
                      <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.63306 10.6135L3.0198 6.00021L7.63306 1.38695L6.24624 0.000139115L0.246312 6.00007L6.24624 12L7.63306 10.6135Z" />
                      </svg>
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </nav>
          <div data-sidebar-backdrop hidden=""></div>
          <slot name="main"></slot>
        </mock:shadow-root>
      </gcds-site-menu>
    `);
  });
  it('renders - Basic Menu - Sidebar - French', async () => {
    const page = await newSpecPage({
      components: [GcdsSiteMenu],
      html: `
        <gcds-site-menu menu-desktop-layout="sidebar" lang="fr">
          <ul>
            <li>
              <a href="/page">Menu item 01</a>
            </li>
            <li>
              <a href="/page">Menu item 02</a>
            </li>
            <li>
              <a href="/page">Menu item 03</a>
              <ul>
                <li>
                  <a href="/page">SubMenu item 01</a>
                </li>
                <li>
                  <a href="/page">SubMenu item 02</a>
                </li>
                <li>
                  <a href="/page">SubMenu item 03</a>
                </li>
              </ul>
            </li>
          </ul>
        </gcds-site-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-site-menu data-h2-menu-wrapper lang="fr" menu-desktop-layout="sidebar" menu-mobile-layout="drawer">
        <mock:shadow-root>
          <gcds-button aria-expanded="false" aria-haspopup="true" aria-label="Utiliser la touche Entrée pour ouvrir ou fermer le menu principal." data-h2-mobile-menu-trigger role="button" button-role="primary" button-type="button">
            <span data-h2-mobile-menu-trigger-open-label>
              Menu
            </span>
            <span data-h2-mobile-menu-trigger-close-label>
              Fermer
            </span>
          </gcds-button>
          <nav aria-label="Navigation principale - Utiliser la touche d'entrée pour sélectionner un élément du menu et voyager à la page indiquée. Utiliser les flèches gauches et droites pour naviguer entre les éléments et les sous-éléments du menu. Ouvrir les sous-éléments du menu avec la flèche droite lorsqu'il sont disponible. Fermer le menu avec la flèche gauche ou la touche d'échappement." data-h2-menu>
            <div data-h2-menu-container data-mobile>
              <slot></slot>
              <ul data-h2-menulist role="menu">
                <li role="presentation">
                  <a href="/page" role="menuitem">
                    Menu item 01
                  </a>
                </li>
                <li role="presentation">
                  <a href="/page" role="menuitem">
                    Menu item 02
                  </a>
                </li>
                <li role="presentation">
                  <span data-trigger-label id="submenu-label-0">
                    Menu item 03
                  </span>
                  <ul data-h2-menulist role="menu">
                    <li role="presentation">
                      <button data-back-button>
                        Retour
                      </button>
                    </li>
                    <li role="presentation">
                      <a href="/page" role="menuitem">
                        SubMenu item 01
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="/page" role="menuitem">
                        SubMenu item 02
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="/page" role="menuitem">
                        SubMenu item 03
                      </a>
                    </li>
                  </ul>
                  <button aria-expanded="false" aria-haspopup="true" aria-labelledby="submenu-label-0" data-h2-submenu-trigger>
                    <span data-h2-submenu-trigger-accessibility-text>
                      Ouvrir ou fermer l'élément du sous-menu Menu item 03.
                    </span>
                    <span aria-hidden="true" data-h2-submenu-trigger-add-icon>
                      <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.246399 1.38667L4.85966 5.99993L0.246399 10.6132L1.63321 12L7.63314 6.00007L1.63321 0.000137329L0.246399 1.38667Z" />
                      </svg>
                    </span>
                    <span aria-hidden="true" data-h2-submenu-trigger-remove-icon>
                      <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.63306 10.6135L3.0198 6.00021L7.63306 1.38695L6.24624 0.000139115L0.246312 6.00007L6.24624 12L7.63306 10.6135Z" />
                      </svg>
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </nav>
          <div data-sidebar-backdrop hidden=""></div>
          <slot name="main"></slot>
        </mock:shadow-root>
      </gcds-site-menu>
    `);
  });
});
