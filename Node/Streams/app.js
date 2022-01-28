// for creating big file 

// const {writeFileSync} = require('fs')

// for (let i=0 ;i <15000 ;i++){

//     writeFileSync("./bigfile.txt",`Line  no ; ${i} \n` , {flag : 'a' }  )
// }

const { createReadStream} = require('fs')

const stream= createReadStream("./bigfile.txt",{highWaterMark:40000 ,encoding : 'utf8' })

stream.on('data',(result)=>{
    console.log(result)
})

stream.on('error',(err)=>{     // if u notice our stream is listning on events ,, events we used are data and error
    console.log(err)
})

// by drefault buffer size is 64kb you can set or change it using flags
//also you can change encoding ex utf8