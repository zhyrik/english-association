import Vue from 'vue'
import Router from 'vue-router'

import main from '../components/Main.vue'
import login from '../components/Form/Login.vue'
import Register from '../components/Form/Registration.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: main
    },
    {
      path: '/login',
      name: 'Login',
      component: login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ],
  mode: 'history'
})
