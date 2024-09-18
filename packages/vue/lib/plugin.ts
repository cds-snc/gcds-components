import { Plugin } from 'vue';
import { defineCustomElements } from '@cdssnc/gcds-components/loader';

export const GcdsComponents: Plugin = {
  async install() {
    defineCustomElements();
  },
};