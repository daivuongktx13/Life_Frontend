import Vue from 'vue'
import App from './App.vue'
import router from './router'
import control from './store/control'

import Chat from 'vue-beautiful-chat'
Vue.use(Chat)
import './assets/tailwind.css'
import VueYoutube from 'vue-youtube'
Vue.use(VueYoutube)
new Vue({
  router,
  store: control,
  render: (h) => h(App)
}).$mount('#app')


