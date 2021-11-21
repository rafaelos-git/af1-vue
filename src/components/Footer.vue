<template>
  <footer>
    {{text}}
  </footer>
</template>

<script>
export default {
  data: () => ({
    text: 'V-Footer',
  }),
  methods: {
  },
  mounted() {
  }
}
</script>

<style lang="scss">
  footer {
    width: 100%;
    color: #f5f5f5;
    padding: 1rem 0;
    background: rgb(255, 70, 70);
    text-align: center;
    margin-bottom: 15px;
  }
</style>
