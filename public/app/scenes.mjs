import * as PIXI from "../libs/pixi.min.mjs"
import * as utils from "./utils.mjs"
import Scene from "../entities/scene.mjs"
import pixi from "./pixi.mjs"

export const chooseName = new Scene("chooseName")
export const chooseSession = new Scene("chooseSession")

export const sessionStarted = new Scene(
  "sessionStarted",
  () => {
    const text = new PIXI.Text("Connected to session")
    pixi.stage.addChild(text, {
      fill: 0xffffff,
    })
    return text
  },
  (text) => {
    pixi.stage.removeChild(text)
  }
)

export const waitingPlayers = new Scene(
  "waitingPlayers",
  () => {},
  () => {}
)
