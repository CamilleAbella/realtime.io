import Player from "./Player"

export default class Session {
  static all: Session[] = []

  public players: Player[] = []

  constructor(public id: string) {
    Session.all.push(this)
  }
}
