import * as PIXI from "../libs/pixi.min.mjs"
import * as utils from "./utils.mjs"
import Scene from "../entities/scene.mjs"
import pixi from "./pixi.mjs"

export const chooseName = new Scene("chooseName")
export const chooseSession = new Scene("chooseSession")
export const waitingPlayers = new Scene("waitingPlayers", (session) => {
  utils.switchElements(["sessionOverlay"])
  document.getElementById("owner").innerText = session.players[0].name
  document.getElementById("id").innerText = session.id
  document.getElementById("players").innerText = String(session.players.length)
})

export const sessionStarted = new Scene(
  "sessionStarted",
  (sessionId) => {
    const text = new PIXI.Text("Connected to session: " + sessionId)
    pixi.stage.addChild(text, {
      fill: 0xffffff,
    })
    return text
  },
  (text) => {
    pixi.stage.removeChild(text)
  }
)
