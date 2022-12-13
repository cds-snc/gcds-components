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
        <dl>
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
        <dl>
          <dt>
            Date de modification:
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
});
