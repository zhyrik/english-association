<template>
  <div class="login">
    <my-form>

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

      <my-button><span @click.prevent="add">Login</span></my-button>
    </my-form>
  </div>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators'
import Form from './Form'
import Button from '../Common/Buttons'
export default {
  data () {
    return {
      email: '',
      password: ''
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
    myForm: Form
  }
}
</script>

<style scoped>

</style>
