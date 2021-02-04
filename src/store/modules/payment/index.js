import paymentMutations from './mutations.js'
import paymentActions from './actions.js'
import paymentGetters from './getters.js'

export default {
    namespaced: true,
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        payment: {}
    },
    mutations: paymentMutations,
    actions: paymentActions,
    getters: paymentGetters
}