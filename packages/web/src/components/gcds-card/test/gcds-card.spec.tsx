import { newSpecPage } from '@stencil/core/testing';
import { GcdsCard } from '../gcds-card';

describe('gcds-card', () => {
  it('renders - type link', async () => {
    const page = await newSpecPage({
      components: [GcdsCard],
      html: `<gcds-card
        type="link"
        card-title="Card"
        href="#card"
      ></gcds-card>`,
    });
    expect(page.root).toEqualHtml(`
    <gcds-card card-title="Card" href="#card" type="link">
      <mock:shadow-root>
        <div class="gcds-card gcds-card--link">
          <gcds-link class="gcds-card__title" href="#card">
            Card
          </gcds-link>
        </div>
      </mock:shadow-root>
    </gcds-card
    `);
  });

  it('renders - type action', async () => {
    const page = await newSpecPage({
      components: [GcdsCard],
      html: `<gcds-card
        type="action"
        card-title="Card"
        href="#card"
      ></gcds-card>`,
    });
    expect(page.root).toEqualHtml(`
    <gcds-card card-title="Card" href="#card" type="action">
      <mock:shadow-root>
        <div class="gcds-card gcds-card--action">
          <gcds-link class="gcds-card__title" href="#card">
            Card
          </gcds-link>
        </div>
      </mock:shadow-root>
    </gcds-card
    `);
  });

  it('renders w/ h3 element', async () => {
    const page = await newSpecPage({
      components: [GcdsCard],
      html: `<gcds-card
        type="link"
        card-title="Card"
        href="#card"
        title-element="h3"
      ></gcds-card>`,
    });
    expect(page.root).toEqualHtml(`
    <gcds-card card-title="Card" href="#card" title-element="h3" type="link">
      <mock:shadow-root>
        <div class="gcds-card gcds-card--link">
          <h3 class="gcds-card__title">
            <gcds-link href="#card">
                Card
            </gcds-link>
          </h3>
        </div>
      </mock:shadow-root>
    </gcds-card
    `);
  });

  it('renders w/ tag', async () => {
    const page = await newSpecPage({
      components: [GcdsCard],
      html: `<gcds-card
        type="link"
        card-title="Card"
        href="#card"
        tag="Tag"
      ></gcds-card>`,
    });
    expect(page.root).toEqualHtml(`
    <gcds-card card-title="Card" href="#card" tag="Tag" type="link">
      <mock:shadow-root>
        <div class="gcds-card gcds-card--link">
          <span class="gcds-card__tag" id="gcds-card__tag">
            <gcds-sr-only>
              Tagged:
            </gcds-sr-only>
            Tag
          </span>
          <gcds-link class="gcds-card__title" href="#card">
            Card
          </gcds-link>
        </div>
      </mock:shadow-root>
    </gcds-card
    `);
  });

  it('renders w/ description', async () => {
    const page = await newSpecPage({
      components: [GcdsCard],
      html: `<gcds-card
        type="link"
        card-title="Card"
        href="#card"
        description="This is the card description"
      ></gcds-card>`,
    });
    expect(page.root).toEqualHtml(`
    <gcds-card card-title="Card" href="#card" description="This is the card description" type="link">
      <mock:shadow-root>
        <div class="gcds-card gcds-card--link">
          <gcds-link class="gcds-card__title" href="#card">
            Card
          </gcds-link>
          <p class="gcds-card__description">
            This is the card description
          </p>
        </div>
      </mock:shadow-root>
    </gcds-card
    `);
  });

  it('renders w/ img', async () => {
    const page = await newSpecPage({
      components: [GcdsCard],
      html: `<gcds-card
        card-title="Card"
        href="#card"
        img-src="https://picsum.photos/480/270"
      ></gcds-card>`,
    });
    expect(page.root).toEqualHtml(`
    <gcds-card card-title="Card" href="#card" img-src="https://picsum.photos/480/270" type="link">
      <mock:shadow-root>
        <div class="gcds-card gcds-card--link">
          <img alt="" class="gcds-card__image" src="https://picsum.photos/480/270">
          <gcds-link class="gcds-card__title" href="#card">
            Card
          </gcds-link>
        </div>
      </mock:shadow-root>
    </gcds-card>
    `);
  });

  it('renders w/ img and alt', async () => {
    const page = await newSpecPage({
      components: [GcdsCard],
      html: `<gcds-card
        card-title="Card"
        href="#card"
        img-src="https://picsum.photos/480/270"
        img-alt="Alt text for image from picsum"
      ></gcds-card>`,
    });
    expect(page.root).toEqualHtml(`
    <gcds-card card-title="Card" href="#card" img-src="https://picsum.photos/480/270" img-alt="Alt text for image from picsum" type="link">
      <mock:shadow-root>
        <div class="gcds-card gcds-card--link">
          <img alt="Alt text for image from picsum" class="gcds-card__image" src="https://picsum.photos/480/270">
          <gcds-link class="gcds-card__title" href="#card">
            Card
          </gcds-link>
        </div>
      </mock:shadow-root>
    </gcds-card>
    `);
  });

  it('renders w/ footer slot', async () => {
    const page = await newSpecPage({
      components: [GcdsCard],
      html: `<gcds-card
        type="link"
        card-title="Card"
        href="#card"
      >
        <p slot="footer">Additional Metadata</p>
      </gcds-card>`,
    });
    expect(page.root).toEqualHtml(`
    <gcds-card card-title="Card" href="#card" type="link">
      <mock:shadow-root>
        <div class="gcds-card gcds-card--link">
          <gcds-link class="gcds-card__title" href="#card">
            Card
          </gcds-link>
          <div class="gcds-card__spacer"></div>
          <slot name="footer"></slot>
        </div>
      </mock:shadow-root>
      <p slot="footer">
        Additional Metadata
      </p>
    </gcds-card
    `);
  });
});
