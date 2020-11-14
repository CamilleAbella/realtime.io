import * as utils from "../app/utils.mjs"

export default class Scene {
  static scenes = new Map()
  static current = null
  static values = null

  constructor(name, init, destroy) {
    this.name = name
    this.init = init ?? (() => utils.switchElements([name]))
    this.destroy = destroy ?? (() => utils.switchElements())
    Scene.scenes.set(name, this)
  }

  switch(values) {
    if (Scene.current) {
      Scene.scenes.get(Scene.current).destroy(Scene.values)
    }
    Scene.values = this.init(values)
    Scene.current = this.name
  }
}
