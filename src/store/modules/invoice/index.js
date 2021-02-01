import invoiceMutations from './mutations.js'
import invoiceActions from './actions.js'
import invoiceGetters from './getters.js'

export default {
    namespaced: true,
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        invoice: {}
    },
    mutations: invoiceMutations,
    actions: invoiceActions,
    getters: invoiceGetters
}