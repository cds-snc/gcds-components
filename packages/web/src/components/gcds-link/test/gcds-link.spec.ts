import { newSpecPage } from '@stencil/core/testing';
import { GcdsLink } from '../gcds-link';
import i18n from '../i18n/i18n';

describe('gcds-link', () => {
  it('renders with no passed properties', async () => {
    const { root } = await newSpecPage({
      components: [GcdsLink],
      html: '<gcds-link href="#">Link text</gcds-link>',
    });
    expect(root).toEqualHtml(`
      <gcds-link href="#">
        <mock:shadow-root>
          <a class="gcds-link link--inherit" part="link" href="#" role="link" tabindex="0" target="_self">
            <slot></slot>
          </a>
        </mock:shadow-root>
        Link text
      </gcds-link>
    `);
  });

  /*
   * Variant tests
   */

  it('[english] renders external link with label + icon', async () => {
    const { root } = await newSpecPage({
      components: [GcdsLink],
      html: `<gcds-link href="https://google.com" target="_blank">External Link</gcds-link>`,
    });
    expect(root).toEqualHtml(`
      <gcds-link href="https://google.com" target="_blank">
        <mock:shadow-root>
          <a class="gcds-link link--inherit" href="https://google.com" part="link" target="_blank" rel="noopener noreferrer" role="link" tabindex="0">
            <slot></slot>
            <gcds-icon name="external-link" label="${i18n.en.external}" margin-left="100" />
          </a>
        </mock:shadow-root>
        External Link
      </gcds-link>
    `);
  });

  it('[french] renders external link with label + icon', async () => {
    const { root } = await newSpecPage({
      components: [GcdsLink],
      html: `<gcds-link href="https://google.com" target="_blank" lang="fr">External Link</gcds-link>`,
    });
    expect(root).toEqualHtml(`
      <gcds-link href="https://google.com" target="_blank" lang="fr">
        <mock:shadow-root>
          <a class="gcds-link link--inherit" href="https://google.com" part="link" target="_blank" rel="noopener noreferrer" role="link" tabindex="0">
            <slot></slot>
            <gcds-icon name="external-link" label="${i18n.fr.external}" margin-left="100" />
          </a>
        </mock:shadow-root>
        External Link
      </gcds-link>
    `);
  });

  it('[english] renders download attribute + icon', async () => {
    const { root } = await newSpecPage({
      components: [GcdsLink],
      html: `<gcds-link href="https://google.com" download>Download file</gcds-link>`,
    });
    expect(root).toEqualHtml(`
      <gcds-link href="https://google.com" download>
        <mock:shadow-root>
          <a class="gcds-link link--inherit" href="https://google.com" part="link" download role="link" tabindex="0" target="_self">
            <slot></slot>
            <gcds-icon name="download" label="${i18n.en.download}" margin-left="100" />
          </a>
        </mock:shadow-root>
        Download file
      </gcds-link>
    `);
  });

  it('[french] renders download attribute + icon', async () => {
    const { root } = await newSpecPage({
      components: [GcdsLink],
      html: `<gcds-link href="https://google.com" download lang="fr">Download file</gcds-link>`,
    });
    expect(root).toEqualHtml(`
      <gcds-link href="https://google.com" download lang="fr">
        <mock:shadow-root>
          <a class="gcds-link link--inherit" href="https://google.com" part="link" download role="link" tabindex="0" target="_self">
            <slot></slot>
            <gcds-icon name="download" label="${i18n.fr.download}" margin-left="100" />
          </a>
        </mock:shadow-root>
        Download file
      </gcds-link>
    `);
  });

  it('[english] renders download attribute - named file', async () => {
    const { root } = await newSpecPage({
      components: [GcdsLink],
      html: `<gcds-link href="https://google.com" download="myfile.pdf">Download file</gcds-link>`,
    });
    expect(root).toEqualHtml(`
      <gcds-link href="https://google.com" download="myfile.pdf">
        <mock:shadow-root>
          <a class="gcds-link link--inherit" href="https://google.com" part="link" download="myfile.pdf" role="link" tabindex="0" target="_self">
            <slot></slot>
            <gcds-icon name="download" label="${i18n.en.download}" margin-left="100" />
          </a>
        </mock:shadow-root>
        Download file
      </gcds-link>
    `);
  });

  it('[french] renders download attribute - named file', async () => {
    const { root } = await newSpecPage({
      components: [GcdsLink],
      html: `<gcds-link href="https://google.com" download="myfile.pdf" lang="fr">Download file</gcds-link>`,
    });
    expect(root).toEqualHtml(`
      <gcds-link href="https://google.com" download="myfile.pdf" lang="fr">
        <mock:shadow-root>
          <a class="gcds-link link--inherit" href="https://google.com" part="link" download="myfile.pdf" role="link" tabindex="0" target="_self">
            <slot></slot>
            <gcds-icon name="download" label="${i18n.fr.download}" margin-left="100" />
          </a>
        </mock:shadow-root>
        Download file
      </gcds-link>
    `);
  });

  it('[english] renders phone label + icon', async () => {
    const { root } = await newSpecPage({
      components: [GcdsLink],
      html: `<gcds-link href="tel:1234567890">123-456-7890</gcds-link>`,
    });
    expect(root).toEqualHtml(`
      <gcds-link href="tel:1234567890">
        <mock:shadow-root>
          <a class="gcds-link link--inherit" href="tel:1234567890" part="link" role="link" tabindex="0" target="_self">
            <slot></slot>
            <gcds-icon name="phone" label="${i18n.en.phone}" margin-left="100" />
          </a>
        </mock:shadow-root>
        123-456-7890
      </gcds-link>
    `);
  });

  it('[french] renders phone label + icon', async () => {
    const { root } = await newSpecPage({
      components: [GcdsLink],
      html: `<gcds-link href="tel:1234567890" lang="fr">123-456-7890</gcds-link>`,
    });
    expect(root).toEqualHtml(`
      <gcds-link href="tel:1234567890" lang="fr">
        <mock:shadow-root>
          <a class="gcds-link link--inherit" href="tel:1234567890" part="link" role="link" tabindex="0" target="_self">
            <slot></slot>
            <gcds-icon name="phone" label="${i18n.fr.phone}" margin-left="100" />
          </a>
        </mock:shadow-root>
        123-456-7890
      </gcds-link>
    `);
  });

  it('[english] renders email label + icon', async () => {
    const { root } = await newSpecPage({
      components: [GcdsLink],
      html: `<gcds-link href="mailto:test@test.com">test@test.com</gcds-link>`,
    });
    expect(root).toEqualHtml(`
      <gcds-link href="mailto:test@test.com">
        <mock:shadow-root>
          <a class="gcds-link link--inherit" href="mailto:test@test.com" part="link" role="link" tabindex="0" target="_self">
            <slot></slot>
            <gcds-icon icon-style="regular" name="envelope" label="${i18n.en.email}" margin-left="100" />
          </a>
        </mock:shadow-root>
        test@test.com
      </gcds-link>
    `);
  });

  it('[french] renders email label + icon', async () => {
    const { root } = await newSpecPage({
      components: [GcdsLink],
      html: `<gcds-link href="mailto:test@test.com" lang="fr">test@test.com</gcds-link>`,
    });
    expect(root).toEqualHtml(`
      <gcds-link href="mailto:test@test.com" lang="fr">
        <mock:shadow-root>
          <a class="gcds-link link--inherit" href="mailto:test@test.com" part="link" role="link" tabindex="0" target="_self">
            <slot></slot>
            <gcds-icon icon-style="regular" name="envelope" label="${i18n.fr.email}" margin-left="100" />
          </a>
        </mock:shadow-root>
        test@test.com
      </gcds-link>
    `);
  });

  it('renders a small sized link', async () => {
    const { root } = await newSpecPage({
      components: [GcdsLink],
      html: '<gcds-link href="#" size="small">Link text</gcds-link>',
    });
    expect(root).toEqualHtml(`
      <gcds-link href="#" size="small">
        <mock:shadow-root>
          <a class="gcds-link link--small" part="link" href="#" role="link" tabindex="0" target="_self">
            <slot></slot>
          </a>
        </mock:shadow-root>
        Link text
      </gcds-link>
    `);
  });

  it('renders a regular sized link', async () => {
    const { root } = await newSpecPage({
      components: [GcdsLink],
      html: '<gcds-link href="#" size="regular">Link text</gcds-link>',
    });
    expect(root).toEqualHtml(`
      <gcds-link href="#" size="regular">
        <mock:shadow-root>
          <a class="gcds-link link--regular" part="link" href="#" role="link" tabindex="0" target="_self">
            <slot></slot>
          </a>
        </mock:shadow-root>
        Link text
      </gcds-link>
    `);
  });

  it('renders a inherited size link', async () => {
    const { root } = await newSpecPage({
      components: [GcdsLink],
      html: '<gcds-link href="#" size="inherit">Link text</gcds-link>',
    });
    expect(root).toEqualHtml(`
      <gcds-link href="#" size="inherit">
        <mock:shadow-root>
          <a class="gcds-link link--inherit" part="link" href="#" role="link" tabindex="0" target="_self">
            <slot></slot>
          </a>
        </mock:shadow-root>
        Link text
      </gcds-link>
    `);
  });

  it('renders a light link variant', async () => {
    const { root } = await newSpecPage({
      components: [GcdsLink],
      html: '<gcds-link href="#" variant="light">Link text</gcds-link>',
    });
    expect(root).toEqualHtml(`
      <gcds-link href="#" variant="light">
        <mock:shadow-root>
          <a class="gcds-link link--inherit variant-light" part="link" href="#" role="link" tabindex="0" target="_self">
            <slot></slot>
          </a>
        </mock:shadow-root>
        Link text
      </gcds-link>
    `);
  });
});
