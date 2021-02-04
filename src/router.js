import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Register from './views/Register'
import Topup from './views/Topup'
import Home from './views/Home'
import Account from './views/Account'
import Invoice from './views/Invoice'
import BuyFuelPage from './views/BuyFuelPage'
import LoadingPage from './views/loading/LoadingPage'


Vue.use(Router)
//import Home from '../views/Home.vue'

let router = new Router({
  mode: 'history',
  routes: [{
      path: '/home',
      name: 'home',
      component: Home,
      meta:{
        requiresAuth: true
      }
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
      component: Topup
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path: '/invoice',
      name: 'invoice',
      component: Invoice
    },
    {
      path: '/buyfuel',
      name: 'buyfuel',
      component: BuyFuelPage
    },
    {
      path: '/loading',
      name: 'loading',
      component: LoadingPage
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("token") == null) {
      next({
        path: "/home"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;