const express =require('express');
const Task = require('../models/tasks');
const asyncWrapper = require('../middleware/async');

const {CustomAPIError, createCustomError} = require('../errors/custom-error')

// avant refacto avec le middleware
// const getAllTasks = asyncWrapper(async(req, res) => {
//     try{
//         const tasks = await Task.find({})
//         // on peut ajouter plusieurs infos dans nos réponses json
//         //res.status(201).json({tasks})
//        // res.status(201).json({success:true, data: {tasks, nbHits: tasks.length }})
//         res.status(201).json({tasks, amount:tasks.length, success:"success"})
//     }catch(err){
//         res.status(500).json({message : err})
//     }
// })

// const gettask = async (req, res) => {
//     try{
//         const {id: taskID} = req.params;
//         const task = await Task.findOne({_id:taskID});

//         if(!task){
//             return res.status(404).json({message: `No matching task with id:${taskID}`});
//         }
//         console.log(req.body)
//         res.status(200).json({task})
//     }catch(err){
//         res.status(500).json({message : err})
//     }
// }

// const createTask = async (req, res) => {
//     try{
//         const task = await Task.create(req.body)
//         console.log(req.body)
//         res.status(201).json({task})
//     }catch(err){
//         res.status(500).json({message : err})
//     } 
// }
// const updateTask = async(req, res) => {
//     try{
//         const {id:taskID} = req.params;
//         const updatedTask = await Task.findOneAndUpdate({_id: taskID}, req.body, {
//             new: true, 
//             runValidators:true
//         })
//         if(!updatedTask) {
//             return res.status(404).json({message: `No matching task with id:${taskID}`});
//         }
//         res.status(201).json({updatedTask})
//     }catch(err){
//         res.status(500).json({message : err})
//     }

// }

// const deleteTask = async (req, res) => {
//     try{
//         const {id:taskID} = req.params;
//         const deletedTask = await Task.findOneAndDelete({_id: taskID})
//         if(!deletedTask) {
//             return res.status(404).json({message: `No matching task with id:${taskID}`});
//         }
//         res.status(201).json({deletedTask})
//         // autres synthaxe 
//         // res.status(201).send()
//         // res.status(201).json({task: null, status: 'success'})
//     }catch(err){
//         res.status(500).json({message : err})
//     }
// }

const getAllTasks = asyncWrapper(async(req, res) => {
    const tasks = await Task.find({})
    res.status(201).json({tasks, amount:tasks.length, success:"success"})
})

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})
})

const gettask = asyncWrapper(async (req, res) => {
    const {id: taskID} = req.params;
    const task = await Task.findOne({_id:taskID});

    if(!task){
        return next(createCustomError(`No matching task with id:${taskID}`, 404))
    }
    console.log(req.body)
    res.status(200).json({task})
})

const updateTask = asyncWrapper(async(req, res) => {
    const {id:taskID} = req.params;
    const updatedTask = await Task.findOneAndUpdate({_id: taskID}, req.body, {
        new: true, 
        runValidators:true
    })
    if(!updatedTask) {
        return next(createCustomError(`No matching task with id:${taskID}`, 404))
    }
    res.status(201).json({updatedTask})
})

const deleteTask = asyncWrapper(async (req, res) => {
    const {id:taskID} = req.params;
    const deletedTask = await Task.findOneAndDelete({_id: taskID})
    if(!deletedTask) {
        return next(createCustomError(`No matching task with id:${taskID}`, 404))
    }
    res.status(201).json({deletedTask})
})

module.exports = {
    getAllTasks,
    gettask,
    createTask,
    updateTask,
    deleteTask
}