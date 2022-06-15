import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFoundVue from '../components/NotFound.vue'
import ChatVue from '../views/Chat.vue'
import LoginView from '../views/LoginView.vue'
import MainPageVue from '../views/MainPage.vue'
import RegistrationView from '../views/RegistrationView.vue'
import ResetView from '../views/ResetView.vue'
import RoomView from '../views/RoomView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'NotFound',
    component: NotFoundVue
  },
  {
    path: '/',
    name: 'home',
    component: MainPageVue
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
    path: '/vid',
    name: 'room',
    component: RoomView
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
