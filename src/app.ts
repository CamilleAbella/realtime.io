import dotenv from "dotenv"
import express from "express"
import * as http from "http"
import * as uuid from "uuid"

dotenv.config()

import * as utils from "./utils"

const app = express()
const server = http.createServer(app)
const io = require("socket.io")(server)

app.use(express.static("public"))

io.on("connection", (socket: any) => {
  socket.on("disconnect", () => {
    console.log("disconnected")
  })
})

server.listen(utils.PORT, () => {
  console.log("Server connected. localhost:" + utils.PORT)
})
