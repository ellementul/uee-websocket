import WSServer from './WsServer/index.js'
const server = new WSServer(8080)
await server.start()
console.log(server.domain.url)