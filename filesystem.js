const fs = require("fs");
const path = require("path");
const filePath = path.join(process.cwd(), "temp", "hello.txt");

// Synchronous
// process.stdin.on('data',  data=>{
//     const content = fs.readFileSync(filePath, 'utf-8')
//     fs.writeFileSync(filePath, content + '\n' +data.toString().trim())
// })

// Asynchronous
// process.stdin.on("data", (data) => {
//   fs.readFile(filePath, "utf-8", (err, content) => {
//     if (err) throw err;
//     if (!err) {
//       fs.writeFile(
//         filePath,
//         content + "\n" + data.toString().trim(),
//         (err2) => {
//             if (err2) throw err2;
//             console.log('file updated');
//         }
//       );
//     }
//   });
// });

// Organize and Recommended way
process.stdin.on("data", (data) => {
  fs.readFile(filePath, "utf-8", (err, prevContent) => {
    if (err) throw err;
    updateFile(filePath, prevContent, data);
  });
});


function updateFile(fPath, pContent, currentContent) {
  fs.writeFile(
    fPath,
    pContent + "\n" + currentContent.toString().trim(),
    (err2) => {
      if (err2) throw err2;
      console.log("file updated");
    }
  );
}
