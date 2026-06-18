import { Plugin } from 'vue';
import { defineCustomElements } from '@gcds-core/components/loader';

export const GcdsComponents: Plugin = {
  async install() {
    defineCustomElements();
  },
};
