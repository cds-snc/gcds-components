import {
  Component,
  Element,
  Host,
  Prop,
  State,
  Method,
  Event,
  EventEmitter,
  Listen,
  h,
} from '@stencil/core';
import { assignLanguage, observerConfig, emitEvent } from '../../utils/utils';

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
   * Emitted when the button has been clicked.
   */
  @Event() gcdsClick!: EventEmitter<void>;

  /**
   * Emitted when the button has been focus.
   */
  @Event() gcdsFocus!: EventEmitter<void>;

  /**
   * Emitted when the button blurs.
   */
  @Event() gcdsBlur!: EventEmitter<void>;

  /**
   * Language of rendered component
   */
  @State() lang: string;

  /**
   * Style of nav to render based on parent
   */
  @State() navStyle: string;

  @Listen('focusout', { target: 'document' })
  async focusOutListener(e) {
    if (
      (e.target === this.el || this.el.contains(e.target)) &&
      !this.el.contains(e.relatedTarget) &&
      this.navStyle === 'dropdown' &&
      this.open
    ) {
      setTimeout(() => this.toggleNav(), 200);
    }
  }

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

    return (
      <Host role="listitem" open={open}>
        <button
          aria-haspopup="true"
          aria-expanded={open.toString()}
          ref={element => (this.triggerElement = element as HTMLElement)}
          class={`gcds-nav-group__trigger gcds-trigger--${this.navStyle}`}
          onBlur={() => this.gcdsBlur.emit()}
          onFocus={() => this.gcdsFocus.emit()}
          onClick={e => {
            const event = emitEvent(e, this.gcdsClick);
            if (event) {
              this.toggleNav();
            }
          }}
        >
          <gcds-icon name={open ? 'angle-up' : 'angle-down'}></gcds-icon>
          {closeTrigger && open ? closeTrigger : openTrigger}
        </button>
        <ul
          aria-label={menuLabel}
          class={`gcds-nav-group__list gcds-nav--${this.navStyle}`}
        >
          <slot></slot>
        </ul>
      </Host>
    );
  }
}
