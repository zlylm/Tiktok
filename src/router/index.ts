import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {path: '/index', name:'Index', component: ()=> import('@/views/index/index.vue')},
      {path: '/city', name:'City', component: ()=> import('@/views/city/index.vue')},
      {path: '/message', name:'Message', component: ()=> import('@/views/message/index.vue')},
      {path: '/me', name:'Me', component: ()=> import('@/views/me/index.vue')},
    ]
  }
]

const router = new VueRouter({
  linkActiveClass:'eq-nav-active',
  routes
})

export default router
