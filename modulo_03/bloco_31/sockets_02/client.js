const net = require('net')

const client = net.connect({ port: 3000 }, () => {
  console.log('Cliente conectado ao servidor')

  client.write('Cliente acabou de entrar!!!')
})