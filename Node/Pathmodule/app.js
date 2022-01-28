const path = require('path')

console.log(path.sep) //seperator for my os 
console.log()


const filepath = path.join('/Pathmodule/','tempfolder','temp.txt')
console.log(filepath) // gives path to the given file


// we can also get base filr using file path

console.log(` base file in the path is : ${path.basename(filepath)}`)

// path resolve methode


const absolute = path.resolve(__dirname,'tempfolder','temp.txt')
console.log("Absolute path to the file is :")
console.log(absolute)

const abs = path.join(__dirname,'tempfolder','temp.txt')
console.log("Absolute path to the file is :")
console.log(abs)

console.log("extension in our file in given path is :")
console.log(path.extname(filepath))//gives the extension of the file in our path