import { newSpecPage } from '@stencil/core/testing';
import { GcdsSrOnly } from '../gcds-sr-only';

describe('gcds-sr-only', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsSrOnly],
      html: `<gcds-sr-only>Hidden text</gcds-sr-only>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-sr-only>
        <mock:shadow-root>
          <p>
            <slot></slot>
          </p>
        </mock:shadow-root>
        Hidden text
      </gcds-sr-only>
    `);
  });

  it('renders p tag if invalid tag value', async () => {
    const page = await newSpecPage({
      components: [GcdsSrOnly],
      html: `<gcds-sr-only tag="aside">Hidden text</gcds-sr-only>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-sr-only tag="aside">
        <mock:shadow-root>
          <p>
            <slot></slot>
          </p>
        </mock:shadow-root>
        Hidden text
      </gcds-sr-only>
    `);
  });

  it('renders p tag', async () => {
    const page = await newSpecPage({
      components: [GcdsSrOnly],
      html: `<gcds-sr-only tag="p">Hidden text</gcds-sr-only>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-sr-only tag="p">
        <mock:shadow-root>
          <p>
            <slot></slot>
          </p>
        </mock:shadow-root>
        Hidden text
      </gcds-sr-only>
    `);
  });

  it('renders span tag', async () => {
    const page = await newSpecPage({
      components: [GcdsSrOnly],
      html: `<gcds-sr-only tag="span">Hidden text</gcds-sr-only>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-sr-only tag="span">
        <mock:shadow-root>
          <span>
            <slot></slot>
          </span>
        </mock:shadow-root>
        Hidden text
      </gcds-sr-only>
    `);
  });

  it('renders h1 heading tag', async () => {
    const page = await newSpecPage({
      components: [GcdsSrOnly],
      html: `<gcds-sr-only tag="h1">Hidden text</gcds-sr-only>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-sr-only tag="h1">
        <mock:shadow-root>
          <h1>
            <slot></slot>
          </h1>
        </mock:shadow-root>
        Hidden text
      </gcds-sr-only>
    `);
  });

  it('renders h2 heading tag', async () => {
    const page = await newSpecPage({
      components: [GcdsSrOnly],
      html: `<gcds-sr-only tag="h2">Hidden text</gcds-sr-only>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-sr-only tag="h2">
        <mock:shadow-root>
          <h2>
            <slot></slot>
          </h2>
        </mock:shadow-root>
        Hidden text
      </gcds-sr-only>
    `);
  });

  it('renders h3 heading tag', async () => {
    const page = await newSpecPage({
      components: [GcdsSrOnly],
      html: `<gcds-sr-only tag="h3">Hidden text</gcds-sr-only>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-sr-only tag="h3">
        <mock:shadow-root>
          <h3>
            <slot></slot>
          </h3>
        </mock:shadow-root>
        Hidden text
      </gcds-sr-only>
    `);
  });

  it('renders h4 heading tag', async () => {
    const page = await newSpecPage({
      components: [GcdsSrOnly],
      html: `<gcds-sr-only tag="h4">Hidden text</gcds-sr-only>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-sr-only tag="h4">
        <mock:shadow-root>
          <h4>
            <slot></slot>
          </h4>
        </mock:shadow-root>
        Hidden text
      </gcds-sr-only>
    `);
  });

  it('renders h5 heading tag', async () => {
    const page = await newSpecPage({
      components: [GcdsSrOnly],
      html: `<gcds-sr-only tag="h5">Hidden text</gcds-sr-only>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-sr-only tag="h5">
        <mock:shadow-root>
          <h5>
            <slot></slot>
          </h5>
        </mock:shadow-root>
        Hidden text
      </gcds-sr-only>
    `);
  });

  it('renders h6 heading tag', async () => {
    const page = await newSpecPage({
      components: [GcdsSrOnly],
      html: `<gcds-sr-only tag="h6">Hidden text</gcds-sr-only>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-sr-only tag="h6">
        <mock:shadow-root>
          <h6>
            <slot></slot>
          </h6>
        </mock:shadow-root>
        Hidden text
      </gcds-sr-only>
    `);
  });
});
