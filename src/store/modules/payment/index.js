import paymentMutations from './mutations.js'
import paymentActions from './actions.js'
import paymentGetters from './getters.js'

export default {
    namespaced: true,
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        payment: {},
        topup: {}
    },
    mutations: paymentMutations,
    actions: paymentActions,
    getters: paymentGetters
}