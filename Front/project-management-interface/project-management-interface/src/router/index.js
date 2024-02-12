import { createRouter, createWebHistory } from 'vue-router'

import ProjectView from '../views/ProjectView.vue';
import AuthenticationView from '../views/AuthenticationView.vue';
import SignUpView from '../views/SignUpView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: AuthenticationView },
    { path: '/SignUp', component: SignUpView },
    { path: '/Project', component: ProjectView },
    // { path: '/not-found', component: ProjectNotFoundView },
  ],
});


export default router