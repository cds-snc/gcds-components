import { langProp } from '../../../utils/storybook/component-properties';

export default {
  title: 'Components/Theme and topic menu',

  argTypes: {
    // Props
    home: {
      control: { type: 'select' },
      options: [false, true],
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    ...langProp,
  },
};

const Template = args =>
  `
<!-- Web component code (HTML, Angular, Vue) -->
<gcds-topic-menu ${args.home ? `home` : null} ${
    args.lang != 'en' ? `lang="${args.lang}"` : null
  }>
</gcds-topic-menu>

<!-- React code -->
<GcdsTopicMenu ${args.home ? `home` : null} ${
    args.lang != 'en' ? `lang="${args.lang}"` : null
  }>
</GcdsTopicMenu>
`.replace(/ null/g, '');

const TemplatePlayground = args => `
<gcds-topic-menu
  ${args.home ? `home` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</gcds-topic-menu>
`;

// ------ Theme and topic menu - English ------

export const English = Template.bind({});
English.args = {
  home: false,
  lang: 'en',
};

// ------ Theme and topic menu - French ------

export const French = Template.bind({});
French.args = {
  home: false,
  lang: 'fr',
};

// ------ Theme and topic menu - Home ------

export const Home = Template.bind({});
Home.args = {
  home: true,
  lang: 'en',
};

// ------ Theme and topic menu events & props ------

export const Props = Template.bind({});
Props.args = {
  home: false,
  lang: 'en',
};

// ------ Theme and topic menu playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  home: false,
  lang: 'en',
};
