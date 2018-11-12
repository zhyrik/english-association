<template>
  <div class="modal">
    <slot></slot>
  </div>
</template>

<style scoped>
.modal{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: black;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20vh;
}
</style>
