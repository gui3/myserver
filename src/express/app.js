const express = require("express")
const socketIo = require("socket.io")
const helmet = require("helmet")
const session = require("express-session")
const http = require("http")

const app = express()
const httpServer = http.createServer(app)

// security
app.use(helmet())

app.set('trust proxy', 1) // trust first proxy
app.use( session({
   secret : process.env.SESSION_SECRET,
   name : process.env.SESSION_NAME,
  })
)

// static routes
app.get("/_data", (req, res) => {
  res.json(app._to._data)
})

app.get("/say_hello", (req, res) => {
  app._to.taya._do.sendToWebChat("hello!!!", "gui3's")
})

app.get("/_error", (req, res) => {
  const err = new Error("TEST error [VOLUNTARY]")
  err.code = "VOLUNT"
  throw err
})

app.use((err, req, res, next) => {
  if (err) {
    app._to 
    && app._to.eh
    && app._to.eh.error 
    && app._to.eh.error(err) === undefined // stops here if it worked
    || console.error(err)
  }
})

// socket
const socket = socketIo(httpServer, {
  cors: {
    origin: "https://gui3.github.io",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
})

socket.on("connection", socket => {
  console.log("someone connected!")
  app._to.taya._do.sendToWebChat("Someone connected to gui3's site")

  socket.on("message", msg => {
    socket.emit("message", msg + " bien reçu!")
  })

  socket.on("deconnection", _ => {
    console.log("user disconnected")
  })
})

module.exports = {
  app, httpServer
}
