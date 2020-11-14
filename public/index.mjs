import * as scenes from "./app/scenes.mjs"
import socket from "./app/socket.mjs"

scenes.chooseName.switch()

document.getElementById("name").onkeyup = (event) => {
  if (event.key === "Enter") {
    const name = event.target.value
    console.log("choose name", name)
    socket.emit("chooseName", name)
  }
}

document.getElementById("new").onclick = () => {
  console.log("create session")
  socket.emit("createSession")
}

document.getElementById("join").onkeyup = (event) => {
  if (event.key === "Enter") {
    const sessionId = event.target.value
    console.log("join session", sessionId)
    socket.emit("joinSession", sessionId)
  }
}

socket.on("nameChoose", (name) => {
  console.log("named", name)
  scenes.chooseSession.switch()
})

socket.on("sessionJoin", (session, player) => {
  console.log("joined session")
  if (session.players.size === 6) {
    scenes.sessionStarted.switch(session, player)
  } else {
    scenes.waitingPlayers.switch(session, player)
  }
})

socket.on("playerJoin", (session, player) => {
  console.log("joined player", player.name)
  if (session.players.size === 6) {
    scenes.sessionStarted.switch(session, player)
  } else {
    scenes.waitingPlayers.switch(session, player)
  }
})

socket.on("error", (message) => {
  console.error(message)
  alert(message)
})
