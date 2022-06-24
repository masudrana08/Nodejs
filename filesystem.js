const fs = require('fs')
const path = require('path')
const filePath = path.join(process.cwd(), 'temp', 'hello.txt')


process.stdin.on('data',  data=>{
    const content = fs.readFileSync(filePath, 'utf-8')
    fs.writeFileSync(filePath, content + '\n' +data.toString().trim())
})