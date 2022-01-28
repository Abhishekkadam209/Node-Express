

/*  intro code for express

const express = require('express')

const app = express()

// these are methods express can perform 
//Get 
//Post
//Put
//All
//Delete

// express have different methods for writing in http 

app.get('/',(req,rep)=>{
        rep.status(200).send('First express message')

})

app.get('/about',(req,rep)=>{
    rep.status(200).send('<h1>about page </h1>')

})

app.all('*',(req,rep)=>{
    rep.status(404).send('<h1> Wrong url </h1>')

})

app.listen(4000,()=>{
    console.log('Server is listening on port no 4000...')
})


*/




const express = require('express')
const path = require('path')
const app = express()
app.use(express.static('./public-test1'))

// app.get('/',(req,res)=>{
//     // rep.status(200).send('First express message')

//         // res.sendFile(path.resolve(__dirname,'./index.html'))   imported only css and js file and provided html file
//         // manually but if we add the hrtml file in static folder Express by default serve the index.html file
// })


app.listen(4000,()=>{
    console.log('Server is listening on port no 4000...')
})