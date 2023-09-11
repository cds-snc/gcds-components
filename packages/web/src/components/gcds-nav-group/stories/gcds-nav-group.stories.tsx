import { langProp } from '../../../utils/storybook/component-properties';

export default {
  title: 'Components/Navigation group',

  argTypes: {
    // Props
    openLabel: {
      name: 'open-label',
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
      control: 'boolean',
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

export const Default = Template.bind({});
Default.args = {
  menuLabel: '',
  openTrigger: 'Navigation group',
  closeTrigger: '',
  open: false,
  lang: 'en',
};
