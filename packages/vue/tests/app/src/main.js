import { createApp } from 'vue';
import { GcdsComponents } from '@cdssnc/gcds-components-vue';

import '@cdssnc/gcds-components-vue/gcds.css';
import App from './App.vue';

createApp(App).use(GcdsComponents).mount('#app');

