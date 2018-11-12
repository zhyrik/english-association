<template>
  <div>
    <carousel-3d>
      <slide v-for="(item, index) in items" :key="index" :index="index">
        <my-card
          :item="item"
          :img="true"
          :eng="true"
        ></my-card>
        <my-card
          :item="item"
          :eng="false"
        ></my-card>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'
import Card from './Card'

export default {
  // props: ['items'],
  components: {
    Carousel3d,
    Slide,
    myCard: Card
  },
  computed: {
    items () {
      return this.$store.state.items.items
    }
  }
}
</script>

<style scoped>
.carousel-3d-slide{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
