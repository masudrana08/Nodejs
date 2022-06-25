const fs = require("fs");
// const writeStream = fs.createWriteStream('./temp/hello.txt')
const readStream = fs.createReadStream("./temp/hello.txt");

// for (let i = 0; i <= 1000; i++) {
//     writeStream.write(
//     "Node.js is a JavaScript runtime built on Google Chrome's V8 JavaScript engine.\n"
//     );
//    }

// readStream.on("data", (data) => {
//   console.log(data.toString());
// });

// readStream.on("end", () => {
//   console.log("No more data.");
// });

readStream.on('close', ()=>console.log('closed'))
// process.stdin.on('data', data=>{
//     writeStream.write(data.toString())
// })