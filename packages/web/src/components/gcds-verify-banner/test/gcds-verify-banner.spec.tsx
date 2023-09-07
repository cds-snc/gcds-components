import { newSpecPage } from '@stencil/core/testing';

jest.mock('../assets/canada-flag.svg', () => 'Canada Flag');
jest.mock('../assets/content-toggle-arrow.svg', () => 'Content Toggle Arrow');

import { GcdsVerifyBanner } from '../gcds-verify-banner';

describe('gcds-verify-banner', () => {
  it('renders in EN', async () => {
    const page = await newSpecPage({
      components: [GcdsVerifyBanner],
      html: `<gcds-verify-banner></gcds-verify-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-verify-banner>
        <mock:shadow-root>
          <details class="gcds-verify-banner">
            <summary aria-expanded="false" class="container-xl" role="button">
              <span class='svg-container'>Canada Flag</span>
              <p>
                <small>An official website of the Government of Canada.</small>
                <button class="verify-banner__toggle">
                  <small>Learn to recognize one</small>
                  <span class='svg-container'>Content Toggle Arrow</span>
                </button>
              </p>
            </summary>
            <div class="verify-banner__content container-xl">
              <p><small>It can be hard to know what sites to trust. Here's how to identify a Government of Canada website before you share any info:</small></p>
              <br/>
              <gcds-grid tag="ul" container="lg" columns="1fr" columns-tablet="1fr 1fr">
                <li>
                  <h4>Canada.ca or gc.ca</h4>
                  <p><small>Government of Canada website's normally use Canada.ca or gc.ca in the URL.</small></p>
                </li>
                <li>
                  <h4>Available in both of Canada's Official Languages</h4>
                  <p><small>Information will be available in both English and French.</small></p>
                </li>
                <li>
                  <h4>HTTPS</h4>
                  <p><small>Secure Government of Canada websites use <strong>https://</strong>.</small></p>
                </li>
                <li>
                  <h4>A point of contact</h4>
                  <p><small>Contact information will have Canada.ca, gc.ca, or the department name in the email address.</small></p>
                </li>
              </gcds-grid>
            </div>
          </details>
        </mock:shadow-root>
      </gcds-verify-banner>
    `);
  });

  it('renders in FR', async () => {
    const page = await newSpecPage({
      components: [GcdsVerifyBanner],
      html: `<gcds-verify-banner lang="fr"></gcds-verify-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-verify-banner lang="fr">
        <mock:shadow-root>
          <details class="gcds-verify-banner">
            <summary aria-expanded="false" class="container-xl" role="button">
              <span class='svg-container'>Canada Flag</span>
              <p>
                <small>Les sites Web officiels du gouvernement du Canada.</small>
                <button class="verify-banner__toggle">
                  <small>Comment les reconnaître</small>
                  <span class='svg-container'>Content Toggle Arrow</span>
                </button>
              </p>
            </summary>
            <div class="verify-banner__content container-xl">
              <p><small>Il peut être difficile de savoir quels sites sont fiables. Avant de partager des renseignements, vérifiez les points suivant pour déterminer s'il s'agit bien d'un site du gouvernement du Canada:</small></p>
              <br/>
              <gcds-grid tag="ul" container="lg" columns="1fr" columns-tablet="1fr 1fr">
                <li>
                  <h4>Canada.ca ou gc.ca</h4>
                  <p><small>On retrouve normalement Canada.ca ou gc.ca dans l'adresse URL d'un site Web du gouvernement du Canada.</small></p>
                </li>
                <li>
                  <h4>Offert dans les deux langues officielles</h4>
                  <p><small>Vérifiez que les renseignements sont accessibles en français et en anglais.</small></p>
                </li>
                <li>
                  <h4>HTTPS</h4>
                  <p><small>Lorsqu'un navigateur affiche les sites Web sécuritaires du gouvernement du Canada, on retrouve <strong>https://</strong>.</small></p>
                </li>
                <li>
                  <h4>Un point de communication</h4>
                  <p><small>On retrouve Canada.ca, gc.ca ou le nom du ministère dans l'URL de toute adresse courriel du gouvernement du Canada.</small></p>
                </li>
              </gcds-grid>
            </div>
          </details>
        </mock:shadow-root>
      </gcds-verify-banner>
    `);
  });

  /**
   * Fixed position test
   */

  it('renders with position fixed', async () => {
    const page = await newSpecPage({
      components: [GcdsVerifyBanner],
      html: `<gcds-verify-banner is-fixed></gcds-verify-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-verify-banner is-fixed>
        <mock:shadow-root>
          <details class="gcds-verify-banner verify-banner--is-fixed">
            <summary aria-expanded="false" class="container-xl" role="button">
              <span class='svg-container'>Canada Flag</span>
              <p>
                <small>An official website of the Government of Canada.</small>
                <button class="verify-banner__toggle">
                  <small>Learn to recognize one</small>
                  <span class='svg-container'>Content Toggle Arrow</span>
                </button>
              </p>
            </summary>
            <div class="verify-banner__content container-xl">
              <p><small>It can be hard to know what sites to trust. Here's how to identify a Government of Canada website before you share any info:</small></p>
              <br/>
              <gcds-grid tag="ul" container="lg" columns="1fr" columns-tablet="1fr 1fr">
                <li>
                  <h4>Canada.ca or gc.ca</h4>
                  <p><small>Government of Canada website's normally use Canada.ca or gc.ca in the URL.</small></p>
                </li>
                <li>
                  <h4>Available in both of Canada's Official Languages</h4>
                  <p><small>Information will be available in both English and French.</small></p>
                </li>
                <li>
                  <h4>HTTPS</h4>
                  <p><small>Secure Government of Canada websites use <strong>https://</strong>.</small></p>
                </li>
                <li>
                  <h4>A point of contact</h4>
                  <p><small>Contact information will have Canada.ca, gc.ca, or the department name in the email address.</small></p>
                </li>
              </gcds-grid>
            </div>
          </details>
        </mock:shadow-root>
      </gcds-verify-banner>
    `);
  });

  it('renders without position fixed', async () => {
    const page = await newSpecPage({
      components: [GcdsVerifyBanner],
      html: `<gcds-verify-banner></gcds-verify-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-verify-banner>
        <mock:shadow-root>
          <details class="gcds-verify-banner">
            <summary aria-expanded="false" class="container-xl" role="button">
              <span class='svg-container'>Canada Flag</span>
              <p>
                <small>An official website of the Government of Canada.</small>
                <button class="verify-banner__toggle">
                  <small>Learn to recognize one</small>
                  <span class='svg-container'>Content Toggle Arrow</span>
                </button>
              </p>
            </summary>
            <div class="verify-banner__content container-xl">
              <p><small>It can be hard to know what sites to trust. Here's how to identify a Government of Canada website before you share any info:</small></p>
              <br/>
              <gcds-grid tag="ul" container="lg" columns="1fr" columns-tablet="1fr 1fr">
                <li>
                  <h4>Canada.ca or gc.ca</h4>
                  <p><small>Government of Canada website's normally use Canada.ca or gc.ca in the URL.</small></p>
                </li>
                <li>
                  <h4>Available in both of Canada's Official Languages</h4>
                  <p><small>Information will be available in both English and French.</small></p>
                </li>
                <li>
                  <h4>HTTPS</h4>
                  <p><small>Secure Government of Canada websites use <strong>https://</strong>.</small></p>
                </li>
                <li>
                  <h4>A point of contact</h4>
                  <p><small>Contact information will have Canada.ca, gc.ca, or the department name in the email address.</small></p>
                </li>
              </gcds-grid>
            </div>
          </details>
        </mock:shadow-root>
      </gcds-verify-banner>
    `);
  });

  /**
   * Container width tests
   */

  it('renders container width full', async () => {
    const page = await newSpecPage({
      components: [GcdsVerifyBanner],
      html: `<gcds-verify-banner container="full"></gcds-verify-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-verify-banner container="full">
        <mock:shadow-root>
          <details class="gcds-verify-banner">
            <summary aria-expanded="false" class="container-full" role="button">
              <span class='svg-container'>Canada Flag</span>
              <p>
                <small>An official website of the Government of Canada.</small>
                <button class="verify-banner__toggle">
                  <small>Learn to recognize one</small>
                  <span class='svg-container'>Content Toggle Arrow</span>
                </button>
              </p>
            </summary>
            <div class="verify-banner__content container-full">
              <p><small>It can be hard to know what sites to trust. Here's how to identify a Government of Canada website before you share any info:</small></p>
              <br/>
              <gcds-grid tag="ul" container="lg" columns="1fr" columns-tablet="1fr 1fr">
                <li>
                  <h4>Canada.ca or gc.ca</h4>
                  <p><small>Government of Canada website's normally use Canada.ca or gc.ca in the URL.</small></p>
                </li>
                <li>
                  <h4>Available in both of Canada's Official Languages</h4>
                  <p><small>Information will be available in both English and French.</small></p>
                </li>
                <li>
                  <h4>HTTPS</h4>
                  <p><small>Secure Government of Canada websites use <strong>https://</strong>.</small></p>
                </li>
                <li>
                  <h4>A point of contact</h4>
                  <p><small>Contact information will have Canada.ca, gc.ca, or the department name in the email address.</small></p>
                </li>
              </gcds-grid>
            </div>
          </details>
        </mock:shadow-root>
      </gcds-verify-banner>
    `);
  });

  it('renders container width xl', async () => {
    const page = await newSpecPage({
      components: [GcdsVerifyBanner],
      html: `<gcds-verify-banner container="xl"></gcds-verify-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-verify-banner container="xl">
        <mock:shadow-root>
          <details class="gcds-verify-banner">
            <summary aria-expanded="false" class="container-xl" role="button">
              <span class='svg-container'>Canada Flag</span>
              <p>
                <small>An official website of the Government of Canada.</small>
                <button class="verify-banner__toggle">
                  <small>Learn to recognize one</small>
                  <span class='svg-container'>Content Toggle Arrow</span>
                </button>
              </p>
            </summary>
            <div class="verify-banner__content container-xl">
              <p><small>It can be hard to know what sites to trust. Here's how to identify a Government of Canada website before you share any info:</small></p>
              <br/>
              <gcds-grid tag="ul" container="lg" columns="1fr" columns-tablet="1fr 1fr">
                <li>
                  <h4>Canada.ca or gc.ca</h4>
                  <p><small>Government of Canada website's normally use Canada.ca or gc.ca in the URL.</small></p>
                </li>
                <li>
                  <h4>Available in both of Canada's Official Languages</h4>
                  <p><small>Information will be available in both English and French.</small></p>
                </li>
                <li>
                  <h4>HTTPS</h4>
                  <p><small>Secure Government of Canada websites use <strong>https://</strong>.</small></p>
                </li>
                <li>
                  <h4>A point of contact</h4>
                  <p><small>Contact information will have Canada.ca, gc.ca, or the department name in the email address.</small></p>
                </li>
              </gcds-grid>
            </div>
          </details>
        </mock:shadow-root>
      </gcds-verify-banner>
    `);
  });

  it('renders container width lg', async () => {
    const page = await newSpecPage({
      components: [GcdsVerifyBanner],
      html: `<gcds-verify-banner container="lg"></gcds-verify-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-verify-banner container="lg">
        <mock:shadow-root>
          <details class="gcds-verify-banner">
            <summary aria-expanded="false" class="container-lg" role="button">
              <span class='svg-container'>Canada Flag</span>
              <p>
                <small>An official website of the Government of Canada.</small>
                <button class="verify-banner__toggle">
                  <small>Learn to recognize one</small>
                  <span class='svg-container'>Content Toggle Arrow</span>
                </button>
              </p>
            </summary>
            <div class="verify-banner__content container-lg">
              <p><small>It can be hard to know what sites to trust. Here's how to identify a Government of Canada website before you share any info:</small></p>
              <br/>
              <gcds-grid tag="ul" container="lg" columns="1fr" columns-tablet="1fr 1fr">
                <li>
                  <h4>Canada.ca or gc.ca</h4>
                  <p><small>Government of Canada website's normally use Canada.ca or gc.ca in the URL.</small></p>
                </li>
                <li>
                  <h4>Available in both of Canada's Official Languages</h4>
                  <p><small>Information will be available in both English and French.</small></p>
                </li>
                <li>
                  <h4>HTTPS</h4>
                  <p><small>Secure Government of Canada websites use <strong>https://</strong>.</small></p>
                </li>
                <li>
                  <h4>A point of contact</h4>
                  <p><small>Contact information will have Canada.ca, gc.ca, or the department name in the email address.</small></p>
                </li>
              </gcds-grid>
            </div>
          </details>
        </mock:shadow-root>
      </gcds-verify-banner>
    `);
  });

  it('renders container width md', async () => {
    const page = await newSpecPage({
      components: [GcdsVerifyBanner],
      html: `<gcds-verify-banner container="md"></gcds-verify-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-verify-banner container="md">
        <mock:shadow-root>
          <details class="gcds-verify-banner">
            <summary aria-expanded="false" class="container-md" role="button">
              <span class='svg-container'>Canada Flag</span>
              <p>
                <small>An official website of the Government of Canada.</small>
                <button class="verify-banner__toggle">
                  <small>Learn to recognize one</small>
                  <span class='svg-container'>Content Toggle Arrow</span>
                </button>
              </p>
            </summary>
            <div class="verify-banner__content container-md">
              <p><small>It can be hard to know what sites to trust. Here's how to identify a Government of Canada website before you share any info:</small></p>
              <br/>
              <gcds-grid tag="ul" container="lg" columns="1fr" columns-tablet="1fr 1fr">
                <li>
                  <h4>Canada.ca or gc.ca</h4>
                  <p><small>Government of Canada website's normally use Canada.ca or gc.ca in the URL.</small></p>
                </li>
                <li>
                  <h4>Available in both of Canada's Official Languages</h4>
                  <p><small>Information will be available in both English and French.</small></p>
                </li>
                <li>
                  <h4>HTTPS</h4>
                  <p><small>Secure Government of Canada websites use <strong>https://</strong>.</small></p>
                </li>
                <li>
                  <h4>A point of contact</h4>
                  <p><small>Contact information will have Canada.ca, gc.ca, or the department name in the email address.</small></p>
                </li>
              </gcds-grid>
            </div>
          </details>
        </mock:shadow-root>
      </gcds-verify-banner>
    `);
  });

  it('renders container width sm', async () => {
    const page = await newSpecPage({
      components: [GcdsVerifyBanner],
      html: `<gcds-verify-banner container="sm"></gcds-verify-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-verify-banner container="sm">
        <mock:shadow-root>
          <details class="gcds-verify-banner">
            <summary aria-expanded="false" class="container-sm" role="button">
              <span class='svg-container'>Canada Flag</span>
              <p>
                <small>An official website of the Government of Canada.</small>
                <button class="verify-banner__toggle">
                  <small>Learn to recognize one</small>
                  <span class='svg-container'>Content Toggle Arrow</span>
                </button>
              </p>
            </summary>
            <div class="verify-banner__content container-sm">
              <p><small>It can be hard to know what sites to trust. Here's how to identify a Government of Canada website before you share any info:</small></p>
              <br/>
              <gcds-grid tag="ul" container="lg" columns="1fr" columns-tablet="1fr">
                <li>
                  <h4>Canada.ca or gc.ca</h4>
                  <p><small>Government of Canada website's normally use Canada.ca or gc.ca in the URL.</small></p>
                </li>
                <li>
                  <h4>Available in both of Canada's Official Languages</h4>
                  <p><small>Information will be available in both English and French.</small></p>
                </li>
                <li>
                  <h4>HTTPS</h4>
                  <p><small>Secure Government of Canada websites use <strong>https://</strong>.</small></p>
                </li>
                <li>
                  <h4>A point of contact</h4>
                  <p><small>Contact information will have Canada.ca, gc.ca, or the department name in the email address.</small></p>
                </li>
              </gcds-grid>
            </div>
          </details>
        </mock:shadow-root>
      </gcds-verify-banner>
    `);
  });

  it('renders container width xs', async () => {
    const page = await newSpecPage({
      components: [GcdsVerifyBanner],
      html: `<gcds-verify-banner container="xs"></gcds-verify-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-verify-banner container="xs">
        <mock:shadow-root>
          <details class="gcds-verify-banner">
            <summary aria-expanded="false" class="container-xs" role="button">
              <span class='svg-container'>Canada Flag</span>
              <p>
                <small>An official website of the Government of Canada.</small>
                <button class="verify-banner__toggle">
                  <small>Learn to recognize one</small>
                  <span class='svg-container'>Content Toggle Arrow</span>
                </button>
              </p>
            </summary>
            <div class="verify-banner__content container-xs">
              <p><small>It can be hard to know what sites to trust. Here's how to identify a Government of Canada website before you share any info:</small></p>
              <br/>
              <gcds-grid tag="ul" container="lg" columns="1fr" columns-tablet="1fr">
                <li>
                  <h4>Canada.ca or gc.ca</h4>
                  <p><small>Government of Canada website's normally use Canada.ca or gc.ca in the URL.</small></p>
                </li>
                <li>
                  <h4>Available in both of Canada's Official Languages</h4>
                  <p><small>Information will be available in both English and French.</small></p>
                </li>
                <li>
                  <h4>HTTPS</h4>
                  <p><small>Secure Government of Canada websites use <strong>https://</strong>.</small></p>
                </li>
                <li>
                  <h4>A point of contact</h4>
                  <p><small>Contact information will have Canada.ca, gc.ca, or the department name in the email address.</small></p>
                </li>
              </gcds-grid>
            </div>
          </details>
        </mock:shadow-root>
      </gcds-verify-banner>
    `);
  });
});
