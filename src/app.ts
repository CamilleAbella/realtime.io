import dotenv from "dotenv"
import express from "express"
import * as http from "http"
import * as uuid from "uuid"

dotenv.config()

import * as utils from "./utils"
import Player from "./entities/Player"

const app = express()
const server = http.createServer(app)
const io = require("socket.io")(server)

app.use(express.static("public"))

io.sockets.on("connection", (socket: any) => {
  if (
    utils.QUEUE.length === 0 &&
    utils.PLAYERS.length < utils.MAX_PLAYER_COUNT
  ) {
    socket.player = new Player(uuid.v4())
    socket.player.placeInMap()
    utils.PLAYERS.push(socket)
    utils.gameUpdated()
  } else {
    utils.QUEUE.push(socket)
    utils.queueUpdated()
  }

  socket.on("disconnect", () => {
    if (utils.QUEUE.includes(socket)) {
      utils.QUEUE.splice(utils.QUEUE.indexOf(socket), 1)
    } else {
      utils.PLAYERS.splice(utils.PLAYERS.indexOf(socket), 1)
      if (utils.QUEUE.length > 0) {
        utils.PLAYERS.push(utils.QUEUE.shift())
      }
    }
    utils.gameUpdated()
    utils.queueUpdated()
    utils.logState("disconnection")
  })

  utils.logState("connection")
})

server.listen(utils.PORT, () => {
  console.log("Server connected. localhost:" + utils.PORT)
})
