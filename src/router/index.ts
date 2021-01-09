import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/Index.vue')
  },
  {
    path: '/recover/:ticker',
    name: 'Recover',
    component: () => import('@/views/Recover.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
