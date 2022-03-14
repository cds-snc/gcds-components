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
        <mock:shadow-root>
          <gcds-label label-for="input-renders" label="Label"></gcds-label>
          <input
            type="text"
            id="input-renders"
            name="input-renders"
            aria-labelledby="label-for-input-renders"
            aria-describedby=" "
            aria-invalid="false"
          />
        </mock:shadow-root>
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
        <mock:shadow-root>
          <gcds-label label-for="type-email" label="Label"></gcds-label>
          <input
            type="email"
            id="type-email"
            name="type-email"
            aria-labelledby="label-for-type-email"
            aria-describedby=" "
            aria-invalid="false"
          />
        </mock:shadow-root>
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
        <mock:shadow-root>
          <gcds-label label-for="type-number" label="Label"></gcds-label>
          <input
            type="number"
            id="type-number"
            name="type-number"
            aria-labelledby="label-for-type-number"
            aria-describedby=" "
            aria-invalid="false"
          />
        </mock:shadow-root>
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
        <mock:shadow-root>
          <gcds-label label-for="type-password" label="Label"></gcds-label>
          <input
            type="password"
            id="type-password"
            name="type-password"
            aria-labelledby="label-for-type-password"
            aria-describedby=" "
            aria-invalid="false"
          />
        </mock:shadow-root>
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
        <mock:shadow-root>
          <gcds-label label-for="type-search" label="Label"></gcds-label>
          <input
            type="search"
            id="type-search"
            name="type-search"
            aria-labelledby="label-for-type-search"
            aria-describedby=" "
            aria-invalid="false"
          />
        </mock:shadow-root>
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
        <mock:shadow-root>
          <gcds-label label-for="type-text" label="Label"></gcds-label>
          <input
            type="text"
            id="type-text"
            name="type-text"
            aria-labelledby="label-for-type-text"
            aria-describedby=" "
            aria-invalid="false"
          />
        </mock:shadow-root>
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
        <mock:shadow-root>
          <gcds-label label-for="type-url" label="Label"></gcds-label>
          <input
            type="url"
            id="type-url"
            name="type-url"
            aria-labelledby="label-for-type-url"
            aria-describedby=" "
            aria-invalid="false"
          />
        </mock:shadow-root>
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
        <mock:shadow-root>
          <gcds-label label-for="input-disabled" label="Label"></gcds-label>
          <input
            type="text"
            id="input-disabled"
            name="input-disabled"
            aria-labelledby="label-for-input-disabled"
            aria-describedby=" "
            aria-invalid="false"
            disabled=""
          />
        </mock:shadow-root>
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
        <mock:shadow-root>
          <gcds-label label-for="input-with-error" label="Label"></gcds-label>
          <gcds-error-message message-id="input-with-error" message="This is an error message."></gcds-error-message>
          <input
            type="text"
            id="input-with-error"
            class="error"
            name="input-with-error"
            aria-labelledby="label-for-input-with-error"
            aria-describedby="error-message-input-with-error "
            aria-invalid="true"
          />
        </mock:shadow-root>
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
        <mock:shadow-root>
          <gcds-label label-for="input-label-hidden" label="Label" hide-label></gcds-label>
          <input
            type="text"
            id="input-label-hidden"
            name="input-label-hidden"
            aria-labelledby="label-for-input-label-hidden"
            aria-describedby=" "
            aria-invalid="false"
          />
        </mock:shadow-root>
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
        <mock:shadow-root>
          <gcds-label label-for="input-with-hint" label="Label" ></gcds-label>
          <gcds-hint hint-id="input-with-hint" hint="This is an input hint."></gcds-hint>
          <input
            type="text"
            id="input-with-hint"
            name="input-with-hint"
            aria-labelledby="label-for-input-with-hint"
            aria-describedby=" hint-input-with-hint"
            aria-invalid="false"
          />
        </mock:shadow-root>
      </gcds-input>
    `);
  });

  /**
    * Input value test
    */
  it('renders input value', async () => {
    const { root } = await newSpecPage({
      components: [GcdsInput],
      html: '<gcds-input label="Label" id="input-with-value" input-value="Input value" />',
    });
    expect(root).toEqualHtml(`
      <gcds-input label="Label" id="input-with-value" input-value="Input value">
        <mock:shadow-root>
          <gcds-label label-for="input-with-value" label="Label" ></gcds-label>
          <input
            type="text"
            id="input-with-value"
            name="input-with-value"
            value="Input value"
            aria-labelledby="label-for-input-with-value"
            aria-describedby=" "
            aria-invalid="false"
          />
        </mock:shadow-root>
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
        <mock:shadow-root>
          <gcds-label label-for="input-renders-id" label="Label"></gcds-label>
          <input
            type="text"
            id="input-renders-id"
            name="input-renders-id"
            aria-labelledby="label-for-input-renders-id"
            aria-describedby=" "
            aria-invalid="false"
          />
        </mock:shadow-root>
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
        <mock:shadow-root>
          <gcds-label label-for="input-renders-label" label="Label"></gcds-label>
          <input
            type="text"
            id="input-renders-label"
            name="input-renders-label"
            aria-labelledby="label-for-input-renders-label"
            aria-describedby=" "
            aria-invalid="false"
          />
        </mock:shadow-root>
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
        <mock:shadow-root>
          <gcds-label label-for="input-required" label="Label" required></gcds-label>
          <input
            type="text"
            id="input-required"
            name="input-required"
            aria-labelledby="label-for-input-required"
            aria-describedby=" "
            aria-invalid="false"
            required
          />
        </mock:shadow-root>
      </gcds-input>
    `);
  });
});
