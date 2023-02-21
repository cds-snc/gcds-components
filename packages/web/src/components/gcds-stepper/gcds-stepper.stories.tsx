import { langProp } from '../../utils/storybook/component-properties';

export default {
  title: 'Components/Stepper',

  argTypes: {
    // Props
    currentStep: {
      name: 'current-step',
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '-' }
      },
      type: {
        required: true
      }
    },
    totalSteps: {
      name: 'total-steps',
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '-' }
      },
      type: {
        required: true
      }
    },
    ...langProp,
  },
};

const Template = (args) => (`
// Web Component (Angular, Vue)
<gcds-stepper
  current-step="${args.currentStep}"
  total-steps="${args.totalSteps}"
  ${args.lang != "en" ? `lang="${args.lang}"` : null}
>
</gcds-stepper>

// React code
<GcdsStepper
  currentStep="${args.currentStep}"
  totalSteps="${args.totalSteps}"
  ${args.lang != "en" ? `lang="${args.lang}"` : null}
>
</GcdsStepper>
`).replace(/\s\snull\n/g, '');

export const Default = Template.bind({});
Default.args = {
  currentStep: 1,
  totalSteps: 5,
  lang: 'en'
};