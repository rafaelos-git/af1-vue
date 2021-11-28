import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/anime_list',
    name: 'AnimeList',
    component: () => import(/* webpackChunkName: "anime_list" */ '../views/AnimeList.vue')
  },
  {
    path: '/animes',
    name: 'Animes',
    component: () => import(/* webpackChunkName: "animes" */ '../views/Animes.vue')
  }, 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
