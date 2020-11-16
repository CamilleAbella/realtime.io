import * as PIXI from "../libs/pixi.min.mjs"
import * as utils from "../app/utils.mjs"
import pixi from "../app/pixi.mjs"

export default class Player extends PIXI.Container {
  constructor(x, y) {
    super()
    pixi.stage.addChild(this)
    this.sprite = utils.makeSprite("player")
    this.x = x ?? pixi.renderer.width / 2
    this.y = y ?? pixi.renderer.height / 2
    this.radius = 50
  }

  destroy(options) {
    pixi.stage.removeChild(this)
    super.destroy(options)
  }
}
