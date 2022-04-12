import { newSpecPage } from '@stencil/core/testing';
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
            <div data-h2-menu-container>
              <div data-optional-left>
                <slot name="left"></slot>
              </div>
              <slot></slot>
              <div data-optional-right>
                <slot name="right"></slot>
              </div>
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
            <div data-h2-menu-container>
              <div data-optional-left>
                <slot name="left"></slot>
              </div>
              <slot></slot>
              <div data-optional-right>
                <slot name="right"></slot>
              </div>
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
            <div data-h2-menu-container>
              <div data-optional-left>
                <slot name="left"></slot>
              </div>
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
                  <a aria-expanded="false" aria-haspopup="true" href="/page" role="menuitem">
                    Menu item 03
                  </a>
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
                  <button aria-expanded="false" data-h2-submenu-trigger>
                    <span data-h2-submenu-trigger-accessibility-text>
                      Open or close Menu item 03's submenu.
                    </span>
                    <span aria-hidden="true" data-h2-submenu-trigger-add-icon>
                      +
                    </span>
                    <span aria-hidden="true" data-h2-submenu-trigger-remove-icon>
                      -
                    </span>
                  </button>
                </li>
              </ul>
              <div data-optional-right>
                <slot name="right"></slot>
              </div>
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
            <div data-h2-menu-container>
              <div data-optional-left>
                <slot name="left"></slot>
              </div>
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
                  <a aria-expanded="false" aria-haspopup="true" href="/page" role="menuitem">
                    Menu item 03
                  </a>
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
                  <button aria-expanded="false" data-h2-submenu-trigger>
                    <span data-h2-submenu-trigger-accessibility-text>
                      Open or close Menu item 03's submenu.
                    </span>
                    <span aria-hidden="true" data-h2-submenu-trigger-add-icon>
                      +
                    </span>
                    <span aria-hidden="true" data-h2-submenu-trigger-remove-icon>
                      -
                    </span>
                  </button>
                </li>
              </ul>
              <div data-optional-right>
                <slot name="right"></slot>
              </div>
            </div>
          </nav>
          <slot name="main"></slot>
        </mock:shadow-root>
      </gcds-site-menu>
    `);
  });
});
