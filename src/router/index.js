import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFoundVue from '../components/NotFound.vue'
// import ChatVue from '../views/Chat.vue'
import LoginView from '../views/Login.vue'
import MainPageVue from '../views/MainPage.vue'
import RegistrationView from '../views/Registration.vue'
// import ResetView from '../views/ResetView.vue'
import RoomView from '../views/RoomView.vue'
// import Test from '../views/Test.vue'

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
    component: NotFoundVue
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import("../views/WelcomeView.vue"),
  },
  {
    path: '/room/:category',
    name: 'room',
    component: RoomView
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
