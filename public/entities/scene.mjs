export default class Scene {
  static scenes = new Map()
  static current = null
  static values = null

  constructor(name, init, destroy) {
    this.name = name
    this.init = init
    this.destroy = destroy
    Scene.scenes.set(name, this)
  }

  switch() {
    if (Scene.current) {
      Scene.scenes.get(Scene.current).destroy(Scene.values)
    }
    Scene.values = this.init()
    Scene.current = this.name
  }
}
