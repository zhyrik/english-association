<template>
  <div class="login">
    <my-form v-if="flag">

      <label for="email">Email</label>
      <input
        type="text"
        id="email"
        v-model="email"
        @blur="$v.email.$touch()"
        :class="{error: $v.email.$error }">
      <div class="error-wrap">
        <div class="error-text" v-if="$v.email.$error">It is not email</div>
      </div>

      <label for="password">password</label>
      <input
        type="password"
        id="password"
        v-model="password"
        @blur="$v.password.$touch()"
        :class="{error: $v.password.$error }">
      <div class="error-wrap">
        <div class="error-text" v-if="$v.password.$error">Min length 6</div>
      </div>

      <my-button><span @click="onSubmit">Login</span></my-button>
    </my-form>

    <my-modal v-else>
      <h3>Error! Try again</h3>
      <my-button><span @click="flag=!flag">Login</span></my-button><br>
      <my-button><router-link to="/" >Home</router-link></my-button>
    </my-modal>
  </div>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators'
import Form from './Form'
import Button from '../Common/Buttons'
import Modal from '../Common/Modal'
export default {
  data () {
    return {
      email: '',
      password: '',
      flag: true
    }
  },
  validations: {
    email: {
      email,
      required
    },
    password: {
      minLength: minLength(6),
      required
    }
  },
  components: {
    myButton: Button,
    myForm: Form,
    myModal: Modal
  },
  methods: {
    onSubmit () {
      if (!this.$v.password.$error && !this.$v.email.$error && this.email && this.password) {
        const user = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('loginUser', user)
          .then(() => {
            console.log(1)
          })
      } else {
        this.flag = !this.flag
        this.password = ''
      }
    }
  }
}
</script>

<style scoped>

</style>
