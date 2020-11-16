import socket from "./app/socket.mjs"
import Player from "./entities/Player.mjs"

window.me = new Player()
window.players = []

socket.on("error", (message) => {
  alert(message)
})
