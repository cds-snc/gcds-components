import { newSpecPage } from '@stencil/core/testing';
import { GcdsCard } from '../gcds-card';

describe('gcds-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsCard],
      html: `<gcds-card
        card-title="Card"
        description="This is the card description"
        href="#card"
      ></gcds-card>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-card card-title="Card" description="This is the card description" href="#card">
        <mock:shadow-root>
          <a href="#card">
            <p class="gcds-card__title">
              Card
            </p>
            <p class="gcds-card__description">
              This is the card description
            </p>
          </a>
        </mock:shadow-root>
      </gcds-card>
    `);
  });

  it('renders w/ img', async () => {
    const page = await newSpecPage({
      components: [GcdsCard],
      html: `<gcds-card
        card-title="Card"
        description="This is the card description"
        href="#card"
        img-src="https://www.canada.ca/content/dam/themes/business/features/1017_05_22_BBF_NL_Button_360x203.jpg"
      ></gcds-card>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-card card-title="Card" description="This is the card description" href="#card"  img-src="https://www.canada.ca/content/dam/themes/business/features/1017_05_22_BBF_NL_Button_360x203.jpg">
        <mock:shadow-root>
          <a href="#card">
            <img alt="" src="https://www.canada.ca/content/dam/themes/business/features/1017_05_22_BBF_NL_Button_360x203.jpg">
            <p class="gcds-card__title">
              Card
            </p>
            <p class="gcds-card__description">
              This is the card description
            </p>
          </a>
        </mock:shadow-root>
      </gcds-card>
    `);
  });
});
