const { WebSocketServer, OPEN } = require('ws')
const localtunnel = require('localtunnel')

class WSServer extends WebSocketServer {
  constructor(port) {
    super({ port })
    this.port = port 
  }

  async start(isLT = true) {
    this.startServer()

    if(isLT)
      this.domain = await localtunnel({ port: this.port })
    else {
      this.domain = { 
        url: `ws://localhost:${this.port}`,
        close: () => {}
      }
    }
  }

  startServer() {
    this.on('connection', function connection(ws) {
      ws.on('message', (data, isBinary) => this.sendAll(data, isBinary));
    });
  }

  sendAll(data, isBinary) {
    this.clients.forEach(function each(client) {
      if (client.readyState === OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  }

  close() {
    this.on('close', () => {
      this.domain.close()
    })
    this.clients.forEach(client => client.close())
    super.close()
  }
}

module.exports = WSServer