<template>
  <div id="anime-list" class="pa-4">
    <v-container fluid>
      <h3 class="headline font-weight-medium">Lista de Animes:</h3>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="i in loading ? 4 : listAnime.length"
          :key="i"
          class="mx-xs-auto"
        >
          <v-skeleton-loader type="card-avatar" :loading="loading">
            <animeList :anime="listAnime[1]"></animeList>
          </v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import animeList from '@/components/AnimeList'
export default {
  data: () => ({
    loading: true,    
  }),
  components: {
    animeList,
  },
  computed: mapState(['listAnime']),
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 5000)
  }
}
</script>

<style lang="scss">
.card {
  background: #f9f9f9 !important;
}
</style>