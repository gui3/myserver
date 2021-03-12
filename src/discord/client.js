const { Client } = require("discord.js")

const setupBot = require("./bot/setupBot.js")
const setupShortcuts = require("./shortcuts/setupShortcuts.js")

const client = new Client()

setupBot(client)
setupShortcuts(client)

module.exports = {
  discordClient: client
}