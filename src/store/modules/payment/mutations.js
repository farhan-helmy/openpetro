export default {
    payment_request(state){
        state.status = 'loading'
      },
      payment_data(state, {datapayment}){
        state.status = 'success'
        state.payment = datapayment
      },
      payment_error(state){
        state.status = 'error'
      }
}