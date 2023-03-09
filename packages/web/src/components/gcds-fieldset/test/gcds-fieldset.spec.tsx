import { newSpecPage } from '@stencil/core/testing';
import { GcdsFieldset } from '../gcds-fieldset';

describe('gcds-fieldset', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsFieldset],
      html: `<gcds-fieldset fieldset-id="field" legend="Fieldset legend"></gcds-fieldset>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-fieldset fieldset-id="field" legend="Fieldset legend">
        <mock:shadow-root>
          <fieldset aria-labelledby="legend-field" id="field">
            <legend id="legend-field">
              Fieldset legend
            </legend>
            <slot></slot>
          </fieldset>
        </mock:shadow-root>
      </gcds-fieldset>
    `);
  });
  it('renders - required', async () => {
    const page = await newSpecPage({
      components: [GcdsFieldset],
      html: `<gcds-fieldset fieldset-id="field" legend="Fieldset legend" required></gcds-fieldset>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-fieldset fieldset-id="field" legend="Fieldset legend" required>
        <mock:shadow-root>
          <fieldset aria-labelledby="legend-field" id="field">
            <legend id="legend-field">
              Fieldset legend
              <strong class="legend__required">
                (required)
              </strong>
            </legend>
            <slot></slot>
          </fieldset>
        </mock:shadow-root>
      </gcds-fieldset>
    `);
  });
  it('renders - hint', async () => {
    const page = await newSpecPage({
      components: [GcdsFieldset],
      html: `<gcds-fieldset fieldset-id="field" legend="Fieldset legend" hint="Fieldset hint"></gcds-fieldset>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-fieldset fieldset-id="field" legend="Fieldset legend" hint="Fieldset hint">
        <mock:shadow-root>
          <fieldset aria-labelledby="legend-field hint-field" id="field">
            <legend id="legend-field">
              Fieldset legend
            </legend>
            <gcds-hint hint="Fieldset hint" hint-id="field"></gcds-hint>
            <slot></slot>
          </fieldset>
        </mock:shadow-root>
      </gcds-fieldset>
    `);
  });
  it('renders - error message', async () => {
    const page = await newSpecPage({
      components: [GcdsFieldset],
      html: `<gcds-fieldset fieldset-id="field" legend="Fieldset legend" error-message="Fieldset error"></gcds-fieldset>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-fieldset fieldset-id="field" legend="Fieldset legend" error-message="Fieldset error">
        <mock:shadow-root>
          <fieldset aria-labelledby="legend-field" class="gcds-fieldset--error" id="field">
            <legend id="legend-field">
              Fieldset legend
            </legend>
            <gcds-error-message message="Fieldset error" messageId="field"></gcds-error-message>
            <slot></slot>
          </fieldset>
        </mock:shadow-root>
      </gcds-fieldset>
    `);
  });
  it('renders - passed radio button', async () => {
    const page = await newSpecPage({
      components: [GcdsFieldset],
      html: `
      <gcds-fieldset fieldset-id="field" legend="Fieldset legend">
        <gcds-radio radio-id="radio" label="Radio button" name="radio"></gcds-radio>
      </gcds-fieldset>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-fieldset fieldset-id="field" legend="Fieldset legend">
        <mock:shadow-root>
          <fieldset aria-labelledby="legend-field" id="field">
            <legend id="legend-field">
              Fieldset legend
            </legend>
            <slot></slot>
          </fieldset>
        </mock:shadow-root>
        <gcds-radio label="Radio button" name="radio" radio-id="radio"></gcds-radio>
      </gcds-fieldset>
    `);
  });
});
