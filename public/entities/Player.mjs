import * as utils from "../app/utils.mjs"
import pixi from "../app/pixi.mjs"

export default class Player {
  constructor(player) {
    this.id = player.id
    this.name = player.name
    this.sprite = utils.makeAnimation("allfour")
    pixi.stage.addChild(this.sprite)
  }

  get x() {
    return this.sprite.position.x
  }

  get y() {
    return this.sprite.position.y
  }

  set x(n) {
    this.sprite.position.x = n
  }

  set y(n) {
    this.sprite.position.y = n
  }

  destroy() {
    pixi.stage.removeChild(this.sprite)
    this.sprite = null
  }
}
