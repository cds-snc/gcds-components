import {
  langProp,
  validatorProps,
} from '../../../utils/storybook/component-properties';

export default {
  title: 'Components/File uploader',

  parameters: {
    actions: {
      argTypesRegex: '^on.*',
      handles: ['change', 'focus', 'blur'],
    },
  },

  argTypes: {
    // Props
    accept: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    multiple: {
      control: { type: 'select' },
      options: [false, true],
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: '-' },
      },
    },
    uploaderId: {
      name: 'uploader-id',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
      },
    },
    name: {
      name: 'name',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
      },
    },
    disabled: {
      control: { type: 'select' },
      options: [false, true],
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    errorMessage: {
      name: 'error-message',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    hint: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    label: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
      },
    },
    required: {
      control: { type: 'select' },
      options: [false, true],
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    value: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    ...validatorProps,
    ...langProp,

    // Events
    gcdsChange: {
      action: 'change',
      table: {
        category: 'Events | Événements',
      },
    },
    gcdsFocus: {
      action: 'focus',
      table: {
        category: 'Events | Événements',
      },
    },
    gcdsBlur: {
      action: 'blur',
      table: {
        category: 'Events | Événements',
      },
    },
  },
};

const Template = args =>
  `
<!-- Web component code (HTML, Angular, Vue) -->
<gcds-file-uploader
  uploader-id="${args.uploaderId}"
  label="${args.label}"
  name="${args.name}"
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.value ? `value="${args.value}"` : null}
  ${args.accept ? `accept="${args.accept}"` : null}
  ${args.multiple ? `multiple` : null}
  ${args.validateOn != 'blur' ? `validate-on="${args.validateOn}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</gcds-file-uploader>

<!-- React code -->
<GcdsFileUploader
  uploaderId="${args.uploaderId}"
  label="${args.label}"
  name="${args.name}"
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.value ? `value="${args.value}"` : null}
  ${args.accept ? `accept="${args.accept}"` : null}
  ${args.multiple ? `multiple` : null}
  ${args.validateOn != 'blur' ? `validateOn="${args.validateOn}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</GcdsFileUploader>
`.replace(/\s\snull\n/g, '');

const TemplatePlayground = args => `
<gcds-file-uploader
  uploader-id="${args.uploaderId}"
  label="${args.label}"
  name="${args.name}"
  hint="${args.hint}"
  error-message="${args.errorMessage}"
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  value="${args.value}"
  ${args.accept ? `accept="${args.accept}"` : null}
  ${args.multiple ? `multiple` : null}
  validate-on="${args.validateOn}"
  lang="${args.lang}"
>
</gcds-file-uploader>
`;

// ------ File uploader default ------

export const Default = Template.bind({});
Default.args = {
  uploaderId: 'uploader-default',
  name: 'file-uploader',
  label: 'Label',
  hint: 'Hint / Example message.',
  validateOn: 'blur',
  lang: 'en',
};

// ------ File uploader states ------

export const Disabled = Template.bind({});
Disabled.args = {
  uploaderId: 'uploader-disabled',
  name: 'file-uploader',
  label: 'Label',
  hint: 'Hint / Example message.',
  disabled: true,
  validateOn: 'blur',
  lang: 'en',
};

export const Error = Template.bind({});
Error.args = {
  uploaderId: 'uploader-error',
  name: 'file-uploader',
  label: 'Label',
  hint: 'Hint / Example message.',
  errorMessage: 'Error message or validation message.',
  required: true,
  validateOn: 'blur',
  lang: 'en',
};

export const Required = Template.bind({});
Required.args = {
  uploaderId: 'uploader-required',
  name: 'file-uploader',
  label: 'Label',
  hint: 'Hint / Example message.',
  required: true,
  validateOn: 'blur',
  lang: 'en',
};

// ------ File uploader multiple ------

export const Multiple = Template.bind({});
Multiple.args = {
  uploaderId: 'uploader-multiple',
  name: 'file-uploader',
  label: 'Label',
  hint: 'Hint / Example message.',
  multiple: true,
  validateOn: 'blur',
  lang: 'en',
};

// ------ File uploader accept ------

export const AcceptAudio = Template.bind({});
AcceptAudio.args = {
  uploaderId: 'uploader-audio',
  name: 'file-uploader',
  label: 'Label',
  hint: 'Hint / Example message.',
  accept: 'audio/*',
  validateOn: 'blur',
  lang: 'en',
};

export const AcceptImages = Template.bind({});
AcceptImages.args = {
  uploaderId: 'uploader-images',
  name: 'file-uploader',
  label: 'Label',
  hint: 'Hint / Example message.',
  accept: 'image/*',
  validateOn: 'blur',
  lang: 'en',
};

export const AcceptJpg = Template.bind({});
AcceptJpg.args = {
  uploaderId: 'uploader-jpg',
  name: 'file-uploader',
  label: 'Label',
  hint: 'Hint / Example message.',
  accept: 'image/jpeg',
  validateOn: 'blur',
  lang: 'en',
};

export const AcceptPdf = Template.bind({});
AcceptPdf.args = {
  uploaderId: 'uploader-pdf',
  name: 'file-uploader',
  label: 'Label',
  hint: 'Hint / Example message.',
  accept: 'application/pdf',
  validateOn: 'blur',
  lang: 'en',
};

export const AcceptPng = Template.bind({});
AcceptPng.args = {
  uploaderId: 'uploader-png',
  name: 'file-uploader',
  label: 'Label',
  hint: 'Hint / Example message.',
  accept: 'image/png',
  validateOn: 'blur',
  lang: 'en',
};

export const AcceptSvg = Template.bind({});
AcceptSvg.args = {
  uploaderId: 'uploader-svg',
  name: 'file-uploader',
  label: 'Label',
  hint: 'Hint / Example message.',
  accept: 'image/svg+xml',
  validateOn: 'blur',
  lang: 'en',
};

export const AcceptVideos = Template.bind({});
AcceptVideos.args = {
  uploaderId: 'uploader-videos',
  name: 'file-uploader',
  label: 'Label',
  hint: 'Hint / Example message.',
  accept: 'video/*',
  validateOn: 'blur',
  lang: 'en',
};

// ------ File uploader events & properties ------

export const Props = Template.bind({});
Props.args = {
  uploaderId: 'uploader',
  name: 'file-uploader',
  label: 'Label',
  hint: 'Hint / Example message.',
  errorMessage: '',
  required: false,
  disabled: false,
  value: '',
  accept: '',
  multiple: false,
  validateOn: 'blur',
  lang: 'en',
};

// ------ File uploader playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  uploaderId: 'uploader-playground',
  name: 'file-uploader',
  label: 'Label',
  hint: 'Hint / Example message.',
  errorMessage: '',
  required: false,
  disabled: false,
  value: '',
  accept: '',
  multiple: false,
  validateOn: 'blur',
  lang: 'en',
};
