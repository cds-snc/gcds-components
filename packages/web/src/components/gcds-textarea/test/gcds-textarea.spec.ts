import { newSpecPage } from '@stencil/core/testing';
import { GcdsTextarea } from '../gcds-textarea';

describe('gcds-textarea', () => {
  it('renders with minimum required properties', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" textarea-id="textarea-renders" name="textarea-renders-name"/>',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="textarea-renders" name="textarea-renders-name">
        <mock:shadow-root>
          <div class="gcds-textarea-wrapper">
            <gcds-label label-for="textarea-renders" label="Label" lang="en"></gcds-label>
            <textarea
              id="textarea-renders"
              name="textarea-renders-name"
              aria-labelledby="label-for-textarea-renders"
              aria-invalid="false"
              rows="5"
            ></textarea>
          </div>
        </mock:shadow-root>
      </gcds-textarea>
    `);
  });

  /**
   * Character count
   */
  it('renders textarea with character count in EN', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" textarea-id="character-count" value="Value Test" character-count="22" name="character-count-name"/>',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="character-count" value="Value Test" character-count="22" name="character-count-name">
        <mock:shadow-root>
          <div class="gcds-textarea-wrapper">
            <gcds-label label-for="character-count" label="Label" lang="en"></gcds-label>
            <textarea
              id="character-count"
              name="character-count-name"
              aria-labelledby="label-for-character-count"
              aria-describedby="textarea__count-character-count "
              aria-invalid="false"
              rows="5"
              maxlength="22"
            >Value Test</textarea>
            <gcds-text id="textarea__count-character-count" aria-live="polite">12 characters left</gcds-text>
          </div>
        </mock:shadow-root>
      </gcds-textarea>
    `);
  });

  it('renders textarea with character count in FR', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea lang="fr" label="Label" textarea-id="character-count" value="Value Test" character-count="22" name="character-count-name"/>',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea lang="fr" label="Label" textarea-id="character-count" value="Value Test" character-count="22" name="character-count-name">
        <mock:shadow-root>
          <div class="gcds-textarea-wrapper">
            <gcds-label label-for="character-count" label="Label" lang="fr"></gcds-label>
            <textarea
              id="character-count"
              name="character-count-name"
              aria-labelledby="label-for-character-count"
              aria-describedby="textarea__count-character-count "
              aria-invalid="false"
              rows="5"
              maxlength="22"
            >Value Test</textarea>
            <gcds-text id="textarea__count-character-count" aria-live="polite">12 caractères restants</gcds-text>
          </div>
        </mock:shadow-root>
      </gcds-textarea>
    `);
  });

  /**
   * Disabled test
   */
  it('renders disabled', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" textarea-id="textarea-disabled" disabled name="textarea-disabled-name"/>',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="textarea-disabled" disabled="" name="textarea-disabled-name">
        <mock:shadow-root>
          <div class="gcds-textarea-wrapper gcds-disabled">
            <gcds-label label-for="textarea-disabled" label="Label" lang="en"></gcds-label>
            <textarea
              id="textarea-disabled"
              name="textarea-disabled-name"
              aria-labelledby="label-for-textarea-disabled"
              aria-invalid="false"
              rows="5"
              disabled=""
            ></textarea>
          </div>
        </mock:shadow-root>
      </gcds-textarea>
    `);
  });

  /**
   * Error message test
   */
  it('renders error message', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" textarea-id="textarea-with-error" error-message="This is an error message." name="textarea-with-error-name"/>',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="textarea-with-error" error-message="This is an error message." name="textarea-with-error-name">
        <mock:shadow-root>
          <div class="gcds-textarea-wrapper gcds-error">
            <gcds-label label-for="textarea-with-error" label="Label" lang="en"></gcds-label>
            <gcds-error-message messageId="textarea-with-error">
              This is an error message.
            </gcds-error-message>
            <textarea
              id="textarea-with-error"
              class="gcds-error"
              name="textarea-with-error-name"
              aria-labelledby="label-for-textarea-with-error"
              aria-describedby="error-message-textarea-with-error "
              aria-invalid="true"
              rows="5"
            ></textarea>
          </div>
        </mock:shadow-root>
      </gcds-textarea>
    `);
  });

  /**
   * Hide label
   */
  it('renders with label hidden', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" textarea-id="textarea-label-hidden" hide-label name="textarea-label-hidden-name"/>',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="textarea-label-hidden" hide-label name="textarea-label-hidden-name">
        <mock:shadow-root>
          <div class="gcds-textarea-wrapper">
            <gcds-label label-for="textarea-label-hidden" label="Label" hide-label lang="en"></gcds-label>
            <textarea
              id="textarea-label-hidden"
              name="textarea-label-hidden-name"
              aria-labelledby="label-for-textarea-label-hidden"
              aria-invalid="false"
              rows="5"
            ></textarea>
          </div>
        </mock:shadow-root>
      </gcds-textarea>
    `);
  });

  /**
   * Label test
   */
  it('renders label', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" textarea-id="textarea-renders-label" name="textarea-renders-label-name"/>',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="textarea-renders-label" name="textarea-renders-label-name">
        <mock:shadow-root>
          <div class="gcds-textarea-wrapper">
            <gcds-label label-for="textarea-renders-label" label="Label" lang="en"></gcds-label>
            <textarea
              id="textarea-renders-label"
              name="textarea-renders-label-name"
              aria-labelledby="label-for-textarea-renders-label"
              aria-invalid="false"
              rows="5"
            ></textarea>
          </div>
        </mock:shadow-root>
      </gcds-textarea>
    `);
  });

  /**
   * Required test
   */
  it('renders required', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" textarea-id="textarea-required" required name="textarea-required-name"/>',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="textarea-required" required name="textarea-required-name">
        <mock:shadow-root>
          <div class="gcds-textarea-wrapper">
            <gcds-label label-for="textarea-required" label="Label" required lang="en"></gcds-label>
            <textarea
              id="textarea-required"
              name="textarea-required-name"
              aria-labelledby="label-for-textarea-required"
              aria-invalid="false"
              rows="5"
              required
            ></textarea>
          </div>
        </mock:shadow-root>
      </gcds-textarea>
    `);
  });

  /**
   * Textarea cols test
   */
  it('renders textarea cols', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" textarea-id="textarea-cols" cols="10" name="textarea-cols-name"/>',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="textarea-cols" cols="10" name="textarea-cols-name">
        <mock:shadow-root>
          <div class="gcds-textarea-wrapper">
            <gcds-label label-for="textarea-cols" label="Label" lang="en"></gcds-label>
            <textarea
              id="textarea-cols"
              name="textarea-cols-name"
              aria-labelledby="label-for-textarea-cols"
              aria-invalid="false"
              rows="5"
              style="max-width: 15ch;"
            ></textarea>
          </div>
        </mock:shadow-root>
      </gcds-textarea>
    `);
  });

  /**
   * Textarea hint test
   */
  it('renders textarea hint', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" textarea-id="textarea-with-hint" hint="This is a textarea hint." name="textarea-with-hint-name"/>',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="textarea-with-hint" hint="This is a textarea hint." name="textarea-with-hint-name">
        <mock:shadow-root>
          <div class="gcds-textarea-wrapper">
            <gcds-label label-for="textarea-with-hint" label="Label" lang="en"></gcds-label>
            <gcds-hint hint-id="textarea-with-hint">This is a textarea hint.</gcds-hint>
            <textarea
              id="textarea-with-hint"
              name="textarea-with-hint-name"
              aria-labelledby="label-for-textarea-with-hint"
              aria-describedby="hint-textarea-with-hint "
              aria-invalid="false"
              rows="5"
            ></textarea>
          </div>
        </mock:shadow-root>
      </gcds-textarea>
    `);
  });

  /**
   * Textarea ID test
   */
  it('renders textarea id', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" textarea-id="textarea-renders-id" name="textarea-renders-id-name"/>',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="textarea-renders-id" name="textarea-renders-id-name">
        <mock:shadow-root>
          <div class="gcds-textarea-wrapper">
            <gcds-label label-for="textarea-renders-id" label="Label" lang="en"></gcds-label>
            <textarea
              id="textarea-renders-id"
              name="textarea-renders-id-name"
              aria-labelledby="label-for-textarea-renders-id"
              aria-invalid="false"
              rows="5"
            ></textarea>
          </div>
        </mock:shadow-root>
      </gcds-textarea>
    `);
  });

  /**
   * Textarea rows test
   */
  it('renders textarea rows', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" textarea-id="textarea-rows" rows="2" name="textarea-rows-name"/>',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="textarea-rows" rows="2" name="textarea-rows-name">
        <mock:shadow-root>
          <div class="gcds-textarea-wrapper">
            <gcds-label label-for="textarea-rows" label="Label" lang="en"></gcds-label>
            <textarea
              id="textarea-rows"
              name="textarea-rows-name"
              aria-labelledby="label-for-textarea-rows"
              aria-invalid="false"
              rows="2"
            ></textarea>
          </div>
        </mock:shadow-root>
      </gcds-textarea>
    `);
  });

  /**
   * Textarea value test
   */
  it('renders textarea value', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" textarea-id="textarea-with-value" value="Textarea value" name="textarea-with-value-name"/>',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="textarea-with-value" value="Textarea value" name="textarea-with-value-name">
        <mock:shadow-root>
          <div class="gcds-textarea-wrapper">
            <gcds-label label-for="textarea-with-value" label="Label" lang="en"></gcds-label>
            <textarea
              id="textarea-with-value"
              name="textarea-with-value-name"
              aria-labelledby="label-for-textarea-with-value"
              aria-invalid="false"
              rows="5"
            >Textarea value</textarea>
          </div>
        </mock:shadow-root>
      </gcds-textarea>
    `);
  });
});
