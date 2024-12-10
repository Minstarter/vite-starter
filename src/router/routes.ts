import type { RouteRecordRaw } from 'vue-router';

type RouteRecord = RouteRecordRaw & { title?: string };

export const routes: readonly RouteRecord[] = [
  {
    path: '',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  }
];
