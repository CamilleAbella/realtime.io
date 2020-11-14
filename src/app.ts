import express from "express"
import * as http from "http"
import * as uuid from "uuid"
import * as utils from "./utils"

const app = express()
const server = http.createServer(app)
const io = require("socket.io")(server)

app.use(express.static("public"))

io.on("connection", (socket: any) => {
  socket.on("createSession", () => {
    socket.session = uuid.v4()
    socket.join(socket.session)
    socket.emit("sessionJoin", socket.session)
  })

  socket.on("joinSession", (id: string) => {
    const rooms = io.sockets.adapter.rooms
    if (rooms.hasOwnProperty(id)) {
      socket.session = id
      socket.join(id)
      socket.emit("sessionJoin", socket.session)
    } else {
      socket.emit("error", "invalid session id")
    }
  })

  socket.on("disconnect", () => {
    console.log("disconnected")
  })
})

server.listen(utils.PORT, () => {
  console.log("Server connected. localhost:" + utils.PORT)
})
