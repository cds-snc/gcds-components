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
        <dl class="gcds-date-modified">
          <dt>
            Date modified:
          </dt>
          <dd>
            <time>
              2022-03-03
            </time>
          </dd>
        </dl>
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
        <dl class="gcds-date-modified">
          <dt>
            Date de modification :
          </dt>
          <dd>
            <time>
              2022-03-03
            </time>
          </dd>
        </dl>
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
        <dl class="gcds-date-modified">
          <dt>
            Version
          </dt>
          <dd>
            1.2.3
          </dd>
        </dl>
      </gcds-date-modified>
    `);
  });
});
