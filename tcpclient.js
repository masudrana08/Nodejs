const net = require('net')
const hostname = 'localhost'
const port = 4000

const socket = net.connect(port, hostname)
socket.on("data", data=>{
    console.log(data.toString());
})
process.stdin.on('data', data=>{
    socket.write(data.toString())
})