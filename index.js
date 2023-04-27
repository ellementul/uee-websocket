const cq = require('console-questions')
const WSServer = require('./WsServer/index.js')
const server = new WSServer(8080)

cq.ask("Use local tunnel?", { 
  callback: answer => {
    let isLocaltunnel = answer[0] == "y"

    server.start(isLocaltunnel)
    .then(() => console.log(server.domain.url))
  }
})