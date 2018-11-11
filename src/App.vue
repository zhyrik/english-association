<template>
  <div id="app">
    <English />
  </div>
</template>

<script>
import English from './components/Main'

export default {
  name: 'App',
  components: {
    English
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6C401B;
}
body{
  background: grey;
}
</style>
