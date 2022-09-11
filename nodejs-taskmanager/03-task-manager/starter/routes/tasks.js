const express = require('express');
const router = express.Router();
const {getAllTasks, gettask, createTask, updateTask, deleteTask} = require('../controllers/tasks.controller')

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(gettask).patch(updateTask).delete(deleteTask);


module.exports= router;