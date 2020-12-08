import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
require('vue');
var VueCookie = require('vue-cookie');
Vue.use(VueCookie);

Vue.config.productionTip = false

export const Bus = new Vue();
new Vue({
  router,
  store,
  render: h => h(App) 
}).$mount('#app')
