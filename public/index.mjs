import socket from "./app/socket.mjs"
import Player from "./entities/Player.mjs"

window.me = new Player()
window.others = []

socket.on("queue", (message) => {
  alert(message)
})

socket.on("error", (message) => {
  alert(message)
})
