import { formProps, langProp } from '../../utils/storybook/component-properties';

// Remove unused form properties
delete formProps["label"];
delete formProps["value"];

export default {
  title: 'Components/Fieldset',

  parameters: {
    actions: {
      argTypesRegex: '^gcds.*',
      handles: ['GroupError', 'GroupErrorClear']
    }
  },

  argTypes: {
    // Props
    fieldsetId: {
      name: 'fieldset-id',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      type: {
        required: true
      }
    },
    legend: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      type: {
        required: true
      }
    },
    ...formProps,
    ...langProp,

    // Events
    gcdsGroupError: {
      action: 'GroupError',
      table: {
        category: 'Events | Événements',
      }
    },
    gcdsGroupErrorClear: {
      action: 'GroupErrorClear',
      table: {
        category: 'Events | Événements',
      }
    }
  },
};

const Template = (args) => `
// Web Component (Angular, Vue)
<gcds-fieldset
  fieldset-id="${args.fieldsetId}"
  legend="${args.legend}"
  hint="${args.hint}"
  error-message="${args.errorMessage}"
  required="${args.required}"
  disabled="${args.disabled}"
  lang="${args.lang}"
>
  <gcds-radio radio-id="r1" name="radio" label="Radio button 1"></gcds-radio>
  <gcds-radio radio-id="r2" name="radio" label="Radio button 2"></gcds-radio>
</gcds-fieldset>

// React code
<GcdsFieldset
  fieldsetId="${args.fieldsetId}"
  legend="${args.legend}"
  hint="${args.hint}"
  error-message="${args.errorMessage}"
  required="${args.required}"
  disabled="${args.disabled}"
  lang="${args.lang}"
>
  <GcdsRadio radioId="r1" name="radio" label="Radio button 1"></GcdsRadio>
  <GcdsRadio radioId="r2" name="radio" label="Radio button 2"></GcdsRadio>
</GcdsFieldset>
`;

export const Default = Template.bind({});
Default.args = {
  fieldsetId: 'fieldset',
  legend: 'Fieldset legend',
  hint: 'This is a hint.',
  errorMessage: '',
  required: false,
  disabled: false,
  lang: 'en'
};