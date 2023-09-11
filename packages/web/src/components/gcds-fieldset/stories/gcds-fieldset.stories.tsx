import {
  langProp,
  validatorProps,
} from '../../../utils/storybook/component-properties';

export default {
  title: 'Components/Fieldset',

  parameters: {
    actions: {
      argTypesRegex: '^gcds.*',
      handles: ['GroupError', 'GroupErrorClear'],
    },
  },

  argTypes: {
    // Props
    fieldsetId: {
      name: 'fieldset-id',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
      },
    },
    legend: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
      },
    },
    disabled: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    errorMessage: {
      name: 'error-message',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    hint: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    required: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    ...validatorProps,
    ...langProp,

    // Events
    gcdsGroupError: {
      action: 'GroupError',
      table: {
        category: 'Events | Événements',
      },
    },
    gcdsGroupErrorClear: {
      action: 'GroupErrorClear',
      table: {
        category: 'Events | Événements',
      },
    },
  },
};

const Template = args =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-fieldset
  fieldset-id="${args.fieldsetId}"
  legend="${args.legend}"
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.validateOn != 'blur' ? `validate-on="${args.validateOn}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
  <gcds-input input-id="form-input" label="Input label" hint="Hint / Example message." size="6"></gcds-input>
  <gcds-select select-id="form-select" label="Select label" hint="Hint / Example message." default-value="Select option.">
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
    <option value="5">Option 5</option>
    <option value="6">Option 6</option>
    <option value="7">Option 7</option>
    <option value="8">Option 8</option>
  </gcds-select>
</gcds-fieldset>

<!-- React code -->
<GcdsFieldset
  fieldsetId="${args.fieldsetId}"
  legend="${args.legend}"
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.validateOn != 'blur' ? `validateOn="${args.validateOn}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
  <GcdsInput inputId="form-input" label="Input label" hint="Hint / Example message." size="6"></GcdsInput>
  <GcdsSelect selectId="form-select" label="Select label" hint="Hint / Example message." defaultValue="Select option.">
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
    <option value="5">Option 5</option>
    <option value="6">Option 6</option>
    <option value="7">Option 7</option>
    <option value="8">Option 8</option>
  </GcdsSelect>
</GcdsFieldset>
`.replace(/\s\snull\n/g, '');

export const Default = Template.bind({});
Default.args = {
  fieldsetId: 'fieldset',
  legend: 'Legend',
  hint: 'Hint / Example message.',
  errorMessage: '',
  required: false,
  disabled: false,
  validateOn: 'blur',
  lang: 'en',
};
