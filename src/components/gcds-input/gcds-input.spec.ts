import { newSpecPage } from '@stencil/core/testing';
import { GcdsInput} from './gcds-input';

describe('gcds-input', () => {
  it('renders with minimum required properties', async () => {
    const { root } = await newSpecPage({
      components: [GcdsInput],
      html: '<gcds-input label="Label" id="input-renders" />',
    });
    expect(root).toEqualHtml(`
      <gcds-input label="Label" id="input-renders">
          <gcds-label label-for="id-input-renders" label="Label"></gcds-label>
          <input
            type="text"
            id="id-input-renders"
            name="id-input-renders"
            aria-labelledby="label-for-id-input-renders"
            aria-describedby=" "
            aria-invalid="false"
          />
      </gcds-input>
    `);
  });

  /**
    * Type tests
    */
  it('renders type email', async () => {
    const { root } = await newSpecPage({
      components: [GcdsInput],
      html: '<gcds-input type="email" label="Label" id="type-email" />',
    });
    expect(root).toEqualHtml(`
      <gcds-input type="email" label="Label" id="type-email">
          <gcds-label label-for="id-type-email" label="Label"></gcds-label>
          <input
            type="email"
            id="id-type-email"
            name="id-type-email"
            aria-labelledby="label-for-id-type-email"
            aria-describedby=" "
            aria-invalid="false"
          />
      </gcds-input>
    `);
  });

  it('renders type number', async () => {
    const { root } = await newSpecPage({
      components: [GcdsInput],
      html: '<gcds-input type="number" label="Label" id="type-number" />',
    });
    expect(root).toEqualHtml(`
      <gcds-input type="number" label="Label" id="type-number">
          <gcds-label label-for="id-type-number" label="Label"></gcds-label>
          <input
            type="number"
            id="id-type-number"
            name="id-type-number"
            aria-labelledby="label-for-id-type-number"
            aria-describedby=" "
            aria-invalid="false"
          />
      </gcds-input>
    `);
  });

  it('renders type password', async () => {
    const { root } = await newSpecPage({
      components: [GcdsInput],
      html: '<gcds-input type="password" label="Label" id="type-password" />',
    });
    expect(root).toEqualHtml(`
      <gcds-input type="password" label="Label" id="type-password">
          <gcds-label label-for="id-type-password" label="Label"></gcds-label>
          <input
            type="password"
            id="id-type-password"
            name="id-type-password"
            aria-labelledby="label-for-id-type-password"
            aria-describedby=" "
            aria-invalid="false"
          />
      </gcds-input>
    `);
  });

  it('renders type search', async () => {
    const { root } = await newSpecPage({
      components: [GcdsInput],
      html: '<gcds-input type="search" label="Label" id="type-search" />',
    });
    expect(root).toEqualHtml(`
      <gcds-input type="search" label="Label" id="type-search">
          <gcds-label label-for="id-type-search" label="Label"></gcds-label>
          <input
            type="search"
            id="id-type-search"
            name="id-type-search"
            aria-labelledby="label-for-id-type-search"
            aria-describedby=" "
            aria-invalid="false"
          />
      </gcds-input>
    `);
  });

  it('renders type text', async () => {
    const { root } = await newSpecPage({
      components: [GcdsInput],
      html: '<gcds-input type="text" label="Label" id="type-text" />',
    });
    expect(root).toEqualHtml(`
      <gcds-input type="text" label="Label" id="type-text">
          <gcds-label label-for="id-type-text" label="Label"></gcds-label>
          <input
            type="text"
            id="id-type-text"
            name="id-type-text"
            aria-labelledby="label-for-id-type-text"
            aria-describedby=" "
            aria-invalid="false"
          />
      </gcds-input>
    `);
  });

  it('renders type url', async () => {
    const { root } = await newSpecPage({
      components: [GcdsInput],
      html: '<gcds-input type="url" label="Label" id="type-url" />',
    });
    expect(root).toEqualHtml(`
      <gcds-input type="url" label="Label" id="type-url">
          <gcds-label label-for="id-type-url" label="Label"></gcds-label>
          <input
            type="url"
            id="id-type-url"
            name="id-type-url"
            aria-labelledby="label-for-id-type-url"
            aria-describedby=" "
            aria-invalid="false"
          />
      </gcds-input>
    `);
  });

  /**
    * Disabled test
    */
  it('renders disabled', async () => {
    const { root } = await newSpecPage({
      components: [GcdsInput],
      html: '<gcds-input label="Label" id="input-disabled" disabled />',
    });
    expect(root).toEqualHtml(`
      <gcds-input label="Label" id="input-disabled" disabled="">
        <gcds-label label-for="id-input-disabled" label="Label"></gcds-label>
        <input
          type="text"
          id="id-input-disabled"
          name="id-input-disabled"
          aria-labelledby="label-for-id-input-disabled"
          aria-describedby=" "
          aria-invalid="false"
          disabled=""
        />
      </gcds-input>
    `);
  });

  /**
    * Error message test
    */
  it('renders error message', async () => {
    const { root } = await newSpecPage({
      components: [GcdsInput],
      html: '<gcds-input label="Label" id="input-with-error" error-message="This is an error message." />',
    });
    expect(root).toEqualHtml(`
      <gcds-input label="Label" id="input-with-error" error-message="This is an error message.">
        <gcds-label label-for="id-input-with-error" label="Label"></gcds-label>
        <gcds-error-message message-id="input-with-error" message="This is an error message."></gcds-error-message>
        <input
          type="text"
          id="id-input-with-error"
          class="error"
          name="id-input-with-error"
          aria-labelledby="label-for-id-input-with-error"
          aria-describedby=" error-message-id-input-with-error"
          aria-invalid="true"
        />
      </gcds-input>
    `);
  });

  /**
    * Hide label
    */
  it('renders with label hidden', async () => {
    const { root } = await newSpecPage({
      components: [GcdsInput],
      html: '<gcds-input label="Label" id="input-label-hidden" hide-label />',
    });
    expect(root).toEqualHtml(`
      <gcds-input label="Label" id="input-label-hidden" hide-label>
        <gcds-label label-for="id-input-label-hidden" label="Label" hide-label></gcds-label>
        <input
          type="text"
          id="id-input-label-hidden"
          name="id-input-label-hidden"
          aria-labelledby="label-for-id-input-label-hidden"
          aria-describedby=" "
          aria-invalid="false"
        />
      </gcds-input>
    `);
  });

  /**
    * Input hint test
    */
  it('renders input hint', async () => {
    const { root } = await newSpecPage({
      components: [GcdsInput],
      html: '<gcds-input label="Label" id="input-with-hint" hint="This is an input hint." />',
    });
    expect(root).toEqualHtml(`
      <gcds-input label="Label" id="input-with-hint" hint="This is an input hint.">
        <gcds-label label-for="id-input-with-hint" label="Label" ></gcds-label>
        <gcds-hint hint-id="input-with-hint" hint="This is an input hint."></gcds-hint>
        <input
          type="text"
          id="id-input-with-hint"
          name="id-input-with-hint"
          aria-labelledby="label-for-id-input-with-hint"
          aria-describedby="hint-id-input-with-hint "
          aria-invalid="false"
        />
      </gcds-input>
    `);
  });

  /**
    * Input ID test
    */
  it('renders input id', async () => {
    const { root } = await newSpecPage({
      components: [GcdsInput],
      html: '<gcds-input label="Label" id="input-renders-id" />',
    });
    expect(root).toEqualHtml(`
      <gcds-input label="Label" id="input-renders-id">
        <gcds-label label-for="id-input-renders-id" label="Label"></gcds-label>
        <input
          type="text"
          id="id-input-renders-id"
          name="id-input-renders-id"
          aria-labelledby="label-for-id-input-renders-id"
          aria-describedby=" "
          aria-invalid="false"
        />
      </gcds-input>
    `);
  });

  /**
    * Input label test
    */
  it('renders label', async () => {
    const { root } = await newSpecPage({
      components: [GcdsInput],
      html: '<gcds-input label="Label" id="input-renders-label" />',
    });
    expect(root).toEqualHtml(`
      <gcds-input label="Label" id="input-renders-label">
        <gcds-label label-for="id-input-renders-label" label="Label"></gcds-label>
        <input
          type="text"
          id="id-input-renders-label"
          name="id-input-renders-label"
          aria-labelledby="label-for-id-input-renders-label"
          aria-describedby=" "
          aria-invalid="false"
        />
      </gcds-input>
    `);
  });

  /**
    * Required test
    */
  it('renders required', async () => {
    const { root } = await newSpecPage({
      components: [GcdsInput],
      html: '<gcds-input label="Label" id="input-required" required />',
    });
    expect(root).toEqualHtml(`
      <gcds-input label="Label" id="input-required" required>
        <gcds-label label-for="id-input-required" label="Label" required></gcds-label>
        <input
          type="text"
          id="id-input-required"
          name="id-input-required"
          aria-labelledby="label-for-id-input-required"
          aria-describedby=" "
          aria-invalid="false"
          required
        />
      </gcds-input>
    `);
  });

  /**
  * Input value test
  */
    it('renders input value', async () => {
    const { root } = await newSpecPage({
      components: [GcdsInput],
      html: '<gcds-input label="Label" id="input-with-value" value="Input value" />',
    });
    expect(root).toEqualHtml(`
      <gcds-input label="Label" id="input-with-value" value="Input value">
        <gcds-label label-for="id-input-with-value" label="Label" ></gcds-label>
        <input
          type="text"
          id="id-input-with-value"
          name="id-input-with-value"
          value="Input value"
          aria-labelledby="label-for-id-input-with-value"
          aria-describedby=" "
          aria-invalid="false"
        />
      </gcds-input>
    `);
  });
});
