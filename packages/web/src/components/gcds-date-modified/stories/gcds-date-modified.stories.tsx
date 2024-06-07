import { langProp } from '../../../utils/storybook/component-properties';

export default {
  title: 'Components/Date modified',

  argTypes: {
    // Props
    type: {
      control: { type: 'select' },
      options: ['date', 'version'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'date' },
      },
    },
    ...langProp,

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
    },
  },
};

const Template = args =>
  `
<!-- Web component code (HTML, Angular, Vue) -->
<gcds-date-modified ${args.type != 'date' ? `type="${args.type}"` : null} ${
    args.lang != 'en' ? `lang="${args.lang}"` : null
  }>
  ${args.default}
</gcds-date-modified>

<!-- React code -->
<GcdsDateModified ${args.type != 'date' ? `type="${args.type}"` : null} ${
    args.lang != 'en' ? `lang="${args.lang}"` : null
  }>
  ${args.default}
</GcdsDateModified>
`.replace(/ null/g, '');

const TemplatePlayground = args => `
<gcds-date-modified
  ${args.type != 'date' ? `type="${args.type}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
  ${args.default}
</gcds-date-modified>
`;

// ------ Date modified default ------

export const Default = Template.bind({});
Default.args = {
  lang: 'en',
  type: 'date',
  default: '2023-01-26',
};

// ------ Date modified french ------

export const French = Template.bind({});
French.args = {
  lang: 'fr',
  type: 'date',
  default: '2023-01-26',
};

// ------ Date modified version ------

export const Version = Template.bind({});
Version.args = {
  lang: 'en',
  type: 'version',
  default: '1.2.3',
};

// ------ Date modified events & props ------

export const Props = Template.bind({});
Props.args = {
  lang: 'en',
  type: 'date',
  default: '2023-01-26',
};

// ------ Date modified playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  lang: 'en',
  type: 'date',
  default: '2023-01-26',
};
