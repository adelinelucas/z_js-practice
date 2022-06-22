const express = require('express'); 
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;

const {PostsModel} = require('../models/postsModel')

router.get('/', (request, response)=>{
    PostsModel.find((err, docs) => {
        if(!err) response.send(docs)
        else console.log("Error to get data" + err)
    })
})

// envoi des données
router.post('/', (request, response)=>{
    const newRecord = new PostsModel({
        author: request.body.author,
        message: request.body.message
    });

    newRecord.save((err, docs)=>{
        if(!err) response.send(docs);
        else console.log('Error creating new data :' + err)
    })
})

// modification des données 
router.put('/:id',(request, response)=>{
    if(!ObjectID.isValid(request.params.id)){
        return response.status(400).send("ID unknow : " + request.params.id)
    }
    const updateRecord = {
        author: request.body.author,
        message: request.body.message
    }
   
    PostsModel.findByIdAndUpdate(
        request.params.id,
        {$set: updateRecord},
        {new: true},
        (err, docs) =>{
            if(!err) response.send(docs)
            else console.log("Update error: " + err);
        }
    )

})

// delete d'un post 
// modification des données 
router.delete('/:id',(request, response)=>{
    if(!ObjectID.isValid(request.params.id)){
        return response.status(400).send("ID unknow : " + request.params.id)
    }
       
    PostsModel.findByIdAndRemove(
        request.params.id,
        (err, docs) =>{
            if(!err) response.send(docs)
            else console.log("Delete error: " + err);
        }
    )
})

module.exports = router