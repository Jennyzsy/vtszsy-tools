import { createRouter, RouteRecordRaw, Router, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/pages/index/index.vue'),
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '/button',
        name: 'Button',
        component: () => import('@/pages/button/button.vue'),
        meta: {
          title: 'button'
        }
      }
    ]
  }
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

export default router