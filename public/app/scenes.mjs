import * as PIXI from "../libs/pixi.min.mjs"
import pixi from "./pixi.mjs"
import Scene from "../entities/scene.mjs"

export const chooseSession = new Scene(
  "chooseSession",
  () => {
    document.getElementById("form").style.display = "block"
  },
  () => {
    document.getElementById("form").style.display = "none"
  }
)

export const startSession = new Scene(
  "startSession",
  () => {
    const text = new PIXI.Text("Connected to session " + session)
    pixi.stage.addChild(text)
    return text
  },
  (text) => {
    pixi.stage.removeChild(text)
  }
)
