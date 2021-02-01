import axios from 'axios'

export default {
    login({commit}, user){
        return new Promise((resolve, reject) => {
          commit('auth_request')
          axios({url: 'http://localhost:3000/customers/login', data: user, method: 'POST' })
          .then(resp => {
            console.log(resp.data.customer)
            const token = resp.data.token
            const customer = resp.data.customer
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, customer)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
        })
    },
    register({commit}, user){
        return new Promise((resolve, reject) => {
          commit('auth_request')
          axios({url: 'http://localhost:3000/customers/register', data: user, method: 'POST' })
          .then(resp => {
            const token = resp.data.token
            const customer = resp.data.customer
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, customer)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error', err)
            localStorage.removeItem('token')
            reject(err)
          })
        })
      },
      logout({commit}){
        return new Promise((resolve) => {
          commit('logout')
          localStorage.removeItem('token')
          delete axios.defaults.headers.common['Authorization']
          resolve()
        })
      },

      getCustomer({commit}){
        let token = localStorage.getItem('token')
        axios.get('http://localhost:3000/customers/me',{
          headers: {
            'Authorization': 'Bearer ' + token
          }
        })
        .then((res) => {
          commit('customerdata', res.data)
          console.log(res.data)
        })
        .catch((error) => {
          console.error(error)
        })
      }

}