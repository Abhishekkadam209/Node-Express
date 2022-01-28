const {readFile,writeFile} = require('fs')

//this will work asynchronously 
// so we neeed a call back , call backs are called after the execution of the code in the function

readFile("./first.txt", (err,result1)=>{

        if(err){
            console.log(err)
            return;
        
        }
            
        readFile("./secomd.txt",(err,result2)=>{

            if(err){
                console.log(err)
                return
            }

            writeFile("./fourth.txt",`writing into fourth file ${result1} and ${result2}`,(err,res)=>{

                    if(err){
                        console.log(err)
                    }

                    console.log(" done with writing in fourth file")

            })
 
        })
         
})

console.log(" we are at the end of the file")

// here our output is not as we desire this is because of asynchronous rading and writing
//and condition abouve is calledas call back hell