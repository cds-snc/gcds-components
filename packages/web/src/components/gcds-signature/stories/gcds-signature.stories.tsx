import { langProp } from '../../../utils/storybook/component-properties';

export default {
  title: 'Components/Signature',

  argTypes: {
    // Props
    type: {
      control: 'radio',
      options: ['signature', 'wordmark'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'signature' }
      },
    },
    hasLink: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
    },
    variant: {
      control: 'radio',
      options: ['colour', 'white'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'colour' }
      },
    },
    ...langProp
  },
};

const Template = (args) => (`
<!-- Web component code (Angular, Vue) -->
<gcds-signature
  type="${args.type}"
  has-link="${args.hasLink}"
  variant="${args.variant}"
  ${args.lang != "en" ? `lang="${args.lang}"` : null}
>
</gcds-signature>

<!-- React code -->
<GcdsSignature
  type="${args.type}"
  hasLink="${args.hasLink}"
  variant="${args.variant}"
  ${args.lang != "en" ? `lang="${args.lang}"` : null}
>
</GcdsSignature>
`).replace(/\s\snull\n/g, '');

export const Default = Template.bind({});
Default.args = {
  type: 'signature',
  hasLink: 'false',
  variant: 'colour',
  lang: 'en'
};