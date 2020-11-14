import * as PIXI from "../libs/pixi.min.mjs"

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
  const sheet = PIXI.Loader.shared.resources[name].spritesheet
  const sprite = new PIXI.AnimatedSprite(sheet.animations["image_sequence"])
  sprite.animationSpeed = 60 / 24
  sprite.play()
  return sprite
}
