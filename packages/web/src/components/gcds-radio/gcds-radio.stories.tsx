import { formProps, langProp } from '../../utils/storybook/component-properties';

// Removed unused form property
delete formProps["errorMessage"];

export default {
  title: 'Components/Radio',

  parameters: {
    actions: {
      argTypesRegex: '^gcds.*',
      handles: ['RadioChange', 'focus', 'blur']
    }
  },

  argTypes: {
    // Props
    radioId: {
      name: 'radio-id',
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
    gcdsRadioChange: {
      action: 'RadioChnage',
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
<gcds-radio
  radio-id="${args.radioId}"
  label="${args.label}"
  name="${args.name}"
  hint="${args.hint}"
  required="${args.required}"
  disabled="${args.disabled}"
  value="${args.value}"
  checked="${args.checked}"
  lang="${args.lang}"
>
</gcds-radio>

// React code
<GcdsRadio
  radioId="${args.radioId}"
  label="${args.label}"
  name="${args.name}"
  hint="${args.hint}"
  required="${args.required}"
  disabled="${args.disabled}"
  value="${args.value}"
  checked="${args.checked}"
  lang="${args.lang}"
>
</GcdsRadio>
`;

export const Default = Template.bind({});
Default.args = {
  radioId: 'radio',
  label: 'Radio label',
  name: 'radio',
  hint: 'This is a hint.',
  required: false,
  disabled: false,
  value: '',
  checked: false,
  lang: 'en'
};