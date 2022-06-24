const fs = require('fs')
const path = require('path')
const filePath = './temp/hello.txt'
fs.watchFile(filePath, (current, previous)=>{
    console.log(current.mtime, previous.mtime);
})