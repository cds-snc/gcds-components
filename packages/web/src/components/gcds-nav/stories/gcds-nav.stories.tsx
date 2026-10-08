import { langProp } from '../../../utils/storybook/component-properties';

export default {
  title: 'Components/Navigation',

  argTypes: {
    // Props
    variant: {
      control: { type: 'radio' },
      options: ['top', 'side'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'side' },
      },
    },
    label: {
      name: 'label',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
      },
    },
    alignment: {
      control: { type: 'radio' },
      options: ['start', 'end'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'start' },
      },
    },
    mobileMenu: {
      name: 'mobile-menu',
      control: { type: 'radio' },
      options: ['combined', 'separate'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'combined' },
      },
    },
    currentHref: {
      name: 'current-href',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    ...langProp,

    // Events
    gcdsClick: {
      action: 'click',
      table: {
        category: 'Events | Événements',
      },
    },
  },
};

const topNavChildren = `<gcds-nav-link href="#" slot="home">GC Notify</gcds-nav-link>
  <gcds-nav-link href="#why">Why GC Notify</gcds-nav-link>
  <gcds-nav-group open-trigger="Features">
    <gcds-nav-link href="#personalize">Personalize messages</gcds-nav-link>
    <gcds-nav-link href="#schedule">Schedule messages</gcds-nav-link>
  </gcds-nav-group>
  <gcds-nav-link href="#contact">Contact us</gcds-nav-link>`;

const sideNavChildren = `<gcds-nav-link href="#" slot="home">GC Forms</gcds-nav-link>
  <gcds-nav-link href="#why">Why GC Forms</gcds-nav-link>
  <gcds-nav-group open-trigger="Features">
    <gcds-nav-group open-trigger="Build and manage forms yourself">
      <gcds-nav-link href="#review">Review in both official languages side-by-side</gcds-nav-link>
      <gcds-nav-link href="#responses">Get form responses delivered securely</gcds-nav-link>
    </gcds-nav-group>
    <gcds-nav-link href="#publish">Publish trusted, user-friendly forms</gcds-nav-link>
  </gcds-nav-group>
  <gcds-nav-link href="#guidance">Guidance</gcds-nav-link>`;

const items = [
  { label: 'GC Notify', href: '#', home: true },
  { label: 'Why GC Notify', href: '#why' },
  {
    label: 'Features',
    children: [
      { label: 'Personalize messages', href: '#personalize' },
      { label: 'Schedule messages', href: '#schedule' },
    ],
  },
  { label: 'Contact us', href: '#contact' },
];

const attrs = args =>
  [
    `variant="${args.variant}"`,
    `label="${args.label}"`,
    args.alignment != 'start' ? `alignment="${args.alignment}"` : null,
    args.mobileMenu != 'combined' ? `mobile-menu="${args.mobileMenu}"` : null,
    args.currentHref ? `current-href="${args.currentHref}"` : null,
    args.lang != 'en' ? `lang="${args.lang}"` : null,
  ]
    .filter(Boolean)
    .join('\n  ');

const reactAttrs = args =>
  [
    `variant="${args.variant}"`,
    `label="${args.label}"`,
    args.alignment != 'start' ? `alignment="${args.alignment}"` : null,
    args.mobileMenu != 'combined' ? `mobileMenu="${args.mobileMenu}"` : null,
    args.currentHref ? `currentHref="${args.currentHref}"` : null,
    args.lang != 'en' ? `lang="${args.lang}"` : null,
  ]
    .filter(Boolean)
    .join('\n  ');

const Template = args => `
<!-- Web component code (HTML, Angular, Vue) -->
<gcds-nav
  ${attrs(args)}
>
  ${args.variant === 'top' ? topNavChildren : sideNavChildren}
</gcds-nav>

<!-- React code -->
<GcdsNav
  ${reactAttrs(args)}
>
  ${(args.variant === 'top' ? topNavChildren : sideNavChildren)
    .replace(/gcds-nav-link/g, 'GcdsNavLink')
    .replace(/gcds-nav-group/g, 'GcdsNavGroup')
    .replace(/open-trigger/g, 'openTrigger')}
</GcdsNav>
`;

const TemplateItems = args => `
<!-- HTML: items attribute -->
<gcds-nav
  ${attrs(args)}
  items='${JSON.stringify(items, null, 2).replace(/\n/g, '\n  ')}'
></gcds-nav>

<!-- React: items property, routing with GcdsRouterProvider -->
<GcdsNav
  ${reactAttrs(args)}
  items={items}
/>
`;

const TemplateCombined = () => `
<!-- On small screens both navigations are combined into one menu button -->
<gcds-header lang-href="#" skip-to-href="#main">
  <gcds-nav slot="menu" variant="top" label="Top navigation" alignment="end">
    ${topNavChildren}
  </gcds-nav>
</gcds-header>

<div style="display: flex; gap: 2rem; margin-block-start: 2rem;">
  <gcds-nav variant="side" label="Section navigation" style="flex: 0 0 18rem;">
    ${sideNavChildren}
  </gcds-nav>
  <main id="main">Page content</main>
</div>
`;

const defaultArgs = {
  variant: 'side',
  label: 'GC Forms navigation',
  alignment: 'start',
  mobileMenu: 'combined',
  currentHref: '',
  lang: 'en',
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const Top = Template.bind({});
Top.args = { ...defaultArgs, variant: 'top', label: 'GC Notify navigation' };

export const Side = Template.bind({});
Side.args = { ...defaultArgs };

export const Items = TemplateItems.bind({});
Items.args = { ...defaultArgs, variant: 'top', label: 'GC Notify navigation' };

export const Combined = TemplateCombined.bind({});
Combined.parameters = {
  viewport: { defaultViewport: 'mobile1' },
};

export const Props = Template.bind({});
Props.args = { ...defaultArgs };

export const Playground = Template.bind({});
Playground.args = { ...defaultArgs };
