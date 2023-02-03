import { html } from 'lit-html';

export default {
  title: 'Components/Fieldset',

  parameters: {
    actions: {
      argTypesRegex: '^on.*',
      handles: ['change', 'focus', 'blur']
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
      lang: {
        control: 'radio',
        options: ['en', 'fr'],
        table: {
          type: { summary: 'string' },
          defaultValue: { summary: 'en' }
        },
      },

    // Events
    gcdsGroupError: {
      action: 'change',
      table: {
        category: 'Events | Événements',
      }
    },
    gcdsGroupErrorClear: {
      action: 'change',
      table: {
        category: 'Events | Événements',
      }
    }
  },
};

const Template = (args) => html`
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