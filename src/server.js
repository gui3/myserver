const dotenv = require("dotenv")

dotenv.config()

const getConfig = require("./utils/getConfig.js")

const config = getConfig()


const { app } = require("./express/app.js")
const { discordClient } = require("./discord/client.js")
const errorHandler = require("./utils/errorHandler.js")
const Linker = require("./utils/Linker.js")
const connectDiscordBot = require("./discord/connectDiscordBot.js")

// linking bot and server
const linker = new Linker()
linker.link("server", "express", app)
linker.link("taya", "discord", discordClient)
linker.link("config", "config", config)

// connect discord bot
connectDiscordBot(discordClient, config)

// connect express app
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log("my little server listenning on " + PORT)
})