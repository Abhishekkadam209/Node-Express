const express= require('express')

const app = express()

app.use(express.static('./public'))

app.post('/login',(req,res)=>{
        res.status(200).send('good work')
})

app.listen(5000 ,()=>{

        console.log("Server 5000...");
})