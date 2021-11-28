
<template>
  <v-card class="anime-card" anime-name="SnK">
    <div class="anime-card__image">
      <img v-if="!anime" src="../assets/shingeki-no-kyojin.jpg" alt="Imagem Anime">
      <img v-if="!!anime" :src="anime.anime.$attrs.anime_list.imageSrc" alt="Imagem Anime">
      <div v-if="!!anime" class="anime-card__name">{{anime.anime.$attrs.anime_list.name}}</div>
    </div>
  </v-card>
</template>

<script>
export default {
  data: (anime) => ({
    anime: anime,
  }),
  methods: {
  },
  mounted() {
  }
}
</script>

<style>
  .anime-card {
    position: relative;

    margin-top: 20%;

    width: 70%;
    height: 5rem;
    min-width: 70%;
    min-height: 8rem;

    padding: 0.5rem;
    border-radius: 1rem;
    background-color: rgb(245, 168, 168);
    box-shadow: var(--card-shadow);

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .anime-card .anime {
    cursor: pointer;
  }

  .anime-card__image {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .anime-card__image img {
    max-width: 100%;
    max-height: 100%;
  }
</style>