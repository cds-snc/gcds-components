import {
  Component,
  Element,
  Host,
  Prop,
  State,
  Method,
  Event,
  EventEmitter,
  h,
} from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';

@Component({
  tag: 'gcds-nav-group',
  styleUrl: 'gcds-nav-group.css',
  shadow: true,
})
export class GcdsNavGroup {
  @Element() el: HTMLElement;

  private triggerElement?: HTMLElement;

  /**
   *  Label for the expanded button trigger
   */
  @Prop({ reflect: true }) closeTrigger?: string;

  /**
   * Label for the nav group menu
   */
  @Prop({ reflect: true }) menuLabel!: string;

  /**
   *  Label for the collapsed button trigger
   */
  @Prop({ reflect: true }) openTrigger!: string;

  /**
   * Has the nav group been expanded
   */
  @Prop({ reflect: true, mutable: true }) open: boolean = false;

  /**
   * Emitted when the button has focus.
   */
  @Event() gcdsClick!: EventEmitter<void>;

  /**
   * Language of rendered component
   */
  @State() lang: string;

  /**
   * Style of nav to render based on parent
   */
  @State() navStyle: string;

  /**
   * Focus button element
   */
  @Method()
  async focusTrigger() {
    this.triggerElement.focus();
  }

  /**
   * Toggle the nav open or closed
   */
  @Method()
  async toggleNav() {
    this.open = !this.open;

    // Close any child nav-groups
    for (let i = 0; i < this.el.children.length; i++) {
      if (
        this.el.children[i].nodeName == 'GCDS-NAV-GROUP' &&
        this.el.children[i].hasAttribute('open')
      ) {
        (this.el.children[i] as HTMLGcdsNavGroupElement).toggleNav();
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

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.updateLang();

    if (this.el.parentNode.nodeName == 'GCDS-TOP-NAV') {
      this.navStyle = 'dropdown';

      if (this.open) {
        this.open = false;
      }
    } else {
      this.navStyle = 'expandable';
    }

    if (
      this.el.parentNode.nodeName == 'GCDS-NAV-GROUP' &&
      !(this.el.parentNode as HTMLElement).classList.contains(
        'gcds-mobile-nav',
      ) &&
      this.el.closest('gcds-top-nav')
    ) {
      this.el.remove();
    }
  }

  render() {
    const { closeTrigger, menuLabel, open, openTrigger } = this;

<<<<<<< HEAD
    let roleAttr = {
      role: "menuitem"
    };

    if (this.el.classList.contains("gcds-mobile-nav")) {
      delete roleAttr["role"];
=======
    const roleAttr = {
      role: 'menuitem',
    };

    if (this.el.classList.contains('gcds-mobile-nav')) {
      delete roleAttr['role'];
>>>>>>> develop
    }

    return (
      <Host
        role="presentation"
        open={open}
        class={open && 'gcds-nav-group-expanded'}
      >
        <button
          aria-haspopup="true"
          aria-expanded={open.toString()}
          {...roleAttr}
<<<<<<< HEAD
          ref={element => this.triggerElement = element as HTMLElement}
=======
          ref={element => (this.triggerElement = element as HTMLElement)}
>>>>>>> develop
          class={`gcds-nav-group__trigger gcds-trigger--${this.navStyle}`}
          onClick={() => {
            this.toggleNav();
            this.gcdsClick.emit();
          }}
        >
          <gcds-icon name={open ? 'angle-up' : 'angle-down'}></gcds-icon>
          {closeTrigger && open ? closeTrigger : openTrigger}
        </button>
        <ul
          role="menu"
          aria-label={menuLabel}
          class={`gcds-nav-group__list gcds-nav--${this.navStyle}`}
        >
          <slot></slot>
        </ul>
      </Host>
    );
  }
}
