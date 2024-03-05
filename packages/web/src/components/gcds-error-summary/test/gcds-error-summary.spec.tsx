import { newSpecPage } from '@stencil/core/testing';
import { GcdsErrorSummary } from '../gcds-error-summary';

describe('gcds-error-summary', () => {
  it('renders - en', async () => {
    const page = await newSpecPage({
      components: [GcdsErrorSummary],
      html: `<gcds-error-summary></gcds-error-summary>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-error-summary>
        <mock:shadow-root>
          <div class="gcds-error-summary" role="alert" tabindex="-1">
            <gcds-heading tag="h2" margin-top="0" margin-bottom="300">
              There was a problem
            </gcds-heading>
            <ol class="summary__errorlist"></ol>
          </div>
        </mock:shadow-root>
      </gcds-error-summary>
    `);
  });

  it('renders - fr', async () => {
    const page = await newSpecPage({
      components: [GcdsErrorSummary],
      html: `<gcds-error-summary></gcds-error-summary>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-error-summary>
        <mock:shadow-root>
          <div class="gcds-error-summary" role="alert" tabindex="-1">
            <gcds-heading tag="h2" margin-top="0" margin-bottom="300">
              There was a problem
            </gcds-heading>
            <ol class="summary__errorlist"></ol>
          </div>
        </mock:shadow-root>
      </gcds-error-summary>
    `);
  });

  it('renders - custom heading', async () => {
    const page = await newSpecPage({
      components: [GcdsErrorSummary],
      html: `<gcds-error-summary heading="This is a heading"></gcds-error-summary>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-error-summary heading="This is a heading">
        <mock:shadow-root>
          <div class="gcds-error-summary" role="alert" tabindex="-1">
            <gcds-heading tag="h2" margin-top="0" margin-bottom="300">
              This is a heading
            </gcds-heading>
            <ol class="summary__errorlist"></ol>
          </div>
        </mock:shadow-root>
      </gcds-error-summary>
    `);
  });

  it('renders - error-links', async () => {
    const page = await newSpecPage({
      components: [GcdsErrorSummary],
      html: `<gcds-error-summary
        error-links='{"#link1":"This is the first error","#link2":"This is the second error"}'
      ></gcds-error-summary>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-error-summary error-links='{"#link1":"This is the first error","#link2":"This is the second error"}'>
        <mock:shadow-root>
          <div class="gcds-error-summary gcds-show" role="alert" tabindex="-1">
            <gcds-heading tag="h2" margin-top="0" margin-bottom="300">
              There was a problem
            </gcds-heading>
            <ol class="summary__errorlist">
              <li class="summary__listitem">
                <gcds-link size="regular" href="#link1">
                  This is the first error
                </gcds-link>
              </li>
              <li class="summary__listitem">
                <gcds-link size="regular" href="#link2">
                  This is the second error
                </gcds-link>
              </li>
            </ol>
          </div>
        </mock:shadow-root>
      </gcds-error-summary>
    `);
  });

  it('renders - listen', async () => {
    const page = await newSpecPage({
      components: [GcdsErrorSummary],
      html: `<gcds-error-summary listen></gcds-error-summary>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-error-summary listen>
        <mock:shadow-root>
          <div class="gcds-error-summary" role="alert" tabindex="-1">
            <gcds-heading tag="h2" margin-top="0" margin-bottom="300">
              There was a problem
            </gcds-heading>
            <ol class="summary__errorlist"></ol>
          </div>
        </mock:shadow-root>
      </gcds-error-summary>
    `);
  });
});
