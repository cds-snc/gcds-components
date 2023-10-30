import { langProp } from '../../../utils/storybook/component-properties';

export default {
  title: 'Components/Theme and topic menu',

  argTypes: {
    // Props
    home: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
<<<<<<< HEAD
        defaultValue: { summary: false }
      },
    },
    ...langProp
  },
};

const Template = (args) => (`
=======
        defaultValue: { summary: false },
      },
    },
    ...langProp,
  },
};

const Template = args =>
  `
>>>>>>> develop
<!-- Web component code (Angular, Vue) -->
<gcds-topic-menu
  ${args.home ? `home` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</gcds-topic-menu>

<!-- React code -->
<GcdsTopicMenu
  ${args.home ? `home` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</GcdsTopicMenu>
<<<<<<< HEAD
`).replace(/\s\snull\n/g, '');

const TemplatePlayground = (args) => (`
=======
`.replace(/\s\snull\n/g, '');

const TemplatePlayground = args => `
>>>>>>> develop
<gcds-topic-menu
  ${args.home ? `home` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</gcds-topic-menu>
<<<<<<< HEAD
`);
=======
`;
>>>>>>> develop

// ------ Theme and topic menu - English ------

export const English = Template.bind({});
English.args = {
  home: false,
<<<<<<< HEAD
  lang: 'en'
=======
  lang: 'en',
>>>>>>> develop
};

// ------ Theme and topic menu - French ------

export const French = Template.bind({});
French.args = {
  home: false,
<<<<<<< HEAD
  lang: 'fr'
=======
  lang: 'fr',
>>>>>>> develop
};

// ------ Theme and topic menu - Home ------

export const Home = Template.bind({});
Home.args = {
  home: true,
<<<<<<< HEAD
  lang: 'en'
=======
  lang: 'en',
>>>>>>> develop
};

// ------ Theme and topic menu events & props ------

export const Props = Template.bind({});
Props.args = {
  home: false,
<<<<<<< HEAD
  lang: 'en'
=======
  lang: 'en',
>>>>>>> develop
};

// ------ Theme and topic menu playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  home: false,
<<<<<<< HEAD
  lang: 'en'
=======
  lang: 'en',
>>>>>>> develop
};
