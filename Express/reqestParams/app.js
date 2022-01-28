const data = require('../data')
const express =require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>Home page </h1>')
})

// console.log(data);

app.get('/data/:Id',(req,res)=>{
    
    console.log(req.params);
    const datasend = data.find(
        (dt)=> dt.id === Number(req.params.Id)
    )


    if(datasend){
        res.status(200).json(datasend)
    }
    else{
        res.status(404).send('<h1>Data not available </h1>')
    }


})


app.get('/data/:Id/next/:Id2/afterthat/:Id3',(req,res)=>{
    
     console.log(req.params);
     res.send(req.params)

})

app.get('/api/v1/stringquery',(req,res)=>{

    console.log(req.query);     ///you can get many parameters if you want to filter data more
                                //  url would be like  http://localhost:5000/api/v1/stringquery?myquery=2&your=1
                                // and our req.query will be : { myquery: '2', your: '1' }
})




app.listen(5000,()=>{
    console.log("server listening on port no 5000....");
})
// console.log(data);