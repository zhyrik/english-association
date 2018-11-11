<template>
  <div>
    <!-- <button>slow --</button>
    <button>faster ++</button>
    <slider animation="fade" :speed="3000">
      <slider-item v-for="(item, index) in items" :key="index">
          <my-card
            :item="item"
            :img="true"
            :eng="true"
          ></my-card>
      </slider-item>
    </slider> -->
    <carousel-3d>
      <slide v-for="(item, index) in items" :key="index" :index="index">
        <my-card
          :item="item"
          :img="true"
          :eng="true"
        ></my-card>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'
import Card from './Card'

export default {
  props: ['items'],
  data () {
    return {
      swiperOption: {

      }
    }
  },
  components: {
    Carousel3d,
    Slide,
    myCard: Card
  }
}
</script>

<style scoped>
.carousel-3d-slide{
  display: flex;
  justify-content: center;
}
</style>
