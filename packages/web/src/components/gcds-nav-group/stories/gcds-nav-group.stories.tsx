import { langProp } from '../../../utils/storybook/component-properties';

export default {
  title: 'Components/Navigation group',

  argTypes: {
    // Props
    menuLabel: {
      name: 'menu-label',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
      },
    },
    openTrigger: {
      name: 'open-trigger',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
      },
    },
    closeTrigger: {
      name: 'close-trigger',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    open: {
      name: 'open',
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
<gcds-nav-group
  menu-label="${args.menuLabel}"
  open-trigger="${args.openTrigger}"
  ${args.closeTrigger ? `close-trigger="${args.closeTrigger}"` : null}
  ${args.open ? `open` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
  <gcds-nav-link href="#">Nav link</gcds-nav-link>
  <gcds-nav-link href="#">Nav link</gcds-nav-link>
  <gcds-nav-link href="#">Nav link</gcds-nav-link>
</gcds-nav-group>

<!-- React code -->
<GcdsNavGroup
  menuLabel="${args.menuLabel}"
  openTrigger="${args.openTrigger}"
  ${args.closeTrigger ? `closeTrigger="${args.closeTrigger}"` : null}
  ${args.open ? `open` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
  <GcdsNavLink href="#">Nav link</GcdsNavLink>
  <GcdsNavLink href="#">Nav link</GcdsNavLink>
  <GcdsNavLink href="#">Nav link</GcdsNavLink>
</GcdsNavGroup>
`.replace(/\s\snull\n/g, '');

const TemplateTopNav = args =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-top-nav label="Top nav example" alignment="right">
  <gcds-nav-group
    menu-label="${args.menuLabel}"
    open-trigger="${args.openTrigger}"
    ${args.closeTrigger ? `close-trigger="${args.closeTrigger}"` : null}
    ${args.open ? `open` : null}
    ${args.lang != 'en' ? `lang="${args.lang}"` : null}
  >
    <gcds-nav-link href="#">Nav link</gcds-nav-link>
    <gcds-nav-link href="#">Nav link</gcds-nav-link>
    <gcds-nav-link href="#">Nav link</gcds-nav-link>
  </gcds-nav-group>
</gcds-top-nav>

<!-- React code -->
<GcdsTopNav label="Top nav example" alignment="right">
  <GcdsNavGroup
    menuLabel="${args.menuLabel}"
    openTrigger="${args.openTrigger}"
    ${args.closeTrigger ? `closeTrigger="${args.closeTrigger}"` : null}
    ${args.open ? `open` : null}
    ${args.lang != 'en' ? `lang="${args.lang}"` : null}
  >
    <GcdsNavLink href="#">Nav link</GcdsNavLink>
    <GcdsNavLink href="#">Nav link</GcdsNavLink>
    <GcdsNavLink href="#">Nav link</GcdsNavLink>
  </GcdsNavGroup>
</GcdsTopNav>
`.replace(/\s\snull\n/g, '');

const TemplatePlayground = args =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-nav-group
  menu-label="${args.menuLabel}"
  open-trigger="${args.openTrigger}"
  ${args.closeTrigger ? `close-trigger="${args.closeTrigger}"` : null}
  ${args.open ? `open` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
  <gcds-nav-link href="#">Nav link</gcds-nav-link>
  <gcds-nav-link href="#">Nav link</gcds-nav-link>
  <gcds-nav-link href="#">Nav link</gcds-nav-link>
</gcds-nav-group>
`.replace(/\s\snull\n/g, '');

export const Default = Template.bind({});
Default.args = {
  menuLabel: 'Sub-menu',
  openTrigger: 'Navigation group',
  closeTrigger: '',
  open: false,
  lang: 'en',
};

export const Open = Template.bind({});
Open.args = {
  menuLabel: 'Open sub-menu',
  openTrigger: 'Navigation group',
  closeTrigger: '',
  open: true,
  lang: 'en',
};

export const Triggers = Template.bind({});
Triggers.args = {
  menuLabel: 'Triggers sub-menu',
  openTrigger: 'Open the nav group',
  closeTrigger: 'Close the nav group',
  open: false,
  lang: 'en',
};

export const Menu = Template.bind({});
Menu.args = {
  menuLabel: 'Sub-menu',
  openTrigger: 'Navigation group',
  closeTrigger: '',
  open: false,
  lang: 'en',
};

export const TopNav = TemplateTopNav.bind({});
TopNav.args = {
  menuLabel: 'Topnav sub-menu',
  openTrigger: 'Navigation group',
  closeTrigger: '',
  open: false,
  lang: 'en',
};

export const Props = Template.bind({});
Props.args = {
  menuLabel: 'Sub-menu',
  openTrigger: 'Navigation group',
  closeTrigger: '',
  open: false,
  lang: 'en',
};

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  menuLabel: '',
  openTrigger: 'Navigation group',
  closeTrigger: '',
  open: false,
  lang: 'en',
};
