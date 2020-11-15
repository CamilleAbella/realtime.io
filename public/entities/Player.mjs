import * as PIXI from "../libs/pixi.min.mjs"
import * as utils from "../app/utils.mjs"
import pixi from "../app/pixi.mjs"

export default class Player {
  constructor(player) {
    this.id = player.id
    this.name = player.name
    this.sprite = "allfour"
    this.spriteType = "allfour"
    this.direction = "right"

    this.container = new PIXI.Container()

    const textName = new PIXI.Text(this.name, {
      fill: 0xffffff,
      align: "center",
      wordWrap: false,
      fontSize: 20,
    })

    textName.anchor.set(0.5)
    textName.position.set(100, 15)

    this.container.addChild(textName)

    this.sprites = {
      allfour: utils.makeAnimation("allfour"),
      standing: utils.makeAnimation("standing"),
      turnleft: utils.makeSprite("turnleft"),
      turnright: utils.makeSprite("turnright"),
    }

    this.sprites.turnleft.position.set(47, 49)
    this.sprites.turnright.position.set(47, 49)

    this.container.addChild(this.sprites.allfour)

    pixi.stage.addChild(this.container)
  }

  switchSpriteTo(sprite, reverse = false) {
    this.container.removeChild(this.sprites[this.sprite])
    this.container.addChild(this.sprites[sprite])
    this.sprite[sprite].scale.x = reverse ? -1 : 1
    this.sprite = sprite
  }

  stay() {
    this.sprites[this.sprite].animationSpeed = 0
  }

  walk() {
    this.sprites[this.sprite].animationSpeed = 60 / 24
  }

  /**
   * @param {PIXI.Point} position
   */
  moveTo(position) {
    let direction = this.direction
    if (position.x < this.x) {
      direction = "left"
    } else if (position.x > this.x) {
      direction = "right"
    }

    if (direction !== this.direction) {
      this.switchSpriteTo("turn" + direction)
      this.direction = direction
    }

    window.requestAnimationFrame(() => {
      this.switchSpriteTo(this.spriteType, direction === "left")

      this.x = position.x
      this.y = position.y
    })
  }

  get x() {
    return this.container.position.x
  }
  get y() {
    return this.container.position.y
  }
  set x(n) {
    this.container.position.x = n
  }
  set y(n) {
    this.container.position.y = n
  }

  destroy() {
    pixi.stage.removeChild(this.container)
    this.sprites = null
  }
}
