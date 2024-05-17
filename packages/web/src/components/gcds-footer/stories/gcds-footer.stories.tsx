import { langProp } from '../../../utils/storybook/component-properties';

export default {
  title: 'Components/Footer',

  argTypes: {
    // Props
    display: {
      control: 'select',
      options: ['compact', 'full'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'compact' },
      },
    },
    contextualHeading: {
      name: 'contextual-heading',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    contextualLinks: {
      name: 'contextual-links',
      control: 'text',
      description: '{ "link-label": "link-href" }',
      table: {
        type: { summary: 'string/object' },
        defaultValue: { summary: '-' },
      },
    },
    subLinks: {
      name: 'sub-links',
      control: 'text',
      description: '{ "link-label": "link-href" }',
      table: {
        type: { summary: 'string/object' },
        defaultValue: { summary: '-' },
      },
    },
    ...langProp,
  },
};

const Template = args =>
  `
<!-- Web component code (HTML, Angular, Vue) -->
<gcds-footer
  ${args.display != 'compact' ? `display="${args.display}"` : null}
  ${
    args.contextualHeading && args.contextualLinks
      ? `contextual-heading="${args.contextualHeading}"`
      : null
  }
  ${
    args.contextualHeading && args.contextualLinks
      ? `contextual-links='${args.contextualLinks}'`
      : null
  }
  ${args.subLinks ? `sub-links='${args.subLinks}'` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</gcds-footer>

<!-- React code -->
<GcdsFooter
  ${args.display != 'compact' ? `display="${args.display}"` : null}
  ${
    args.contextualHeading && args.contextualLinks
      ? `contextualHeading="${args.contextualHeading}"`
      : null
  }
  ${
    args.contextualHeading && args.contextualLinks
      ? `contextualLinks='${args.contextualLinks}'`
      : null
  }
  ${args.subLinks ? `subLinks='${args.subLinks}'` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</GcdsFooter>
`.replace(/\s\snull\n/g, '');

const TemplatePlayground = args =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-footer
  ${args.display != 'compact' ? `display="${args.display}"` : null}
  ${
    args.contextualHeading && args.contextualLinks
      ? `contextual-heading="${args.contextualHeading}"`
      : null
  }
  ${
    args.contextualHeading && args.contextualLinks
      ? `contextual-links='${args.contextualLinks}'`
      : null
  }
  ${args.subLinks ? `sub-links='${args.subLinks}'` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</gcds-footer>

<!-- React code -->
<GcdsFooter
  ${args.display != 'compact' ? `display="${args.display}"` : null}
  ${
    args.contextualHeading && args.contextualLinks
      ? `contextualHeading="${args.contextualHeading}"`
      : null
  }
  ${
    args.contextualHeading && args.contextualLinks
      ? `contextualLinks='${args.contextualLinks}'`
      : null
  }
  ${args.subLinks ? `subLinks='${args.subLinks}'` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</GcdsFooter>
`.replace(/\s\snull\n/g, '');

export const Default = Template.bind({});
Default.args = {
  display: 'full',
  contextualHeading: 'Contextual navigation',
  contextualLinks:
    '{ "Why GC Notify": "#", "Features": "#", "Activity on GC Notify": "#" }',
  subLinks: '',
  lang: 'en',
};

export const DisplayCompact = Template.bind({});
DisplayCompact.args = {
  display: 'compact',
  lang: 'en',
};

export const DisplayFull = Template.bind({});
DisplayFull.args = {
  display: 'full',
  lang: 'en',
};

export const DisplayContextual = Template.bind({});
DisplayContextual.args = {
  display: 'full',
  contextualHeading: 'Contextual navigation',
  contextualLinks:
    '{ "Why GC Notify": "#", "Features": "#", "Activity on GC Notify": "#" }',
  lang: 'en',
};

export const Props = Template.bind({});
Props.args = {
  display: 'full',
  contextualHeading: 'Contextual navigation',
  contextualLinks:
    '{ "Why GC Notify": "#", "Features": "#", "Activity on GC Notify": "#" }',
  subLinks: '',
  lang: 'en',
};

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  display: 'compact',
  contextualHeading: 'Contextual navigation',
  contextualLinks:
    '{ "Why GC Notify": "#", "Features": "#", "Activity on GC Notify": "#" }',
  subLinks: '',
  lang: 'en',
};
