export default {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    token: state => state.token,
    customer: state => state.customer,
    customerdata: state => state.customerdata
}