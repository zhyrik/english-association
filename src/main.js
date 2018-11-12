// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuelidate from 'vuelidate'
import * as firebase from 'firebase'
import store from './store/index'
import router from './router'

Vue.use(Vuelidate)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCbDnpT2RogPPnw6_TlWQx8Hj-wZturVR8',
      authDomain: 'english-association.firebaseapp.com',
      databaseURL: 'https://english-association.firebaseio.com',
      projectId: 'english-association',
      storageBucket: 'english-association.appspot.com',
      messagingSenderId: '517225220601'
    })
  }
})
