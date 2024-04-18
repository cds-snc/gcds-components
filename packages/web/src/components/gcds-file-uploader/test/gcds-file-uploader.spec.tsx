import { newSpecPage } from '@stencil/core/testing';
import { GcdsFileUploader } from '../gcds-file-uploader';

describe('gcds-file-uploader', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsFileUploader],
      html: `<gcds-file-uploader label="file-uploader" uploader-id="file-uploader" name="file-uploader-name"></gcds-file-uploader>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-file-uploader uploader-id="file-uploader" label="file-uploader" name="file-uploader-name">
        <mock:shadow-root>
          <div class="gcds-file-uploader-wrapper">
            <gcds-label label="file-uploader" label-for="file-uploader" lang="en"></gcds-label>
            <div class="file-uploader__input">
              <button type="button" tabindex="-1">
                Choose file
              </button>
              <input aria-describedby="file-uploader__summary" id="file-uploader" name="file-uploader-name" type="file" value="" aria-invalid="false" />
              <gcds-sr-only id="file-uploader__summary">No file currently selected.</gcds-sr-only>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-file-uploader>
    `);
  });

  /**
   * Disabled test
   */
  it('renders disabled', async () => {
    const page = await newSpecPage({
      components: [GcdsFileUploader],
      html: `<gcds-file-uploader label="file-uploader" uploader-id="file-uploader" name="file-uploader-name" disabled></gcds-file-uploader>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-file-uploader uploader-id="file-uploader" label="file-uploader" name="file-uploader-name" disabled error-message="">
        <mock:shadow-root>
          <div class="gcds-file-uploader-wrapper gcds-disabled">
            <gcds-label label="file-uploader" label-for="file-uploader" lang="en"></gcds-label>
            <div class="file-uploader__input">
              <button type="button" tabindex="-1">
                Choose file
              </button>
              <input aria-describedby="file-uploader__summary" id="file-uploader" name="file-uploader-name" type="file" value="" disabled="" aria-invalid="false" />
              <gcds-sr-only id="file-uploader__summary">No file currently selected.</gcds-sr-only>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-file-uploader>
    `);
  });

  /**
   * Error message test
   */
  it('renders error message', async () => {
    const page = await newSpecPage({
      components: [GcdsFileUploader],
      html: `<gcds-file-uploader label="file-uploader" uploader-id="file-uploader" name="file-uploader-name" error-message="This is an error message."></gcds-file-uploader>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-file-uploader uploader-id="file-uploader" label="file-uploader" name="file-uploader-name" error-message="This is an error message.">
        <mock:shadow-root>
          <div class="gcds-file-uploader-wrapper gcds-error">
            <gcds-label label="file-uploader" label-for="file-uploader" lang="en"></gcds-label>
            <gcds-error-message messageId="file-uploader">
              This is an error message.
            </gcds-error-message>
            <div class="file-uploader__input">
              <button type="button" tabindex="-1">
                Choose file
              </button>
              <input id="file-uploader" name="file-uploader-name" type="file" value="" aria-invalid="true" aria-describedby="error-message-file-uploader file-uploader__summary" />
              <gcds-sr-only id="file-uploader__summary">No file currently selected.</gcds-sr-only>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-file-uploader>
    `);
  });

  /**
   * File uploader hint test
   */
  it('renders hint', async () => {
    const page = await newSpecPage({
      components: [GcdsFileUploader],
      html: `<gcds-file-uploader label="file-uploader" uploader-id="file-uploader" name="file-uploader-name" hint="This is a hint."></gcds-file-uploader>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-file-uploader uploader-id="file-uploader" label="file-uploader" name="file-uploader-name" hint="This is a hint.">
        <mock:shadow-root>
          <div class="gcds-file-uploader-wrapper">
            <gcds-label label="file-uploader" label-for="file-uploader" lang="en"></gcds-label>
            <gcds-hint hint-id="file-uploader">This is a hint.</gcds-hint>
            <div class="file-uploader__input">
              <button type="button" tabindex="-1">
                Choose file
              </button>
              <input id="file-uploader" name="file-uploader-name" type="file" value="" aria-invalid="false" aria-describedby="hint-file-uploader file-uploader__summary" />
              <gcds-sr-only id="file-uploader__summary">No file currently selected.</gcds-sr-only>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-file-uploader>
    `);
  });

  /**
   * File uploader ID test
   */
  it('renders file-uploader id', async () => {
    const page = await newSpecPage({
      components: [GcdsFileUploader],
      html: `<gcds-file-uploader label="file-uploader" uploader-id="file-uploader" name="file-uploader-name"></gcds-file-uploader>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-file-uploader uploader-id="file-uploader" label="file-uploader" name="file-uploader-name">
      <mock:shadow-root>
        <div class="gcds-file-uploader-wrapper">
          <gcds-label label="file-uploader" label-for="file-uploader" lang="en"></gcds-label>
          <div class="file-uploader__input">
            <button type="button" tabindex="-1">
              Choose file
            </button>
            <input aria-describedby="file-uploader__summary" id="file-uploader" name="file-uploader-name" type="file" value="" aria-invalid="false" />
            <gcds-sr-only id="file-uploader__summary">No file currently selected.</gcds-sr-only>
          </div>
        </div>
        </mock:shadow-root>
      </gcds-file-uploader>
    `);
  });

  /**
   * File uploader label test
   */
  it('renders file-uploader label', async () => {
    const page = await newSpecPage({
      components: [GcdsFileUploader],
      html: `<gcds-file-uploader label="file-uploader" uploader-id="file-uploader" name="file-uploader-name"></gcds-file-uploader>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-file-uploader uploader-id="file-uploader" label="file-uploader" name="file-uploader-name">
        <mock:shadow-root>
          <div class="gcds-file-uploader-wrapper">
            <gcds-label label="file-uploader" label-for="file-uploader" lang="en"></gcds-label>
            <div class="file-uploader__input">
              <button type="button" tabindex="-1">
                Choose file
              </button>
              <input aria-describedby="file-uploader__summary" id="file-uploader" name="file-uploader-name" type="file" value="" aria-invalid="false" />
              <gcds-sr-only id="file-uploader__summary">No file currently selected.</gcds-sr-only>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-file-uploader>
    `);
  });

  /**
   * File uploader required test
   */
  it('renders file-uploader id', async () => {
    const page = await newSpecPage({
      components: [GcdsFileUploader],
      html: `<gcds-file-uploader label="file-uploader" uploader-id="file-uploader" name="file-uploader-name" required></gcds-file-uploader>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-file-uploader uploader-id="file-uploader" label="file-uploader" name="file-uploader-name" required>
        <mock:shadow-root>
          <div class="gcds-file-uploader-wrapper">
            <gcds-label label="file-uploader" label-for="file-uploader" lang="en" required=""></gcds-label>
            <div class="file-uploader__input">
              <button type="button" tabindex="-1">
                Choose file
              </button>
              <input aria-describedby="file-uploader__summary" id="file-uploader" name="file-uploader-name" type="file" value="" aria-invalid="false" required="" />
              <gcds-sr-only id="file-uploader__summary">No file currently selected.</gcds-sr-only>
            </div>
          </div>
        </mock:shadow-root>
      </gcds-file-uploader>
    `);
  });
});
