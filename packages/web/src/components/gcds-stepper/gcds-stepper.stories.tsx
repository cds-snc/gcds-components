import { html } from 'lit-html';

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
  },
};

const Template = (args) => html`
// Web Component (Angular, Vue)
<gcds-stepper
  current-step="${args.currentStep}"
  total-steps="${args.totalSteps}"
></gcds-stepper>

// React code
<GcdsStepper
  currentStep="${args.currentStep}"
  totalSteps="${args.totalSteps}"
></GcdsStepper>
`;

export const Example = Template.bind({});
Example.args = {
  currentStep: 1,
  totalSteps: 5
};