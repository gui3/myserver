

function setupShortcuts (client) {
  client._do = {}

  client._do.sendToDevs = (msg) => {
    client._to._data.bot_devchans.forEach(chan => {
      chan.send(msg)
    })
  }

  client._do.sendToWebChat = (msg, guildname = "") => {
    client._to._data.bot_webchans.forEach(chan => {
      if (chan.guild.name.match(new RegExp(guildname))) {
        chan.send(msg)
      }
    })
  }
}

module.exports = setupShortcuts