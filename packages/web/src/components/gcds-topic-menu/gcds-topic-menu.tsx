import {
  Component,
  Host,
  State,
  Method,
  Element,
  Listen,
  Fragment,
  Prop,
  h,
} from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';
import I18N from './i18n/i18n';
import backup from './backup/backup.min';

@Component({
  tag: 'gcds-topic-menu',
  styleUrl: 'gcds-topic-menu.css',
  shadow: true,
})
export class GcdsTopicMenu {
  @Element() el: HTMLGcdsTopicMenuElement;

  private listItems;

  private themeList?: HTMLElement;
  private menuButton?: HTMLElement;

  /**
   * Props
   */

  /**
   * Sets the homepage styling
   */
  @Prop() home: boolean = false;

  /**
   * States
   */

  /**
   * Open state of menu
   */
  @State() open = false;

  /**
   * Language of rendered component
   */
  @State() lang: string;

  /**
   * Queue of nav items for keyboard navigation
   */
  @State() navItems = [];

  /**
   * Current size based on window size
   */
  @State() navSize: 'desktop' | 'mobile';

  /**
   * Keyboard controls of theme and topic menu
   */
  @Listen('keydown', { target: 'document' })
  async keyDownListener(e) {
    if (
      this.el == document.activeElement &&
      this.themeList.contains(document.activeElement.shadowRoot.activeElement)
    ) {
      const key = e.key;
      const currentIndex = this.navItems.indexOf(
        document.activeElement.shadowRoot.activeElement,
      );
      const activeElement = this.navItems[currentIndex];

      switch (key) {
        case 'ArrowDown':
          e.preventDefault();
          // If on last item, jump to first item
          if (currentIndex + 1 > this.navItems.length - 1) {
            await this.focusMenuLink(this.navItems, activeElement, 0);
            // Jump to next item
          } else {
            await this.focusMenuLink(
              this.navItems,
              activeElement,
              currentIndex + 1,
            );
          }
          break;

        case 'ArrowUp':
          e.preventDefault();
          // If on first item, jump to last
          if (currentIndex - 1 < 0) {
            await this.focusMenuLink(
              this.navItems,
              activeElement,
              this.navItems.length - 1,
            );
            // Jump to next item
          } else {
            await this.focusMenuLink(
              this.navItems,
              activeElement,
              currentIndex - 1,
            );
          }
          break;

        case 'ArrowRight':
          e.preventDefault();

          // Theme links
          if (
            activeElement.hasAttribute('aria-haspopup') &&
            !activeElement.hasAttribute('data-keep-expanded')
          ) {
            await this.updateNavItemQueue(activeElement.parentNode.children[1]);
            activeElement.setAttribute('aria-expanded', 'true');
            this.navItems[0].focus();

            // Most requested link - desktop
          } else if (
            activeElement.hasAttribute('aria-haspopup') &&
            this.navSize == 'desktop'
          ) {
            await this.focusMenuLink(
              this.navItems,
              activeElement,
              currentIndex + 1,
            );

            // Most requested link - mobile
          } else if (
            activeElement.hasAttribute('aria-haspopup') &&
            this.navSize == 'mobile'
          ) {
            await this.updateNavItemQueue(activeElement.parentNode.children[1]);
            activeElement.setAttribute('aria-expanded', 'true');
            this.navItems[0].focus();
          }
          break;

        case 'Enter':
          if (activeElement.closest('ul').hasAttribute('data-top-menu')) {
            await this.updateNavItemQueue(activeElement.parentNode.children[1]);
            this.navItems[0].focus();
          }
          break;

        case 'ArrowLeft':
        case 'Escape': {
          e.preventDefault();
          const parentList = activeElement.closest('ul');

          // In most requested menu
          if (
            parentList.parentNode
              .querySelector('a')
              .hasAttribute('data-keep-expanded')
          ) {
            await this.updateNavItemQueue(parentList.parentNode.closest('ul'));
            await this.focusMenuLink(
              this.navItems,
              activeElement,
              this.navItems.indexOf(parentList.parentNode.querySelector('a')),
            );

            // on mobile, close expandable area
            if (this.navSize == 'mobile') {
              parentList.parentNode
                .querySelector('a')
                .setAttribute('aria-expanded', 'false');
            }

            // Exit menu
          } else if (parentList.parentNode.closest('ul')) {
            await this.updateNavItemQueue(parentList.parentNode.closest('ul'));
            await this.focusMenuLink(
              this.navItems,
              activeElement,
              this.navItems.indexOf(parentList.parentNode.querySelector('a')),
            );

            if (this.navSize == 'mobile') {
              parentList.parentNode
                .querySelector('a')
                .setAttribute('aria-expanded', 'false');
            }

            // Close theme and topic menu, focus menu button
          } else {
            this.menuButton.focus();
            await this.toggleNav();
          }
          break;
        }

        case 'Tab':
          await this.toggleNav();
          break;
      }
    }
  }

  /**
   * Close all theme menus
   */
  @Method()
  async closeAllMenus() {
    for (let x = 0; x < this.themeList.children.length; x++) {
      const themeLink = this.themeList.children[x].querySelector('a');
      themeLink.setAttribute('aria-expanded', 'false');
    }
  }

  /**
   * Toggle open theme and topic menu
   */
  @Method()
  async toggleNav() {
    this.open = !this.open;

    if (this.open) {
      // Check window size to set the state
      const mediaQuery = window.matchMedia('screen and (max-width: 991px)');
      const nav = this.el as HTMLGcdsTopicMenuElement;

      if (mediaQuery.matches) {
        this.navSize = 'mobile';
      } else {
        this.navSize = 'desktop';
      }

      // Add change event listener to keep track of window changing size
      mediaQuery.addEventListener('change', async e => {
        if (e.matches) {
          nav.updateNavSize('mobile');

          nav.shadowRoot
            .querySelectorAll('[data-keep-expanded]')
            .forEach(el => {
              el.setAttribute('aria-expanded', 'false');
            });
        } else {
          nav.updateNavSize('desktop');
          nav.shadowRoot
            .querySelectorAll('[data-keep-expanded]')
            .forEach(el => {
              el.setAttribute('aria-expanded', 'true');
            });
        }
      });

      if (this.navSize == 'desktop') {
        this.themeList.children[0].children[0].setAttribute(
          'aria-expanded',
          'true',
        );
      } else {
        // Close most requested on mobile
        this.el.shadowRoot
          .querySelectorAll('[data-keep-expanded]')
          .forEach(el => {
            el.setAttribute('aria-expanded', 'false');
          });
      }

      setTimeout(() => {
        this.themeList.children[0].querySelector('a').focus();
      }, 50);

      await this.updateNavItemQueue(this.themeList);
    } else {
      this.closeAllMenus();
    }
  }

  /*
   * Pass new window size: desktop or mobile
   */
  @Method()
  async updateNavSize(size) {
    this.navSize = size;
  }

  /*
   * Get current navSize state
   */
  @Method()
  async getNavSize() {
    return this.navSize;
  }

  /**
   * Update keyboard focus queue
   */
  @Method()
  async updateNavItemQueue(parent) {
    const focusableElements = [];

    for (let x = 0; x < parent.children.length; x++) {
      const link = parent.children[x].querySelector('a');
      if (link) {
        focusableElements.push(link);

        if (
          link.hasAttribute('data-keep-expanded') &&
          this.navSize == 'desktop'
        ) {
          for (
            let c = 0;
            c < link.parentNode.children[1].children.length;
            c++
          ) {
            focusableElements.push(
              link.parentNode.children[1].children[c].querySelector('a'),
            );
          }
        }
      }
    }

    this.navItems = focusableElements;
  }

  /**
   * Focus menu link
   */
  private focusMenuLink(queue, activeElement, nextStep) {
    if (
      activeElement.closest('ul').hasAttribute('data-top-menu') &&
      activeElement.hasAttribute('aria-haspopup') &&
      !activeElement.hasAttribute('data-keep-expanded')
    ) {
      this.closeAllMenus();
    } else if (
      activeElement.hasAttribute('aria-haspopup') &&
      !activeElement.hasAttribute('data-keep-expanded')
    ) {
      activeElement.setAttribute('aria-expanded', 'false');
    }

    queue[nextStep].focus();

    if (
      queue[nextStep].hasAttribute('aria-haspopup') &&
      this.navSize == 'desktop'
    ) {
      queue[nextStep].setAttribute('aria-expanded', 'true');
    }
  }

  /*
   * Observe lang attribute change
   */
  updateLang() {
    const observer = new MutationObserver(mutations => {
      if (mutations[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    observer.observe(this.el, observerConfig);
  }

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.updateLang();

    try {
      const response = await fetch(
        `https://www.canada.ca/content/dam/canada/sitemenu/sitemenu-v2-${this.lang}.html`,
      );
      this.listItems = await response.text();
    } catch (error) {
      this.listItems = backup[this.lang];
    }
  }

  async componentDidLoad() {
    const hostElement = this.el;
    let menuEnterTimer;

    // Since we load the HTML, loop through elements and add event listeners to add functionality
    for (let x = 0; x < this.themeList.children.length; x++) {
      const themeLink = this.themeList.children[x].querySelector('a');

      // Click
      themeLink.addEventListener('click', async e => {
        e.preventDefault();

        // Open topic lists
        if ((await hostElement.getNavSize()) == 'desktop') {
          await hostElement.closeAllMenus();
          themeLink.setAttribute('aria-expanded', 'true');
        } else {
          if (themeLink.getAttribute('aria-expanded') == 'false') {
            themeLink.setAttribute('aria-expanded', 'true');
            await hostElement.updateNavItemQueue(
              themeLink.parentNode.children[1],
            );
            setTimeout(() => {
              themeLink.parentNode.children[1].children[0]
                .querySelector('a')
                .focus();
            }, 50);
          } else {
            await hostElement.closeAllMenus();
            await hostElement.updateNavItemQueue(themeLink.closest('ul'));
            setTimeout(() => {
              themeLink.focus();
            }, 50);
          }
        }
      });

      // Hover actions
      themeLink.addEventListener('mouseenter', async () => {
        // Change active theme if hovering on menuitem
        if ((await hostElement.getNavSize()) == 'desktop') {
          menuEnterTimer = setTimeout(async function () {
            await hostElement.closeAllMenus();
            themeLink.setAttribute('aria-expanded', 'true');
          }, 400);
        }
      });
      // Cancel hover timer if mouseut before completes
      themeLink.addEventListener('mouseleave', () => {
        clearTimeout(menuEnterTimer);
      });

      // Most requested click
      const mostRequested = this.themeList.children[x]
        .querySelector('ul')
        .querySelector('[aria-haspopup]');
      mostRequested.addEventListener('click', async e => {
        e.preventDefault();
        if ((await hostElement.getNavSize()) == 'mobile') {
          if (mostRequested.getAttribute('aria-expanded') == 'true') {
            mostRequested.setAttribute('aria-expanded', 'false');
          } else {
            mostRequested.setAttribute('aria-expanded', 'true');
            const mostRequestedList =
              mostRequested.parentNode.querySelector('ul');
            mostRequestedList.children[0].querySelector('a').focus();
            await hostElement.updateNavItemQueue(mostRequestedList);
          }
        }
      });
    }
  }

  render() {
    const { home, lang } = this;
    return (
      <Host>
        <nav class="gcds-topic-menu" aria-labelledby="gcds-topic-menu__heading">
          <gcds-sr-only id="gcds-topic-menu__heading" tag="h2">
            {I18N[lang].menuLabelFull}
          </gcds-sr-only>
          <button
            aria-haspopup="true"
            aria-expanded={this.open.toString()}
            aria-label={I18N[lang].buttonLabel}
            onClick={async () => await this.toggleNav()}
            ref={element => (this.menuButton = element as HTMLElement)}
            class={home && 'gcds-topic-menu--home'}
          >
            {this.lang == 'en' ? (
              <>
                <gcds-sr-only tag="span">
                  {I18N[lang].menuLabelHidden}
                </gcds-sr-only>
                {I18N[lang].menuToggle}
              </>
            ) : (
              <>
                {I18N[lang].menuToggle}
                <gcds-sr-only tag="span">
                  {I18N[lang].menuLabelHidden}
                </gcds-sr-only>
              </>
            )}
            <gcds-icon
              name="chevron-down"
              margin-left="150"
              size="caption"
            ></gcds-icon>
          </button>
          <ul
            role="menu"
            aria-orientation="vertical"
            data-top-menu
            innerHTML={this.listItems}
            ref={element => (this.themeList = element as HTMLElement)}
          ></ul>
        </nav>
      </Host>
    );
  }
}
