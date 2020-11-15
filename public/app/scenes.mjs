import * as utils from "./utils.mjs"
import Scene from "../entities/Scene.mjs"
import Player from "../entities/Player.mjs"
import socket from "./socket.mjs"

export const chooseName = new Scene("chooseName")
export const chooseSession = new Scene("chooseSession", (debugSession) => {
  utils.switchElements(["chooseSession"])
  if (debugSession)
    document.getElementById("debugSession").onclick = () => {
      socket.emit("joinSession", debugSession.id)
    }
})
export const waitingPlayers = new Scene("waitingPlayers", (session) => {
  utils.switchElements(["sessionOverlay"])
  document.getElementById("owner").innerText = session.players[0].name
  document.getElementById("id").innerText = session.id
  document.getElementById("playerCount").innerText = String(
    session.players.length
  )
  document.getElementById("playerList").innerHTML = session.players
    .map((p) =>
      p.id === me.id ? `<li class="me">${p.name}</li>` : `<li>${p.name}</li>`
    )
    .join("<br>")
})

export const sessionStarted = new Scene(
  "sessionStarted",
  (session) => {
    return new Player(me)
  },
  (player) => {
    player.destroy()
  }
)
