import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      {
        eng: 'apple',
        translate: 'яблуко',
        url: 'http://distasio.chem.cornell.edu/img/apple.jpg'
      },
      {
        eng: 'pear',
        translate: 'груша',
        url: 'https://vignette.wikia.nocookie.net/recipes/images/d/db/Packham_pear.jpg/revision/latest?cb=20110210142731'
      },
      {
        eng: 'chery',
        translate: 'вишня',
        url: 'https://vignette.wikia.nocookie.net/fruit/images/6/64/Orchard-Cherry.jpg/revision/latest?cb=20140805131428'
      },
      {
        eng: 'orange',
        translate: 'апельсин',
        url: 'https://vignette.wikia.nocookie.net/pikmin/images/3/30/Deanesmay-orange.jpg/revision/latest?cb=20130711115615'
      },
      {
        eng: 'cucumber',
        translate: 'огірок',
        url: 'https://img.purch.com/rc/300x200/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA3Ni8yMTkvb3JpZ2luYWwvY3VjdW1iZXJzLmpwZw=='
      }
    ]
  },
  getters: {

  }
})
