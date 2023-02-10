import { formProps, langProp } from '../../utils/storybook/component-properties';

export default {
  title: 'Components/Checkbox',

  parameters: {
    actions: {
      argTypesRegex: '^gcds.*',
      handles: ['change', 'focus', 'blur']
    }
  },

  argTypes: {
    // Props
    checkboxId: {
      name: 'checkbox-id',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      type: {
        required: true
      }
    },
    name: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      type: {
        required: true
      }
    },
    checked: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
    },
    ...formProps,
    ...langProp,

    // Events
    gcdsChange: {
      action: 'change',
      table: {
        category: 'Events | Événements',
      }
    },
    gcdsFocus: {
      action: 'focus',
      table: {
        category: 'Events | Événements',
      }
    },
    gcdsBlur: {
      action: 'blur',
      table: {
        category: 'Events | Événements',
      }
    },
  },
};

const Template = (args) => `
// Web Component (Angular, Vue)
<gcds-checkbox
  checkbox-id="${args.checkboxId}"
  label="${args.label}"
  name="${args.name}"
  hint="${args.hint}"
  error-message="${args.errorMessage}"
  required="${args.required}"
  disabled="${args.disabled}"
  value="${args.value}"
  checked="${args.checked}"
  lang="${args.lang}"
>
</gcds-checkbox>

// React code
<GcdsCheckbox
  checkboxId="${args.checkboxId}"
  label="${args.label}"
  name="${args.name}"
  hint="${args.hint}"
  error-message="${args.errorMessage}"
  required="${args.required}"
  disabled="${args.disabled}"
  value="${args.value}"
  checked="${args.checked}"
  lang="${args.lang}"
>
</GcdsCheckbox>
`;

export const Default = Template.bind({});
Default.args = {
  checkboxId: 'checkbox',
  label: 'Checkbox label',
  name: 'checkbox',
  hint: 'This is a hint.',
  errorMessage: '',
  required: false,
  disabled: false,
  value: '',
  checked: false,
  lang: 'en'
};