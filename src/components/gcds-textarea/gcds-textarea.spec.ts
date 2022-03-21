import { newSpecPage } from '@stencil/core/testing';
import { GcdsTextarea} from './gcds-textarea';

describe('gcds-textarea', () => {
  it('renders with minimum required properties', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" id="textarea-renders" />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" id="textarea-renders">
        <gcds-label label-for="id-textarea-renders" label="Label"></gcds-label>
        <textarea
          id="id-textarea-renders"
          name="id-textarea-renders"
          aria-labelledby="label-for-id-textarea-renders"
          aria-describedby="  "
          aria-invalid="false"
          cols="45"
          rows="5"
        ></textarea>
      </gcds-textarea>
    `);
  });

  /**
    * Disabled test
    */
  it('renders disabled', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" id="textarea-disabled" disabled />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" id="textarea-disabled" disabled="">
        <gcds-label label-for="id-textarea-disabled" label="Label"></gcds-label>
        <textarea
          id="id-textarea-disabled"
          name="id-textarea-disabled"
          aria-labelledby="label-for-id-textarea-disabled"
          aria-describedby="  "
          aria-invalid="false"
          cols="45"
          rows="5"
          disabled=""
        ></textarea>
      </gcds-textarea>
    `);
  });

  /**
    * Error message test
    */
  it('renders error message', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" id="textarea-with-error" error-message="This is an error message." />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" id="textarea-with-error" error-message="This is an error message.">
        <gcds-label label-for="id-textarea-with-error" label="Label"></gcds-label>
        <gcds-error-message message-id="textarea-with-error" message="This is an error message."></gcds-error-message>
        <textarea
          id="id-textarea-with-error"
          class="error"
          name="id-textarea-with-error"
          aria-labelledby="label-for-id-textarea-with-error"
          aria-describedby=" error-message-id-textarea-with-error "
          aria-invalid="true"
          cols="45"
          rows="5"
        ></textarea>
      </gcds-textarea>
    `);
  });

  /**
    * Hide label
    */
  it('renders with label hidden', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" id="textarea-label-hidden" hide-label />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" id="textarea-label-hidden" hide-label>
        <gcds-label label-for="id-textarea-label-hidden" label="Label" hide-label></gcds-label>
        <textarea
          id="id-textarea-label-hidden"
          name="id-textarea-label-hidden"
          aria-labelledby="label-for-id-textarea-label-hidden"
          aria-describedby="  "
          aria-invalid="false"
          cols="45"
          rows="5"
        ></textarea>
      </gcds-textarea>
    `);
  });

  /**
    * Label test
    */
  it('renders label', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" id="textarea-renders-label" />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" id="textarea-renders-label">
        <gcds-label label-for="id-textarea-renders-label" label="Label"></gcds-label>
        <textarea
          id="id-textarea-renders-label"
          name="id-textarea-renders-label"
          aria-labelledby="label-for-id-textarea-renders-label"
          aria-describedby="  "
          aria-invalid="false"
          cols="45"
          rows="5"
        ></textarea>
      </gcds-textarea>
    `);
  });

  /**
    * Required test
    */
  it('renders required', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" id="textarea-required" required />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" id="textarea-required" required>
        <gcds-label label-for="id-textarea-required" label="Label" required></gcds-label>
        <textarea
          id="id-textarea-required"
          name="id-textarea-required"
          aria-labelledby="label-for-id-textarea-required"
          aria-describedby="  "
          aria-invalid="false"
          cols="45"
          rows="5"
          required
        ></textarea>
      </gcds-textarea>
    `);
  });

  /**
    * Textarea character count
    */
  it('renders textarea character count with no value', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" id="character-count-no-value" textarea-character-count="10" />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" id="character-count-no-value" textarea-character-count="10">
        <gcds-label label-for="id-character-count-no-value" label="Label"></gcds-label>
        <textarea
          id="id-character-count-no-value"
          name="id-character-count-no-value"
          aria-labelledby="label-for-id-character-count-no-value"
          aria-describedby="  count-id-character-count-no-value"
          aria-invalid="false"
          cols="45"
          rows="5"
          maxlength="10"
        ></textarea>
        <p id="count-id-character-count-no-value" aria-live="polite">10 characters allowed</p>
      </gcds-textarea>
    `);
  });

  it('renders textarea character count with value', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" id="character-count-value" value="Value Test" textarea-character-count="22" />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" id="character-count-value" value="Value Test" textarea-character-count="22">
        <gcds-label label-for="id-character-count-value" label="Label"></gcds-label>
        <textarea
          id="id-character-count-value"
          name="id-character-count-value"
          aria-labelledby="label-for-id-character-count-value"
          aria-describedby="  count-id-character-count-value"
          aria-invalid="false"
          cols="45"
          rows="5"
          maxlength="22"
        >Value Test</textarea>
        <p id="count-id-character-count-value" aria-live="polite">12 characters left</p>
      </gcds-textarea>
    `);
  });

  /**
    * Textarea cols test
    */
  it('renders textarea cols', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" id="textarea-cols" cols="10" />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" id="textarea-cols" cols="10">
        <gcds-label label-for="id-textarea-cols" label="Label"></gcds-label>
        <textarea
          id="id-textarea-cols"
          name="id-textarea-cols"
          aria-labelledby="label-for-id-textarea-cols"
          aria-describedby="  "
          aria-invalid="false"
          cols="10"
          rows="5"
        ></textarea>
      </gcds-textarea>
    `);
  });

  /**
    * Textarea hint test
    */
  it('renders textarea hint', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" id="textarea-with-hint" hint="This is a textarea hint." />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" id="textarea-with-hint" hint="This is a textarea hint.">
        <gcds-label label-for="id-textarea-with-hint" label="Label" ></gcds-label>
        <gcds-hint hint="This is a textarea hint." hint-id="textarea-with-hint"></gcds-hint>
        <textarea
          id="id-textarea-with-hint"
          name="id-textarea-with-hint"
          aria-labelledby="label-for-id-textarea-with-hint"
          aria-describedby="hint-id-textarea-with-hint  "
          aria-invalid="false"
          cols="45"
          rows="5"
        ></textarea>
      </gcds-textarea>
    `);
  });

  /**
    * Textarea ID test
    */
  it('renders textarea id', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" id="textarea-renders-id" />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" id="textarea-renders-id">
        <gcds-label label-for="id-textarea-renders-id" label="Label"></gcds-label>
        <textarea
          id="id-textarea-renders-id"
          name="id-textarea-renders-id"
          aria-labelledby="label-for-id-textarea-renders-id"
          aria-describedby="  "
          aria-invalid="false"
          cols="45"
          rows="5"
        ></textarea>
      </gcds-textarea>
    `);
  });

  /**
    * Textarea rows test
    */
  it('renders textarea rows', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" id="textarea-rows" rows="2" />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" id="textarea-rows" rows="2">
        <gcds-label label-for="id-textarea-rows" label="Label"></gcds-label>
        <textarea
          id="id-textarea-rows"
          name="id-textarea-rows"
          aria-labelledby="label-for-id-textarea-rows"
          aria-describedby="  "
          aria-invalid="false"
          cols="45"
          rows="2"
        ></textarea>
      </gcds-textarea>
    `);
  });

  /**
    * Textarea value test
    */
  it('renders textarea value', async () => {
    const { root } = await newSpecPage({
      components: [GcdsTextarea],
      html: '<gcds-textarea label="Label" id="textarea-with-value" value="Textarea value" />',
    });
    expect(root).toEqualHtml(`
      <gcds-textarea label="Label" id="textarea-with-value" value="Textarea value">
        <gcds-label label-for="id-textarea-with-value" label="Label"></gcds-label>
        <textarea
          id="id-textarea-with-value"
          name="id-textarea-with-value"
          aria-labelledby="label-for-id-textarea-with-value"
          aria-describedby="  "
          aria-invalid="false"
          cols="45"
          rows="5"
        >Textarea value</textarea>
      </gcds-textarea>
    `);
  });
});
