const express= require('express')

const app = express()
app.use(express.urlencoded() )

app.use(express.static('./public'))

app.post('/login',(req,res)=>{

        console.log(req.body)
        if(req.body.personname =="abhi"  && req.body.personage == Number(22)){
                
        console.log(req.body);
        res.status(200).send('good work')       
        }
        else{
                res.status(401).send("<h1>enter credentials </h1>")
        }
})

app.listen(5000 ,()=>{

        console.log("Server 5000...");
})