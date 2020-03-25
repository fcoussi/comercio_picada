import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
//import  library  from '@fortawesome/fontawesome-svg-core'
//import  faUserSecret  from '@fortawesome/free-solid-svg-icons'
//import  FontAwesomeIcon  from '@fortawesome/vue-fontawesome'
import VueLayers from 'vuelayers'
import 'vuelayers/lib/style.css'
import { IconStyle } from 'vuelayers'
import axios from 'axios'
import VueAxios from 'vue-axios'
import  BootstrapVue from 'bootstrap-vue'



// Agregamos la URL base de nuestra API
axios.defaults.baseURL = 'http://localhost:4000/api';
//library.add(faUserSecret)
//Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue);
Vue.use(VueLayers)
Vue.use(IconStyle)
Vue.use(VueAxios, axios)


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
