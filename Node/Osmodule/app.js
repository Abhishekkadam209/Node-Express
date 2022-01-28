
const os =require('os')

const user =os.userInfo()
console.log(user)


console.log(`The system up time is ${os.uptime()} seconds`) // gives system uptime

const Osinfo = {

        name : os.type(),
        release : os.release(),
        TotlMemory : os.totalmem(),
        remainingmemory : os.freemem()

}

console.log(Osinfo)

//here we are just scratching the surface there is more 