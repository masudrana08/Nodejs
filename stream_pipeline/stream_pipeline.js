const fs = require("fs");
const { pipeline, Transform } = require("stream");
const rs = fs.createReadStream("./stream_pipeline/file.txt")
const ws = fs.createWriteStream("./stream_pipeline/newfile.txt")
const uppercase = new Transform({
  transform(chunk, encoding, callback) {
    // Data processing
    callback(null, chunk.toString().toUpperCase());
  },
});

pipeline(
  rs,
  uppercase,
  ws,
  (err) => {
    if (err) console.log(err)
    console.log('done')
  }
);
