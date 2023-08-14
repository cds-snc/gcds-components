import { Component, Host, State, Method, Element, Listen, h } from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';

@Component({
  tag: 'gcds-topic-menu',
  styleUrl: 'gcds-topic-menu.css',
  shadow: true
})
export class GcdsTopicMenu {
  @Element() el: HTMLGcdsTopicMenuElement;

  private test;

  private themeList?: HTMLElement;
  private menuButton?: HTMLElement;

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

  @Listen("keydown", {target: 'document'})
  async keyDownListener(e) {
    if (this.el == document.activeElement && this.themeList.contains(document.activeElement.shadowRoot.activeElement)) {

      const key = e.key;
      const currentIndex = this.navItems.indexOf(document.activeElement.shadowRoot.activeElement);
      const activeElement = this.navItems[currentIndex];

      switch(key) {
        case "ArrowDown":
          e.preventDefault();
          // If on last item, jump to first item
          if (currentIndex + 1 > this.navItems.length - 1) {
            await this.focusMenuLink(this.navItems, activeElement, 0);
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
          if (activeElement.hasAttribute('aria-haspopup')) {
            await this.updateNavItemQueue(activeElement.parentNode.children[1])
            this.navItems[0].focus();
          }
          break;

        case "Enter":
          if (activeElement.closest('ul').hasAttribute('data-top-menu')) {
            await this.updateNavItemQueue(activeElement.parentNode.children[1])
            this.navItems[0].focus();
          }
          break;

        case "ArrowLeft":
        case "Escape":
          e.preventDefault();
          let parentList = activeElement.closest('ul');

          if (parentList.parentNode.querySelector('a').hasAttribute('data-keep-expanded')) {
            await this.updateNavItemQueue(parentList.parentNode.closest('ul').parentNode.closest('ul'));
            await this.focusMenuLink(this.navItems, activeElement, this.navItems.indexOf(parentList.parentNode.closest('ul').parentNode.querySelector('a')));
          } else if (parentList.parentNode.closest('ul')) {
            await this.updateNavItemQueue(parentList.parentNode.closest('ul'))
            await this.focusMenuLink(this.navItems, activeElement, this.navItems.indexOf(parentList.parentNode.querySelector('a')));
          } else {
            this.menuButton.focus();
            await this.toggleNav();
          }
          break;
      }
    }
  }

  @Method()
  async closeAllMenus() {
    for (let x = 0; x < this.themeList.children.length; x++) {
      let themeLink = this.themeList.children[x].querySelector("a");
      themeLink.setAttribute('aria-expanded', 'false');
    }
  }

  @Method()
  async toggleNav() {
    this.open = !this.open;

    if (this.open) {
      this.themeList.children[0].children[0].setAttribute('aria-expanded', 'true');
      setTimeout(() => {
        this.themeList.children[0].querySelector('a').focus();
      }, 50);
      await this.updateNavItemQueue(this.themeList);
    } else {
      this.closeAllMenus();
    }
  }

  @Method()
  async updateNavItemQueue(parent) {
    let focusableElements = [];

    for (let x = 0; x < parent.children.length; x++) {
      let link = parent.children[x].querySelector('a');
      if (link) {
        focusableElements.push(link);

        if (link.hasAttribute('data-keep-expanded')) {
          for (let c = 0; c < link.parentNode.children[1].children.length; c++) {
            focusableElements.push(link.parentNode.children[1].children[c].querySelector('a'));
          }
        }
      }
    }

    this.navItems = focusableElements;

    console.log(this.navItems)
  }

  private focusMenuLink(queue, activeElement, nextStep) {
    if (activeElement.hasAttribute('aria-haspopup') && !activeElement.hasAttribute('data-keep-expanded')) {
      activeElement.setAttribute('aria-expanded', 'false');
    }

    queue[nextStep].focus();

    if (queue[nextStep].hasAttribute('aria-haspopup')) {
      queue[nextStep].setAttribute('aria-expanded', 'true');
    }
  }

  /*
  * Observe lang attribute change
  */
  updateLang() {
    const observer = new MutationObserver((mutations) => {
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

    return fetch(`https://www.canada.ca/content/dam/canada/sitemenu/sitemenu-v2-${this.lang}.html`)
      .then(response => response.text())
      .then(data => this.test = data);
  }

  async componentDidLoad() {
    let hostElement = this.el;

    let menuEnterTimer;

    for (let x = 0; x < this.themeList.children.length; x++) {
      let themeLink = this.themeList.children[x].querySelector("a");

      // Click
      themeLink.addEventListener("click", async function(e) {
        e.preventDefault();
        
        await hostElement.closeAllMenus();
        themeLink.setAttribute('aria-expanded', 'true');
      });

      // Hover actions
      themeLink.addEventListener("mouseenter", function() {
        menuEnterTimer = setTimeout(async function() {
          await hostElement.closeAllMenus();
          themeLink.setAttribute('aria-expanded', 'true');
        }, 400);
      });
      themeLink.addEventListener("mouseleave", function() {
        clearTimeout(menuEnterTimer);
      });

      // Most requested click
      this.themeList.children[x].querySelector('ul').querySelector('[aria-haspopup]').addEventListener("click", function(e) {
        e.preventDefault();

        let mostRequested = this as HTMLElement;

        if (mostRequested.getAttribute('aria-expanded') == 'true') {
          mostRequested.setAttribute('aria-expanded', 'false');
        } else {
          mostRequested.setAttribute('aria-expanded', 'true');
        }
      });
    }
  }

  render() {
    return (
      <Host>
        <nav class="gcweb-menu">
          <h2
            class="gcds-topic-menu__header"
          >
            Menu
          </h2>
          <button
            aria-haspopup="true"
            aria-expanded={this.open.toString()}
            onClick={async () => await this.toggleNav()}
            ref={element => this.menuButton = element as HTMLElement}
          >
            Menu
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
            innerHTML={this.test}
            ref={element => this.themeList = element as HTMLElement}
          ></ul>
        </nav>
      </Host>
    );
  }

}
