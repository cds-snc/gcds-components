import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';

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
  * Language of rendered component
  */
  @State() lang: string;

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
  }

  render() {
    const { currentStep, lang, totalSteps } = this;

    return (
      <Host>
        <h6 class="gcds-stepper">
          { lang == 'en' ?
            `Step ${currentStep} of ${totalSteps}`
          :
            `Étape ${currentStep} sur ${totalSteps}`
          }
        </h6>
      </Host>
    );
  }
}
