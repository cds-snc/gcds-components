<<<<<<< HEAD
import { Component, Host, State, Method, Element, Listen, Fragment, Prop, h } from '@stencil/core';
=======
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
>>>>>>> develop
import { assignLanguage, observerConfig } from '../../utils/utils';
import I18N from './i18n/i18n';
import backup from './backup/backup.min';

@Component({
  tag: 'gcds-topic-menu',
  styleUrl: 'gcds-topic-menu.css',
<<<<<<< HEAD
  shadow: true
=======
  shadow: true,
>>>>>>> develop
})
export class GcdsTopicMenu {
  @Element() el: HTMLGcdsTopicMenuElement;

  private listItems;

  private themeList?: HTMLElement;
  private menuButton?: HTMLElement;

  /**
<<<<<<< HEAD
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
  * Listen for focusout of theme and topic menu to close menu
  */
  @Listen("focusout", { target: "document" })
=======
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
   * Listen for focusout of theme and topic menu to close menu
   */
  @Listen('focusout', { target: 'document' })
>>>>>>> develop
  async focusOutListener(e) {
    if (!this.el.contains(e.relatedTarget) && this.open) {
      this.toggleNav();
    }
  }

  /**
<<<<<<< HEAD
  * Keyboard controls of theme and topic menu
  */
  @Listen("keydown", {target: 'document'})
  async keyDownListener(e) {
    if (this.el == document.activeElement && this.themeList.contains(document.activeElement.shadowRoot.activeElement)) {
      const key = e.key;
      const currentIndex = this.navItems.indexOf(document.activeElement.shadowRoot.activeElement);
      const activeElement = this.navItems[currentIndex];

      switch(key) {
        case "ArrowDown":
=======
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
>>>>>>> develop
          e.preventDefault();
          // If on last item, jump to first item
          if (currentIndex + 1 > this.navItems.length - 1) {
            await this.focusMenuLink(this.navItems, activeElement, 0);
<<<<<<< HEAD
          // Jump to next item
          } else {
            await this.focusMenuLink(this.navItems, activeElement, currentIndex + 1);
          }
          break;

        case "ArrowUp":
          e.preventDefault();
          // If on first item, jump to last
          if (currentIndex - 1 < 0) {
            await this.focusMenuLink(this.navItems, activeElement, this.navItems.length - 1);
          // Jump to next item
          } else {
            await this.focusMenuLink(this.navItems, activeElement, currentIndex - 1);
          }
          break;

        case "ArrowRight":
          e.preventDefault();

          // Theme links
          if (activeElement.hasAttribute('aria-haspopup') && !activeElement.hasAttribute('data-keep-expanded')) {
            await this.updateNavItemQueue(activeElement.parentNode.children[1])
            activeElement.setAttribute('aria-expanded', 'true')
            this.navItems[0].focus();

          // Most requested link - desktop
          } else if (activeElement.hasAttribute('aria-haspopup') && this.navSize == "desktop") {
            await this.focusMenuLink(this.navItems, activeElement, currentIndex + 1);
          
          // Most requested link - mobile
          } else if (activeElement.hasAttribute('aria-haspopup') && this.navSize == "mobile") {
            await this.updateNavItemQueue(activeElement.parentNode.children[1])
            activeElement.setAttribute('aria-expanded', 'true')
=======
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
>>>>>>> develop
            this.navItems[0].focus();
          }
          break;

<<<<<<< HEAD
        case "Enter":
          if (activeElement.closest('ul').hasAttribute('data-top-menu')) {
            await this.updateNavItemQueue(activeElement.parentNode.children[1])
=======
        case 'Enter':
          if (activeElement.closest('ul').hasAttribute('data-top-menu')) {
            await this.updateNavItemQueue(activeElement.parentNode.children[1]);
>>>>>>> develop
            this.navItems[0].focus();
          }
          break;

<<<<<<< HEAD
        case "ArrowLeft":
        case "Escape":
          e.preventDefault();
          let parentList = activeElement.closest('ul');

          // In most requested menu
          if (parentList.parentNode.querySelector('a').hasAttribute('data-keep-expanded')) {
            await this.updateNavItemQueue(parentList.parentNode.closest('ul'));
            await this.focusMenuLink(this.navItems, activeElement, this.navItems.indexOf(parentList.parentNode.querySelector('a')));

            // on mobile, close expandable area
            if (this.navSize == 'mobile') {
              parentList.parentNode.querySelector('a').setAttribute('aria-expanded', 'false');
            }

          // Exit menu
          } else if (parentList.parentNode.closest('ul')) {
            await this.updateNavItemQueue(parentList.parentNode.closest('ul'))
            await this.focusMenuLink(this.navItems, activeElement, this.navItems.indexOf(parentList.parentNode.querySelector('a')));

            if (this.navSize == 'mobile') {
              parentList.parentNode.querySelector('a').setAttribute('aria-expanded', 'false');
            }

          // Close theme and topic menu, focus menu button
=======
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
>>>>>>> develop
          } else {
            this.menuButton.focus();
            await this.toggleNav();
          }
          break;
<<<<<<< HEAD

        case "Tab":
          await this.toggleNav();
        break;
=======
        }

        case 'Tab':
          await this.toggleNav();
          break;
>>>>>>> develop
      }
    }
  }

  /**
<<<<<<< HEAD
  * Close all theme menus
  */
  @Method()
  async closeAllMenus() {
    for (let x = 0; x < this.themeList.children.length; x++) {
      let themeLink = this.themeList.children[x].querySelector("a");
=======
   * Close all theme menus
   */
  @Method()
  async closeAllMenus() {
    for (let x = 0; x < this.themeList.children.length; x++) {
      const themeLink = this.themeList.children[x].querySelector('a');
>>>>>>> develop
      themeLink.setAttribute('aria-expanded', 'false');
    }
  }

  /**
<<<<<<< HEAD
  * Toggle open theme and topic menu
  */
=======
   * Toggle open theme and topic menu
   */
>>>>>>> develop
  @Method()
  async toggleNav() {
    this.open = !this.open;

    if (this.open) {
      if (this.navSize == 'desktop') {
<<<<<<< HEAD
        this.themeList.children[0].children[0].setAttribute('aria-expanded', 'true');
      } else {
        // Close most requested on mobile
        this.el.shadowRoot.querySelectorAll('[data-keep-expanded]').forEach((el) => {
          el.setAttribute('aria-expanded', 'false');
        });
=======
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
>>>>>>> develop
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
<<<<<<< HEAD
  * Pass new window size: desktop or mobile
  */
=======
   * Pass new window size: desktop or mobile
   */
>>>>>>> develop
  @Method()
  async updateNavSize(size) {
    this.navSize = size;
  }

  /*
<<<<<<< HEAD
  * Get current navSize state
  */
=======
   * Get current navSize state
   */
>>>>>>> develop
  @Method()
  async getNavSize() {
    return this.navSize;
  }

  /**
<<<<<<< HEAD
  * Update keyboard focus queue
  */
  @Method()
  async updateNavItemQueue(parent) {
    let focusableElements = [];

    for (let x = 0; x < parent.children.length; x++) {
      let link = parent.children[x].querySelector('a');
      if (link) {
        focusableElements.push(link);

        if (link.hasAttribute('data-keep-expanded') && this.navSize == 'desktop') {
          for (let c = 0; c < link.parentNode.children[1].children.length; c++) {
            focusableElements.push(link.parentNode.children[1].children[c].querySelector('a'));
=======
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
>>>>>>> develop
          }
        }
      }
    }

    this.navItems = focusableElements;
  }

  /**
<<<<<<< HEAD
  * Focus menu link
  */
  private focusMenuLink(queue, activeElement, nextStep) {
    if (activeElement.closest('ul').hasAttribute('data-top-menu') && activeElement.hasAttribute('aria-haspopup') && !activeElement.hasAttribute('data-keep-expanded')) {
      this.closeAllMenus();
    } else if (activeElement.hasAttribute('aria-haspopup') && !activeElement.hasAttribute('data-keep-expanded')) {
=======
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
>>>>>>> develop
      activeElement.setAttribute('aria-expanded', 'false');
    }

    queue[nextStep].focus();

<<<<<<< HEAD
    if (queue[nextStep].hasAttribute('aria-haspopup') && this.navSize == 'desktop') {
=======
    if (
      queue[nextStep].hasAttribute('aria-haspopup') &&
      this.navSize == 'desktop'
    ) {
>>>>>>> develop
      queue[nextStep].setAttribute('aria-expanded', 'true');
    }
  }

  /*
<<<<<<< HEAD
  * Observe lang attribute change
  */
  updateLang() {
    const observer = new MutationObserver((mutations) => {
=======
   * Observe lang attribute change
   */
  updateLang() {
    const observer = new MutationObserver(mutations => {
>>>>>>> develop
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

    const mediaQuery = window.matchMedia('screen and (max-width: 991px)');

    if (mediaQuery.matches) {
      this.navSize = 'mobile';
    } else {
      this.navSize = 'desktop';
    }

    try {
<<<<<<< HEAD
      const response = await fetch(`https://www.canada.ca/content/dam/canada/sitemenu/sitemenu-v2-${this.lang}.html`);
=======
      const response = await fetch(
        `https://www.canada.ca/content/dam/canada/sitemenu/sitemenu-v2-${this.lang}.html`,
      );
>>>>>>> develop
      this.listItems = await response.text();
    } catch (error) {
      this.listItems = backup[this.lang];
    }
  }

  async componentDidLoad() {
<<<<<<< HEAD
    let hostElement = this.el;
    let menuEnterTimer;

    // Since we load the HTML, loop through elements and add event listeners to add functionality 
    for (let x = 0; x < this.themeList.children.length; x++) {
      let themeLink = this.themeList.children[x].querySelector("a");

      // Click
      themeLink.addEventListener("click", async (e) => {
        e.preventDefault();

        // Open topic lists
        if (await hostElement.getNavSize() == 'desktop') {
=======
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
>>>>>>> develop
          await hostElement.closeAllMenus();
          themeLink.setAttribute('aria-expanded', 'true');
        } else {
          if (themeLink.getAttribute('aria-expanded') == 'false') {
            themeLink.setAttribute('aria-expanded', 'true');
<<<<<<< HEAD
            await hostElement.updateNavItemQueue(themeLink.parentNode.children[1]);
            setTimeout(() => {
              themeLink.parentNode.children[1].children[0].querySelector('a').focus();
=======
            await hostElement.updateNavItemQueue(
              themeLink.parentNode.children[1],
            );
            setTimeout(() => {
              themeLink.parentNode.children[1].children[0]
                .querySelector('a')
                .focus();
>>>>>>> develop
            }, 50);
          } else {
            await hostElement.closeAllMenus();
            await hostElement.updateNavItemQueue(themeLink.closest('ul'));
            setTimeout(() => {
              themeLink.focus();
            }, 50);
          }
        }
<<<<<<< HEAD
        
      });

      // Hover actions
      themeLink.addEventListener("mouseenter", async () => {
        // Change active theme if hovering on menuitem
        if (await hostElement.getNavSize() == 'desktop') {
          menuEnterTimer = setTimeout(async function() {
=======
      });

      // Hover actions
      themeLink.addEventListener('mouseenter', async () => {
        // Change active theme if hovering on menuitem
        if ((await hostElement.getNavSize()) == 'desktop') {
          menuEnterTimer = setTimeout(async function () {
>>>>>>> develop
            await hostElement.closeAllMenus();
            themeLink.setAttribute('aria-expanded', 'true');
          }, 400);
        }
      });
      // Cancel hover timer if mouseut before completes
<<<<<<< HEAD
      themeLink.addEventListener("mouseleave", () => {
=======
      themeLink.addEventListener('mouseleave', () => {
>>>>>>> develop
        clearTimeout(menuEnterTimer);
      });

      // Most requested click
<<<<<<< HEAD
      let mostRequested = this.themeList.children[x].querySelector('ul').querySelector('[aria-haspopup]');
      mostRequested.addEventListener("click", async (e) => {
        e.preventDefault();
        if (await hostElement.getNavSize() == 'mobile') {
=======
      const mostRequested = this.themeList.children[x]
        .querySelector('ul')
        .querySelector('[aria-haspopup]');
      mostRequested.addEventListener('click', async e => {
        e.preventDefault();
        if ((await hostElement.getNavSize()) == 'mobile') {
>>>>>>> develop
          if (mostRequested.getAttribute('aria-expanded') == 'true') {
            mostRequested.setAttribute('aria-expanded', 'false');
          } else {
            mostRequested.setAttribute('aria-expanded', 'true');
<<<<<<< HEAD
            let mostRequestedList = mostRequested.parentNode.querySelector('ul');
=======
            const mostRequestedList =
              mostRequested.parentNode.querySelector('ul');
>>>>>>> develop
            mostRequestedList.children[0].querySelector('a').focus();
            await hostElement.updateNavItemQueue(mostRequestedList);
          }
        }
      });
    }

    // Mobile responsiveness
    const mediaQuery = window.matchMedia('screen and (max-width: 991px)');
    const nav = this.el as HTMLGcdsTopicMenuElement;

<<<<<<< HEAD
    mediaQuery.addEventListener("change", async (e) => {
      if (e.matches) {
        nav.updateNavSize("mobile");

        nav.shadowRoot.querySelectorAll('[data-keep-expanded]').forEach((el) => {
          el.setAttribute('aria-expanded', 'false');
        });
      } else {
        nav.updateNavSize("desktop");
        nav.shadowRoot.querySelectorAll('[data-keep-expanded]').forEach((el) => {
=======
    mediaQuery.addEventListener('change', async e => {
      if (e.matches) {
        nav.updateNavSize('mobile');

        nav.shadowRoot.querySelectorAll('[data-keep-expanded]').forEach(el => {
          el.setAttribute('aria-expanded', 'false');
        });
      } else {
        nav.updateNavSize('desktop');
        nav.shadowRoot.querySelectorAll('[data-keep-expanded]').forEach(el => {
>>>>>>> develop
          el.setAttribute('aria-expanded', 'true');
        });
      }
    });
  }

  render() {
    const { home, lang } = this;
    return (
      <Host>
        <nav class="gcds-topic-menu">
<<<<<<< HEAD
          <h2
            class="gcds-topic-menu__heading"
          >
            Menu
          </h2>
=======
          <h2 class="gcds-topic-menu__heading">Menu</h2>
>>>>>>> develop
          <button
            aria-haspopup="true"
            aria-expanded={this.open.toString()}
            aria-label={I18N[lang].buttonLabel}
            onClick={async () => await this.toggleNav()}
<<<<<<< HEAD
            ref={element => this.menuButton = element as HTMLElement}
            class={home && 'gcds-topic-menu--home'}
          >
            {this.lang == 'en' ?
=======
            ref={element => (this.menuButton = element as HTMLElement)}
            class={home && 'gcds-topic-menu--home'}
          >
            {this.lang == 'en' ? (
>>>>>>> develop
              <>
                <span class="gcds-topic-menu__main">Main </span>
                Menu
              </>
<<<<<<< HEAD
            :
=======
            ) : (
>>>>>>> develop
              <>
                Menu
                <span class="gcds-topic-menu__main"> principal</span>
              </>
<<<<<<< HEAD
            }
=======
            )}
>>>>>>> develop
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
<<<<<<< HEAD
            ref={element => this.themeList = element as HTMLElement}
=======
            ref={element => (this.themeList = element as HTMLElement)}
>>>>>>> develop
          ></ul>
        </nav>
      </Host>
    );
  }
<<<<<<< HEAD

=======
>>>>>>> develop
}
