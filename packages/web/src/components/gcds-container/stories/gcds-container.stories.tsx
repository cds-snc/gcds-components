export default {
  title: 'Components/Container',

  argTypes: {
    // Props
    centered: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    container: {
      control: { type: 'select' },
      options: ['full', 'xl', 'lg', 'md', 'sm', 'xs'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'full' }
      },
    },
    tag: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'div' }
      }
    },

    // Slots
    default: {
      control: {
        type: 'text',
      },
      table: {
        category: 'Slots | Fentes',
      }
    },
  },
};

const Template = (args) => (`
// Web Component code (Angular, Vue)
<gcds-container ${args.container != "full" ? `container="${args.container}"`: null} ${args.centered ? "centered" : null} ${args.tag != "div" ? `tag="${args.tag}"`: null}>
  ${args.default ? args.default : null}
</gcds-container>
// React code
<GcdsContainer ${args.container != "full" ? `container="${args.container}"`: null} ${args.centered ? `centered` : null} ${args.tag != "div" ? `tag="${args.tag}"`: null}>
  ${args.default ? args.default : null}
</GcdsContainer>
`).replace(/ null/g, '');

const TemplatePlayground = (args) => (`
<gcds-container
  ${args.container != "full" ? `container="${args.container}"`: null}
  ${args.centered ? "centered" : null}
  ${args.tag != "div" ? `tag="${args.tag}"`: null}
>
  ${args.default ? args.default : null}
</gcds-container>
`).replace(/\s\snull\n/g, '');

// ------ Container default ------

export const Default = Template.bind({});
Default.args = {
  container: 'md',
  tag: 'div',
  default: '<p class="text-with-border">This is a responsive container, you can replace this text with any content or other components.</p>',
};

// ------ Container sizes ------

export const SizeFull = Template.bind({});
SizeFull.args = {
  container: 'full',
  tag: 'div',
  default: '<p class="text-with-border">This container size is full.</p>',
};

export const SizeXl = Template.bind({});
SizeXl.args = {
  container: 'xl',
  tag: 'div',
  default: '<p class="text-with-border">This container size is xl.</p>',
};

export const SizeLg = Template.bind({});
SizeLg.args = {
  container: 'lg',
  tag: 'div',
  default: '<p class="text-with-border">This container size is lg.</p>',
};

export const SizeMd = Template.bind({});
SizeMd.args = {
  container: 'md',
  tag: 'div',
  default: ' <p class="text-with-border">This container size is md.</p>',
};

export const SizeSm = Template.bind({});
SizeSm.args = {
  container: 'sm',
  tag: 'div',
  default: '<p class="text-with-border">This container size is sm.</p>',
};

export const SizeXs = Template.bind({});
SizeXs.args = {
  container: 'xs',
  tag: 'div',
  default: '<p class="text-with-border">This container size is xs.</p>',
};

// ------ Container centered ------

export const Centered = Template.bind({});
Centered.args = {
  container: 'sm',
  centered: true,
  tag: 'div',
  default: '<p class="text-with-border">This container is centered.</p>',
};

// ------ Container playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  container: 'full',
  default: '<p class="text-with-border">This is a responsive container, you can replace this text with any content or other components.</p>',
};
