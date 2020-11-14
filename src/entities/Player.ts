import Session from "./Session"

export default class Player {
  static all = new Map<string, Player>()

  public session: Session | null = null

  constructor(public id: string, public name: string) {}
}
