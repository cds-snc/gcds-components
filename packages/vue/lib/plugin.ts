import { Plugin } from 'vue';
import { applyPolyfills, defineCustomElements } from '@cdssnc/gcds-components/loader';

export const GcdsComponents: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  },
};