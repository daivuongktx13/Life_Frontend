import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Chat from 'vue-beautiful-chat'
Vue.use(Chat)
import './assets/tailwind.css'
import VueYoutube from 'vue-youtube'
Vue.use(VueYoutube)
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')


