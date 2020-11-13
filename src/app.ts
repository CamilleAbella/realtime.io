import express from "express"
import * as http from "http"
import * as utils from "./utils"

const app = express()
const server = http.createServer(app)
const io = require("socket.io")(server)

app.use(express.static("public"))

io.on("connection", (socket: any) => {
  socket.on("ping", (date: number) => {
    io.emit("pong", Date.now() - date)
  })

  socket.on("disconnect", () => {
    console.log("disconnected")
  })
})

server.listen(utils.PORT, () => {
  console.log("Server connected. localhost:" + utils.PORT)
})
