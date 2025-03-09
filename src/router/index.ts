import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/pages/products/Index.vue'),
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('@/components/pages/users/Index.vue'),
    },
  ],
})

export default router
