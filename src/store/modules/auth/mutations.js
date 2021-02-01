export default {
    auth_request(state){
        state.status = 'loading'
      },
      auth_success(state, token, customer){
        state.status = 'success'
        state.token = token
        state.customer = customer
      },
      auth_error(state){
        state.status = 'error'
      },
      logout(state){
        state.status = ''
        state.token = ''
      },
      customerdata(state, customerdata){
        state.customerdata = customerdata
      }
}