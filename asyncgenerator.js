const fs = require('fs')

// const {Readable} = require('stream')
// async function* generate(prop){
//     yield 'Nodejs'
//     yield 'ExpressJs'
//     yield 'MongoDb'
    
// }

// const readable = Readable.from(generate([ 'amar', 'sonar', 'bangla' ]))
// readable.on('data', chunk=>{
//     console.log(chunk);
// })

const rs = fs.createReadStream('./temp/hello.txt')
rs.on('readable', ()=>{
    const data = rs.read()
    if(data !==null){
        console.log(data.toString());
    }
})


// fs.readFile('./temp/hello.txt', 'utf-8', (err, content)=>{
//     console.log(content, 'content');
// })

