import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFoundVue from '../components/NotFound.vue'
import LoginView from '../views/Login.vue'
import MainPageVue from '../views/MainPage.vue'
import RegistrationView from '../views/Registration.vue'
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
    component: NotFoundVue
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
