import { ValueAccessorConfig } from '@stencil/angular-output-target';
import { ComponentModelConfig } from '@stencil/vue-output-target';

// TODO: Add gcds-radios and gcds-checkboxes when ready
export const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    // Select
    elementSelectors: ['gcds-select'],
    event: 'gcdsChange',
    targetAttr: 'value',
    type: 'select',
  },
  {
    // Text
    elementSelectors: [
      'gcds-date-input',
      'gcds-input',
      'gcds-textarea',
      'gcds-file-uploader',
    ],
    event: 'gcdsInput',
    targetAttr: 'value',
    type: 'text',
  },
];

// TODO: Add gcds-radios and gcds-checkboxes to elements array when ready
export const vueComponentModels: ComponentModelConfig[] = [
  {
    elements: [
      'gcds-input',
      'gcds-textarea',
      'gcds-select',
      'gcds-file-uploader',
      'gcds-select',
      'gcds-date-input',
    ],
    event: 'gcdsChange',
    targetAttr: 'value',
  },
];
