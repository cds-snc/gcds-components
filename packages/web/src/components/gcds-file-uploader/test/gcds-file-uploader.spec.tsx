import { newSpecPage } from '@stencil/core/testing';
import { GcdsFileUploader } from '../gcds-file-uploader';

describe('gcds-file-uploader', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsFileUploader],
      html: `<gcds-file-uploader label="file-uploader" uploader-id="file-uploader"></gcds-file-uploader>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-file-uploader uploader-id="file-uploader" label="file-uploader">
        <div class="gcds-file-uploader-wrapper">
          <gcds-label label="file-uploader" label-for="file-uploader" lang="en"></gcds-label>
          <div class="file-uploader__input">
            <button type="button" tabindex="-1">
              Choose file
              <gcds-icon name="upload" margin-left="200" />
            </button>
            <input aria-describedby="file-uploader__summary" id="file-uploader" name="file-uploader" type="file" value="" aria-invalid="false" />
            <p id="file-uploader__summary">No file currently selected.</p>
          </div>
        </div>
      </gcds-file-uploader>
    `);
  });

  /**
    * Disabled test
    */
  it('renders disabled', async () => {
    const page = await newSpecPage({
      components: [GcdsFileUploader],
      html: `<gcds-file-uploader label="file-uploader" uploader-id="file-uploader" disabled></gcds-file-uploader>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-file-uploader uploader-id="file-uploader" label="file-uploader" disabled error-message="">
        <div class="gcds-file-uploader-wrapper gcds-disabled">
          <gcds-label label="file-uploader" label-for="file-uploader" lang="en"></gcds-label>
          <div class="file-uploader__input">
            <button type="button" tabindex="-1">
              Choose file
              <gcds-icon name="upload" margin-left="200" />
            </button>
            <input aria-describedby="file-uploader__summary" id="file-uploader" name="file-uploader" type="file" value="" disabled="" aria-invalid="false" />
            <p id="file-uploader__summary">No file currently selected.</p>
          </div>
        </div>
      </gcds-file-uploader>
    `);
  });

  /**
    * Error message test
    */
  it('renders error message', async () => {
    const page = await newSpecPage({
      components: [GcdsFileUploader],
      html: `<gcds-file-uploader label="file-uploader" uploader-id="file-uploader" error-message="This is an error message."></gcds-file-uploader>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-file-uploader uploader-id="file-uploader" label="file-uploader" error-message="This is an error message.">
        <div class="gcds-file-uploader-wrapper gcds-error">
          <gcds-label label="file-uploader" label-for="file-uploader" lang="en"></gcds-label>
          <gcds-error-message message="This is an error message." messageId="file-uploader"></gcds-error-message>
          <div class="file-uploader__input">
            <button type="button" tabindex="-1">
              Choose file
              <gcds-icon name="upload" margin-left="200" />
            </button>
            <input id="file-uploader" name="file-uploader" type="file" value="" aria-invalid="true" aria-describedby="error-message-file-uploader file-uploader__summary" />
            <p id="file-uploader__summary">No file currently selected.</p>
          </div>
        </div>
      </gcds-file-uploader>
    `);
  });

  /**
    * File uploader hint test
    */
  it('renders hint', async () => {
    const page = await newSpecPage({
      components: [GcdsFileUploader],
      html: `<gcds-file-uploader label="file-uploader" uploader-id="file-uploader" hint="This is a hint."></gcds-file-uploader>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-file-uploader uploader-id="file-uploader" label="file-uploader" hint="This is a hint.">
        <div class="gcds-file-uploader-wrapper">
          <gcds-label label="file-uploader" label-for="file-uploader" lang="en"></gcds-label>
          <gcds-hint hint="This is a hint." hint-id="file-uploader"></gcds-hint>
          <div class="file-uploader__input">
            <button type="button" tabindex="-1">
              Choose file
              <gcds-icon name="upload" margin-left="200" />
            </button>
            <input id="file-uploader" name="file-uploader" type="file" value="" aria-invalid="false" aria-describedby="hint-file-uploader file-uploader__summary" />
            <p id="file-uploader__summary">No file currently selected.</p>
          </div>
        </div>
      </gcds-file-uploader>
    `);
  });

  /**
    * File uploader ID test
    */
  it('renders file-uploader id', async () => {
    const page = await newSpecPage({
      components: [GcdsFileUploader],
      html: `<gcds-file-uploader label="file-uploader" uploader-id="file-uploader"></gcds-file-uploader>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-file-uploader uploader-id="file-uploader" label="file-uploader">
        <div class="gcds-file-uploader-wrapper">
          <gcds-label label="file-uploader" label-for="file-uploader" lang="en"></gcds-label>
          <div class="file-uploader__input">
            <button type="button" tabindex="-1">
              Choose file
              <gcds-icon name="upload" margin-left="200" />
            </button>
            <input aria-describedby="file-uploader__summary" id="file-uploader" name="file-uploader" type="file" value="" aria-invalid="false" />
            <p id="file-uploader__summary">No file currently selected.</p>
          </div>
        </div>
      </gcds-file-uploader>
    `);
  });

  /**
    * File uploader label test
    */
  it('renders file-uploader label', async () => {
    const page = await newSpecPage({
      components: [GcdsFileUploader],
      html: `<gcds-file-uploader label="file-uploader" uploader-id="file-uploader"></gcds-file-uploader>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-file-uploader uploader-id="file-uploader" label="file-uploader">
        <div class="gcds-file-uploader-wrapper">
          <gcds-label label="file-uploader" label-for="file-uploader" lang="en"></gcds-label>
          <div class="file-uploader__input">
            <button type="button" tabindex="-1">
              Choose file
              <gcds-icon name="upload" margin-left="200" />
            </button>
            <input aria-describedby="file-uploader__summary" id="file-uploader" name="file-uploader" type="file" value="" aria-invalid="false" />
            <p id="file-uploader__summary">No file currently selected.</p>
          </div>
        </div>
      </gcds-file-uploader>
    `);
  });

  /**
    * File uploader required test
    */
  it('renders file-uploader id', async () => {
    const page = await newSpecPage({
      components: [GcdsFileUploader],
      html: `<gcds-file-uploader label="file-uploader" uploader-id="file-uploader" required></gcds-file-uploader>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-file-uploader uploader-id="file-uploader" label="file-uploader" required>
        <div class="gcds-file-uploader-wrapper">
          <gcds-label label="file-uploader" label-for="file-uploader" lang="en" required=""></gcds-label>
          <div class="file-uploader__input">
            <button type="button" tabindex="-1">
              Choose file
              <gcds-icon name="upload" margin-left="200" />
            </button>
            <input aria-describedby="file-uploader__summary" id="file-uploader" name="file-uploader" type="file" value="" aria-invalid="false" required="" />
            <p id="file-uploader__summary">No file currently selected.</p>
          </div>
        </div>
      </gcds-file-uploader>
    `);
  });
});
