import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Forms from '../views/Forms.vue';
import FormsPinia from '../views/FormsPinia.vue';
import FileUploader from '../views/FileUploader.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/forms', component: Forms },
  { path: '/forms-state', component: FormsPinia },
  { path: '/file-uploader', component: FileUploader },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
