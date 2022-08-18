import { Component, Element, Host, Prop, h } from '@stencil/core';
import { assignLanguage } from '../../utils/utils';

@Component({
  tag: 'gcds-stepper',
  styleUrl: 'gcds-stepper.css',
  shadow: true,
})
export class GcdsStepper {
  private lang: string;

  @Element() el: HTMLElement;

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
        <nav class="gcds-stepper" role="navigation">
          { lang == 'en' ?
            <h6>Step {currentStep} of {totalSteps}</h6>
          :
            <h6>Étape {currentStep} sur {totalSteps}</h6>
          }
        </nav>
      </Host>
    );
  }
}