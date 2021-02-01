import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Register from './views/Register'
import Topup from './views/Topup'
import Home from './views/Home'
import Account from './views/Account'
import Invoice from './views/Invoice'
import store from './store'

Vue.use(Router)
//import Home from '../views/Home.vue'

let router = new Router({
  mode: 'history',
  routes: [{
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/topup',
      name: 'topup',
      component: Topup,
    },
    {
      path: '/account',
      name: 'acount',
      component: Account
    },
    {
      path: '/invoice',
      name: 'invoice',
      component: Invoice
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router;