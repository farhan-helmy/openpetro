import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Register from './views/Register'
import Topup from './views/Topup'
import Home from './views/Home'
import Account from './views/Account'
import Invoice from './views/Invoice'


Vue.use(Router)
//import Home from '../views/Home.vue'

let router = new Router({
  mode: 'history',
  routes: [{
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
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
      component: Topup,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/account',
      name: 'account',
      component: Account,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/invoice',
      name: 'invoice',
      component: Invoice,
      meta: {
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