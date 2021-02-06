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
import InvoiceView from './views/InvoiceView'
import TopupPage from './views/topup-up/TopupPage'
import LoadingTopup from './views/topup-up/LoadingTopup'
import SuccessTopup from './views/topup-up/SuccessTopup'


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
      name: 'logins',
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
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/account',
      name: 'account',
      component: Account,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/invoice',
      name: 'invoice',
      component: Invoice,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/buyfuel',
      name: 'buyfuel',
      component: BuyFuelPage,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/loading',
      name: 'loading',
      component: LoadingPage,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/invoiceview',
      name: 'invoiceview',
      component: InvoiceView,
      meta:{
        requiresAuth: true
      }
    },
    {
      path:'/topuppage',
      name: 'topuppage',
      component: TopupPage,
      meta:{
        requiresAuth: true
      }
    },
    {
      path:'/loadingtopup',
      name: 'loadingtopup',
      component: LoadingTopup,
      meta:{
        requiresAuth: true
      }
    },
    {
      path:'/successtopup',
      name: 'successtopup',
      component: SuccessTopup,
      meta:{
        requiresAuth: true
      }
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