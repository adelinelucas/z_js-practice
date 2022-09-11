const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, 'must provide a name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characteres'],
        minlength:[2, 'name can not be less than 2 characteres']
    },
    completed: {
        type:Boolean,
        default: false,
    }
})

module.exports = mongoose.model('Task', TaskSchema)