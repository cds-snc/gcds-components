import { langProp } from '../../../utils/storybook/component-properties';

export default {
  title: 'Components/Language toggle',

  argTypes: {
    // Props
    href: {
      name: 'href',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
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
<gcds-lang-toggle href="${args.href}" ${
    args.lang != 'en' ? `lang="${args.lang}"` : null
  }>
</gcds-lang-toggle>

<!-- React code -->
<GcdsLangToggle href="${args.href}" ${
    args.lang != 'en' ? `lang="${args.lang}"` : null
  }>
</GcdsLangToggle>
`.replace(/ null/g, '');

const TemplatePlayground = args => `
<gcds-lang-toggle
  href="${args.href}"
  lang="${args.lang}"
>
</gcds-lang-toggle>
`;

// ------ Language toggle default ------

export const Default = Template.bind({});
Default.args = {
  href: '#',
  lang: 'en',
};

// ------ Language toggle french ------

export const French = Template.bind({});
French.args = {
  href: '#',
  lang: 'fr',
};

// ------ Language toggle events & props ------

export const Props = Template.bind({});
Props.args = {
  href: '#',
  lang: 'en',
};

// ------ Language toggle playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  href: '#',
  lang: 'en',
};
