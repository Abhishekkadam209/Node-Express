const http = require("http")

const server = http.createServer((req,res)=>{

        // res.write("hello there our server is running")
        // res.end()

    if(req.url === "/" ){
        
            res.end("Home page")

    }

    if(req.url==="/about"){

        res.end("about page")
    }

    else
    {
              res.write(`<h1>Opps !</h1>
                <p>please enter proper address</p>
                <a href='/'>back home</a>
            ` )
                res.end()
    }    
          

})

server.listen(500)

