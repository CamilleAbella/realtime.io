const socket = io()

const pingButton = document.getElementById("ping")

pingButton.onclick = () => {
  socket.emit("ping", Date.now())
  console.log("Ping ?")
}

socket.on("pong", (ping) => {
  const message = `Pong ! ${ping} ms`
  pingButton.innerText = message
  console.log(message)
})
