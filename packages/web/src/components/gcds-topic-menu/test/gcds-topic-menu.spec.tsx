import { newSpecPage } from '@stencil/core/testing';
import { GcdsTopicMenu } from '../gcds-topic-menu';

import '../../../utils/test/matchMedia.mock';

describe('gcds-topic-menu', () => {
  it('renders - English', async () => {
    const page = await newSpecPage({
      components: [GcdsTopicMenu],
      html: `<gcds-topic-menu></gcds-topic-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-topic-menu>
        <mock:shadow-root>
          <nav class="gcds-topic-menu" aria-labelledby="gcds-topic-menu__heading">
            <gcds-sr-only id="gcds-topic-menu__heading" tag="h2">
              Main menu
            </gcds-sr-only>
            <button aria-expanded="false" aria-haspopup="true" aria-label="Press the SPACEBAR to expand or the escape key to collapse this menu. Use the Up and Down arrow keys to choose a submenu item. Press the Enter or Right arrow key to expand it, or the Left arrow or Escape key to collapse it. Use the Up and Down arrow keys to choose an item on that level and the Enter key to access it.">
              <gcds-sr-only tag="span">
                Main
              </gcds-sr-only>
              Menu
              <gcds-icon margin-left="150" name="chevron-down" size="caption"></gcds-icon>
            </button>
            <ul aria-orientation="vertical" data-top-menu role="menu">
              <li role="presentation">
                <a aria-controls="gc-mnu-jobs" aria-expanded="false" aria-haspopup="true" href="#" role="menuitem" tabindex="-1">
                  Jobs and the workplace
                </a>
                <ul aria-orientation="vertical" id="gc-mnu-jobs" role="menu">
                  <li role="presentation">
                    <a href="#" role="menuitem" tabindex="-1">
                      Jobs
                      <span class="visible-sm-inline visible-xs-inline">
                        : home
                      </span>
                    </a>
                  </li>
                  <li role="separator"></li>
                  <li role="presentation">
                    <a href="#" role="menuitem" tabindex="-1">
                      Find a job
                    </a>
                  </li>
                  <li role="presentation">
                    <a href="#" role="menuitem" tabindex="-1">
                      Training
                    </a>
                  </li>
                  <li aria-orientation="vertical" role="separator"></li>
                  <li role="presentation">
                    <a aria-controls="gc-mnu-jobs-sub" aria-expanded="true" aria-haspopup="true" data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1">
                      Most requested
                    </a>
                    <ul aria-orientation="vertical" id="gc-mnu-jobs-sub" role="menu">
                      <li role="presentation">
                        <a href="#" role="menuitem" tabindex="-1">
                          View your Records of Employment
                        </a>
                      </li>
                      <li role="presentation">
                        <a href="#" role="menuitem" tabindex="-1">
                          Apply for a Social Insurance Number (SIN)
                        </a>
                      </li>
                      <li role="presentation">
                        <a href="#" role="menuitem" tabindex="-1">
                          Hire a temporary foreign worker
                        </a>
                      </li>
                      <li role="presentation">
                        <a href="#" role="menuitem" tabindex="-1">
                          Immigrate as a skilled worker
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </mock:shadow-root>
      </gcds-topic-menu>
    `);
  });
  it('renders - French', async () => {
    const page = await newSpecPage({
      components: [GcdsTopicMenu],
      html: `<gcds-topic-menu lang="fr"></gcds-topic-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-topic-menu lang="fr">
        <mock:shadow-root>
          <nav class="gcds-topic-menu" aria-labelledby="gcds-topic-menu__heading">
            <gcds-sr-only id="gcds-topic-menu__heading" tag="h2">
              Menu principal
            </gcds-sr-only>
            <button aria-expanded="false" aria-haspopup="true" aria-label="Appuyez sur la barre d'espacement pour ouvrir ou sur la touche d'échappement pour fermer le menu. Utilisez les flèches haut et bas pour choisir un élément de sous-menu. Appuyez sur la touche Entrée ou sur la flèche vers la droite pour le développer, ou sur la flèche vers la gauche ou la touche Échap pour le réduire. Utilisez les flèches haut et bas pour choisir un élément de ce niveau et la touche Entrée pour y accéder.">
              Menu
              <gcds-sr-only tag="span">
                principal
              </gcds-sr-only>
              <gcds-icon margin-left="150" name="chevron-down" size="caption"></gcds-icon>
            </button>
            <ul aria-orientation="vertical" data-top-menu role="menu">
              <li role="presentation">
                <a aria-controls="gc-mnu-jobs" aria-expanded="false" aria-haspopup="true" href="#" role="menuitem" tabindex="-1">
                  Jobs and the workplace
                </a>
                <ul aria-orientation="vertical" id="gc-mnu-jobs" role="menu">
                  <li role="presentation">
                    <a href="#" role="menuitem" tabindex="-1">
                      Jobs
                      <span class="visible-sm-inline visible-xs-inline">
                        : home
                      </span>
                    </a>
                  </li>
                  <li role="separator"></li>
                  <li role="presentation">
                    <a href="#" role="menuitem" tabindex="-1">
                      Find a job
                    </a>
                  </li>
                  <li role="presentation">
                    <a href="#" role="menuitem" tabindex="-1">
                      Training
                    </a>
                  </li>
                  <li aria-orientation="vertical" role="separator"></li>
                  <li role="presentation">
                    <a aria-controls="gc-mnu-jobs-sub" aria-expanded="true" aria-haspopup="true" data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1">
                      Most requested
                    </a>
                    <ul aria-orientation="vertical" id="gc-mnu-jobs-sub" role="menu">
                      <li role="presentation">
                        <a href="#" role="menuitem" tabindex="-1">
                          View your Records of Employment
                        </a>
                      </li>
                      <li role="presentation">
                        <a href="#" role="menuitem" tabindex="-1">
                          Apply for a Social Insurance Number (SIN)
                        </a>
                      </li>
                      <li role="presentation">
                        <a href="#" role="menuitem" tabindex="-1">
                          Hire a temporary foreign worker
                        </a>
                      </li>
                      <li role="presentation">
                        <a href="#" role="menuitem" tabindex="-1">
                          Immigrate as a skilled worker
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </mock:shadow-root>
      </gcds-topic-menu>
    `);
  });
  it('renders - Home', async () => {
    const page = await newSpecPage({
      components: [GcdsTopicMenu],
      html: `<gcds-topic-menu home></gcds-topic-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-topic-menu home>
        <mock:shadow-root>
          <nav class="gcds-topic-menu" aria-labelledby="gcds-topic-menu__heading">
            <gcds-sr-only id="gcds-topic-menu__heading" tag="h2">
              Main menu
            </gcds-sr-only>
            <button aria-expanded="false" aria-haspopup="true" class="gcds-topic-menu--home" aria-label="Press the SPACEBAR to expand or the escape key to collapse this menu. Use the Up and Down arrow keys to choose a submenu item. Press the Enter or Right arrow key to expand it, or the Left arrow or Escape key to collapse it. Use the Up and Down arrow keys to choose an item on that level and the Enter key to access it.">
              <gcds-sr-only tag="span">
                Main
              </gcds-sr-only>
              Menu
              <gcds-icon margin-left="150" name="chevron-down" size="caption"></gcds-icon>
            </button>
            <ul aria-orientation="vertical" data-top-menu role="menu">
              <li role="presentation">
                <a aria-controls="gc-mnu-jobs" aria-expanded="false" aria-haspopup="true" href="#" role="menuitem" tabindex="-1">
                  Jobs and the workplace
                </a>
                <ul aria-orientation="vertical" id="gc-mnu-jobs" role="menu">
                  <li role="presentation">
                    <a href="#" role="menuitem" tabindex="-1">
                      Jobs
                      <span class="visible-sm-inline visible-xs-inline">
                        : home
                      </span>
                    </a>
                  </li>
                  <li role="separator"></li>
                  <li role="presentation">
                    <a href="#" role="menuitem" tabindex="-1">
                      Find a job
                    </a>
                  </li>
                  <li role="presentation">
                    <a href="#" role="menuitem" tabindex="-1">
                      Training
                    </a>
                  </li>
                  <li aria-orientation="vertical" role="separator"></li>
                  <li role="presentation">
                    <a aria-controls="gc-mnu-jobs-sub" aria-expanded="true" aria-haspopup="true" data-keep-expanded="md-min" href="#" role="menuitem" tabindex="-1">
                      Most requested
                    </a>
                    <ul aria-orientation="vertical" id="gc-mnu-jobs-sub" role="menu">
                      <li role="presentation">
                        <a href="#" role="menuitem" tabindex="-1">
                          View your Records of Employment
                        </a>
                      </li>
                      <li role="presentation">
                        <a href="#" role="menuitem" tabindex="-1">
                          Apply for a Social Insurance Number (SIN)
                        </a>
                      </li>
                      <li role="presentation">
                        <a href="#" role="menuitem" tabindex="-1">
                          Hire a temporary foreign worker
                        </a>
                      </li>
                      <li role="presentation">
                        <a href="#" role="menuitem" tabindex="-1">
                          Immigrate as a skilled worker
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </mock:shadow-root>
      </gcds-topic-menu>
    `);
  });
});
