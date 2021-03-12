module.exports = client => {
  console.log("Taya logged in !")

  // get all guilds connected
  client._to._data.bot_guilds = []
  client.guilds.cache.each(guild => {
    console.log("Connected to guild : " + guild.name)
    client._to._data.bot_guilds.push(guild)
    // botReboot(guild)
  })

  // get all dev channels 
  // && website chat channel
  client._to._data.bot_devchans = []
  client._to._data.bot_webchans = []
  client.channels.cache
  .each(chan => {
    if (chan.name.match(/_dev/) 
    && ["text", "news"].includes(chan.type)) 
    { // this is a dev text channel
      const tchan = client.channels.cache.get(chan.id)
      console.log("found dev channel : " + tchan.name)
      client._to._data.bot_devchans.push(tchan)
    }
    else if (chan.name.match(/_website_chat/)
    && ["text", "news"].includes(chan.type))
    { // this is a chat-to-website channel
      const tchan = client.channels.cache.get(chan.id)
      console.log("found chat channel : " + tchan.name)
      client._to._data.bot_webchans.push(tchan)
    }
  })

  // get website chat channel
  client._to._data.discord_webchat
}