import * as PIXI from "../libs/pixi.min.mjs"

export const playerCountNeeded = 1

/**
 * @param {string[]} elements
 */
export function switchElements(elements = []) {
  Array.from(document.getElementsByClassName("switchable")).forEach((e) => {
    e.style.display = "none"
  })
  elements.forEach((id) => {
    document.getElementById(id).style.display = "block"
  })
}

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
  return new PIXI.Sprite(texture)
}
