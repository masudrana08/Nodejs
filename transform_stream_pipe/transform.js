const fs = require("fs");
const { Transform } = require("stream");

const rs = fs.createReadStream("./transform_stream_pipe/file.txt");
const newFile = fs.createWriteStream("./transform_stream_pipe/newfile.txt");

const uppercase = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, new Date() + "->" + chunk.toString().toUpperCase());
  },
});

rs.pipe(uppercase).pipe(newFile);
