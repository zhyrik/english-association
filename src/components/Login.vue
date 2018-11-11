<template>
  <div class="login">
    <form>

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
    </form>
  </div>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators'
import Button from './Buttons'
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
    myButton: Button
  }
}
</script>

<style scoped>
.login{
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
form{
  max-width: 200px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  background: black;
  padding: 50px;
  color: grey;
}
label{
  display: flex;
  flex-direction: column;
}
input{
  box-sizing: border-box;
  width: 100%;
  margin: 5px 0 0 0;
  font-size: 18px;
  padding: 5px;
  color: #979596;
  outline: none;
  border: 1px solid #979596;
  background: #18191E;
  font-weight: 200;
}
.bottom{
  margin-bottom: 20px;
}
.error{
  border: 1px solid rgb(180, 90, 90);
  background: rgb(65, 35, 35);
}
label{
  font-weight: 700;
  text-transform: capitalize;
}
.error-wrap{
  height: 20px;
}
.error-text{
  padding: 5px 0;
  font-size: 12px;
  color: rgb(180, 90, 90);
  font-family: arial;
}
</style>
