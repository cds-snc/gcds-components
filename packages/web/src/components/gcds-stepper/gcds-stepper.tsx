import { Component, Element, Host, Prop, h } from '@stencil/core';
import { assignLanguage } from '../../utils/utils';

@Component({
  tag: 'gcds-stepper',
  styleUrl: 'gcds-stepper.css',
  shadow: true,
})
export class GcdsStepper {
  @Element() el: HTMLElement;

  private lang: string;


  /**
   * Props
   */

  /**
   * Defines the current step.
   */
  @Prop() currentStep: number;

  /**
   * Defines the total amount of steps.
   */
  @Prop() totalSteps: number;

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);
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
