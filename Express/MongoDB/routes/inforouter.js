const express = require('express')
const infoRouter = express.Router()

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const dbname= "info"


infoRouter.route("/")
.get((req,res,next)=>{

        // res.status(200).send("get method")

        MongoClient.connect( url , (err,cliant)=>{

            if(err){
                
               return  res.send(err)
            }

             const db =  cliant.db(dbname)
             const collection = db.collection("basicinfo")

             collection.find({}).toArray((err,doc)=>{
                        
                    if(err){
                        
                        return  res.send(err)
                    }

                    cliant.close()
                 return  res.status(200).json(doc);

                    

             })



        })


})
.post((req,res,next)=>{

    // res.status(200).send("post method")

    MongoClient.connect(url , (err,cliant)=>{

        if(err){
            return res.send(err);
        }

       const db=cliant.db(dbname)
        const collection=db.collection("basicinfo")

        collection.insertMany(req.body,(err,docs)=>{

                if(err){
                    return res.send(err)
                }

                    cliant.close()
                return res.status(200).json(docs);   
                
                // displays status, count and ids of inserted docments as :
                                                        
                    // {
                    //     "acknowledged": true,
                    //     "insertedCount": 2,
                    //     "insertedIds": {
                    //         "0": "61f96e2e9f975320bff57ce1",
                    //         "1": "61f96e2e9f975320bff57ce2"
                    //     }
                    // }

        })


    })



})
.put((req,res,next)=>{

    res.status(200).send("put method")

})
.delete((req,res,next)=>{

    // res.status(200).send("Delete method")

    MongoClient.connect(url, (err,cliant)=>{

                    if(err){
                        res.send(err)
                    }

                    const db= cliant.db(dbname)
                    const collection = db.collection("basicinfo");

                    collection.deleteMany(req.body,(err,doc)=>{
                        if(err){
                            res.send(err)
                        }
                        
                        cliant.close()
                        return res.status(200).json(doc)

                    })

    })

});

module.exports = infoRouter;
