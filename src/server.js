const dotenv = require("dotenv")

dotenv.config()

const getConfig = require("./utils/getConfig.js")

const config = getConfig()


const { app, httpServer } = require("./express/app.js")
const { discordClient } = require("./discord/client.js")
const ErrorHandler = require("./utils/ErrorHandler.js")
const Linker = require("./utils/Linker.js")
const connectDiscordBot = require("./discord/connectDiscordBot.js")

// linking bot and server
const linker = new Linker()
const errorHandler = new ErrorHandler(linker)

linker.link("config", "config", config)
linker.link("server", "express", app)
linker.link("socket", "socket.io", httpServer)
linker.link("taya", "discord", discordClient)

// connect discord bot
connectDiscordBot(discordClient, config)

// connect express app
const PORT = process.env.PORT || 5000

httpServer.listen(PORT, () => {
  console.log("my little server listenning on " + PORT)
})