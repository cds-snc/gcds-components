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
            <h2 class="summary__heading">
              There was a problem
            </h2>
            <p class="summary__message">
              Errors were found on this page:
            </p>
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
            <h2 class="summary__heading">
              There was a problem
            </h2>
            <p class="summary__message">
              Errors were found on this page:
            </p>
            <ol class="summary__errorlist"></ol>
          </div>
        </mock:shadow-root>
      </gcds-error-summary>
    `);
  });
  it('renders - custom headin/message', async () => {
    const page = await newSpecPage({
      components: [GcdsErrorSummary],
      html: `<gcds-error-summary
        heading="This is a heading"
        message="This is the message"
      ></gcds-error-summary>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-error-summary heading="This is a heading" message="This is the message">
        <mock:shadow-root>
          <div class="gcds-error-summary" role="alert" tabindex="-1">
            <h2 class="summary__heading">
              This is a heading
            </h2>
            <p class="summary__message">
              This is the message
            </p>
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
            <h2 class="summary__heading">
              There was a problem
            </h2>
            <p class="summary__message">
              Errors were found on this page:
            </p>
            <ol class="summary__errorlist">
              <li class="summary__listitem">
                <a class="summary__link" href="#link1">
                  This is the first error
                </a>
              </li>
              <li class="summary__listitem">
                <a class="summary__link" href="#link2">
                  This is the second error
                </a>
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
            <h2 class="summary__heading">
              There was a problem
            </h2>
            <p class="summary__message">
              Errors were found on this page:
            </p>
            <ol class="summary__errorlist"></ol>
          </div>
        </mock:shadow-root>
      </gcds-error-summary>
    `);
  });
});
