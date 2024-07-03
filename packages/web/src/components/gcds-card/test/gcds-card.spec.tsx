import { newSpecPage } from '@stencil/core/testing';
import { GcdsCard } from '../gcds-card';

describe('gcds-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsCard],
      html: `<gcds-card
        card-title="Card"
        href="#card"
      ></gcds-card>`,
    });
    expect(page.root).toEqualHtml(`
    <gcds-card card-title="Card" href="#card">
      <mock:shadow-root>
        <div class="gcds-card">
          <gcds-link class="gcds-card__title" href="#card">
            Card
          </gcds-link>
          <div class="gcds-card__description">
          </div>
        </div>
      </mock:shadow-root>
    </gcds-card
    `);
  });

  it('renders w/ badge', async () => {
    const page = await newSpecPage({
      components: [GcdsCard],
      html: `<gcds-card
        card-title="Card"
        href="#card"
        badge="new"
      ></gcds-card>`,
    });
    expect(page.root).toEqualHtml(`
    <gcds-card card-title="Card" href="#card" badge="new">
      <mock:shadow-root>
        <div class="gcds-card">
          <gcds-text class="gcds-badge" id="gcds-badge" margin-bottom="0" size="caption" text-role="light">
            <strong>
              <gcds-sr-only>
                Tagged:
              </gcds-sr-only>
              new
            </strong>
          </gcds-text>
          <gcds-link aria-describedby="gcds-badge" class="gcds-card__title" href="#card">
            Card
          </gcds-link>
          <div class="gcds-card__description">
          </div>
        </div>
      </mock:shadow-root>
    </gcds-card
    `);
  });

  it('renders w/ img no alt text', async () => {
    const page = await newSpecPage({
      components: [GcdsCard],
      html: `<gcds-card
        card-title="Card"
        href="#card"
        img-src="https://picsum.photos/480/270"
      ></gcds-card>`,
    });
    expect(page.root).toEqualHtml(`
    <gcds-card card-title="Card" href="#card" img-src="https://picsum.photos/480/270">
      <mock:shadow-root>
        <div class="gcds-card">
          <img alt="" class="gcds-card__image" src="https://picsum.photos/480/270">
          <gcds-link class="gcds-card__title" href="#card">
            Card
          </gcds-link>
          <div class="gcds-card__description">
          </div>
        </div>
      </mock:shadow-root>
    </gcds-card
    `);
  });

  it('renders w/ img and alt text', async () => {
    const page = await newSpecPage({
      components: [GcdsCard],
      html: `<gcds-card
        card-title="Card"
        href="#card"
        img-src="https://picsum.photos/480/270"
        img-alt="Randomly generated picture"
      ></gcds-card>`,
    });
    expect(page.root).toEqualHtml(`
    <gcds-card card-title="Card" href="#card" img-src="https://picsum.photos/480/270" img-alt="Randomly generated picture">
      <mock:shadow-root>
        <div class="gcds-card">
          <img alt="Randomly generated picture" class="gcds-card__image" src="https://picsum.photos/480/270">
          <gcds-link class="gcds-card__title" href="#card">
            Card
          </gcds-link>
          <div class="gcds-card__description">
          </div>
        </div>
      </mock:shadow-root>
    </gcds-card
    `);
  });

  it('renders w/ description', async () => {
    const page = await newSpecPage({
      components: [GcdsCard],
      html: `<gcds-card
        card-title="Card"
        href="#card"
        description="Card description"
      ></gcds-card>`,
    });
    expect(page.root).toEqualHtml(`
    <gcds-card card-title="Card" href="#card" description="Card description">
      <mock:shadow-root>
        <div class="gcds-card">
          <gcds-link class="gcds-card__title" href="#card">
            Card
          </gcds-link>
          <div class="gcds-card__description">
            <gcds-text>
              Card description
            </gcds-text>
          </div>
        </div>
      </mock:shadow-root>
    </gcds-card
    `);
  });

  it('renders w/ default slot', async () => {
    const page = await newSpecPage({
      components: [GcdsCard],
      html: `<gcds-card
        card-title="Card"
        href="#card"
      >
        <p>Card description</p>
      </gcds-card>`,
    });
    expect(page.root).toEqualHtml(`
    <gcds-card card-title="Card" href="#card">
      <mock:shadow-root>
        <div class="gcds-card">
          <gcds-link class="gcds-card__title" href="#card">
            Card
          </gcds-link>
          <div class="gcds-card__description">
            <slot></slot>
          </div>
        </div>
      </mock:shadow-root>
      <p>Card description</p>
    </gcds-card
    `);
  });

  it('renders w/ h3 title element', async () => {
    const page = await newSpecPage({
      components: [GcdsCard],
      html: `<gcds-card
        card-title="Card"
        href="#card"
        title-element="h3"
      ></gcds-card>`,
    });
    expect(page.root).toEqualHtml(`
    <gcds-card card-title="Card" href="#card" title-element="h3">
      <mock:shadow-root>
        <div class="gcds-card">
          <h3 class="gcds-card__title">
            <gcds-link href="#card">
              Card
            </gcds-link>
          </h3>
          <div class="gcds-card__description">
          </div>
        </div>
      </mock:shadow-root>
    </gcds-card
    `);
  });

  it('renders w/ h4 title element', async () => {
    const page = await newSpecPage({
      components: [GcdsCard],
      html: `<gcds-card
        card-title="Card"
        href="#card"
        title-element="h4"
      ></gcds-card>`,
    });
    expect(page.root).toEqualHtml(`
    <gcds-card card-title="Card" href="#card" title-element="h4">
      <mock:shadow-root>
        <div class="gcds-card">
          <h4 class="gcds-card__title">
            <gcds-link href="#card">
              Card
            </gcds-link>
          </h4>
          <div class="gcds-card__description">
          </div>
        </div>
      </mock:shadow-root>
    </gcds-card
    `);
  });

  it('renders w/ h5 title element', async () => {
    const page = await newSpecPage({
      components: [GcdsCard],
      html: `<gcds-card
        card-title="Card"
        href="#card"
        title-element="h5"
      ></gcds-card>`,
    });
    expect(page.root).toEqualHtml(`
    <gcds-card card-title="Card" href="#card" title-element="h5">
      <mock:shadow-root>
        <div class="gcds-card">
          <h5 class="gcds-card__title">
            <gcds-link href="#card">
              Card
            </gcds-link>
          </h5>
          <div class="gcds-card__description">
          </div>
        </div>
      </mock:shadow-root>
    </gcds-card
    `);
  });

  it('renders w/ h6 title element', async () => {
    const page = await newSpecPage({
      components: [GcdsCard],
      html: `<gcds-card
        card-title="Card"
        href="#card"
        title-element="h6"
      ></gcds-card>`,
    });
    expect(page.root).toEqualHtml(`
    <gcds-card card-title="Card" href="#card" title-element="h6">
      <mock:shadow-root>
        <div class="gcds-card">
          <h6 class="gcds-card__title">
            <gcds-link href="#card">
              Card
            </gcds-link>
          </h6>
          <div class="gcds-card__description">
          </div>
        </div>
      </mock:shadow-root>
    </gcds-card
    `);
  });
});
