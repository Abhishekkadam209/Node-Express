const http = require('http')
const {readFileSync} = require('fs')
 
const server = http.createServer((req,res)=>{

    const url= req.url

        if(url==='/'){

                const filecontent =readFileSync ('./index.html')

            res.writeHead(200,{'content-type' : 'text/html'})  
                        // res.write('<h1>Hi there </h1>  <h2> Home page</h2>')      
            res.write(filecontent)
            res.end()
        }

        else if(url === '/about'){

            res.writeHead(200,{'content-type' : 'text/html'}) // we can write meta data in this method *if you chang type to plain the content will be with tags
            res.write('<h1>Hi there This is about page </h1>')                     // we can directil write in end() but this approach is preffered
            res.end()
        }

        else 
        {
            res.writeHead(404,{'content-type' : 'text/html'}) // we can write meta data in this method *if you chang type to plain the content will be with tags
            res.write(
                `<h1>Hi there  please enter proper url </h1>  
                <a href="/">Home</a>`  )                      
            res.end()
        }
            
        // res.writeHead(200,{'content-type' : 'text/html'}) // we can write meta data in this method *if you chang type to plain the content will be with tags
        // res.write('<h1>Hi there </h1>')                     // we can directil write in end() but this approach is preffered
        // res.end()

})


server.listen(4000)