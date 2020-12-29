<template>
  <div id="app">
    <table class="table table-striped">
      <tbody>
        <tr v-for="{ user, message } in messages">
          <td>
            <strong>{{ user }}</strong>: {{ message }}
          </td>
        </tr>
      </tbody>
    </table>

    <input v-model="user">
    <input v-model="message">
    <button @click="sendMessage()">Enviar</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: function () {
    return {
      user: 'Usuário',
      message: '',
      room: 'chat_BestRoom',
      messages: []
    }
  },

  methods: {
    sendMessage() {
      this.$http.post('/rooms', { message: this.message, user: this.user, room: this.room })
                .then(() => this.message = '')
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
