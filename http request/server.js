const fs = require('fs')
const path = require('path')
const http = require('http')
const formidable = require("formidable");
const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Access-Control-Max-Age": 2592000, // 30 days
    /** add other headers as per requirement */
  };
http.createServer((req, res)=>{
    if(req.method == 'POST'){
        const form = formidable({ multiples: true, uploadDir:'./upload' });

        form.parse(req, (err, fields, files) => {
            console.log(files);
            
          if (err) {
            res.writeHead(400, headers);
            res.end(String(err));
            return;
          }
          res.writeHead(200, headers);
          res.end(JSON.stringify({ fields, files }, null, 2));
        });
    }
}).listen(4000)