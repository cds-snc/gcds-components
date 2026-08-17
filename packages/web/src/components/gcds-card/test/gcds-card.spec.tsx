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
            <slot name="title">
              Card
            </slot>
          </gcds-link>
        </div>
      </mock:shadow-root>
      <span data-gcds-text-mirror slot="title">
        Card
      </span>
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
          <gcds-text class="gcds-badge" id="gcds-badge" margin-bottom="0" size="small" text-role="light">
            <strong>
              <gcds-sr-only tag="span">
                Tagged:
              </gcds-sr-only>
              new
            </strong>
          </gcds-text>
          <gcds-link aria-describedby="gcds-badge" class="gcds-card__title" href="#card">
            <slot name="title">
              Card
            </slot>
          </gcds-link>
        </div>
      </mock:shadow-root>
      <span data-gcds-text-mirror slot="title">
        Card
      </span>
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
            <slot name="title">
              Card
            </slot>
          </gcds-link>
        </div>
      </mock:shadow-root>
      <span data-gcds-text-mirror slot="title">
        Card
      </span>
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
            <slot name="title">
              Card
            </slot>
          </gcds-link>
        </div>
      </mock:shadow-root>
      <span data-gcds-text-mirror slot="title">
        Card
      </span>
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
            <slot name="title">
              Card
            </slot>
          </gcds-link>
          <div class="gcds-card__description">
            <gcds-text margin-bottom="0">
              <slot>
                Card description
              </slot>
            </gcds-text>
          </div>
        </div>
      </mock:shadow-root>
      <span data-gcds-text-mirror slot="title">
        Card
      </span>
      <span data-gcds-text-mirror>
        Card description
      </span>
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
            <slot name="title">
              Card
            </slot>
          </gcds-link>
          <div class="gcds-card__description">
            <slot></slot>
          </div>
        </div>
      </mock:shadow-root>
      <p>Card description</p>
      <span data-gcds-text-mirror slot="title">
        Card
      </span>
    </gcds-card
    `);
  });

  it('renders w/ h3 title element', async () => {
    const page = await newSpecPage({
      components: [GcdsCard],
      html: `<gcds-card
        card-title="Card"
        card-title-tag="h3"
        href="#card"
      ></gcds-card>`,
    });
    expect(page.root).toEqualHtml(`
    <gcds-card card-title="Card" href="#card" card-title-tag="h3">
      <mock:shadow-root>
        <div class="gcds-card">
          <h3 class="gcds-card__title">
            <gcds-link href="#card">
              <slot name="title">
                Card
              </slot>
            </gcds-link>
          </h3>
          </div>
        </div>
      </mock:shadow-root>
      <span data-gcds-text-mirror slot="title">
        Card
      </span>
    </gcds-card
    `);
  });

  it('renders w/ h4 title element', async () => {
    const page = await newSpecPage({
      components: [GcdsCard],
      html: `<gcds-card
        card-title="Card"
        card-title-tag="h4"
        href="#card"
      ></gcds-card>`,
    });
    expect(page.root).toEqualHtml(`
    <gcds-card card-title="Card" href="#card" card-title-tag="h4">
      <mock:shadow-root>
        <div class="gcds-card">
          <h4 class="gcds-card__title">
            <gcds-link href="#card">
              <slot name="title">
                Card
              </slot>
            </gcds-link>
          </h4>
          </div>
        </div>
      </mock:shadow-root>
      <span data-gcds-text-mirror slot="title">
        Card
      </span>
    </gcds-card
    `);
  });

  it('renders w/ h5 title element', async () => {
    const page = await newSpecPage({
      components: [GcdsCard],
      html: `<gcds-card
        card-title="Card"
        card-title-tag="h5"
        href="#card"
      ></gcds-card>`,
    });
    expect(page.root).toEqualHtml(`
    <gcds-card card-title="Card" href="#card" card-title-tag="h5">
      <mock:shadow-root>
        <div class="gcds-card">
          <h5 class="gcds-card__title">
            <gcds-link href="#card">
              <slot name="title">
                Card
              </slot>
            </gcds-link>
          </h5>
          </div>
        </div>
      </mock:shadow-root>
      <span data-gcds-text-mirror slot="title">
        Card
      </span>
    </gcds-card
    `);
  });

  it('renders w/ h6 title element', async () => {
    const page = await newSpecPage({
      components: [GcdsCard],
      html: `<gcds-card
        card-title="Card"
        card-title-tag="h6"
        href="#card"
      ></gcds-card>`,
    });
    expect(page.root).toEqualHtml(`
    <gcds-card card-title="Card" href="#card" card-title-tag="h6">
      <mock:shadow-root>
        <div class="gcds-card">
          <h6 class="gcds-card__title">
            <gcds-link href="#card">
              <slot name="title">
                Card
              </slot>
            </gcds-link>
          </h6>
        </div>
      </mock:shadow-root>
      <span data-gcds-text-mirror slot="title">
        Card
      </span>
    </gcds-card
    `);
  });

  it('renders - badge too long error', async () => {
    const page = await newSpecPage({
      components: [GcdsCard],
      html: `<gcds-card
        card-title="Card"
        href="#card"
        badge="Badge that is too long to render"
      ></gcds-card>`,
    });
    expect(page.root).toEqualHtml(`
    <gcds-card card-title="Card" href="#card" badge="Badge that is too long to render">
      <mock:shadow-root>
        <div class="gcds-card">
          <gcds-link aria-describedby="gcds-badge" class="gcds-card__title" href="#card">
            <slot name="title">
              Card
            </slot>
          </gcds-link>
        </div>
      </mock:shadow-root>
      <span data-gcds-text-mirror slot="title">
        Card
      </span>
    </gcds-card
    `);
  });

  it('renders w/ rel', async () => {
    const page = await newSpecPage({
      components: [GcdsCard],
      html: `<gcds-card
        card-title="Card"
        href="#card"
        rel="noopener noreferrer"
      ></gcds-card>`,
    });
    expect(page.root).toEqualHtml(`
    <gcds-card card-title="Card" href="#card" rel="noopener noreferrer">
      <mock:shadow-root>
        <div class="gcds-card">
          <gcds-link class="gcds-card__title" href="#card" rel="noopener noreferrer">
            <slot name="title">
              Card
            </slot>
          </gcds-link>
        </div>
      </mock:shadow-root>
      <span data-gcds-text-mirror slot="title">
        Card
      </span>
    </gcds-card
    `);
  });

  it('renders w/ target', async () => {
    const page = await newSpecPage({
      components: [GcdsCard],
      html: `<gcds-card
        card-title="Card"
        href="#card"
        target="_blank"
      ></gcds-card>`,
    });
    expect(page.root).toEqualHtml(`
    <gcds-card card-title="Card" href="#card" target="_blank">
      <mock:shadow-root>
        <div class="gcds-card">
          <gcds-link class="gcds-card__title" href="#card" target="_blank">
            <slot name="title">
              Card
            </slot>
          </gcds-link>
        </div>
      </mock:shadow-root>
      <span data-gcds-text-mirror slot="title">
        Card
      </span>
    </gcds-card
    `);
  });

  it('does not render - no href attribute', async () => {
    const page = await newSpecPage({
      components: [GcdsCard],
      html: `<gcds-card
        card-title="Card"
      ></gcds-card>`,
    });
    expect(page.root).toEqualHtml(`
    <gcds-card card-title="Card">
      <mock:shadow-root>
      </mock:shadow-root>
    </gcds-card
    `);
  });

  it('does not render - no card-title attribute', async () => {
    const page = await newSpecPage({
      components: [GcdsCard],
      html: `<gcds-card
        href="#card"
      ></gcds-card>`,
    });
    expect(page.root).toEqualHtml(`
    <gcds-card href="#card">
      <mock:shadow-root>
      </mock:shadow-root>
    </gcds-card
    `);
  });

  /*
   * The bug these cover is defined in terms of textContent, so they assert what a
   * caller observes rather than markup shape. Text that lives only in the shadow
   * root is invisible to DOM-text extraction, which is what the browser-native
   * read-aloud features on Android and iOS use.
   */
  describe('text is readable from the light DOM', () => {
    it('exposes a title given as an attribute', async () => {
      const page = await newSpecPage({
        components: [GcdsCard],
        html: `<gcds-card card-title="Plan your departure" href="#card"></gcds-card>`,
      });

      expect(page.root.textContent).toContain('Plan your departure');
    });

    it('exposes a description given as an attribute', async () => {
      const page = await newSpecPage({
        components: [GcdsCard],
        html: `<gcds-card
          card-title="Plan your departure"
          href="#card"
          description="Timeline, medical exams, financial planning."
        ></gcds-card>`,
      });

      expect(page.root.textContent).toContain('Plan your departure');
      expect(page.root.textContent).toContain(
        'Timeline, medical exams, financial planning.',
      );
    });

    it('still renders an attribute description once the title is mirrored', async () => {
      // Regression guard: mirroring the title puts a node in the light DOM. If the
      // description branch keyed off light-DOM emptiness, it would flip to the
      // default slot here and drop the description entirely.
      const page = await newSpecPage({
        components: [GcdsCard],
        html: `<gcds-card
          card-title="Plan your departure"
          href="#card"
          description="Timeline, medical exams, financial planning."
        ></gcds-card>`,
      });

      const description = page.root.shadowRoot.querySelector(
        '.gcds-card__description',
      );
      expect(description).not.toBeNull();
      expect(description.textContent).toContain(
        'Timeline, medical exams, financial planning.',
      );
    });

    it('does not duplicate a description supplied through the default slot', async () => {
      const page = await newSpecPage({
        components: [GcdsCard],
        html: `<gcds-card card-title="Plan your departure" href="#card">
          <p>Timeline, medical exams.</p>
        </gcds-card>`,
      });

      const occurrences =
        page.root.textContent.split('Timeline, medical exams.').length - 1;
      expect(occurrences).toBe(1);
      expect(page.root.textContent).toContain('Plan your departure');
    });

    it('leaves no text behind for a card that fails validation', async () => {
      const page = await newSpecPage({
        components: [GcdsCard],
        html: `<gcds-card card-title="Plan your departure"></gcds-card>`,
      });

      expect(page.root.textContent.trim()).toBe('');
    });

    it('tracks a title changed after first render', async () => {
      const page = await newSpecPage({
        components: [GcdsCard],
        html: `<gcds-card card-title="Before" href="#card"></gcds-card>`,
      });

      page.root.cardTitle = 'After';
      await page.waitForChanges();

      expect(page.root.textContent).toContain('After');
      expect(page.root.textContent).not.toContain('Before');
    });
  });

  describe('rich text through the title and default slots (#1004)', () => {
    it('renders a slotted title without mirroring the prop over it', async () => {
      const page = await newSpecPage({
        components: [GcdsCard],
        html: `<gcds-card card-title="GC design system" href="#card"
          ><span slot="title"><abbr title="Government of Canada">GC</abbr> design system</span
        ></gcds-card>`,
      });

      // The author's markup survives, so rich text in the title is possible at all.
      expect(page.root.querySelector('abbr')).not.toBeNull();

      // And the prop is not mirrored on top of it, which would render the title twice.
      expect(
        page.root.querySelector('[data-gcds-text-mirror][slot="title"]'),
      ).toBeNull();
      expect(page.root.textContent.split('design system').length - 1).toBe(1);
    });

    it('still mirrors the description prop when only the title is slotted', async () => {
      const page = await newSpecPage({
        components: [GcdsCard],
        html: `<gcds-card card-title="Passports" href="#card" description="Renew online."
          ><span slot="title">Passports</span
        ></gcds-card>`,
      });

      // A slotted title must not read as slotted description content: that would
      // drop the description prop entirely and silently.
      expect(page.root.textContent).toContain('Renew online.');
    });

    it('treats default-slot content as the description, as before', async () => {
      const page = await newSpecPage({
        components: [GcdsCard],
        html: `<gcds-card card-title="Passports" href="#card" description="Ignored."
          ><p>Renew <em>online</em>.</p></gcds-card
        >`,
      });

      expect(page.root.querySelector('em')).not.toBeNull();
      expect(page.root.textContent).not.toContain('Ignored.');
    });
  });
});
