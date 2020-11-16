import * as PIXI from "../libs/pixi.min.mjs"

/**
 * @param {string} name
 * @return PIXI.AnimatedSprite
 */
export function makeAnimation(name) {
  const path = `../assets/sprites/${name}.json`
  const sheet = PIXI.Loader.shared.resources[path].spritesheet
  const sprite = new PIXI.AnimatedSprite(
    sheet.animations[Object.keys(sheet.animations)[0]]
  )
  sprite.anchor.set(0.5)
  sprite.animationSpeed = 24 / 60
  sprite.play()
  return sprite
}

/**
 * @param {string} name
 * @return PIXI.Sprite
 */
export function makeSprite(name) {
  const path = `../assets/sprites/${name}.png`
  const texture = PIXI.Loader.shared.resources[path].texture
  const sprite = new PIXI.Sprite(texture)
  sprite.anchor.set(0.5)
  return sprite
}
