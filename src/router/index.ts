import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Base from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Base
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
