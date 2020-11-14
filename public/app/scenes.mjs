import * as utils from "./utils.mjs"
import Scene from "../entities/Scene.mjs"
import Player from "../entities/Player.mjs"

export const chooseName = new Scene("chooseName")
export const chooseSession = new Scene("chooseSession")
export const waitingPlayers = new Scene("waitingPlayers", (session, player) => {
  utils.switchElements(["sessionOverlay"])
  document.getElementById("owner").innerText = session.players[0].name
  document.getElementById("id").innerText = session.id
  document.getElementById("playerCount").innerText = String(
    session.players.length
  )
  document.getElementById("playerList").innerHTML = session.players
    .map((p) =>
      p.id === player.id
        ? `<li class="me">${p.name}</li>`
        : `<li>${p.name}</li>`
    )
    .join("<br>")
})

export const sessionStarted = new Scene(
  "sessionStarted",
  (session, player) => {
    return new Player(player)
  },
  (player) => {
    player.destroy()
  }
)
