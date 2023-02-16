import { formProps, langProp } from '../../utils/storybook/component-properties';

export default {
  title: 'Components/Select',

  parameters: {
    actions: {
      argTypesRegex: '^on.*',
      handles: ['change', 'focus', 'blur']
    }
  },

  argTypes: {
    // Props
    selectId: {
      name: 'select-id',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      type: {
        required: true
      }
    },
    defaultValue: {
      name: 'default-value',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
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
<gcds-select
  select-id="${args.selectId}"
  label="${args.label}"
  hint="${args.hint}"
  error-message="${args.errorMessage}"
  required="${args.required}"
  disabled="${args.disabled}"
  value="${args.value}"
  default-value="${args.defaultValue}"
  lang="${args.lang}"
>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</gcds-select>

// React code
<GcdsSelect
  selectId="${args.selectId}"
  label="${args.label}"
  hint="${args.hint}"
  errorMessage="${args.errorMessage}"
  required="${args.required}"
  disabled="${args.disabled}"
  value="${args.value}"
  defaultValue="${args.defaultValue}"
  lang="${args.lang}"
>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</GcdsSelect>
`;

export const Default = Template.bind({});
Default.args = {
  selectId: '',
  label: 'Select label',
  hint: 'This is a hint.',
  errorMessage: '',
  required: false,
  disabled: false,
  value: '',
  defaultValue: 'Choose an option.',
  lang: 'en',
};