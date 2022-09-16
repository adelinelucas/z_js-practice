const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
    company: {
        type:String,
        required:[true, 'Please provide compagny name'],
        minlength:2,
        maxlength:50
    },
    position: {
        type:String,
        required:[true, 'Please provide position'],
        maxlength:100
    },
    status: {
        type:String,
        enum:['interview', 'declined', 'pending'],
        default: 'pending',
    },
    createdBy: {
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true, 'Please provide user']
    }
}, 
{timestamps:true}
)

module.exports = mongoose.model('Job', JobSchema)


//type:mongoose.Types._ObjectId => on va lier notre création de job à un user 
// on utilse ref pour faire le lienentre 

// timestamps:true permet d'ajouter à notre model le createdAt et le updatedAt  