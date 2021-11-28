<template>
  <v-app>
    <StatusBar></StatusBar>
    <NavDrawer></NavDrawer>
    <v-content
      :class="{
        'content-bg': true
      }"
    >
      <router-view></router-view>
    </v-content>
    <Footer></Footer>
    <BottomNav></BottomNav>
  </v-app>
</template>

<script>
import NavDrawer from '@/components/NavDrawer.vue'
import Footer from '@/components/Footer.vue'
import StatusBar from '@/components/StatusBar.vue'
import BottomNav from '@/components/BottomNav.vue'

export default {
  name: 'App',
  components: {
      NavDrawer,
      Footer,
      BottomNav,
      StatusBar,
  },
}
</script>

<style lang="scss">
.content-bg {
  background-color: #f8d9d9;
}
.card {
  background: #f9f9f9 !important;
}
</style>
