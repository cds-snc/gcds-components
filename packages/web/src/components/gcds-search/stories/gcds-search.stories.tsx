import { langProp } from '../../../utils/storybook/component-properties';

export default {
  title: 'Components/Search',

  argTypes: {
    // Props
    action: {
      name: 'action',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '/sr/srb.html' }
      }
    },
    name: {
      name: 'name',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'q' }
      }
    },
    placeholder: {
      name: 'placeholder',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Canada.ca' }
      }
    },
    method: {
      control: 'radio',
      options: ['get', 'post'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'get' }
      },
    },
    ...langProp
  },
};

const Template = (args) => (`
<!-- Web component code (Angular, Vue) -->
<gcds-search
  ${args.action != '/sr/srb.html' ? `action="${args.action}"` : null}
  ${args.method != 'get' ? `method="${args.method}"` : null}
  ${args.name != 'q' ? `name="${args.name}"` : null}
  ${args.placeholder != 'Canada.ca' ? `placeholder="${args.placeholder}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</gcds-search>

<!-- React code -->
<GcdsSearch
  ${args.action != '/sr/srb.html' ? `action="${args.action}"` : null}
  ${args.method != 'get' ? `method="${args.method}"` : null}
  ${args.name != 'q' ? `name="${args.name}"` : null}
  ${args.placeholder != 'Canada.ca' ? `placeholder="${args.placeholder}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</GcdsSearch>
`).replace(/\s\snull\n/g, '');

const TemplatePlayground = (args) => (`
<gcds-search
  ${args.action != '/sr/srb.html' ? `action="${args.action}"` : null}
  ${args.method != 'get' ? `method="${args.method}"` : null}
  ${args.name != 'q' ? `name="${args.name}"` : null}
  ${args.placeholder != 'Canada.ca' ? `placeholder="${args.placeholder}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</gcds-search>
`);

// ------ Error message default ------

export const Default = Template.bind({});
Default.args = {
  action: '/sr/srb.html',
  method: 'get',
  name: 'q',
  placeholder: 'Canada.ca',
  lang: 'en'
};

// ------ Error message events & props ------

export const Props = Template.bind({});
Props.args = {
  action: '/sr/srb.html',
  method: 'get',
  name: 'q',
  placeholder: 'Canada.ca',
  lang: 'en'
};

// ------ Error message playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  action: '/sr/srb.html',
  method: 'get',
  name: 'q',
  placeholder: 'Canada.ca',
  lang: 'en'
};
