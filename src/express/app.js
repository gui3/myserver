const express = require("express")

const app = express()

app.get("/_data", (req, res) => {
  res.json(app._to._data)
})

app.get("/say_hello", (req, res) => {
  app._to.taya._do.sendToWebChat("hello!!!", "gui3's")
})

module.exports = {
  app
}
