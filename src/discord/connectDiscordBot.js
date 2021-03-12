

function connectDiscordBot (discordClient, config) {
  
  discordClient.login(
    config.disable_bot 
    ? null 
    : process.env.DISCORD_BOT_TOKEN
  )
  .then(_ => {
    // send boot message in discord
    discordClient._do.sendToDevs(
      "Hey ! bot booted at :\n" + new Date().toISOString()
    )
  })
  .catch(err => {
    // if bot disabled for test purposes
    if (err.code === "TOKEN_INVALID"
    && config.disable_bot === true) 
    {
      console.error(
        "!!!! the discord bot is DISABLED,"
        + " see CONFIG.yaml to start it up"
      )
    }
    
  })
}

module.exports = connectDiscordBot