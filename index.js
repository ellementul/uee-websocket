const cq = require('console-questions')
const WSServer = require('./WsServer/index.js')
const server = new WSServer(8080)

server.start()