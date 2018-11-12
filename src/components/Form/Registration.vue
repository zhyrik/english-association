<template>
  <div class="login">
    <my-form ref="form" v-if="flag">

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

      <label for="repPassword">Repeat password</label>
      <input
        type="password"
        id="repPassword"
        v-model="repPassword"
        @blur="$v.repPassword.$touch()"
        :class="{error: !$v.repPassword.sameAsPassword }">
      <div class="error-wrap">
        <div class="error-text" v-if="!$v.repPassword.sameAsPassword">Passwords must be identical.</div>
      </div>

      <my-button><span @click.prevent="onSubmit">Register</span></my-button>
    </my-form>

    <my-modal v-else>
      <h3>You are registered!</h3>
      <my-button><router-link to="/login">Login</router-link></my-button><br>
      <my-button><router-link to="/" >Home</router-link></my-button>
    </my-modal>

    <my-modal v-if="errorFlag">
      <h3>Error! Try again</h3>
      <my-button><span @click="errorFlag=!errorFlag">Registration</span></my-button><br>
      <my-button><router-link to="/" >Home</router-link></my-button>
    </my-modal>

  </div>
</template>

<script>
import { email, required, minLength, sameAs } from 'vuelidate/lib/validators'
import Form from './Form'
import Modal from '../Common/Modal'
import Button from '../Buttons'
export default {
  data () {
    return {
      email: '',
      password: '',
      repPassword: '',
      flag: true,
      errorFlag: false
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
    },
    repPassword: {
      sameAsPassword: sameAs('password')
    }
  },
  components: {
    myButton: Button,
    myForm: Form,
    myModal: Modal
  },
  methods: {
    onSubmit () {
      if (!this.$v.password.$error && !this.$v.email.$error && this.$v.repPassword.sameAsPassword && this.email && this.password) {
        const user = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('registerUser', user)
          .then(() => {
            this.flag = false
          })
      } else {
        this.errorFlag = !this.errorFlag
        this.password = ''
        this.repPassword = ''
      }
    }
  }
}
</script>

<style scoped>

</style>
