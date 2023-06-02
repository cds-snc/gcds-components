import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'gcds-card',
  styleUrl: 'gcds-card.css',
  shadow: true,
})
export class GcdsCard {

  /**
   * The card title attribute specifies the title that appears on the card
   */
  @Prop({ reflect: true }) cardTitle!: string;

  /**
   * The href attribute specifies the URL of the page the link goes to
   */
  @Prop({ reflect: true }) href!: string;

  /**
   * The description attribute specifies the body of text that appears on the card
   */
  @Prop({ reflect: true }) description!: string;

  /**
   * The img src attribute specifies the path to the image
   */
  @Prop({ reflect: true }) imgSrc: string;

  /**
   * The img alt attribute specifies the alt text for the image provided, if none, image will be decorative
   */
  @Prop({ reflect: true }) imgAlt: string;

  render() {
    const { cardTitle, href, description, imgSrc, imgAlt } = this;
    return (
      <Host>
        <a href={href}>
          {imgSrc &&
            <img src={imgSrc} alt={imgAlt ? imgAlt : ""} />
          }
          <p class="gcds-card__title">
            {cardTitle}
          </p>
          <p class="gcds-card__description">
            {description}
          </p>
        </a>
      </Host>
    );
  }

}
