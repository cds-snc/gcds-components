import { Component, Element, Host, Prop, State, Watch, h } from '@stencil/core';
import { assignLanguage, observerConfig, logError } from '../../utils/utils';
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
  @Prop({ mutable: true }) currentStep!: number;
  @Watch('currentStep')
  validateCurrentStep() {
    if (
      this.currentStep <= 0 ||
      isNaN(this.currentStep) ||
      this.currentStep > this.totalSteps
    ) {
      this.errors.push('currentStep');
    } else if (this.errors.includes('currentStep')) {
      this.errors.splice(this.errors.indexOf('currentStep'), 1);
    }
  }

  /**
   * Defines the total amount of steps.
   */
  @Prop({ mutable: true }) totalSteps!: number;
  @Watch('totalSteps')
  validateTotalSteps() {
    if (
      this.totalSteps <= 0 ||
      isNaN(this.totalSteps) ||
      this.totalSteps < this.currentStep
    ) {
      this.errors.push('totalSteps');
    } else if (this.errors.includes('totalSteps')) {
      this.errors.splice(this.errors.indexOf('totalSteps'), 1);
    }
  }

  /**
   * Defines the heading tag to render
   */
  @Prop() tag: 'h1' | 'h2' | 'h3' = 'h2';

  /**
   * State to track validation on properties
   * Contains a list of properties that have an error associated with them
   */
  @State() errors: Array<string> = [];

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

  private validateChildren() {
    if (this.el.innerHTML.trim() == '') {
      this.errors.push('children');
    } else if (this.errors.includes('children')) {
      this.errors.splice(this.errors.indexOf('children'), 1);
    }
  }

  private validateRequiredProps() {
    this.validateCurrentStep();
    this.validateTotalSteps();
    this.validateChildren();

    if (
      this.errors.includes('totalSteps') ||
      this.errors.includes('currentStep') ||
      this.errors.includes('children')
    ) {
      return false;
    }
    return true;
  }

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.updateLang();

    let valid = this.validateRequiredProps();

    if (!valid) {
      logError('gcds-stepper', this.errors);
    }
  }

  render() {
    const { currentStep, lang, totalSteps, tag } = this;

    return (
      <Host>
        {this.validateRequiredProps() && (
          <gcds-heading
            tag={tag}
            class="gcds-stepper"
            margin-top="0"
            margin-bottom="300"
          >
            <span class="gcds-stepper__steps">
              {`${i18n[lang].step} ${currentStep} ${i18n[lang].of} ${totalSteps}`}

              {/* Hidden colon to provide pause between caption and heading text for AT */}
              <gcds-sr-only> : </gcds-sr-only>
            </span>
            <slot></slot>
          </gcds-heading>
        )}
      </Host>
    );
  }
}
