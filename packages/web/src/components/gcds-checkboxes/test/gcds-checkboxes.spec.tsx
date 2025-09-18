import { newSpecPage } from '@stencil/core/testing';
import { GcdsCheckboxes } from '../gcds-checkboxes';

describe('gcds-checkbox', () => {
  // ------- Group with multiple checkboxes ------- //

  it('renders: group', async () => {
    const page = await newSpecPage({
      components: [GcdsCheckboxes],
      html: `<gcds-checkboxes
          legend="Group of checkboxes"
          name="checkgroup"
          options='[{ "label": "Checkbox 1 label", "id": "checkbox1", "value": "checkbox1"}, { "label": "Checkbox 2 label", "id": "checkbox2", "value": "checkbox2"}, { "label": "Checkbox 3 label", "id": "checkbox3", "value": "checkbox3"}]'
        ></gcds-checkboxes>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-checkboxes legend="Group of checkboxes" name="checkgroup" options='[{ "label": "Checkbox 1 label", "id": "checkbox1", "value": "checkbox1"}, { "label": "Checkbox 2 label", "id": "checkbox2", "value": "checkbox2"}, { "label": "Checkbox 3 label", "id": "checkbox3", "value": "checkbox3"}]'>
        <mock:shadow-root>
          <fieldset aria-labelledby="checkboxes-legend" class="gcds-checkboxes__fieldset" tabindex="-1">
            <legend class="gcds-checkboxes__legend" id="checkboxes-legend">
              Group of checkboxes
            </legend>
            <div class="gcds-checkbox">
              <input id="checkbox1" name="checkgroup" type="checkbox" value="checkbox1">
              <gcds-label label="Checkbox 1 label" label-for="checkbox1" lang="en"></gcds-label>
            </div>
            <div class="gcds-checkbox">
              <input id="checkbox2" name="checkgroup" type="checkbox" value="checkbox2">
              <gcds-label label="Checkbox 2 label" label-for="checkbox2" lang="en"></gcds-label>
            </div>
            <div class="gcds-checkbox">
              <input id="checkbox3" name="checkgroup" type="checkbox" value="checkbox3">
              <gcds-label label="Checkbox 3 label" label-for="checkbox3" lang="en"></gcds-label>
            </div>
          </fieldset>
        </mock:shadow-root>
      </gcds-checkboxes>
    `);
  });
  it('renders: group w/ required', async () => {
    const page = await newSpecPage({
      components: [GcdsCheckboxes],
      html: `<gcds-checkboxes
          legend="Group of checkboxes"
          name="checkgroup"
          options='[{ "label": "Checkbox 1 label", "id": "checkbox1", "value": "checkbox1"}, { "label": "Checkbox 2 label", "id": "checkbox2", "value": "checkbox2"}, { "label": "Checkbox 3 label", "id": "checkbox3", "value": "checkbox3"}]'
          required
        ></gcds-checkboxes>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-checkboxes required legend="Group of checkboxes" name="checkgroup" options='[{ "label": "Checkbox 1 label", "id": "checkbox1", "value": "checkbox1"}, { "label": "Checkbox 2 label", "id": "checkbox2", "value": "checkbox2"}, { "label": "Checkbox 3 label", "id": "checkbox3", "value": "checkbox3"}]'>
        <mock:shadow-root>
          <fieldset aria-labelledby="checkboxes-legend" class="gcds-checkboxes__fieldset" tabindex="-1">
            <legend class="gcds-checkboxes__legend" id="checkboxes-legend">
              Group of checkboxes
              <span class="legend__required">
                (required)
              </span>
            </legend>
            <div class="gcds-checkbox">
              <input id="checkbox1" name="checkgroup" type="checkbox" value="checkbox1">
              <gcds-label label="Checkbox 1 label" label-for="checkbox1" lang="en"></gcds-label>
            </div>
            <div class="gcds-checkbox">
              <input id="checkbox2" name="checkgroup" type="checkbox" value="checkbox2">
              <gcds-label label="Checkbox 2 label" label-for="checkbox2" lang="en"></gcds-label>
            </div>
            <div class="gcds-checkbox">
              <input id="checkbox3" name="checkgroup" type="checkbox" value="checkbox3">
              <gcds-label label="Checkbox 3 label" label-for="checkbox3" lang="en"></gcds-label>
            </div>
          </fieldset>
        </mock:shadow-root>
      </gcds-checkboxes>
    `);
  });
  it('renders: group w/ value', async () => {
    const page = await newSpecPage({
      components: [GcdsCheckboxes],
      html: `<gcds-checkboxes
          legend="Group of checkboxes"
          name="checkgroup"
          options='[{ "label": "Checkbox 1 label", "id": "checkbox1", "value": "checkbox1"}, { "label": "Checkbox 2 label", "id": "checkbox2", "value": "checkbox2"}, { "label": "Checkbox 3 label", "id": "checkbox3", "value": "checkbox3"}]'
          value='["checkbox1"]'
          ></gcds-checkboxes>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-checkboxes legend="Group of checkboxes" name="checkgroup" options='[{ "label": "Checkbox 1 label", "id": "checkbox1", "value": "checkbox1"}, { "label": "Checkbox 2 label", "id": "checkbox2", "value": "checkbox2"}, { "label": "Checkbox 3 label", "id": "checkbox3", "value": "checkbox3"}]' value='["checkbox1"]'>
        <mock:shadow-root>
          <fieldset aria-labelledby="checkboxes-legend" class="gcds-checkboxes__fieldset" tabindex="-1">
            <legend class="gcds-checkboxes__legend" id="checkboxes-legend">
              Group of checkboxes
            </legend>
            <div class="gcds-checkbox">
              <input checked="" id="checkbox1" name="checkgroup" type="checkbox" value="checkbox1">
              <gcds-label label="Checkbox 1 label" label-for="checkbox1" lang="en"></gcds-label>
            </div>
            <div class="gcds-checkbox">
              <input id="checkbox2" name="checkgroup" type="checkbox" value="checkbox2">
              <gcds-label label="Checkbox 2 label" label-for="checkbox2" lang="en"></gcds-label>
            </div>
            <div class="gcds-checkbox">
              <input id="checkbox3" name="checkgroup" type="checkbox" value="checkbox3">
              <gcds-label label="Checkbox 3 label" label-for="checkbox3" lang="en"></gcds-label>
            </div>
          </fieldset>
        </mock:shadow-root>
      </gcds-checkboxes>
    `);
  });
  it('renders: group w/ checked options', async () => {
    const page = await newSpecPage({
      components: [GcdsCheckboxes],
      html: `<gcds-checkboxes
          legend="Group of checkboxes"
          name="checkgroup"
          options='[{ "label": "Checkbox 1 label", "id": "checkbox1", "value": "checkbox1", "checked": true}, { "label": "Checkbox 2 label", "id": "checkbox2", "value": "checkbox2"}, { "label": "Checkbox 3 label", "id": "checkbox3", "value": "checkbox3"}]'
        ></gcds-checkboxes>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-checkboxes legend="Group of checkboxes" name="checkgroup" options='[{ "label": "Checkbox 1 label", "id": "checkbox1", "value": "checkbox1", "checked": true}, { "label": "Checkbox 2 label", "id": "checkbox2", "value": "checkbox2"}, { "label": "Checkbox 3 label", "id": "checkbox3", "value": "checkbox3"}]'>
        <mock:shadow-root>
          <fieldset aria-labelledby="checkboxes-legend" class="gcds-checkboxes__fieldset" tabindex="-1">
            <legend class="gcds-checkboxes__legend" id="checkboxes-legend">
              Group of checkboxes
            </legend>
            <div class="gcds-checkbox">
              <input checked="" id="checkbox1" name="checkgroup" type="checkbox" value="checkbox1">
              <gcds-label label="Checkbox 1 label" label-for="checkbox1" lang="en"></gcds-label>
            </div>
            <div class="gcds-checkbox">
              <input id="checkbox2" name="checkgroup" type="checkbox" value="checkbox2">
              <gcds-label label="Checkbox 2 label" label-for="checkbox2" lang="en"></gcds-label>
            </div>
            <div class="gcds-checkbox">
              <input id="checkbox3" name="checkgroup" type="checkbox" value="checkbox3">
              <gcds-label label="Checkbox 3 label" label-for="checkbox3" lang="en"></gcds-label>
            </div>
          </fieldset>
        </mock:shadow-root>
      </gcds-checkboxes>
    `);
  });
  it('renders: group w/ component hint', async () => {
    const page = await newSpecPage({
      components: [GcdsCheckboxes],
      html: `<gcds-checkboxes
          legend="Group of checkboxes"
          name="checkgroup"
          options='[{ "label": "Checkbox 1 label", "id": "checkbox1", "value": "checkbox1"}, { "label": "Checkbox 2 label", "id": "checkbox2", "value": "checkbox2"}, { "label": "Checkbox 3 label", "id": "checkbox3", "value": "checkbox3"}]'
          hint="Hint for checkboxes"
          ></gcds-checkboxes>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-checkboxes legend="Group of checkboxes" name="checkgroup" hint="Hint for checkboxes" options='[{ "label": "Checkbox 1 label", "id": "checkbox1", "value": "checkbox1"}, { "label": "Checkbox 2 label", "id": "checkbox2", "value": "checkbox2"}, { "label": "Checkbox 3 label", "id": "checkbox3", "value": "checkbox3"}]'>
        <mock:shadow-root>
          <fieldset aria-labelledby="checkboxes-legend checkboxes-hint" class="gcds-checkboxes__fieldset" tabindex="-1">
            <legend class="gcds-checkboxes__legend" id="checkboxes-legend">
              Group of checkboxes
            </legend>
            <gcds-hint hint-id="checkboxes" id="checkboxes-hint">
              Hint for checkboxes
            </gcds-hint>
            <div class="gcds-checkbox">
              <input id="checkbox1" name="checkgroup" type="checkbox" value="checkbox1">
              <gcds-label label="Checkbox 1 label" label-for="checkbox1" lang="en"></gcds-label>
            </div>
            <div class="gcds-checkbox">
              <input id="checkbox2" name="checkgroup" type="checkbox" value="checkbox2">
              <gcds-label label="Checkbox 2 label" label-for="checkbox2" lang="en"></gcds-label>
            </div>
            <div class="gcds-checkbox">
              <input id="checkbox3" name="checkgroup" type="checkbox" value="checkbox3">
              <gcds-label label="Checkbox 3 label" label-for="checkbox3" lang="en"></gcds-label>
            </div>
          </fieldset>
        </mock:shadow-root>
      </gcds-checkboxes>
    `);
  });
  it('renders: group w/ checkbox hints', async () => {
    const page = await newSpecPage({
      components: [GcdsCheckboxes],
      html: `<gcds-checkboxes
          legend="Group of checkboxes"
          name="checkgroup"
          options='[{ "label": "Checkbox 1 label", "id": "checkbox1", "value": "checkbox1", "hint": "First option"}, { "label": "Checkbox 2 label", "id": "checkbox2", "value": "checkbox2"}, { "label": "Checkbox 3 label", "id": "checkbox3", "value": "checkbox3"}]'
        ></gcds-checkboxes>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-checkboxes legend="Group of checkboxes" name="checkgroup" options='[{ "label": "Checkbox 1 label", "id": "checkbox1", "value": "checkbox1", "hint": "First option"}, { "label": "Checkbox 2 label", "id": "checkbox2", "value": "checkbox2"}, { "label": "Checkbox 3 label", "id": "checkbox3", "value": "checkbox3"}]'>
        <mock:shadow-root>
          <fieldset aria-labelledby="checkboxes-legend" class="gcds-checkboxes__fieldset" tabindex="-1">
            <legend class="gcds-checkboxes__legend" id="checkboxes-legend">
              Group of checkboxes
            </legend>
            <div class="gcds-checkbox">
              <input id="checkbox1" aria-describedby="hint-checkbox1" name="checkgroup" type="checkbox" value="checkbox1">
              <gcds-label label="Checkbox 1 label" label-for="checkbox1" lang="en"></gcds-label>
              <gcds-hint hint-id="checkbox1">
                First option
              </gcds-hint>
            </div>
            <div class="gcds-checkbox">
              <input id="checkbox2" name="checkgroup" type="checkbox" value="checkbox2">
              <gcds-label label="Checkbox 2 label" label-for="checkbox2" lang="en"></gcds-label>
            </div>
            <div class="gcds-checkbox">
              <input id="checkbox3" name="checkgroup" type="checkbox" value="checkbox3">
              <gcds-label label="Checkbox 3 label" label-for="checkbox3" lang="en"></gcds-label>
            </div>
          </fieldset>
        </mock:shadow-root>
      </gcds-checkboxes>
    `);
  });
  it('renders: group w/ error message', async () => {
    const page = await newSpecPage({
      components: [GcdsCheckboxes],
      html: `<gcds-checkboxes
          legend="Group of checkboxes"
          name="checkgroup"
          options='[{ "label": "Checkbox 1 label", "id": "checkbox1", "value": "checkbox1"}, { "label": "Checkbox 2 label", "id": "checkbox2", "value": "checkbox2"}, { "label": "Checkbox 3 label", "id": "checkbox3", "value": "checkbox3"}]'
          error-message="Choose an option to continue."
          ></gcds-checkboxes>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-checkboxes legend="Group of checkboxes" name="checkgroup" error-message="Choose an option to continue." options='[{ "label": "Checkbox 1 label", "id": "checkbox1", "value": "checkbox1"}, { "label": "Checkbox 2 label", "id": "checkbox2", "value": "checkbox2"}, { "label": "Checkbox 3 label", "id": "checkbox3", "value": "checkbox3"}]'>
        <mock:shadow-root>
          <fieldset aria-labelledby="checkboxes-legend" class="gcds-checkboxes__fieldset" tabindex="-1">
            <legend class="gcds-checkboxes__legend" id="checkboxes-legend">
              Group of checkboxes
            </legend>
            <div>
              <gcds-error-message id="checkboxes-error" messageid="checkboxes">
                Choose an option to continue.
              </gcds-error-message>
            </div>
            <div class="gcds-checkbox gcds-checkbox--error">
              <input aria-description="Choose an option to continue." aria-invalid="true" id="checkbox1" name="checkgroup" type="checkbox" value="checkbox1">
              <gcds-label label="Checkbox 1 label" label-for="checkbox1" lang="en"></gcds-label>
            </div>
            <div class="gcds-checkbox gcds-checkbox--error">
              <input aria-description="Choose an option to continue." aria-invalid="true" id="checkbox2" name="checkgroup" type="checkbox" value="checkbox2">
              <gcds-label label="Checkbox 2 label" label-for="checkbox2" lang="en"></gcds-label>
            </div>
            <div class="gcds-checkbox gcds-checkbox--error">
              <input aria-description="Choose an option to continue." aria-invalid="true" id="checkbox3" name="checkgroup" type="checkbox" value="checkbox3">
              <gcds-label label="Checkbox 3 label" label-for="checkbox3" lang="en"></gcds-label>
            </div>
          </fieldset>
        </mock:shadow-root>
      </gcds-checkboxes>
    `);
  });
  it('renders: group disabled', async () => {
    const page = await newSpecPage({
      components: [GcdsCheckboxes],
      html: `<gcds-checkboxes
          legend="Group of checkboxes"
          name="checkgroup"
          options='[{ "label": "Checkbox 1 label", "id": "checkbox1", "value": "checkbox1"}, { "label": "Checkbox 2 label", "id": "checkbox2", "value": "checkbox2"}, { "label": "Checkbox 3 label", "id": "checkbox3", "value": "checkbox3"}]'
          disabled
          ></gcds-checkboxes>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-checkboxes legend="Group of checkboxes" name="checkgroup" disabled error-message="" options='[{ "label": "Checkbox 1 label", "id": "checkbox1", "value": "checkbox1"}, { "label": "Checkbox 2 label", "id": "checkbox2", "value": "checkbox2"}, { "label": "Checkbox 3 label", "id": "checkbox3", "value": "checkbox3"}]'>
        <mock:shadow-root>
          <fieldset aria-labelledby="checkboxes-legend" class="gcds-checkboxes__fieldset" tabindex="-1">
            <legend class="gcds-checkboxes__legend" id="checkboxes-legend">
              Group of checkboxes
            </legend>
            <div class="gcds-checkbox gcds-checkbox--disabled">
              <input disabled="" id="checkbox1" name="checkgroup" type="checkbox" value="checkbox1">
              <gcds-label label="Checkbox 1 label" label-for="checkbox1" lang="en"></gcds-label>
            </div>
            <div class="gcds-checkbox gcds-checkbox--disabled">
              <input disabled="" id="checkbox2" name="checkgroup" type="checkbox" value="checkbox2">
              <gcds-label label="Checkbox 2 label" label-for="checkbox2" lang="en"></gcds-label>
            </div>
            <div class="gcds-checkbox gcds-checkbox--disabled">
              <input disabled="" id="checkbox3" name="checkgroup" type="checkbox" value="checkbox3">
              <gcds-label label="Checkbox 3 label" label-for="checkbox3" lang="en"></gcds-label>
            </div>
          </fieldset>
        </mock:shadow-root>
      </gcds-checkboxes>
    `);
  });

  // ------- Single checkbox ------- //

  it('renders: single', async () => {
    const page = await newSpecPage({
      components: [GcdsCheckboxes],
      html: `<gcds-checkboxes
          legend="Group of checkboxes"
          name="checkgroup"
          options='[{ "label": "Checkbox 1 label", "id": "checkbox1", "value": "checkbox1"}]'
        ></gcds-checkboxes>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-checkboxes legend="Group of checkboxes" name="checkgroup" options='[{ "label": "Checkbox 1 label", "id": "checkbox1", "value": "checkbox1"}]'>
        <mock:shadow-root>
          <div class="gcds-checkbox">
            <input id="checkbox1" name="checkgroup" type="checkbox" value="checkbox1">
            <gcds-label label="Checkbox 1 label" label-for="checkbox1" lang="en"></gcds-label>
          </div>
        </mock:shadow-root>
      </gcds-checkboxes>
    `);
  });
  it('renders: single w/ required', async () => {
    const page = await newSpecPage({
      components: [GcdsCheckboxes],
      html: `<gcds-checkboxes
          legend="Group of checkboxes"
          name="checkgroup"
          options='[{ "label": "Checkbox 1 label", "id": "checkbox1", "value": "checkbox1"}]'
          required
        ></gcds-checkboxes>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-checkboxes required legend="Group of checkboxes" name="checkgroup" options='[{ "label": "Checkbox 1 label", "id": "checkbox1", "value": "checkbox1"}]'>
        <mock:shadow-root>
          <div class="gcds-checkbox">
            <input id="checkbox1" name="checkgroup" type="checkbox" required="" value="checkbox1">
            <gcds-label required label="Checkbox 1 label" label-for="checkbox1" lang="en"></gcds-label>
          </div>
        </mock:shadow-root>
      </gcds-checkboxes>
    `);
  });
  it('renders: single w/ value', async () => {
    const page = await newSpecPage({
      components: [GcdsCheckboxes],
      html: `<gcds-checkboxes
          legend="Group of checkboxes"
          name="checkgroup"
          options='[{ "label": "Checkbox 1 label", "id": "checkbox1", "value": "checkbox1"}]'
          value='["checkbox1"]'
        ></gcds-checkboxes>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-checkboxes legend="Group of checkboxes" name="checkgroup" options='[{ "label": "Checkbox 1 label", "id": "checkbox1", "value": "checkbox1"}]' value='["checkbox1"]'>
        <mock:shadow-root>
          <div class="gcds-checkbox">
            <input checked="" id="checkbox1" name="checkgroup" type="checkbox" value="checkbox1">
            <gcds-label label="Checkbox 1 label" label-for="checkbox1" lang="en"></gcds-label>
          </div>
        </mock:shadow-root>
      </gcds-checkboxes>
    `);
  });
  it('renders: single w/ checked option', async () => {
    const page = await newSpecPage({
      components: [GcdsCheckboxes],
      html: `<gcds-checkboxes
          legend="Group of checkboxes"
          name="checkgroup"
          options='[{ "label": "Checkbox 1 label", "id": "checkbox1", "value": "checkbox1", "checked": true}]'
        ></gcds-checkboxes>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-checkboxes legend="Group of checkboxes" name="checkgroup" options='[{ "label": "Checkbox 1 label", "id": "checkbox1", "value": "checkbox1", "checked": true}]'>
        <mock:shadow-root>
          <div class="gcds-checkbox">
            <input checked="" id="checkbox1" name="checkgroup" type="checkbox" value="checkbox1">
            <gcds-label label="Checkbox 1 label" label-for="checkbox1" lang="en"></gcds-label>
          </div>
        </mock:shadow-root>
      </gcds-checkboxes>
    `);
  });
  it('renders: single w/ hint', async () => {
    const page = await newSpecPage({
      components: [GcdsCheckboxes],
      html: `<gcds-checkboxes
          legend="Group of checkboxes"
          name="checkgroup"
          options='[{ "label": "Checkbox 1 label", "id": "checkbox1", "value": "checkbox1"}]'
          hint="Only one checkbox"
        ></gcds-checkboxes>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-checkboxes legend="Group of checkboxes" name="checkgroup" options='[{ "label": "Checkbox 1 label", "id": "checkbox1", "value": "checkbox1"}]' hint="Only one checkbox">
        <mock:shadow-root>
          <div class="gcds-checkbox">
            <input id="checkbox1" name="checkgroup" type="checkbox" value="checkbox1">
            <gcds-label label="Checkbox 1 label" label-for="checkbox1" lang="en"></gcds-label>
            <gcds-hint hint-id="checkbox1">
              Only one checkbox
            </gcds-hint>
          </div>
        </mock:shadow-root>
      </gcds-checkboxes>
    `);
  });
  it('renders: single w/ error message', async () => {
    const page = await newSpecPage({
      components: [GcdsCheckboxes],
      html: `<gcds-checkboxes
          legend="Group of checkboxes"
          name="checkgroup"
          options='[{ "label": "Checkbox 1 label", "id": "checkbox1", "value": "checkbox1"}]'
          error-message="You must check the box to continue."
        ></gcds-checkboxes>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-checkboxes legend="Group of checkboxes" name="checkgroup" options='[{ "label": "Checkbox 1 label", "id": "checkbox1", "value": "checkbox1"}]' error-message="You must check the box to continue.">
        <mock:shadow-root>
          <div class="gcds-checkbox gcds-checkbox--error">
            <input aria-description="You must check the box to continue." aria-invalid="true" id="checkbox1" name="checkgroup" type="checkbox" value="checkbox1">
            <gcds-label label="Checkbox 1 label" label-for="checkbox1" lang="en"></gcds-label>
            <gcds-error-message messageid="checkbox1">
              You must check the box to continue.
            </gcds-error-message>
          </div>
        </mock:shadow-root>
      </gcds-checkboxes>
    `);
  });
  it('renders: single disabled', async () => {
    const page = await newSpecPage({
      components: [GcdsCheckboxes],
      html: `<gcds-checkboxes
          legend="Group of checkboxes"
          name="checkgroup"
          options='[{ "label": "Checkbox 1 label", "id": "checkbox1", "value": "checkbox1"}]'
          disabled
        ></gcds-checkboxes>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-checkboxes legend="Group of checkboxes" name="checkgroup" error-message="" options='[{ "label": "Checkbox 1 label", "id": "checkbox1", "value": "checkbox1"}]' disabled>
        <mock:shadow-root>
          <div class="gcds-checkbox gcds-checkbox--disabled">
            <input disabled="" id="checkbox1" name="checkgroup" type="checkbox" value="checkbox1">
            <gcds-label label="Checkbox 1 label" label-for="checkbox1" lang="en"></gcds-label>
          </div>
        </mock:shadow-root>
      </gcds-checkboxes>
    `);
  });

  it('does not render: no required attributes', async () => {
    const page = await newSpecPage({
      components: [GcdsCheckboxes],
      html: `<gcds-checkboxes
        ></gcds-checkboxes>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-checkboxes>
        <mock:shadow-root>
        </mock:shadow-root>
      </gcds-checkboxes>
    `);
  });
  it('does not render: no legend', async () => {
    const page = await newSpecPage({
      components: [GcdsCheckboxes],
      html: `<gcds-checkboxes
          name="checkgroup"
          options='[{ "label": "Checkbox 1 label", "id": "checkbox1", "value": "checkbox1"}, { "label": "Checkbox 2 label", "id": "checkbox2", "value": "checkbox2"}, { "label": "Checkbox 3 label", "id": "checkbox3", "value": "checkbox3"}]'
        ></gcds-checkboxes>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-checkboxes name="checkgroup" options='[{ "label": "Checkbox 1 label", "id": "checkbox1", "value": "checkbox1"}, { "label": "Checkbox 2 label", "id": "checkbox2", "value": "checkbox2"}, { "label": "Checkbox 3 label", "id": "checkbox3", "value": "checkbox3"}]'>
        <mock:shadow-root>
        </mock:shadow-root>
      </gcds-checkboxes>
    `);
  });
  it('does not render: no name', async () => {
    const page = await newSpecPage({
      components: [GcdsCheckboxes],
      html: `<gcds-checkboxes
          legend="Group of checkboxes"
          options='[{ "label": "Checkbox 1 label", "id": "checkbox1", "value": "checkbox1"}, { "label": "Checkbox 2 label", "id": "checkbox2", "value": "checkbox2"}, { "label": "Checkbox 3 label", "id": "checkbox3", "value": "checkbox3"}]'
        ></gcds-checkboxes>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-checkboxes legend="Group of checkboxes" options='[{ "label": "Checkbox 1 label", "id": "checkbox1", "value": "checkbox1"}, { "label": "Checkbox 2 label", "id": "checkbox2", "value": "checkbox2"}, { "label": "Checkbox 3 label", "id": "checkbox3", "value": "checkbox3"}]'>
        <mock:shadow-root>
        </mock:shadow-root>
      </gcds-checkboxes>
    `);
  });
  it('does not render: no options', async () => {
    const page = await newSpecPage({
      components: [GcdsCheckboxes],
      html: `<gcds-checkboxes
          legend="Group of checkboxes"
          name="checkgroup"
        ></gcds-checkboxes>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-checkboxes legend="Group of checkboxes" name="checkgroup">
        <mock:shadow-root>
        </mock:shadow-root>
      </gcds-checkboxes>
    `);
  });
  it('does not render: 0 options length', async () => {
    const page = await newSpecPage({
      components: [GcdsCheckboxes],
      html: `<gcds-checkboxes
          legend="Group of checkboxes"
          name="checkgroup"
          options='[]'
        ></gcds-checkboxes>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-checkboxes legend="Group of checkboxes" name="checkgroup" options='[]'>
        <mock:shadow-root>
        </mock:shadow-root>
      </gcds-checkboxes>
    `);
  });
  it('does not render: improper checkbox object', async () => {
    const page = await newSpecPage({
      components: [GcdsCheckboxes],
      html: `<gcds-checkboxes
          legend="Group of checkboxes"
          name="checkgroup"
          options='[{ "label": "Checkbox 1 label", "ids": "checkbox1", "value": "checkbox1"}, { "label": "Checkbox 2 label", "ids": "checkbox2", "value": "checkbox2"}, { "label": "Checkbox 3 label", "ids": "checkbox3", "value": "checkbox3"}]'
        ></gcds-checkboxes>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-checkboxes legend="Group of checkboxes" name="checkgroup" options='[{ "label": "Checkbox 1 label", "ids": "checkbox1", "value": "checkbox1"}, { "label": "Checkbox 2 label", "ids": "checkbox2", "value": "checkbox2"}, { "label": "Checkbox 3 label", "ids": "checkbox3", "value": "checkbox3"}]'>
        <mock:shadow-root>
        </mock:shadow-root>
      </gcds-checkboxes>
    `);
  });

  it('emits gcdsInput and gcdsChange on user clicks (add and remove selections) and detail obj to contain new value(s)', async () => {
    const page = await newSpecPage({
      components: [GcdsCheckboxes],
      html: `
      <gcds-checkboxes
        legend="Click Events"
        name="click-events"
        options='[
          {"label": "Option 1", "id": "option1", "value": "option1"},
          {"label": "Option 2", "id": "option2", "value": "option2"},
          {"label": "Option 3", "id": "option3", "value": "option3"}
        ]'
      ></gcds-checkboxes>
    `,
    });

    const inputSpy = jest.fn();
    const changeSpy = jest.fn();
    page.root.addEventListener('gcdsInput', inputSpy);
    page.root.addEventListener('gcdsChange', changeSpy);

    const [opt1, opt2] = Array.from(
      page.root.shadowRoot.querySelectorAll<HTMLInputElement>('input[type="checkbox"]'),
    );

    const fire = (el: HTMLInputElement, nextChecked: boolean) => {
      el.checked = nextChecked;
      el.dispatchEvent(new Event('input', { bubbles: true }));
      el.dispatchEvent(new Event('change', { bubbles: true }));
    };

    // Select option 1
    fire(opt1, true);
    await page.waitForChanges();
    expect(inputSpy).toHaveBeenCalledTimes(1);
    expect(changeSpy).toHaveBeenCalledTimes(1);
    expect(inputSpy.mock.calls[0][0].detail).toEqual(['option1']);
    expect(changeSpy.mock.calls[0][0].detail).toEqual(['option1']);

    // Select option 2
    fire(opt2, true);
    await page.waitForChanges();
    expect(inputSpy).toHaveBeenCalledTimes(2);
    expect(changeSpy).toHaveBeenCalledTimes(2);
    expect(inputSpy.mock.calls[1][0].detail).toEqual(['option1', 'option2']);
    expect(changeSpy.mock.calls[1][0].detail).toEqual(['option1', 'option2']);

    // Unselect option 1
    fire(opt1, false);
    await page.waitForChanges();
    expect(inputSpy).toHaveBeenCalledTimes(3);
    expect(changeSpy).toHaveBeenCalledTimes(3);
    expect(inputSpy.mock.calls[2][0].detail).toEqual(['option2']);
    expect(changeSpy.mock.calls[2][0].detail).toEqual(['option2']);

    // Unselect option 2
    fire(opt2, false);
    await page.waitForChanges();
    expect(inputSpy).toHaveBeenCalledTimes(4);
    expect(changeSpy).toHaveBeenCalledTimes(4);
    expect(inputSpy.mock.calls[3][0].detail).toEqual([]);
    expect(changeSpy.mock.calls[3][0].detail).toEqual([]);
  });
});
