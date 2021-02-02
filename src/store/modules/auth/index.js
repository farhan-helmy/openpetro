import authMutations from './mutations.js'
import authActions from './actions.js'
import authGetters from './getters.js'

export default {
    namespaced: true,
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        customer: {},
        datacustomer: {}
    },
    mutations: authMutations,
    actions: authActions,
    getters: authGetters
}