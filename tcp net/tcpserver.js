const net = require('net')
const hostname = 'localhost'
const port = 4000

net.createServer((socket)=>{
    console.log('client connected');
    process.stdin.on('data', data=>{
        socket.write(data.toString())
    })
    socket.on('data', data=>{
        console.log(data.toString());
    })
})
.listen(port, hostname)


