const {Transform} = require('stream')

const Name = Transform({
    objectMode: true,
    transform({fname, lname}, encoding, callback){
        const data = 'My name is '+ fname +' '+ lname
        callback(null, data)
    }
})

const uppercase = new  Transform({
    objectMode: true,
    transform(chunk, encoding, callback){
        callback(null, JSON.stringify(chunk))
    }
})


Name.pipe(process.stdout)
uppercase.pipe(process.stdout)

uppercase.write({fname:'hey', lname:'bro'})  
Name.write({fname:'masud', lname:'rana'})