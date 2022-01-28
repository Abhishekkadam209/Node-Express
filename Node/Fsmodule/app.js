const {readFileSync , writeFileSync} = require('fs')
const { writer } = require('repl')

const first = readFileSync("./first.txt","utf8")
const second = readFileSync("./secomd.txt","utf8")

console.log(first,second)

writeFileSync("./third.txt",`writing through app.js , ${first} writing second file ${second}`)//if there is no file presnt the it will create 
//new file and if there  is some content in the file the it will be over ridden

// to append the file we need to add one more flag

writeFileSync("./third.txt","appended text ", {flag : 'a' } ) // third flag will append

// Creating big file

