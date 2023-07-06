export default {
  title: 'Components/Container',

  argTypes: {
    // Props
    border: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    centered: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    margin: {
      control: { type: 'select' },
      options: ['0', '50', '100', '150', '200', '250', '300', '400', '450', '500', '550', '600', '700', '800', '900', '1000'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
    },
    padding: {
      control: { type: 'select' },
      options: ['0', '50', '100', '150', '200', '250', '300', '400', '450', '500', '550', '600', '700', '800', '900', '1000'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
    },
    size: {
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
// Web component code (Angular, Vue)
<gcds-container ${args.size != "full" ? `size="${args.size}"`: null} ${args.border ? "border" : null} ${args.centered ? "centered" : null} ${args.tag != "div" ? `tag="${args.tag}"`: null} ${args.margin ? `margin="${args.margin}"` : null} ${args.padding ? `padding="${args.padding}"` : null}>
  ${args.default ? args.default : null}
</gcds-container>

// React code
<GcdsContainer ${args.size != "full" ? `size="${args.size}"`: null} ${args.border ? "border" : null} ${args.centered ? `centered` : null} ${args.tag != "div" ? `tag="${args.tag}"`: null} ${args.margin ? `margin="${args.margin}"` : null} ${args.padding ? `padding="${args.padding}"` : null}>
  ${args.default ? args.default : null}
</GcdsContainer>
`).replace(/ null/g, '');

const TemplatePlayground = (args) => (`
<gcds-container
  ${args.size != "full" ? `size="${args.size}"`: null}
  ${args.border ? "border" : null}
  ${args.centered ? "centered" : null}
  ${args.tag != "div" ? `tag="${args.tag}"`: null}
  ${args.margin ? `margin="${args.margin}"` : null}
  ${args.padding ? `padding="${args.padding}"` : null}
>
  ${args.default ? args.default : null}
</gcds-container>
`);

// ------ Container default ------

export const Default = Template.bind({});
Default.args = {
  size: 'md',
  border: true,
  tag: 'div',
  padding: '400',
  default: '<p>This is a responsive container, you can replace this text with any content or other components.</p>',
};

// ------ Container sizes ------

export const SizeFull = Template.bind({});
SizeFull.args = {
  size: 'full',
  border: true,
  tag: 'div',
  padding: '400',
  default: '<p>This is a responsive container, the size is set to "full". You can replace this text with any content or other components.</p>',
};

export const SizeXl = Template.bind({});
SizeXl.args = {
  size: 'xl',
  border: true,
  tag: 'div',
  padding: '400',
  default: '<p>This is a responsive container, the size is set to "xl". You can replace this text with any content or other components.</p>',
};

export const SizeLg = Template.bind({});
SizeLg.args = {
  size: 'lg',
  border: true,
  tag: 'div',
  padding: '400',
  default: '<p>This is a responsive container, the size is set to "lg". You can replace this text with any content or other components.</p>',
};

export const SizeMd = Template.bind({});
SizeMd.args = {
  size: 'md',
  border: true,
  tag: 'div',
  padding: '400',
  default: '<p>This is a responsive container, the size is set to "md". You can replace this text with any content or other components.</p>',
};

export const SizeSm = Template.bind({});
SizeSm.args = {
  size: 'sm',
  border: true,
  tag: 'div',
  padding: '400',
  default: '<p>This is a responsive container, the size is set to "sm". You can replace this text with any content or other components.</p>',
};

export const SizeXs = Template.bind({});
SizeXs.args = {
  size: 'xs',
  border: true,
  tag: 'div',
  padding: '400',
  default: '<p>This is a responsive container, the size is set to "xs". You can replace this text with any content or other components.</p>',
};

// ------ Container centered ------

export const Centered = Template.bind({});
Centered.args = {
  size: 'sm',
  border: true,
  centered: true,
  tag: 'div',
  padding: '400',
  default: '<p>This container is centered.</p>',
};

// ------ Container events & props ------

export const Props = Template.bind({});
Props.args = {
  size: 'md',
  border: true,
  tag: 'div',
  padding: '400',
  default: '<p>This is a responsive container, you can replace this text with any content or other components.</p>',
};

// ------ Container playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  size: 'full',
  border: true,
  padding: '400',
  default: '<p>This is a responsive container, you can replace this text with any content or other components.</p>',
};
