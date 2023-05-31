import { langProp } from '../../utils/storybook/component-properties';

export default {
  title: 'Components/Language toggle',

  argTypes: {
    // Props
    href: {
      name: 'href',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      type: {
        required: true
      }
    },
    ...langProp
  },
};

const Template = (args) => (`
// Web Component (Angular, Vue)
<gcds-lang-toggle
  href="${args.href}"
  ${args.lang != "en" ? `lang="${args.lang}"` : null}
>
</gcds-lang-toggle>

// React code
<GcdsLangToggle
  href="${args.href}"
  ${args.lang != "en" ? `lang="${args.lang}"` : null}
>
</GcdsLangToggle>
`).replace(/\s\snull\n/g, '');

export const Default = Template.bind({});
Default.args = {
  href: '#',
  lang: 'en'
};