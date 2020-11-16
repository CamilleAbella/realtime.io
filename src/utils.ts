import Player from "./entities/Player"

export const DEBUG: boolean = !!process.env.DEBUG
export const PORT = process.env.PORT ?? 6627
export const MAX_PLAYER_COUNT = Number(process.env.MAX_PLAYER_COUNT ?? 10)
export const MAP_WIDTH = Number(process.env.MAP_WIDTH ?? 2000)
export const MAP_HEIGHT = Number(process.env.MAP_HEIGHT ?? 2000)
export const SECURITY_DISTANCE = Number(process.env.SECURITY_DISTANCE ?? 200)

export const QUEUE: any[] = []
export const PLAYERS: (any & { player: Player })[] = []

export function queueUpdated() {
  QUEUE.forEach((socket, index) => {
    socket.emit(
      "queue",
      `Position in the queue: ${index + 1} / ${QUEUE.length}`
    )
  })
}

export function gameUpdated() {
  PLAYERS.forEach((socket) => {
    socket.emit(
      "update",
      PLAYERS.map((s) => s.player)
    )
  })
}

export function logState(message: string) {
  console.log(message)
  console.table({
    players: PLAYERS.length,
    queue: QUEUE.length,
  })
}
