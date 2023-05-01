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
        <fieldset class="gcds-fieldset" aria-labelledby="legend-field" id="field" tabindex="-1">
          <legend id="legend-field">
            Fieldset legend
          </legend>
        </fieldset>
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
        <fieldset class="gcds-fieldset" aria-labelledby="legend-field" id="field" tabindex="-1">
          <legend id="legend-field">
            Fieldset legend
            <strong class="legend__required">
              (required)
            </strong>
          </legend>
        </fieldset>
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
          <fieldset class="gcds-fieldset" aria-labelledby="legend-field hint-field" id="field" tabindex="-1">
          <legend id="legend-field">
            Fieldset legend
          </legend>
          <gcds-hint hint="Fieldset hint" hint-id="field"></gcds-hint>
        </fieldset>
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
        <fieldset aria-describedby="error-message-field " aria-labelledby="legend-field" class="gcds-fieldset gcds-fieldset--error" id="field" tabindex="-1">
          <legend id="legend-field">
            Fieldset legend
          </legend>
          <gcds-error-message message="Fieldset error" messageId="field"></gcds-error-message>
        </fieldset>
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
        <fieldset class="gcds-fieldset" aria-labelledby="legend-field" id="field" tabindex="-1">
          <legend id="legend-field">
            Fieldset legend
          </legend>
          <gcds-radio label="Radio button" name="radio" radio-id="radio"></gcds-radio>
        </fieldset>
      </gcds-fieldset>
    `);
  });
});
