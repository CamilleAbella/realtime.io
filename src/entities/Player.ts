import * as utils from "../utils"

export default class Player {
  constructor(
    public id: string,
    public x: number = 0,
    public y: number = 0,
    public r: number = 0
  ) {}

  distTo(player: Player): number {
    const a = this.x - player.x
    const b = this.y - player.y
    const dist = Math.sqrt(a * a + b * b)
    return dist - player.r - this.r
  }

  placeInMap() {
    do {
      this.x = Math.random() * utils.MAP_WIDTH
      this.y = Math.random() * utils.MAP_HEIGHT
    } while (
      utils.PLAYERS.some((socket) => {
        return (
          socket.player !== this &&
          socket.player.distTo(this) < utils.SECURITY_DISTANCE
        )
      })
    )
  }
}
