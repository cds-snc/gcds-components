import { Element, Component, Host, Prop, h, Fragment } from '@stencil/core';

@Component({
  tag: 'gcds-card',
  styleUrl: 'gcds-card.css',
  shadow: true,
})
export class GcdsCard {
  @Element() el: HTMLElement;

  /**
   * The type attribute specifies how the card renders as a link
   */
  @Prop({ reflect: true }) type: 'link' | 'action' = 'link';

  /**
   * The card title attribute specifies the title that appears on the card
   */
  @Prop({ reflect: true }) cardTitle!: string;

  /**
   * The title element attribute specifies HTML element the title renders as
   */
  @Prop() titleElement: 'h3' | 'h4' | 'h5' | 'h6' | 'a' = 'a';

  /**
   * The href attribute specifies the URL of the page the link goes to
   */
  @Prop({ reflect: true }) href!: string;

  /**
   * The description attribute specifies the body of text that appears on the card
   */
  @Prop({ reflect: true }) description: string;

  /**
   * The tag attribute specifies the tag text that appears above the card title
   */
  @Prop({ reflect: true }) tag: string;

  /**
   * The img src attribute specifies the path to the image
   */
  @Prop({ reflect: true }) imgSrc: string;

  /**
   * The img alt attribute specifies the alt text for the image provided, if none, image will be decorative
   */
  @Prop({ reflect: true }) imgAlt: string;

  private get hasCardFooter() {
    return !!this.el.querySelector('[slot="footer"]');
  }

  render() {
    const {
      type,
      cardTitle,
      titleElement,
      href,
      description,
      tag,
      imgSrc,
      imgAlt,
      hasCardFooter,
    } = this;

    const Element = titleElement;

    return (
      <Host>
        <div class={`gcds-card gcds-card--${type}`}>
          {imgSrc && (
            <img
              src={imgSrc}
              alt={imgAlt ? imgAlt : ''}
              class="gcds-card__image"
            />
          )}
          {tag && <span class="gcds-card__tag">{tag}</span>}
          {Element != 'a' ? (
            <Element class="gcds-card__title">
              <a href={href}>{cardTitle}</a>
            </Element>
          ) : (
            <a href={href} class="gcds-card__title">
              {cardTitle}
            </a>
          )}

          {description && <p class="gcds-card__description">{description}</p>}
          {hasCardFooter && (
            <>
              <div class="gcds-card__spacer"></div>
              <slot name="footer"></slot>
            </>
          )}
        </div>
      </Host>
    );
  }
}
