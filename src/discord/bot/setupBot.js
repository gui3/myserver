
const errorHandler = require("../../utils/errorHandler.js")
const botReady = require("./botReady.js")

module.exports = function (client) {
  client.on("ready", c => {
    botReady(client)
  })

  client.on("message", message => {
    if (message.author.id !== client.user.id) {
      console.log("general message:" + message.content)
      message.reply("hey, listen!")
      .catch(errorHandler)
    }
  })


}