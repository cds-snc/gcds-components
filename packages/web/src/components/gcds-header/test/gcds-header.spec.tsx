import { newSpecPage } from '@stencil/core/testing';
import { GcdsHeader } from '../gcds-header';

describe('gcds-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsHeader],
      html: `<gcds-header></gcds-header>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-header role="banner">
        <mock:shadow-root>
          <div class="gcds-header__brand">
            <div class="brand__container container--simple">
              <div class="brand__signature">
                <gcds-signature has-link="" lang="en" type="signature" variant="colour"></gcds-signature>
              </div>
            </div>
          </div>
          <slot name="menu"></slot>
        </mock:shadow-root>
      </gcds-header>
    `);
  });

  it('renders interfaced components', async () => {
    const page = await newSpecPage({
      components: [GcdsHeader],
      html: `<gcds-header lang-href="/fr/" skip-to-href="#main" signature-variant="colour" signature-has-link="true"></gcds-header>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-header lang-href="/fr/" role="banner" signature-has-link="true" signature-variant="colour" skip-to-href="#main">
        <mock:shadow-root>
          <nav class="gcds-header__skip-to-nav" aria-label="Skip to">
            <gcds-link href="#main">
              Skip to main content
            </gcds-link>
          </nav>
          <div class="gcds-header__brand">
            <div class="brand__container container--simple">
              <section class="brand__toggle">
                <gcds-lang-toggle href="/fr/" lang="en"></gcds-lang-toggle>
              </section>
              <div class="brand__signature">
                <gcds-signature has-link="" lang="en" type="signature" variant="colour"></gcds-signature>
              </div>
            </div>
          </div>
          <slot name="menu"></slot>
        </mock:shadow-root>
      </gcds-header>
    `);
  });

  it('renders with slotted elements', async () => {
    const page = await newSpecPage({
      components: [GcdsHeader],
      html: `
      <gcds-header>
        <div slot="banner"></div>
        <form slot="search"></form>
        <ul slot="menu"></ul>
        <ul slot="breadcrumbs"></ul>
      </gcds-header>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-header role="banner">
        <mock:shadow-root>
          <slot name="banner"></slot>
          <div class="gcds-header__brand">
            <div class="brand__container">
              <div class="brand__signature">
                <gcds-signature has-link="" lang="en" type="signature" variant="colour"></gcds-signature>
              </div>
              <div class="brand__search">
                <slot name="search"></slot>
              </div>
            </div>
          </div>
          <slot name="menu"></slot>
        </mock:shadow-root>
        <div slot="banner"></div>
        <form slot="search"></form>
        <ul slot="menu"></ul>
        <ul slot="breadcrumbs"></ul>
      </gcds-header>
    `);
  });

  it('renders all slotted elements', async () => {
    const page = await newSpecPage({
      components: [GcdsHeader],
      html: `
      <gcds-header>
        <ul slot="skip-to-nav"></ul>
        <div slot="banner"></div>
        <img slot="signature"/>
        <a href="/fr/" slot="toggle">Toggle</a>
        <form slot="search"></form>
        <ul slot="menu"></ul>
        <ul slot="breadcrumbs"></ul>
      </gcds-header>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-header role="banner">
        <mock:shadow-root>
          <slot name="skip-to-nav"></slot>
          <slot name="banner"></slot>
          <div class="gcds-header__brand">
            <div class="brand__container">
              <slot name="toggle"></slot>
              <slot name="signature"></slot>
              <div class="brand__search">
                <slot name="search"></slot>
              </div>
            </div>
          </div>
          <slot name="menu"></slot>
        </mock:shadow-root>
        <ul slot="skip-to-nav"></ul>
        <div slot="banner"></div>
        <img slot="signature"/>
        <a href="/fr/" slot="toggle">
          Toggle
        </a>
        <form slot="search"></form>
        <ul slot="menu"></ul>
        <ul slot="breadcrumbs"></ul>
      </gcds-header>
    `);
  });
});
