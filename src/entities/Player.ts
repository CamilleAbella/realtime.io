import Keyboard from "./Keyboard"
import Session from "./Session"

export default class Player {
  constructor(public id: string, public name: string) {}

  refresh(keyboard: Keyboard) {
    console.log(keyboard.keys)
  }
}
