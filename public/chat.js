'use strict'

const HOST = 'ws://localhost:5001'

const messageElem = document.getElementById('message')
const messagesElem = document.getElementById('messages')
const buttonElem = document.getElementById('submit')

const socket = new WebSocket(HOST, 'protocolOne')
socket.onmessage = (e) => {
  if (e.type === 'message') {
    const liElem = document.createElement('li')
    liElem.innerHTML = e.data
    messagesElem.appendChild(liElem)
  }
}

buttonElem.onclick = () => {
  const message = messageElem.value
  socket.send(message)
  console.log('sended:' + message)
}
