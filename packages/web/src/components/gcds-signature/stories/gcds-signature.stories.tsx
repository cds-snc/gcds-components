import { langProp } from '../../../utils/storybook/component-properties';

export default {
  title: 'Components/Signature',

  argTypes: {
    // Props
    type: {
      control: 'select',
      options: ['signature', 'wordmark'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'signature' },
      },
    },
    hasLink: {
      name: 'has-link',
      control: { type: 'select' },
      options: [false, true],
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    variant: {
      control: 'select',
      options: ['colour', 'white'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'colour' },
      },
    },
    ...langProp,
  },
};

const Template = args =>
  `
<!-- Web component code (HTML, Angular, Vue) -->
<gcds-signature ${args.type != 'signature' ? `type="${args.type}"` : null} ${
    args.hasLink != false ? `has-link="${args.hasLink}"` : null
  } ${args.variant != 'colour' ? `variant="${args.variant}"` : null} ${
    args.lang != 'en' ? `lang="${args.lang}"` : null
  }>
</gcds-signature>

<!-- React code -->
<GcdsSignature ${args.type != 'signature' ? `type="${args.type}"` : null} ${
    args.hasLink != false ? `hasLink="${args.hasLink}"` : null
  } ${args.variant != 'colour' ? `variant="${args.variant}"` : null} ${
    args.lang != 'en' ? `lang="${args.lang}"` : null
  }>
</GcdsSignature>
`.replace(/ null/g, '');

const TemplatePlayground = args => `
<gcds-signature
  type="${args.type}"
  has-link="${args.hasLink}"
  variant="${args.variant}"
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</gcds-signature>
`;

export const Default = Template.bind({});
Default.args = {
  type: 'signature',
  hasLink: false,
  variant: 'colour',
  lang: 'en',
};

export const Wordmark = Template.bind({});
Wordmark.args = {
  type: 'wordmark',
  hasLink: false,
  variant: 'colour',
  lang: 'en',
};

export const SignatureFrench = Template.bind({});
SignatureFrench.args = {
  type: 'signature',
  hasLink: false,
  variant: 'colour',
  lang: 'fr',
};

export const WordmarkFrench = Template.bind({});
WordmarkFrench.args = {
  type: 'wordmark',
  hasLink: false,
  variant: 'colour',
  lang: 'fr',
};

export const HasLinkTrue = Template.bind({});
HasLinkTrue.args = {
  type: 'signature',
  hasLink: 'true',
  variant: 'colour',
  lang: 'en',
};

export const SignatureWhite = Template.bind({});
SignatureWhite.args = {
  type: 'signature',
  hasLink: false,
  variant: 'white',
  lang: 'en',
};

export const WordmarkWhite = Template.bind({});
WordmarkWhite.args = {
  type: 'wordmark',
  hasLink: false,
  variant: 'white',
  lang: 'en',
};

export const Props = Template.bind({});
Props.args = {
  type: 'signature',
  hasLink: false,
  variant: 'colour',
  lang: 'en',
};

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  type: 'signature',
  hasLink: false,
  variant: 'colour',
  lang: 'en',
};
