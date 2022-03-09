import { newSpecPage } from '@stencil/core/testing';
import { GcdsTextarea} from './gcds-textarea';

describe('gcds-textarea', () => {
  it('renders with minimum required properties', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" textarea-id="textarea-renders" />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="textarea-renders">
        <mock:shadow-root>
          <gcds-label label-for="textarea-renders" label="Label"></gcds-label>
          <textarea
            id="textarea-renders"
            name="textarea-renders"
            aria-describedby="label-for-textarea-renders   "
            aria-invalid="false"
            cols="45"
            rows="5"
          ></textarea>
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
      html: '<gcds-textarea label="Label" textarea-id="textarea-disabled" disabled />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="textarea-disabled" disabled="">
        <mock:shadow-root>
          <gcds-label label-for="textarea-disabled" label="Label"></gcds-label>
          <textarea
            id="textarea-disabled"
            name="textarea-disabled"
            aria-describedby="label-for-textarea-disabled   "
            aria-invalid="false"
            cols="45"
            rows="5"
            disabled=""
          ></textarea>
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
      html: '<gcds-textarea label="Label" textarea-id="textarea-with-error" error-message="This is an error message." />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="textarea-with-error" error-message="This is an error message.">
        <mock:shadow-root>
          <gcds-label label-for="textarea-with-error" label="Label"></gcds-label>
          <gcds-error-message message-id="textarea-with-error" message="This is an error message."></gcds-error-message>
          <textarea
            id="textarea-with-error"
            class="error"
            name="textarea-with-error"
            aria-describedby="label-for-textarea-with-error  error-message-textarea-with-error "
            aria-invalid="true"
            cols="45"
            rows="5"
          ></textarea>
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
      html: '<gcds-textarea label="Label" textarea-id="textarea-label-hidden" hide-label />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="textarea-label-hidden" hide-label>
        <mock:shadow-root>
          <gcds-label label-for="textarea-label-hidden" label="Label" hide-label></gcds-label>
          <textarea
            id="textarea-label-hidden"
            name="textarea-label-hidden"
            aria-describedby="label-for-textarea-label-hidden   "
            aria-invalid="false"
            cols="45"
            rows="5"
          ></textarea>
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
      html: '<gcds-textarea label="Label" textarea-id="textarea-renders-label" />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="textarea-renders-label">
        <mock:shadow-root>
          <gcds-label label-for="textarea-renders-label" label="Label"></gcds-label>
          <textarea
            id="textarea-renders-label"
            name="textarea-renders-label"
            aria-describedby="label-for-textarea-renders-label   "
            aria-invalid="false"
            cols="45"
            rows="5"
          ></textarea>
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
      html: '<gcds-textarea label="Label" textarea-id="textarea-required" required />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="textarea-required" required>
        <mock:shadow-root>
          <gcds-label label-for="textarea-required" label="Label" required></gcds-label>
          <textarea
            id="textarea-required"
            name="textarea-required"
            aria-describedby="label-for-textarea-required   "
            aria-invalid="false"
            cols="45"
            rows="5"
            required
          ></textarea>
        </mock:shadow-root>
      </gcds-textarea>
    `);
  });

  /**
    * Textarea character count
    */
  it('renders textarea character count with no value', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" textarea-id="character-count-no-value" textarea-character-count="10" />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="character-count-no-value" textarea-character-count="10">
        <mock:shadow-root>
          <gcds-label label-for="character-count-no-value" label="Label" ></gcds-label>
          <textarea
            id="character-count-no-value"
            name="character-count-no-value"
            aria-describedby="label-for-character-count-no-value   count-character-count-no-value"
            aria-invalid="false"
            cols="45"
            rows="5"
            maxlength="10"
          ></textarea>
          <p id="count-character-count-no-value" aria-live="polite">10 characters allowed</p>
        </mock:shadow-root>
      </gcds-textarea>
    `);
  });

  it('renders textarea character count with value', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" textarea-id="character-count-value" textarea-value="Value Test" textarea-character-count="22" />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="character-count-value" textarea-value="Value Test" textarea-character-count="22">
        <mock:shadow-root>
          <gcds-label label-for="character-count-value" label="Label" ></gcds-label>
          <textarea
            id="character-count-value"
            name="character-count-value"
            aria-describedby="label-for-character-count-value   count-character-count-value"
            aria-invalid="false"
            cols="45"
            rows="5"
            maxlength="22"
          >Value Test</textarea>
          <p id="count-character-count-value" aria-live="polite">12 characters left</p>
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
      html: '<gcds-textarea label="Label" textarea-id="textarea-cols" textarea-cols="10" />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="textarea-cols" textarea-cols="10">
        <mock:shadow-root>
          <gcds-label label-for="textarea-cols" label="Label" ></gcds-label>
          <textarea
            id="textarea-cols"
            name="textarea-cols"
            aria-describedby="label-for-textarea-cols   "
            aria-invalid="false"
            cols="10"
            rows="5"
          ></textarea>
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
      html: '<gcds-textarea label="Label" textarea-id="textarea-with-hint" textarea-hint="This is a textarea hint." />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="textarea-with-hint" textarea-hint="This is a textarea hint.">
        <mock:shadow-root>
          <gcds-label label-for="textarea-with-hint" label="Label" ></gcds-label>
          <gcds-hint hint-id="textarea-with-hint" hint="This is a textarea hint."></gcds-hint>
          <textarea
            id="textarea-with-hint"
            name="textarea-with-hint"
            aria-describedby="label-for-textarea-with-hint hint-textarea-with-hint  "
            aria-invalid="false"
            cols="45"
            rows="5"
          ></textarea>
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
      html: '<gcds-textarea label="Label" textarea-id="textarea-renders-id" />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="textarea-renders-id">
        <mock:shadow-root>
          <gcds-label label-for="textarea-renders-id" label="Label"></gcds-label>
          <textarea
            id="textarea-renders-id"
            name="textarea-renders-id"
            aria-describedby="label-for-textarea-renders-id   "
            aria-invalid="false"
            cols="45"
            rows="5"
          ></textarea>
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
      html: '<gcds-textarea label="Label" textarea-id="textarea-rows" textarea-rows="2" />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="textarea-rows" textarea-rows="2">
        <mock:shadow-root>
          <gcds-label label-for="textarea-rows" label="Label" ></gcds-label>
          <textarea
            id="textarea-rows"
            name="textarea-rows"
            aria-describedby="label-for-textarea-rows   "
            aria-invalid="false"
            cols="45"
            rows="2"
          ></textarea>
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
      html: '<gcds-textarea label="Label" textarea-id="textarea-with-value" textarea-value="Textarea value" />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" textarea-id="textarea-with-value" textarea-value="Textarea value">
        <mock:shadow-root>
          <gcds-label label-for="textarea-with-value" label="Label" ></gcds-label>
          <textarea
            id="textarea-with-value"
            name="textarea-with-value"
            aria-describedby="label-for-textarea-with-value   "
            aria-invalid="false"
            cols="45"
            rows="5"
          >Textarea value</textarea>
        </mock:shadow-root>
      </gcds-textarea>
    `);
  });
});
