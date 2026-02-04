import { createApp } from 'vue';
import router from './router';
import { createPinia } from 'pinia';
import { GcdsComponents } from '@gcds-core/components-vue';

import '@gcds-core/components-vue/gcds.css';
import App from './App.vue';

const app = createApp(App);
app.use(GcdsComponents);
app.use(createPinia());
app.use(router);

app.mount('#app');

// Handle navigation with router for GCDS web components
window.addEventListener('gcdsClick', e => handleNavigation(router, e));

function handleNavigation(router, event) {
  if (
    event.target.nodeName === 'GCDS-LINK' ||
    event.target.nodeName === 'GCDS-BREADCRUMBS-ITEM'
  ) {
    event.preventDefault();
    const route = event?.detail;
    if (route) router.push(route);
  }
}
