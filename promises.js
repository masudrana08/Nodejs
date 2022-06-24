const fs = require('fs').promises
const path = require('path')
const filePath = path.join(process.cwd(),  'temp', 'hello.txt')

// Then Catch
// fs.readFile(filePath, 'utf-8').then(content=>{
//     console.log(content, 'content');
// })
// .catch(err=>{
//     console.log(err);
// })


// Async Await
async function x(){
    const content = await fs.readFile(filePath, 'utf-8')
    try{
        console.log(content);
    }catch(err){
        console.log(err);
    }
} x()
