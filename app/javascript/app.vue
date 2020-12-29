<template>
  <div id="app">
    <p v-for="message in messages">{{ message }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      messages: []
    }
  },

  mounted() {
    window.MessageComponent = this
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
