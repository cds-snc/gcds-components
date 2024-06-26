import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';
import i18n from './i18n/i18n';

@Component({
  tag: 'gcds-stepper',
  styleUrl: 'gcds-stepper.css',
  shadow: true,
})
export class GcdsStepper {
  @Element() el: HTMLElement;

  /**
   * Props
   */

  /**
   * Defines the current step.
   */
  @Prop() currentStep!: number;

  /**
   * Defines the total amount of steps.
   */
  @Prop() totalSteps!: number;

  /**
   * Defines the heading tag to render
   */
  @Prop() tag: 'h1' | 'h2' | 'h3' = 'h2';

  /**
   * Language of rendered component
   */
  @State() lang: string;

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
  }

  render() {
    const { currentStep, lang, totalSteps, tag } = this;

    return (
      <Host>
        <gcds-heading
          tag={tag}
          class="gcds-stepper"
          margin-top="0"
          margin-bottom="300"
        >
          <span class="gcds-stepper__steps">
            {`${i18n[lang].step} ${currentStep} ${i18n[lang].of} ${totalSteps}`}
            <gcds-sr-only> : </gcds-sr-only>
          </span>
          <slot></slot>
        </gcds-heading>
      </Host>
    );
  }
}
