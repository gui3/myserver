const dotenv = require("dotenv")

dotenv.config()

const getConfig = require("./utils/getConfig.js")

const config = getConfig()

if (!config.disabled) {
  const { app } = require("./express/app.js")
  const { discordClient } = require("./discord/client.js")
  const errorHandler = require("./utils/errorHandler.js")
  const Linker = require("./utils/Linker.js")
  
  // linking bot and server
  const linker = new Linker()
  linker.link("server", "express", app)
  linker.link("taya", "discord", discordClient)
  
  // connect discord bot
  discordClient.login(process.env.DISCORD_BOT_TOKEN)
  .then(_ => {
    // send boot message in discord
    discordClient._do.sendToDevs(
      "Hey ! bot booted at :\n" + new Date().toISOString()
    )
  })
  .catch(errorHandler)
  
  // connect express app
  const PORT = process.env.PORT || 5000
  
  app.listen(PORT, () => {
    console.log("my little server listenning on " + PORT)
  })
}
else {
  console.log("this app is disabled, see CONFIG.yaml to start it up")
}