import { newSpecPage } from '@stencil/core/testing';
import { GcdsRadios } from '../gcds-radios';

describe('gcds-radios', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GcdsRadios],
      html: `<gcds-radios
          name="radio"
          legend="Legend"
          options='[{ "label": "Label 1", "id": "radio1", "value": "radio1"},{ "label": "Label 2", "id": "radio2", "value": "radio2"}]'
        >
        </gcds-radios>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-radios name="radio" legend="Legend" options='[{ "label": "Label 1", "id": "radio1", "value": "radio1"},{ "label": "Label 2", "id": "radio2", "value": "radio2"}]'>
        <mock:shadow-root>
          <fieldset aria-labelledby="radios-legend" class="gcds-radios__fieldset" tabindex="-1">
            <legend class="gcds-radios__legend" id="radios-legend">
              Legend
            </legend>
            <div class="gcds-radio">
              <input id="radio1" name="radio" type="radio" value="radio1">
              <gcds-label label="Label 1" label-for="radio1" lang="en"></gcds-label>
            </div>
            <div class="gcds-radio">
              <input id="radio2" name="radio" type="radio" value="radio2">
              <gcds-label label="Label 2" label-for="radio2" lang="en"></gcds-label>
            </div>
          </fieldset>
        </mock:shadow-root>
      </gcds-radios>
    `);
  });
  it('renders checked w/ options', async () => {
    const page = await newSpecPage({
      components: [GcdsRadios],
      html: `<gcds-radios
          name="radio"
          legend="Legend"
          options='[{ "label": "Label 1", "id": "radio1", "value": "radio1", "checked": true},{ "label": "Label 2", "id": "radio2", "value": "radio2"}]'
        >
        </gcds-radios>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-radios legend="Legend" name="radio" options='[{ "label": "Label 1", "id": "radio1", "value": "radio1", "checked": true},{ "label": "Label 2", "id": "radio2", "value": "radio2"}]' value="radio1">
        <mock:shadow-root>
          <fieldset aria-labelledby="radios-legend" class="gcds-radios__fieldset" tabindex="-1">
            <legend class="gcds-radios__legend" id="radios-legend">
              Legend
            </legend>
            <div class="gcds-radio">
              <input id="radio1" name="radio" type="radio" value="radio1" checked="">
              <gcds-label label="Label 1" label-for="radio1" lang="en"></gcds-label>
            </div>
            <div class="gcds-radio">
              <input id="radio2" name="radio" type="radio" value="radio2">
              <gcds-label label="Label 2" label-for="radio2" lang="en"></gcds-label>
            </div>
          </fieldset>
        </mock:shadow-root>
      </gcds-radios>
    `);
  });
  it('renders checked w/ value', async () => {
    const page = await newSpecPage({
      components: [GcdsRadios],
      html: `<gcds-radios
          name="radio"
          legend="Legend"
          options='[{ "label": "Label 1", "id": "radio1", "value": "radio1", "checked": true},{ "label": "Label 2", "id": "radio2", "value": "radio2"}]'
          value="radio1"
        >
        </gcds-radios>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-radios legend="Legend" name="radio" options='[{ "label": "Label 1", "id": "radio1", "value": "radio1", "checked": true},{ "label": "Label 2", "id": "radio2", "value": "radio2"}]' value="radio1">
        <mock:shadow-root>
          <fieldset aria-labelledby="radios-legend" class="gcds-radios__fieldset" tabindex="-1">
            <legend class="gcds-radios__legend" id="radios-legend">
              Legend
            </legend>
            <div class="gcds-radio">
              <input id="radio1" name="radio" type="radio" value="radio1" checked="">
              <gcds-label label="Label 1" label-for="radio1" lang="en"></gcds-label>
            </div>
            <div class="gcds-radio">
              <input id="radio2" name="radio" type="radio" value="radio2">
              <gcds-label label="Label 2" label-for="radio2" lang="en"></gcds-label>
            </div>
          </fieldset>
        </mock:shadow-root>
      </gcds-radios>
    `);
  });
  it('renders w/ hint', async () => {
    const page = await newSpecPage({
      components: [GcdsRadios],
      html: `<gcds-radios
          name="radio"
          legend="Legend"
          hint="Hint text"
          options='[{ "label": "Label 1", "id": "radio1", "value": "radio1"},{ "label": "Label 2", "id": "radio2", "value": "radio2"}]'
        >
        </gcds-radios>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-radios name="radio" legend="Legend" hint="Hint text" options='[{ "label": "Label 1", "id": "radio1", "value": "radio1"},{ "label": "Label 2", "id": "radio2", "value": "radio2"}]'>
        <mock:shadow-root>
          <fieldset aria-labelledby="radios-legend radios-hint" class="gcds-radios__fieldset" tabindex="-1">
            <legend class="gcds-radios__legend" id="radios-legend">
              Legend
            </legend>
            <gcds-hint hint-id="radios" id="radios-hint">
              Hint text
            </gcds-hint>
            <div class="gcds-radio">
              <input id="radio1" name="radio" type="radio" value="radio1">
              <gcds-label label="Label 1" label-for="radio1" lang="en"></gcds-label>
            </div>
            <div class="gcds-radio">
              <input id="radio2" name="radio" type="radio" value="radio2">
              <gcds-label label="Label 2" label-for="radio2" lang="en"></gcds-label>
            </div>
          </fieldset>
        </mock:shadow-root>
      </gcds-radios>
    `);
  });
  it('renders w/ error message', async () => {
    const page = await newSpecPage({
      components: [GcdsRadios],
      html: `<gcds-radios
          name="radio"
          legend="Legend"
          error-message="Error message"
          options='[{ "label": "Label 1", "id": "radio1", "value": "radio1"},{ "label": "Label 2", "id": "radio2", "value": "radio2"}]'
        >
        </gcds-radios>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-radios name="radio" legend="Legend" error-message="Error message" options='[{ "label": "Label 1", "id": "radio1", "value": "radio1"},{ "label": "Label 2", "id": "radio2", "value": "radio2"}]'>
        <mock:shadow-root>
          <fieldset aria-labelledby="radios-legend" class="gcds-radios__fieldset" tabindex="-1">
            <legend class="gcds-radios__legend" id="radios-legend">
              Legend
            </legend>
            <gcds-error-message id="radios-error" messageid="radios">
              Error message
            </gcds-error-message>
            <div class="gcds-radio gcds-radio--error">
              <input aria-description="Error message" aria-invalid="true" id="radio1" name="radio" type="radio" value="radio1">
              <gcds-label label="Label 1" label-for="radio1" lang="en"></gcds-label>
            </div>
            <div class="gcds-radio gcds-radio--error">
              <input aria-description="Error message" aria-invalid="true" id="radio2" name="radio" type="radio" value="radio2">
              <gcds-label label="Label 2" label-for="radio2" lang="en"></gcds-label>
            </div>
          </fieldset>
        </mock:shadow-root>
      </gcds-radios>
    `);
  });
  it('renders disabled', async () => {
    const page = await newSpecPage({
      components: [GcdsRadios],
      html: `<gcds-radios
          name="radio"
          legend="Legend"
          options='[{ "label": "Label 1", "id": "radio1", "value": "radio1"},{ "label": "Label 2", "id": "radio2", "value": "radio2"}]'
          disabled
        >
        </gcds-radios>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-radios name="radio" legend="Legend" options='[{ "label": "Label 1", "id": "radio1", "value": "radio1"},{ "label": "Label 2", "id": "radio2", "value": "radio2"}]' disabled>
        <mock:shadow-root>
          <fieldset aria-labelledby="radios-legend" class="gcds-radios__fieldset" tabindex="-1">
            <legend class="gcds-radios__legend" id="radios-legend">
              Legend
            </legend>
            <div class="gcds-radio gcds-radio--disabled">
              <input disabled="" id="radio1" name="radio" type="radio" value="radio1">
              <gcds-label label="Label 1" label-for="radio1" lang="en"></gcds-label>
            </div>
            <div class="gcds-radio gcds-radio--disabled">
              <input disabled="" id="radio2" name="radio" type="radio" value="radio2">
              <gcds-label label="Label 2" label-for="radio2" lang="en"></gcds-label>
            </div>
          </fieldset>
        </mock:shadow-root>
      </gcds-radios>
    `);
  });
  it('does not render - no required attributes', async () => {
    const page = await newSpecPage({
      components: [GcdsRadios],
      html: `<gcds-radios></gcds-radios>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-radios>
        <mock:shadow-root>
        </mock:shadow-root>
      </gcds-radios>
    `);
  });
  it('does not render - missing name', async () => {
    const page = await newSpecPage({
      components: [GcdsRadios],
      html: `<gcds-radios
          legend="Legend"
          options='[{ "label": "Label 1", "id": "radio1", "value": "radio1"},{ "label": "Label 2", "id": "radio2", "value": "radio2"}]'
        >
        </gcds-radios>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-radios legend="Legend" options='[{ "label": "Label 1", "id": "radio1", "value": "radio1"},{ "label": "Label 2", "id": "radio2", "value": "radio2"}]'>
        <mock:shadow-root>
        </mock:shadow-root>
      </gcds-radios>
    `);
  });
  it('does not render - missing legend', async () => {
    const page = await newSpecPage({
      components: [GcdsRadios],
      html: `<gcds-radios
          name="radio"

          options='[{ "label": "Label 1", "id": "radio1", "value": "radio1"},{ "label": "Label 2", "id": "radio2", "value": "radio2"}]'
        >
        </gcds-radios>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-radios name="radio" options='[{ "label": "Label 1", "id": "radio1", "value": "radio1"},{ "label": "Label 2", "id": "radio2", "value": "radio2"}]'>
        <mock:shadow-root>
        </mock:shadow-root>
      </gcds-radios>
    `);
  });
  it('does not render - missing options attribute', async () => {
    const page = await newSpecPage({
      components: [GcdsRadios],
      html: `<gcds-radios
          name="radio"
          legend="Legend"
        >
        </gcds-radios>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-radios name="radio" legend="Legend">
        <mock:shadow-root>
        </mock:shadow-root>
      </gcds-radios>
    `);
  });
  it('does not render - empty options array', async () => {
    const page = await newSpecPage({
      components: [GcdsRadios],
      html: `<gcds-radios
          name="radio"
          legend="Legend"
          options='[]'
        >
        </gcds-radios>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-radios name="radio" legend="Legend" options='[]'>
        <mock:shadow-root>
        </mock:shadow-root>
      </gcds-radios>
    `);
  });
  it('does not render - blank options string', async () => {
    const page = await newSpecPage({
      components: [GcdsRadios],
      html: `<gcds-radios
          name="radio"
          legend="Legend"
          options=''
        >
        </gcds-radios>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-radios name="radio" legend="Legend" options=''>
        <mock:shadow-root>
        </mock:shadow-root>
      </gcds-radios>
    `);
  });
  it('does not render - options object not array', async () => {
    const page = await newSpecPage({
      components: [GcdsRadios],
      html: `<gcds-radios
          name="radio"
          legend="Legend"
          options='{{ "label": "Label 1", "id": "radio1", "value": "radio1"},{ "label": "Label 2", "id": "radio2", "value": "radio2"}}'
        >
        </gcds-radios>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-radios name="radio" legend="Legend" options='{{ "label": "Label 1", "id": "radio1", "value": "radio1"},{ "label": "Label 2", "id": "radio2", "value": "radio2"}}'>
        <mock:shadow-root>
        </mock:shadow-root>
      </gcds-radios>
    `);
  });
});
