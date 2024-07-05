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
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
      },
    },
    totalSteps: {
      name: 'total-steps',
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
      },
    },
    tag: {
      control: 'select',
      options: ['h1', 'h2', 'h3'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'h2' },
      },
    },

    // Slots
    default: {
      control: {
        type: 'text',
      },
      description:
        'Customize the content or include additional elements. | Personnalisez le contenu ou ajoutez des éléments supplémentaires.',
      table: {
        category: 'Slots | Fentes',
      },
      type: {
        required: true,
      },
    },
    ...langProp,
  },
};

const Template = args =>
  `
<!-- Web component code (HTML, Angular, Vue) -->
<gcds-stepper current-step="${args.currentStep}" total-steps="${
    args.totalSteps
  }" tag="${args.tag}" ${args.lang != 'en' ? `lang="${args.lang}"` : null}>
  ${args.default}
</gcds-stepper>

<!-- React code -->
<GcdsStepper currentStep="${args.currentStep}" totalSteps="${
    args.totalSteps
  }" tag="${args.tag}" ${args.lang != 'en' ? `lang="${args.lang}"` : null}>
  ${args.default}
</GcdsStepper>
`.replace(/ null/g, '');

const TemplatePlayground = args => `
<gcds-stepper
  current-step="${args.currentStep}"
  total-steps="${args.totalSteps}"
   tag="${args.tag}"
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}>
  ${args.default}
</gcds-stepper>
`;

// ------ Stepper default ------

export const Default = Template.bind({});
Default.args = {
  lang: 'en',
  currentStep: 1,
  totalSteps: 4,
  tag: 'h2',
  default: 'Section title',
};

// ------ Stepper tag: H1 ------

export const tagH1 = Template.bind({});
tagH1.args = {
  lang: 'en',
  currentStep: 1,
  totalSteps: 4,
  tag: 'h1',
  default: 'Section title',
};

// ------ Stepper tag: H2 ------

export const tagH2 = Template.bind({});
tagH2.args = {
  lang: 'en',
  currentStep: 1,
  totalSteps: 4,
  tag: 'h2',
  default: 'Section title',
};

// ------ Stepper tag: H3 ------

export const tagH3 = Template.bind({});
tagH3.args = {
  lang: 'en',
  currentStep: 1,
  totalSteps: 4,
  tag: 'h3',
  default: 'Section title',
};

// ------ Stepper french ------

export const French = Template.bind({});
French.args = {
  lang: 'fr',
  currentStep: 1,
  totalSteps: 4,
  tag: 'h2',
  default: 'Section title',
};

// ------ Stepper events & props ------

export const Props = Template.bind({});
Props.args = {
  lang: 'en',
  currentStep: 1,
  totalSteps: 4,
  tag: 'h2',
  default: 'Section title',
};

// ------ Stepper playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  lang: 'en',
  currentStep: 1,
  totalSteps: 4,
  tag: 'h2',
  default: 'Section title',
};
