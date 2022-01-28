const logger = require('./logger')
const express = require('express')
const morgan =require('morgan')

const app = express()

// app.use([logger,morgan('tiny')])

// app.use([logger])   // use this 

// or

app.use('/home',[logger])   // **** Will be applicable to anu url starting with /home

app.get('/home',(req,res)=>{

        // console.log("Home page");
        res.status(200).send("Home page")
})

app.get('/about',morgan('tiny'),(req,res)=>{

    // console.log("Home page");
    res.status(200).send("About page")
})

app.all('*',[logger,morgan('tiny')],(req,res)=>{

    // console.log("Home page");
    res.status(404).send("enter proper url")
})

app.listen(5000,()=>{
    console.log("Server listening on port no 5000...");
})