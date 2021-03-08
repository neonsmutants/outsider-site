import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import './assets/styles/main.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(VueRouter)