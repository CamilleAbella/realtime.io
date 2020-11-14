import * as scenes from "./app/scenes.mjs"
import socket from "./app/socket.mjs"

scenes.chooseSession.switch()

document.getElementById("new").onclick = () => {
  socket.emit("createSession")
}

document.getElementById("join").onkeyup = (event) => {
  if (event.key === "Enter") {
    socket.emit("joinSession", event.target.value)
  }
}

socket.on("sessionJoin", (id) => {
  window.session = id
  scenes.startSession.switch()
})

socket.on("error", (message) => {
  console.error(message)
  alert(message)
})
