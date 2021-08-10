const net = require('net')

const server = net.createServer((socket) => {
  socket.on('connect', () => {
    console.log('Cliente conectado!')
  })

  socket.on('end', () => {
    console.log('Cliente desconectado!')
  })

  socket.on('data', (data) => {
    console.log('O cliente disse: ' + data)
  })
})

server.listen(3000, () => {
  console.log('Servidor funcionando!')
})