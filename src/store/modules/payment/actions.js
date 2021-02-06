import axios from 'axios'

export default {
    pay({commit}, payment){
        return new Promise((resolve, reject) => {
          commit('payment_request')
          axios({url: 'http://localhost:3000/transaction', data: payment, method: 'POST' })
          .then(resp => {
            console.log(resp.data)
            const transaction = resp.data
            commit('payment_data', {transaction})
            //nama kena sama dengan mutations
            resolve(resp)
          })
          .catch(err => {
            commit('payment_error')
            reject(err)
          })
        })
    },
    topupWallet({commit}, topupamount){
      return new Promise((resolve, reject) => {
        commit('topup_request')
        axios({url: 'http://localhost:3000/customers/topup', data: topupamount, method: 'PATCH' })
        .then(resp => {
          console.log(resp.data)
          //nama kena sama dengan mutations
          resolve(resp)
        })
        .catch(err => {
          commit('payment_error')
          reject(err)
        })
      })
    }
   
    // getTransactions({commit}){
    //   //let token = localStorage.getItem('token')
    //   return new Promise((resolve, reject) => {
    //       axios.get('http://localhost:3000/transactions')
    //       .then(resp => {
    //         console.log(resp.data)
    //         const datatransaction = resp.data
    //         commit('transaction_data', [datatransaction])
    //         resolve(resp)
    //       })
    //       .catch(err => {
    //         console.log(err)
    //         commit('payment_error', err)
    //         reject(err)
    //       })
    //   })
    // },

  }