<template>
  <div class="login">
    <form>
      <slot></slot>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.login{
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
