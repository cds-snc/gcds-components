import { langProp, validatorProps } from '../../utils/storybook/component-properties';

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
    disabled: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
    },
    errorMessage: {
      name: 'error-message',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
    },
    hint: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
    },
    required: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
    },
    ...validatorProps,
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

const Template = (args) => (`
// Web Component (Angular, Vue)
<gcds-fieldset
  fieldset-id="${args.fieldsetId}"
  legend="${args.legend}"
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.validateOn != "blur" ? `validate-on="${args.validateOn}"` : null}
  ${args.lang != "en" ? `lang="${args.lang}"` : null}
>
  <gcds-radio radio-id="r1" name="radio" label="Radio button 1"></gcds-radio>
  <gcds-radio radio-id="r2" name="radio" label="Radio button 2"></gcds-radio>
</gcds-fieldset>

// React code
<GcdsFieldset
  fieldsetId="${args.fieldsetId}"
  legend="${args.legend}"
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.validateOn != "blur" ? `validateOn="${args.validateOn}"` : null}
  ${args.lang != "en" ? `lang="${args.lang}"` : null}
>
  <GcdsRadio radioId="r1" name="radio" label="Radio button 1"></GcdsRadio>
  <GcdsRadio radioId="r2" name="radio" label="Radio button 2"></GcdsRadio>
</GcdsFieldset>
`).replace(/\s\snull\n/g, '');

export const Default = Template.bind({});
Default.args = {
  fieldsetId: 'fieldset',
  legend: 'Fieldset legend',
  hint: '',
  errorMessage: '',
  required: false,
  disabled: false,
  validateOn: 'blur',
  lang: 'en'
};