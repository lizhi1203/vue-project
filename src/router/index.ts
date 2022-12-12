import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login.vue'),
    meta: {
      title: '登录',
      keepAlive: true,
      requireAuth: false
    }
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('@/pages/index.vue'),
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: true
    }
  },
  {
    path: '/todo-list',
    name: 'ToDoList',
    component: () => import('@/pages/todo-list.vue'),
    meta: {
      title: '待办列表',
      keepAlive: true,
      requireAuth: true
    }
  },
  {
    path: '/transition',
    name: 'Transition',
    component: () => import('@/pages/transition.vue'),
    meta: {
      title: '动画',
      keepAlive: true,
      requireAuth: true
    }
  },
  {
    path: '/render',
    name: 'Heading',
    component: () => import('@/pages/render.vue'),
    meta: {
      title: '渲染',
      keepAlive: true,
      requireAuth: true
    }
  },
  {
    path: '/',
    name: 'Echart',
    component: Layout,
    meta: {
      title: 'Echart',
      keepAlive: true,
      requireAuth: true
    },
    redirect: '/echart',
    children: [
      {
        path: '/echart',
        name: 'Echart',
        component: () => import('@/pages/echart.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/pages/about.vue')
      }
    ],
  }
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

export default router