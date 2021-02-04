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
            resolve(resp)
          })
          .catch(err => {
            commit('payment_error')
            reject(err)
          })
        })
    },
}