import { newSpecPage } from '@stencil/core/testing';
import { requiredFieldset } from '../fieldset-validators';

import { GcdsFieldset } from '../../../components/gcds-fieldset/gcds-fieldset';
import { GcdsRadioGroup } from '../../../components/gcds-radio-group/gcds-radio-group';
import { GcdsCheckbox } from '../../../components/gcds-checkbox/gcds-checkbox';

describe('gcds-fieldset invalid - Radio buttons', () => {
  it('renders', async () => {
    await newSpecPage({
      components: [GcdsFieldset, GcdsRadioGroup],
      html: `
        <gcds-fieldset
          fieldset-id="test-fieldset"
          legend="Fieldset legend"
          required
        >
          <gcds-radio-group
            name="radio"
            options='[
              { "label": "radio 1", "id": "radio1", "value": "radio1"},
              { "label": "radio 2", "id": "radio2", "value": "radio2"},
              { "label": "radio 3", "id": "radio3", "value": "radio3"},
              { "label": "radio 4", "id": "radio4", "value": "radio4"}
            ]'
          ></gcds-radio-group>
        </gcds-fieldset>`,
    });
    expect(requiredFieldset.validate('test-fieldset')).toEqual(false);
  });
});
describe('gcds-fieldset valid - Radio buttons', () => {
  it('renders', async () => {
    await newSpecPage({
      components: [GcdsFieldset, GcdsRadioGroup],
      html: `
        <gcds-fieldset
            fieldset-id="test-fieldset"
            legend="Fieldset legend"
            required
        >
            <gcds-radio
                label="radio 1"
                name="radio"
                radio-id="radio1"
            ></gcds-radio>
            <gcds-radio
                label="radio 2"
                name="radio"
                radio-id="radio2"
            ></gcds-radio>
            <gcds-radio
                label="radio 3"
                name="radio"
                radio-id="radio3"
                checked
            ></gcds-radio>
            <gcds-radio
                label="radio 4"
                name="radio"
                radio-id="radio4"
            ></gcds-radio>
        </gcds-fieldset>`,
    });
    expect(requiredFieldset.validate('test-fieldset')).toEqual(true);
  });
});
describe('gcds-fieldset invalid - Checkboxes', () => {
  it('renders', async () => {
    await newSpecPage({
      components: [GcdsFieldset, GcdsCheckbox],
      html: `
        <gcds-fieldset
            fieldset-id="test-fieldset"
            legend="Fieldset legend"
            required
        >
            <gcds-checkbox
                checkbox-id="check1"
                label="check 1"
                name="check"
            ></gcds-checkbox>
            <gcds-checkbox
                checkbox-id="check2"
                label="check 2"
                name="check"
            ></gcds-checkbox>
            <gcds-checkbox
                checkbox-id="check3"
                label="check 3"
                name="check"
            ></gcds-checkbox>
            <gcds-checkbox
                checkbox-id="check3"
                label="check 3"
                name="check"
            ></gcds-checkbox>
        </gcds-fieldset>`,
    });
    expect(requiredFieldset.validate('test-fieldset')).toEqual(false);
  });
});
describe('gcds-fieldset valid - Checkboxes', () => {
  it('renders', async () => {
    await newSpecPage({
      components: [GcdsFieldset, GcdsCheckbox],
      html: `
        <gcds-fieldset
            fieldset-id="test-fieldset"
            legend="Fieldset legend"
            required
        >
            <gcds-checkbox
                checkbox-id="check1"
                label="check 1"
                name="check"
            ></gcds-checkbox>
            <gcds-checkbox
                checkbox-id="check2"
                label="check 2"
                name="check"
                checked
            ></gcds-checkbox>
            <gcds-checkbox
                checkbox-id="check3"
                label="check 3"
                name="check"
            ></gcds-checkbox>
            <gcds-checkbox
                checkbox-id="check3"
                label="check 3"
                name="check"
            ></gcds-checkbox>
        </gcds-fieldset>`,
    });
    expect(requiredFieldset.validate('test-fieldset')).toEqual(true);
  });
});
