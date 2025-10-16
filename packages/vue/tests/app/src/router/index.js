import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Forms from '../views/Forms.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/forms', component: Forms },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
