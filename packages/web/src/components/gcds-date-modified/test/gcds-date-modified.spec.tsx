import { newSpecPage } from '@stencil/core/testing';
import { GcdsDateModified } from '../gcds-date-modified';

describe('gcds-date-modified', () => {
  it('renders - English', async () => {
    const page = await newSpecPage({
      components: [GcdsDateModified],
      html: `<gcds-date-modified lang="en">2022-03-03</gcds-date-modified>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-date-modified lang="en">
        <mock:shadow-root>
          <dl class="gcds-date-modified">
            <dt>
              <gcds-text display="inline" margin-bottom="0">Date modified:</gcds-text>
            </dt>
            <dd>
              <gcds-text display="inline" margin-bottom="0">
                <time><slot></slot></time>
              </gcds-text>
            </dd>
          </dl>
        </mock:shadow-root>
        2022-03-03
      </gcds-date-modified>
    `);
  });

  it('renders - French', async () => {
    const page = await newSpecPage({
      components: [GcdsDateModified],
      html: `<gcds-date-modified lang="fr">2022-03-03</gcds-date-modified>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-date-modified lang="fr">
        <mock:shadow-root>
          <dl class="gcds-date-modified">
            <dt>
              <gcds-text display="inline" margin-bottom="0">Date de modification :</gcds-text>
            </dt>
            <dd>
              <gcds-text display="inline" margin-bottom="0">
                <time><slot></slot></time>
              </gcds-text>
            </dd>
          </dl>
        </mock:shadow-root>
        2022-03-03
      </gcds-date-modified>
    `);
  });

  it('renders type version', async () => {
    const page = await newSpecPage({
      components: [GcdsDateModified],
      html: `<gcds-date-modified type="version">1.2.3</gcds-date-modified>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-date-modified type="version">
        <mock:shadow-root>
          <dl class="gcds-date-modified">
            <dt>
              <gcds-text display="inline" margin-bottom="0">Version</gcds-text>
            </dt>
            <dd>
              <gcds-text display="inline" margin-bottom="0">
                <slot></slot>
              </gcds-text>
            </dd>
          </dl>
        </mock:shadow-root>
        1.2.3
      </gcds-date-modified>
    `);
  });
});
