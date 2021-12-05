import Vue from 'vue'
import Vuex from 'vuex'

import { httpClient } from '../utils/httpClient';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listAnime: [
      {
        id: 0,
        name: "Naruto",
        imageSrc: "https://uploads.spiritfanfiction.com/fanfics/capitulos/202103/a-otsutsuki-love-story-naruto-various-x-leitora-21815340-040320210832.jpg",
      },
      {
        id: 1,
        name: "Naruto",
        imageSrc: "https://i.pinimg.com/236x/b6/f0/8a/b6f08adb20b18ce05f365463666de0f4.jpg",
      },
      {
        id: 2,
        name: "Shingeky no Kyojin",
        imageSrc: "https://images.squarespace-cdn.com/content/v1/5616ac17e4b018d366f57f53/1617460062423-MGMT89BZ60S15C82TC4J/Eren+soundboard",
      },
      {
        id: 3,
        name: "Tokyo Ghoul",
        imageSrc: "https://i.pinimg.com/474x/34/e9/d7/34e9d7d98a7d4f8492b9a4a43760ccf8.jpg",
      },
      {
        id: 4,
        name: "Mushoku Tensei",
        imageSrc: "https://static.myfigurecollection.net/pics/figure/big/1092218.jpg",
      },
      {
        id: 5,
        name: "Kimetsu no Yaba",
        imageSrc: "https://c-cl.cdn.smule.com/rs-s-sf-1/arr/e7/fe/dead3be4-50a3-40bf-a221-d03d6845992a.jpg",
      },
      {
        id: 6,
        name: "Boku no Hero Academia",
        imageSrc: "https://static.myfigurecollection.net/pics/figure/big/1024688.jpg",
      },
      {
        id: 7,
        name: "Dragon Ball",
        imageSrc: "https://i.pinimg.com/474x/f2/af/5a/f2af5ac635cbf4e90378eb89847c86ab.jpg",
      },
      {
        id: 8,
        name: "Hunter X Hunter",
        imageSrc: "https://pm1.narvii.com/7254/6247898ac2b98496ea87609f0fe6367bc1c351efr1-866-1024v2_128.jpg",
      },
    ],
    loading:false,
  },
  mutations: {
    async addAnimeByID(state, animeId) {
      const animeData = await httpClient.get(`https://kitsu.io/api/edge/anime/${animeId}/`);

      console.log('animeData', animeData)

      state.listAnime.push({
        id: animeId,
        name: animeData.data.attributes.canonicalTitle || '',
        imageSrc: animeData.data.attributes.posterImage.tiny,
      })
    },
  },
  actions: {
    addRandomAnime: ({commit}) => {
      const min = 1, max = 400;
      const randomId = '' + Math.floor(Math.random() * (max - min) + min);

      commit('addAnimeByID', randomId);
    }
  },
  modules: {
  }
})
