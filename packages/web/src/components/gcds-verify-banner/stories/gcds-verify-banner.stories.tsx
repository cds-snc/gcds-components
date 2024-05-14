import { langProp } from '../../../utils/storybook/component-properties';

export default {
  title: 'Components/Verify banner',

  argTypes: {
    // Props
    container: {
      control: { type: 'select' },
      options: ['full', 'xl', 'lg', 'md', 'sm', 'xs'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'xl' },
      },
    },
    isFixed: {
      name: 'is-fixed',
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
<gcds-verify-banner ${
    args.container != 'xl' ? `container="${args.container}"` : null
  } ${args.isFixed ? `is-fixed` : null} ${
    args.lang != 'en' ? `lang="${args.lang}"` : null
  }>
</gcds-verify-banner>

<!-- React code -->
<GcdsVerifyBanner ${
    args.container != 'xl' ? `container="${args.container}"` : null
  } ${args.isFixed ? `isFixed` : null} ${
    args.lang != 'en' ? `lang="${args.lang}"` : null
  }>
</GcdsVerifyBanner>
`.replace(/ null/g, '');

const TemplatePlayground = args => `
<gcds-verify-banner
  ${args.container != 'xl' ? `container="${args.container}"` : null}
  ${args.isFixed ? `is-fixed` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</gcds-verify-banner>
`;

// ------ Verify banner default ------

export const Default = Template.bind({});
Default.args = {
  container: 'xl',
  isFixed: false,
  lang: 'en',
};

// ------ Verify banner french ------

export const French = Template.bind({});
French.args = {
  container: 'xl',
  isFixed: false,
  lang: 'fr',
};

// ------ Verify banner container ------

export const Full = Template.bind({});
Full.args = {
  container: 'full',
  isFixed: false,
  lang: 'en',
};

export const Xl = Template.bind({});
Xl.args = {
  container: 'xl',
  isFixed: false,
  lang: 'en',
};

export const Lg = Template.bind({});
Lg.args = {
  container: 'lg',
  isFixed: false,
  lang: 'en',
};

export const Md = Template.bind({});
Md.args = {
  container: 'md',
  isFixed: false,
  lang: 'en',
};

export const Sm = Template.bind({});
Sm.args = {
  container: 'sm',
  isFixed: false,
  lang: 'en',
};

export const Xs = Template.bind({});
Xs.args = {
  container: 'xs',
  isFixed: false,
  lang: 'en',
};

// ------ Verify banner events & props ------

export const Props = Template.bind({});
Props.args = {
  container: 'xl',
  isFixed: false,
  lang: 'en',
};

// ------ Verify banner playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  container: 'xl',
  isFixed: false,
  lang: 'en',
};
