import { createApp } from 'vue';
import router from './router';
import { createPinia } from 'pinia';
import { GcdsComponents } from '@cdssnc/gcds-components-vue';

import '@cdssnc/gcds-components-vue/gcds.css';
import App from './App.vue';

const app = createApp(App);
app.use(GcdsComponents);
app.use(createPinia());
app.use(router);

app.mount('#app');
