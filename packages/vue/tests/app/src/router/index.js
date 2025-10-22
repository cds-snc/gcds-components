import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Forms from '../views/Forms.vue';
import FormsPinia from '../views/FormsPinia.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/forms', component: Forms },
  { path: '/forms-state', component: FormsPinia },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
