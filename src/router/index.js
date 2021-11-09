import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('../views/Home');
const Feedbacks = () => import('../views/Feedbacks');
const Credentials = () => import('../views/Credentials');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: Feedbacks,
    meta: {
      hasAuth: true,
    },
  },
  {
    path: '/credentials',
    name: 'Credentials',
    component: Credentials,
    meta: {
      hasAuth: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirectTo: 'Home',
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
