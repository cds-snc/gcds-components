import { newSpecPage } from '@stencil/core/testing';
import { GcdsInput } from '../gcds-input';

// import '../../../utils/test/elementInternals.mock';

describe('gcds-input', () => {
  it('renders with minimum required properties', async () => {
    const { root } = await newSpecPage({
      components: [GcdsInput],
      html: '<gcds-input label="Label" input-id="input-renders" name="input-renders-name"/>',
    });
    expect(root).toEqualHtml(`
      <gcds-input label="Label" input-id="input-renders" name="input-renders-name">
        <mock:shadow-root>
          <div class="gcds-input-wrapper">
            <gcds-label label-for="input-renders" label="Label" lang="en"></gcds-label>
            <input
              type="text"
              id="input-renders"
              name="input-renders-name"
              part="input"
              aria-labelledby="label-for-input-renders"
              aria-invalid="false"
            />
          </div>
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
      html: '<gcds-input type="email" label="Label" input-id="type-email" name="type-email-name"/>',
    });
    expect(root).toEqualHtml(`
      <gcds-input type="email" label="Label" input-id="type-email" name="type-email-name">
        <mock:shadow-root>
          <div class="gcds-input-wrapper">
            <gcds-label label-for="type-email" label="Label" lang="en"></gcds-label>
            <input
              type="email"
              id="type-email"
              name="type-email-name"
              part="input"
              aria-labelledby="label-for-type-email"
              aria-invalid="false"
            />
          </div>
        </mock:shadow-root>
      </gcds-input>
    `);
  });

  it('renders type number', async () => {
    const { root } = await newSpecPage({
      components: [GcdsInput],
      html: '<gcds-input type="number" label="Label" input-id="type-number" name="type-number-name"/>',
    });
    expect(root).toEqualHtml(`
      <gcds-input type="number" label="Label" input-id="type-number" name="type-number-name">
        <mock:shadow-root>
          <div class="gcds-input-wrapper">
            <gcds-label label-for="type-number" label="Label" lang="en"></gcds-label>
            <input
              type="number"
              id="type-number"
              name="type-number-name"
              part="input"
              aria-labelledby="label-for-type-number"
              aria-invalid="false"
            />
          </div>
        </mock:shadow-root>
      </gcds-input>
    `);
  });

  it('renders type password', async () => {
    const { root } = await newSpecPage({
      components: [GcdsInput],
      html: '<gcds-input type="password" label="Label" input-id="type-password" name="type-password-name"/>',
    });
    expect(root).toEqualHtml(`
      <gcds-input type="password" label="Label" input-id="type-password" name="type-password-name">
        <mock:shadow-root>
          <div class="gcds-input-wrapper">
            <gcds-label label-for="type-password" label="Label" lang="en"></gcds-label>
            <input
              type="password"
              id="type-password"
              name="type-password-name"
              part="input"
              aria-labelledby="label-for-type-password"
              aria-invalid="false"
            />
          </div>
        </mock:shadow-root>
      </gcds-input>
    `);
  });

  it('renders type search', async () => {
    const { root } = await newSpecPage({
      components: [GcdsInput],
      html: '<gcds-input type="search" label="Label" input-id="type-search" name="type-search-name"/>',
    });
    expect(root).toEqualHtml(`
      <gcds-input type="search" label="Label" input-id="type-search" name="type-search-name">
        <mock:shadow-root>
          <div class="gcds-input-wrapper">
            <gcds-label label-for="type-search" label="Label" lang="en"></gcds-label>
            <input
              type="search"
              id="type-search"
              name="type-search-name"
              part="input"
              aria-labelledby="label-for-type-search"
              aria-invalid="false"
            />
          </div>
        </mock:shadow-root>
      </gcds-input>
    `);
  });

  it('renders type text', async () => {
    const { root } = await newSpecPage({
      components: [GcdsInput],
      html: '<gcds-input type="text" label="Label" input-id="type-text" name="type-text-name"/>',
    });
    expect(root).toEqualHtml(`
      <gcds-input type="text" label="Label" input-id="type-text" name="type-text-name">
        <mock:shadow-root>
          <div class="gcds-input-wrapper">
            <gcds-label label-for="type-text" label="Label" lang="en"></gcds-label>
            <input
              type="text"
              id="type-text"
              name="type-text-name"
              part="input"
              aria-labelledby="label-for-type-text"
              aria-invalid="false"
            />
          </div>
        </mock:shadow-root>
      </gcds-input>
    `);
  });

  it('renders type url', async () => {
    const { root } = await newSpecPage({
      components: [GcdsInput],
      html: '<gcds-input type="url" label="Label" input-id="type-url" name="type-url-name"/>',
    });
    expect(root).toEqualHtml(`
      <gcds-input type="url" label="Label" input-id="type-url" name="type-url-name">
        <mock:shadow-root>
          <div class="gcds-input-wrapper">
            <gcds-label label-for="type-url" label="Label" lang="en"></gcds-label>
            <input
              type="url"
              id="type-url"
              name="type-url-name"
              part="input"
              aria-labelledby="label-for-type-url"
              aria-invalid="false"
            />
          </div>
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
      html: '<gcds-input label="Label" input-id="input-disabled" name="input-disabled-name" disabled />',
    });
    expect(root).toEqualHtml(`
      <gcds-input label="Label" input-id="input-disabled" name="input-disabled-name" disabled="">
        <mock:shadow-root>
          <div class="gcds-input-wrapper gcds-disabled">
            <gcds-label label-for="input-disabled" label="Label" lang="en"></gcds-label>
            <input
              type="text"
              id="input-disabled"
              name="input-disabled-name"
              part="input"
              aria-labelledby="label-for-input-disabled"
              aria-invalid="false"
              disabled=""
            />
          </div>
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
      html: '<gcds-input label="Label" input-id="input-with-error" name="input-with-error-name" error-message="This is an error message." />',
    });
    expect(root).toEqualHtml(`
      <gcds-input label="Label" input-id="input-with-error" name="input-with-error-name" error-message="This is an error message.">
        <mock:shadow-root>
          <div class="gcds-input-wrapper gcds-error">
            <gcds-label label-for="input-with-error" label="Label" lang="en"></gcds-label>
            <gcds-error-message messageId="input-with-error">
              This is an error message.
            </gcds-error-message>
            <input
              type="text"
              id="input-with-error"
              class="gcds-error"
              name="input-with-error-name"
              part="input"
              aria-labelledby="label-for-input-with-error"
              aria-describedby="error-message-input-with-error "
              aria-invalid="true"
            />
          </div>
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
      html: '<gcds-input label="Label" input-id="input-label-hidden" name="input-label-hidden-name" hide-label />',
    });
    expect(root).toEqualHtml(`
      <gcds-input label="Label" input-id="input-label-hidden" name="input-label-hidden-name" hide-label>
        <mock:shadow-root>
          <div class="gcds-input-wrapper">
            <gcds-label label-for="input-label-hidden" label="Label" hide-label lang="en"></gcds-label>
            <input
              type="text"
              id="input-label-hidden"
              name="input-label-hidden-name"
              part="input"
              aria-labelledby="label-for-input-label-hidden"
              aria-invalid="false"
            />
          </div>
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
      html: '<gcds-input label="Label" input-id="input-with-hint" name="input-with-hint-name" hint="This is an input hint." />',
    });
    expect(root).toEqualHtml(`
      <gcds-input label="Label" input-id="input-with-hint" name="input-with-hint-name" hint="This is an input hint.">
        <mock:shadow-root>
          <div class="gcds-input-wrapper">
            <gcds-label label-for="input-with-hint" label="Label" lang="en"></gcds-label>
            <gcds-hint hint-id="input-with-hint">This is an input hint.</gcds-hint>
            <input
              type="text"
              id="input-with-hint"
              name="input-with-hint-name"
              part="input"
              aria-labelledby="label-for-input-with-hint"
              aria-describedby="hint-input-with-hint "
              aria-invalid="false"
            />
          </div>
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
      html: '<gcds-input label="Label" input-id="input-renders-id" name="input-renders-id-name" />',
    });
    expect(root).toEqualHtml(`
      <gcds-input label="Label" input-id="input-renders-id" name="input-renders-id-name">
        <mock:shadow-root>
          <div class="gcds-input-wrapper">
            <gcds-label label-for="input-renders-id" label="Label" lang="en"></gcds-label>
            <input
              type="text"
              id="input-renders-id"
              name="input-renders-id-name"
              part="input"
              aria-labelledby="label-for-input-renders-id"
              aria-invalid="false"
            />
          </div>
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
      html: '<gcds-input label="Label" input-id="input-renders-label" name="input-renders-label-name" />',
    });
    expect(root).toEqualHtml(`
      <gcds-input label="Label" input-id="input-renders-label" name="input-renders-label-name">
        <mock:shadow-root>
          <div class="gcds-input-wrapper">
            <gcds-label label-for="input-renders-label" label="Label" lang="en"></gcds-label>
            <input
              type="text"
              id="input-renders-label"
              name="input-renders-label-name"
              part="input"
              aria-labelledby="label-for-input-renders-label"
              aria-invalid="false"
            />
          </div>
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
      html: '<gcds-input label="Label" input-id="input-required" required name="input-required-name"/>',
    });
    expect(root).toEqualHtml(`
      <gcds-input label="Label" input-id="input-required" name="input-required-name" required>
        <mock:shadow-root>
          <div class="gcds-input-wrapper">
            <gcds-label label-for="input-required" label="Label" required lang="en"></gcds-label>
            <input
              type="text"
              id="input-required"
              name="input-required-name"
              part="input"
              aria-labelledby="label-for-input-required"
              aria-invalid="false"
              required
            />
          </div>
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
      html: '<gcds-input label="Label" input-id="input-with-value" value="Input value"  name="input-with-value-name"/>',
    });
    expect(root).toEqualHtml(`
      <gcds-input label="Label" input-id="input-with-value" value="Input value" name="input-with-value-name">
        <mock:shadow-root>
          <div class="gcds-input-wrapper">
            <gcds-label label-for="input-with-value" label="Label" lang="en"></gcds-label>
            <input
              type="text"
              id="input-with-value"
              name="input-with-value-name"
              part="input"
              value="Input value"
              aria-labelledby="label-for-input-with-value"
              aria-invalid="false"
            />
          </div>
        </mock:shadow-root>
      </gcds-input>
    `);
  });

  /**
   * Input name test
   */
  it('renders input name', async () => {
    const { root } = await newSpecPage({
      components: [GcdsInput],
      html: '<gcds-input label="Label" input-id="input-with-name" name="input-with-name-name"/>',
    });
    expect(root).toEqualHtml(`
      <gcds-input label="Label" input-id="input-with-name" name="input-with-name-name">
        <mock:shadow-root>
          <div class="gcds-input-wrapper">
            <gcds-label label-for="input-with-name" label="Label" lang="en"></gcds-label>
            <input
              type="text"
              id="input-with-name"
              name="input-with-name-name"
              part="input"
              aria-labelledby="label-for-input-with-name"
              aria-invalid="false"
            />
          </div>
        </mock:shadow-root>
      </gcds-input>
    `);
  });
});
