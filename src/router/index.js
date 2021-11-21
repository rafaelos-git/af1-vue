import Vue from 'vue'
import VueRouter from 'vue-router'
import NavDrawer from '@/components/NavDrawer.vue'
import Footer from '@/components/Footer.vue'
import StatusBar from '@/components/StatusBar.vue'
import BottomNav from '@/components/BottomNav.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      NavDrawer,
      Footer,
      BottomNav,
      StatusBar,
      default: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
    }
  },  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
