import Player from "./Player"

export default class Session {
  static all = new Map<string, Session>()

  public players = new Map<string, Player>()

  constructor(public id: string) {}

  addPlayer(player: Player) {
    this.players.set(player.id, player)
  }
}
