const express = require('express')
const infoRouter = express.Router()



infoRouter.route("/")
.get((req,res,next)=>{

        res.status(200).send("get method")

})
.post((req,res,next)=>{

    res.status(200).send("post method")

})
.put((req,res,next)=>{

    res.status(200).send("put method")

})
.delete((req,res,next)=>{

    res.status(200).send("Delete method")

});

module.exports = infoRouter;
