import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listAnime: [
      {
        id: 1,
        name:"tog",
        imageSrc: "https://cabanadoleitor.com.br/wp-content/uploads/2020/04/1_REF9NdXV3TYOTlhjkp8Q6g.jpeg",
      },
      {
        id: 2,
        name:"shingeky-no-kyojin",
        imageSrc: "https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2021/11/legiao_8UmoiOVFI9aA.jpg.jpeg",
      },
      {
        id: 3,
        name:"venusaur",
        imageSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      },
      {
        id: 4,
        name:"charmander",
        imageSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      },
      {
        id: 5,
        name:"charmeleon",
        imageSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
      },
      {
        id: 6,
        name:"charizard",
        imageSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      },
      {
        id: 7,
        name:"squirtle",
        imageSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      },
      {
        id: 8,
        name:"wartortle",
        imageSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
