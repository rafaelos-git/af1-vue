<template>
  <v-app>
    <router-view name="StatusBar"></router-view>
    <router-view name="NavDrawer"></router-view>
    <v-content
      :class="{
        'content-bg': true
      }"
    >
      <router-view></router-view>
    </v-content>
    <router-view name="Footer"></router-view>
    <router-view name="BottomNav"></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App'
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
