<template>
  <v-bottom-navigation
    :value="value"
    color="primary"
  >
    <div id="share">
      <span>
        Compartilhar via:
      </span>
      <v-btn>
        <span>
          whatsapp
        </span>
        <v-icon>mdi-whatsapp</v-icon>
      </v-btn>

      <v-btn>
        <span>
          facebook
        </span>
        <v-icon>mdi-facebook</v-icon>
      </v-btn>

      <v-btn>
        <span>
          instagram
        </span>
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
    </div>
    
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({
    value: 'recent',
  }),
}
</script>