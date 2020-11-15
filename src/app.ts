import dotenv from "dotenv"
import express from "express"
import * as http from "http"
import * as uuid from "uuid"

dotenv.config()

import * as utils from "./utils"

import Session from "./entities/Session"
import Player from "./entities/Player"

const app = express()
const server = http.createServer(app)
const io = require("socket.io")(server)

app.use(express.static("public"))

io.on("connection", (socket: any) => {
  const cache: {
    player?: Player
    session?: Session
  } = {}

  socket.on("chooseName", (name: any) => {
    if (
      typeof name === "string" &&
      name.length > 2 &&
      name.length < 30 &&
      !/[\n<>]/.test(name)
    ) {
      cache.player = new Player(uuid.v4(), name)
      const debugSession = process.env.DEBUG ? Session.all[0] : null
      socket.emit("nameChoose", cache.player, debugSession)
    } else {
      socket.emit("error", "invalid name")
      console.error("invalid name")
    }
  })

  socket.on("createSession", () => {
    const session = new Session(uuid.v4())
    if (!cache.player) {
      socket.emit("error", "oops")
      console.error("oops")
      return
    }
    session.players.push(cache.player)
    cache.session = session
    socket.join(session.id)

    socket.emit("sessionJoin", session)
    console.log("create session")
  })

  socket.on("joinSession", (id: any) => {
    if (typeof id === "string" && Session.all.some((s) => s.id === id)) {
      const session = Session.all.find((s) => s.id === id) as Session
      if (!cache.player) {
        socket.emit("error", "oops")
        console.error("oops")
        return
      }
      session.players.push(cache.player)
      cache.session = session
      socket.join(id)

      socket.emit("sessionJoin", session, cache.player)
      io.to(id).emit("playerJoin", session, cache.player)
      console.log("join session")
    } else {
      socket.emit("error", "invalid session id")
      console.error("invalid session id")
    }
  })

  socket.on("disconnect", () => {
    console.log("disconnected")
  })
})

server.listen(utils.PORT, () => {
  console.log("Server connected. localhost:" + utils.PORT)
})
