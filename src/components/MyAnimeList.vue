<template>
  <v-card class="anime-card" anime-name="shingeki-no-kiojin">
    <div class="anime-card__image">
      <img src="../assets/SnK.png" alt="Imagem Anime">
    </div>
  </v-card>
</template>

<script>
export default {
  data: () => ({
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
    width: 90%;
    height: 5rem;
    min-width: 90%;
    min-height: 8rem;
    padding: 0.5rem;
    border-radius: 1rem;
    background-color: #fff;
    box-shadow: var(--card-shadow);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .anime-card .animes {
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
    max-width: 90%;
    max-height: 90%;
  }
</style>