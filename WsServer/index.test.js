const WSServer = require('./index')

describe('WebSocket Server', () => {
  test('start server', async () => {
    const server = new WSServer(8080)
    await server.start(false)
    expect(server.domain.url).toBe("ws://localhost:8080")
    server.close()
  });
});

describe('Via localtunnel', () => {
  test('start server', async () => {
    const server = new WSServer(8080)
    await server.start(true)
    expect(server.domain.url).toBeDefined()
    server.close()
  });
});