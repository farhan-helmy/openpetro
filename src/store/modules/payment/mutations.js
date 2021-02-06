export default {
    payment_request(state){
        state.status = 'loading'
      },
      payment_data(state, {transaction}){
        state.status = 'success'
        state.payment = transaction

        //nama kena sama dengan action
      },
      payment_error(state){
        state.status = 'error'
      },
      topup_request(state){
        state.status = 'processing topup'
      },
      topup_latest(state, {topupamount}){
        state.status ='done'
        state.topup = topupamount
      }
      // transaction_data(state, [datatransaction]){
      //   state.payment = datatransaction
      // }
}