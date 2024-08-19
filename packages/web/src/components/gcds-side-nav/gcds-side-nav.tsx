import {
  Component,
  Element,
  Host,
  Prop,
  State,
  Listen,
  Method,
  h,
} from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';
import { handleKeyDownNav, getNavItems } from '../../utils/menus/utils';
import I18N from './i18n/i18n';

@Component({
  tag: 'gcds-side-nav',
  styleUrl: 'gcds-side-nav.css',
  shadow: true,
})
export class GcdsSideNav {
  @Element() el: HTMLElement;

  private mobile?: HTMLGcdsNavGroupElement;

  /**
   * Label for navigation landmark
   */
  @Prop() label!: string;

  /**
   * Sticky navigation flag
   */
  // @Prop() position: 'static' | 'sticky' = 'static';

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

  @Listen('focusin', { target: 'document' })
  async focusInListener(e) {
    if (this.el.contains(e.target) && !this.navSize) {
      const mediaQuery = window.matchMedia('screen and (min-width: 64em)');
      const nav = this.el as HTMLGcdsSideNavElement;
      const mobileTrigger = this.mobile;

      if (mediaQuery.matches) {
        this.navSize = 'desktop';
      } else {
        this.navSize = 'mobile';
      }

      await this.updateNavItemQueue(this.el);

      mediaQuery.addEventListener('change', async function (e) {
        if (e.matches) {
          nav.updateNavSize('desktop');
          await nav.updateNavItemQueue(nav);

          if (mobileTrigger.hasAttribute('open')) {
            mobileTrigger.toggleNav();
          }
        } else {
          nav.updateNavSize('mobile');
          await nav.updateNavItemQueue(nav);
        }
      });
    }
  }

  @Listen('focusout', { target: 'document' })
  async focusOutListener(e) {
    if (!this.el.contains(e.relatedTarget)) {
      if (this.navSize == 'mobile') {
        if (this.mobile.hasAttribute('open')) {
          await this.mobile.toggleNav();
        }
      }
    }
  }

  @Listen('keydown', { target: 'document' })
  async keyDownListener(e) {
    if (this.el.contains(document.activeElement)) {
      handleKeyDownNav(e, this.el, this.navItems);
    }
  }

  @Listen('gcdsClick', { target: 'document' })
  async gcdsClickListener(e) {
    if (this.el.contains(e.target)) {
      // Update tab queue when clicking mobile menu
      if (e.target == this.el && this.navSize == 'mobile') {
        await this.updateNavItemQueue(e.target);

        // Update tab queue when clicking dropdown
      } else if (
        e.target.nodeName == 'GCDS-NAV-GROUP' &&
        !e.target.hasAttribute('open')
      ) {
        await this.updateNavItemQueue(this.el);
      }
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

  /*
   * Get current navSize state
   */
  @Method()
  async getNavSize() {
    return this.navSize;
  }

  /*
   * Pass new window size: desktop or mobile
   */
  @Method()
  async updateNavSize(size) {
    this.navSize = size;
  }

  /*
   * Update item queue for keyboard navigation based on passed element
   */
  @Method()
  async updateNavItemQueue(el, includeElement?: boolean) {
    if (includeElement) {
      const childElements = await getNavItems(el);
      this.navItems = [el, ...childElements];
    } else {
      this.navItems = await getNavItems(el);
    }

    if (this.navSize == 'mobile') {
      this.navItems = [...this.navItems, this.mobile];
    }
  }

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.updateLang();
  }

  render() {
    const { label, lang } = this;

    return (
      <Host>
        <nav
          aria-label={`${label}${I18N[lang].navLabel}`}
          class="gcds-side-nav"
        >
          <h2 class="gcds-side-nav__heading">{label}</h2>
          <ul>
            <gcds-nav-group
              menuLabel={I18N[lang].menuLabel}
              closeTrigger={I18N[lang].closeTrigger}
              openTrigger={I18N[lang].menuLabel}
              class="gcds-mobile-nav"
              ref={element =>
                (this.mobile = element as HTMLGcdsNavGroupElement)
              }
              lang={lang}
            >
              <slot></slot>
            </gcds-nav-group>
          </ul>
        </nav>
      </Host>
    );
  }
}
