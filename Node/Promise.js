
const { readFile,writeFile } = require('fs').promises
 


const start = async () =>{

    try{
        const res = await readFile('./Fsmodule/first.txt','utf8')    
        const res2 = await readFile('./Fsmodule/secomd.txt','utf8')

        await writeFile('./Fsmodule/third.txt','Writing in third.txt through promise function again ')    
        
        console.log(res,res2)
    }
    catch(err){
                console.log(err)
    }
 
}

start()







/* Third way */
// const { readFile,writeFile } = require('fs')
// const util = require('util')

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile) 
 

// const start = async () =>{

//     try{
//         const res = await readFilePromise('./Fsmodule/first.txt','utf8')    
//         const res2 = await readFilePromise('./Fsmodule/secomd.txt','utf8')

//         await writeFilePromise('./Fsmodule/third.txt','Writing in third.txt through promise function ',(result)=>{
//                 console.log("check third file")

//         })    
        
//         console.log(res,res2)
//     }
//     catch(err){
//                 console.log(err)
//     }
 
// }

// start()




/* second way */

// const { readFile } = require('fs')

// const gettext = (path) => {

//     return new Promise((resolve , reject) => {
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
 
//         })
//      })
// }
 

// const start = async () =>{

//     try{
//         const res = await gettext('./Fsmodule/first.txt')    
//         const res2 = await gettext('./Fsmodule/secomd.txt')
//         console.log(res,res2)
//     }
//     catch(err){
//                 console.log(err)
//     }
 
// }

// start()




//first example 
// gettext('./Fsmodule/first.txt')
// .then((result)=>{
//     console.log(result)
// })
// .catch((err)=>console.log(err))