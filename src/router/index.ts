import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    alias: '/home',
    name: 'home',
    component: () => import('../views/homePage.vue')
  },
  {
    path: '/post',
    name: 'postDetails',
    component: ()=> import('../views/postDetails.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: ()=> import('../views/LogIn.vue')
  },
  {
    path: '/contact',
    name: 'contactt',
    component: ()=> import('../views/ContactUs.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
