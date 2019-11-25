import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Index from '../components/Index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/login',
    component: Login
  }

]

const router = new VueRouter({
  routes
})

export default router
