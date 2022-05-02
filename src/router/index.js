import Vue from 'vue'
import VueRouter from 'vue-router'
import TempViewVue from '@/views/TempView.vue'
import LoginView from '../views/LoginView.vue'
import RegistrationView from '../views/RegistrationView.vue'
import ResetView from '../views/ResetView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: LoginView
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/reset',
    name: 'reset',
    component: ResetView
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import("../views/WelcomeView.vue"),
  },
  {
    path: '/temp',
    name: 'temp',
    component: TempViewVue
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
