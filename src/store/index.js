import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import authModule from './modules/auth/index.js'
import paymentModule from './modules/payment/index.js'

const store = new Vuex.Store({
    modules: {
        auth: authModule,
        payment: paymentModule
    },
   
});

export default store;