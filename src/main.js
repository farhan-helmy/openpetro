import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueGoogleMap from 'vuejs-google-maps';
import Axios from 'axios'

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}
Vue.config.productionTip = false
Vue.use(VueGoogleMap, {
  load: {
    apiKey: 'AIzaSyB7_3ZuAOgLxMKPn9YSa8IpltW0rgNA7gY',
    libraries: ['...']
  }
})
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
