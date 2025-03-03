import { newSpecPage } from '@stencil/core/testing';
import { GcdsFieldset } from '../gcds-fieldset';

describe('gcds-fieldset', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsFieldset],
      html: `<gcds-fieldset fieldset-id="field" legend="Fieldset legend" legend-size="h2"></gcds-fieldset>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-fieldset fieldset-id="field" legend="Fieldset legend" legend-size="h2">
        <mock:shadow-root>
          <fieldset class="gcds-fieldset" aria-labelledby="legend-field" id="field" tabindex="-1">
            <legend id="legend-field" class="size-h2">
              Fieldset legend
            </legend>
            <slot></slot>
          </fieldset>
        </mock:shadow-root>
      </gcds-fieldset>
    `);
  });
  it('renders - size h2', async () => {
    const page = await newSpecPage({
      components: [GcdsFieldset],
      html: `<gcds-fieldset fieldset-id="field" legend="Fieldset legend" legend-size="h2"></gcds-fieldset>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-fieldset fieldset-id="field" legend="Fieldset legend" legend-size="h2">
        <mock:shadow-root>
          <fieldset class="gcds-fieldset" aria-labelledby="legend-field" id="field" tabindex="-1">
            <legend id="legend-field" class="size-h2">
              Fieldset legend
            </legend>
            <slot></slot>
          </fieldset>
        </mock:shadow-root>
      </gcds-fieldset>
    `);
  });
  it('renders - size h3', async () => {
    const page = await newSpecPage({
      components: [GcdsFieldset],
      html: `<gcds-fieldset fieldset-id="field" legend="Fieldset legend" legend-size="h3"></gcds-fieldset>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-fieldset fieldset-id="field" legend="Fieldset legend" legend-size="h3">
        <mock:shadow-root>
          <fieldset class="gcds-fieldset" aria-labelledby="legend-field" id="field" tabindex="-1">
            <legend id="legend-field" class="size-h3">
              Fieldset legend
            </legend>
            <slot></slot>
          </fieldset>
        </mock:shadow-root>
      </gcds-fieldset>
    `);
  });
  it('renders - size h4', async () => {
    const page = await newSpecPage({
      components: [GcdsFieldset],
      html: `<gcds-fieldset fieldset-id="field" legend="Fieldset legend" legend-size="h4"></gcds-fieldset>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-fieldset fieldset-id="field" legend="Fieldset legend" legend-size="h4">
        <mock:shadow-root>
          <fieldset class="gcds-fieldset" aria-labelledby="legend-field" id="field" tabindex="-1">
            <legend id="legend-field" class="size-h4">
              Fieldset legend
            </legend>
            <slot></slot>
          </fieldset>
        </mock:shadow-root>
      </gcds-fieldset>
    `);
  });
  it('renders - size h5', async () => {
    const page = await newSpecPage({
      components: [GcdsFieldset],
      html: `<gcds-fieldset fieldset-id="field" legend="Fieldset legend" legend-size="h5"></gcds-fieldset>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-fieldset fieldset-id="field" legend="Fieldset legend" legend-size="h5">
        <mock:shadow-root>
          <fieldset class="gcds-fieldset" aria-labelledby="legend-field" id="field" tabindex="-1">
            <legend id="legend-field" class="size-h5">
              Fieldset legend
            </legend>
            <slot></slot>
          </fieldset>
        </mock:shadow-root>
      </gcds-fieldset>
    `);
  });
  it('renders - size h6', async () => {
    const page = await newSpecPage({
      components: [GcdsFieldset],
      html: `<gcds-fieldset fieldset-id="field" legend="Fieldset legend" legend-size="h6"></gcds-fieldset>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-fieldset fieldset-id="field" legend="Fieldset legend" legend-size="h6">
        <mock:shadow-root>
          <fieldset class="gcds-fieldset" aria-labelledby="legend-field" id="field" tabindex="-1">
            <legend id="legend-field" class="size-h6">
              Fieldset legend
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
      html: `<gcds-fieldset fieldset-id="field" legend="Fieldset legend" legend-size="h2" hint="Fieldset hint"></gcds-fieldset>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-fieldset fieldset-id="field" legend="Fieldset legend" legend-size="h2" hint="Fieldset hint">
        <mock:shadow-root>
          <fieldset class="gcds-fieldset" aria-labelledby="legend-field hint-field" id="field" tabindex="-1">
            <legend id="legend-field" class="size-h2">
              Fieldset legend
            </legend>
            <gcds-hint hint-id="field">Fieldset hint</gcds-hint>
            <slot></slot>
          </fieldset>
        </mock:shadow-root>
      </gcds-fieldset>
    `);
  });
});
