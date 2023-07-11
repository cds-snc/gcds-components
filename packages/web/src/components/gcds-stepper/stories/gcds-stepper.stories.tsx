import { langProp } from '../../../utils/storybook/component-properties';

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
<!-- Web component code (Angular, Vue) -->
<gcds-stepper current-step="${args.currentStep}" total-steps="${args.totalSteps}" ${args.lang != "en" ? `lang="${args.lang}"` : null}>
</gcds-stepper>

<!-- React code -->
<GcdsStepper currentStep="${args.currentStep}" totalSteps="${args.totalSteps}" ${args.lang != "en" ? `lang="${args.lang}"` : null}>
</GcdsStepper>
`).replace(/ null/g, '');

const TemplatePlayground = (args) => (`
<gcds-stepper
  current-step="${args.currentStep}"
  total-steps="${args.totalSteps}"
  ${args.lang != "en" ? `lang="${args.lang}"` : null}
>
</gcds-stepper>
`);

// ------ Stepper default ------

export const Default = Template.bind({});
Default.args = {
  lang: 'en',
  currentStep: 1,
  totalSteps: 5,
};

// ------ Stepper french ------

export const French = Template.bind({});
French.args = {
  lang: 'fr',
  currentStep: 1,
  totalSteps: 5,
};

// ------ Stepper events & props ------

export const Props = Template.bind({});
Props.args = {
  lang: 'en',
  currentStep: 1,
  totalSteps: 5,
};

// ------ Stepper playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  lang: 'en',
  currentStep: 1,
  totalSteps: 5,
};