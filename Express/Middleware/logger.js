
const logger = (req,res,next) =>{

    console.log( "logger : " + req.method +" "+ req.url +" "+  new Date().getDate());
    // console.log(req.url);
    // console.log(  new Date().getDate() );

        next()

}

module.exports = logger