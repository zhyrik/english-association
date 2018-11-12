<template>
  <div class="button">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>
<style scoped>
.button, .info{
  max-width: 300px;
  text-align: center;
  color: #6C401B;
  height: 32px;
  width: 100%;
  line-height: 32px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all .3s;
  background: #D29D41;
  font-weight: 600;
}
.button a{
  color: #6C401B;
  text-decoration: none;
}
.button:hover, .button:hover a{
  color: #D29D41;
  background: #6C401B;
  cursor: pointer;
}
span{
  display: block;
  width: 100%;
  height: 100%;
}
</style>
