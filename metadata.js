const fs = require('fs')
const path = require('path')
const filePath = path.join(process.cwd(),'temp','hello.txt')
const file = process.argv[1]

// function printMetadata(f){
//     const fileStats = fs.statSync(f)
//     console.log(fileStats);
// }
// printMetadata(filePath)

console.log(fs.lstatSync(filePath));