import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  { path: '/', component: () => import('./pages/HomePage.vue') },
  { path: '/galerij', component: () => import('./pages/GalleryPage.vue') },
  { path: '/contact', component: () => import('./pages/ContactPage.vue') },
]
