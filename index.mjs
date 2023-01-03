import { question } from 'zx'
import WSServer from './WsServer/index.js'
const server = new WSServer(8080)

let answer = await question('Use local tunnel? ')
let isLocaltunnel = answer[0] == "y" 

await server.start(isLocaltunnel)
console.log(server.domain.url)