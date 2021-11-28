<template>
  <v-bottom-navigation
    :value="value"
    color="primary"
  >
    <v-btn
      href
      router
      to="/"
    >
      <span>Início</span>

      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn
      href
      router
      to="/about"
    >
      <span>Sobre</span>

      <v-icon>mdi-information-variant</v-icon>
    </v-btn>

    <v-btn
      href
      router
      to="/animes"
    >
      <span>Animes</span>

      <v-icon>mdi-television</v-icon>
    </v-btn>

    <v-btn
      href
      router
      to="/anime_list"
    >
      <span>Lista de Animes</span>

      <v-icon>mdi-format-list-bulleted</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({
    value: 'recent',
  }),
}
</script>