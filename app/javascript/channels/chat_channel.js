import consumer from "./consumer"

consumer.subscriptions.create({ channel: "ChatChannel", room: "BestRoom" }, {
  connected() {
    console.log("Conectou na bagaça!")
  },

  disconnected() {
    console.log("Desconectou")
  },

  rejected() {
    console.log("Rejeitou")
  },

  received(data) {
    window.MessageComponent.messages.push({ message: data['message'], user: data['user'] })
  }
})
