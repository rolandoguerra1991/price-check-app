import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home/Index.vue'),
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: () => import('../views/Auth/Login/Index.vue'),
  },
  {
    path: '/auth/register',
    name: 'Register',
    component: () => import('../views/Auth/Register/Index.vue'),
  },
  {
    path: '/auth/forgot-password',
    name: 'ForgotPassword',
    component: () => import('../views/Auth/ForgotPassword/Index.vue'),
  },
  {
    path: '/auth/password-reset',
    name: 'PasswordReset',
    component: () => import('../views/Auth/PasswordReset/Index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
