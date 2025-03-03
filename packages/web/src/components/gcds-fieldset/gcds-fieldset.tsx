import { Component, Prop, Element, State, Host, Watch, h } from '@stencil/core';
import { inheritAttributes } from '../../utils/utils';
import i18n from './i18n/i18n';
@Component({
  tag: 'gcds-fieldset',
  styleUrl: 'gcds-fieldset.css',
  shadow: { delegatesFocus: true },
})
export class GcdsFieldset {
  @Element() el: HTMLElement;

  private shadowElement?: HTMLElement;

  /**
   * Props
   */

  /**
   * The unique identifier for the component
   */
  @Prop({ reflect: true, mutable: false }) fieldsetId!: string;

  /**
   * Hint displayed below the legend.
   */
  @Prop({ reflect: true, mutable: false }) hint: string;

  /**
   * The title for the contents of the fieldset
   */
  @Prop({ reflect: true, mutable: false }) legend!: string;

  /**
   * Sets the appropriate font size for the fieldset legend.
   */
  @Prop({ mutable: true }) legendSize!: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  @Watch('legendSize')
  validateLegendSize(newValue: string) {
    const values = ['h2', 'h3', 'h4', 'h5', 'h6'];

    if (!values.includes(newValue)) {
      console.error(
        `${i18n['en'].legendSizeError} | ${i18n['fr'].legendSizeError}`,
      );
    }
  }

  /**
   * Set additional HTML attributes not available in component properties
   */
  @State() inheritedAttributes: Object = {};

  async componentWillLoad() {
    // Validate attributes and set defaults
    this.validateLegendSize(this.legendSize);

    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
  }

  render() {
    const { fieldsetId, hint, inheritedAttributes, legend, legendSize } = this;

    const fieldsetAttrs = {
      ...inheritedAttributes,
    };

    return (
      <Host>
        <fieldset
          class="gcds-fieldset"
          id={fieldsetId}
          {...fieldsetAttrs}
          aria-labelledby={
            hint
              ? `legend-${fieldsetId} hint-${fieldsetId}`
              : `legend-${fieldsetId}`
          }
          tabindex="-1"
          ref={element => (this.shadowElement = element as HTMLElement)}
        >
          <legend id={`legend-${fieldsetId}`} class={`size-${legendSize}`}>
            {legend}
          </legend>

          {hint ? <gcds-hint hint-id={fieldsetId}>{hint}</gcds-hint> : null}

          <slot></slot>
        </fieldset>
      </Host>
    );
  }
}
