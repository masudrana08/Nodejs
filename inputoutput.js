
process.stdin.on('data',  data=>{
    const name = data.toString().trim()
    if(name){
        process.stdout.write(name)
    }else{
        process.stderr.write('empty name')
    }
})