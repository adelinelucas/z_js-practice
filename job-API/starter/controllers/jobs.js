const Job = require('../models/Job');
const {StatusCodes} = require('http-status-codes')
const {NotFoundError,BadRequestError,} = require('../errors')

const getAllJob = async (req, res) => {
    // ici on récupère uniquement les jobs qui matchent avec notre user
    const jobs = await Job.find({createdBy: req.user.userId}).sort('createdAt')
    res.status(StatusCodes.OK).json({jobs, count:jobs.length})

}

const getJob = async (req, res) => {
    const {user:{userId}, params:{id:jobId}} = req
    
    console.log(jobId, userId);
    
    const job = await Job.findOne({
        _id:jobId,
        createdBy:userId
    })
    if(!job){
        throw new NotFoundError(`No job with id${jobId}`)
    }

    res.status(StatusCodes.OK).json({job})
}

const createJob = async(req, res) => {
    // on ajoute dans notre body une entree cretedBy pour correcpont à notre job model
    // on récupère notre user depuis user.userId
    req.body.createdBy= req.user.userId
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({job})
}

const updateJob = async(req, res) => {
    const {
        user:{userId}, 
        params:{id:jobId},
        body: {company, position}
    } = req;

    if(company === '' || position === ''){
        throw new BadRequestError(`Company or Position fields cannot be empty`)
    }

    const job = await Job.findByIdAndUpdate({
        _id:jobId, 
        createdBy:userId
        }, 
        req.body, 
        {new:true, runValidators:true}
    )

    if(!job){
        throw new NotFoundError(`No job with id${jobId}`)
    }

    res.status(StatusCodes.OK).json({job})
}

const deleteJob = async(req, res) => {
    const {
        user:{userId}, 
        params:{id:jobId}
    } = req;

    const job = await Job.findByIdAndRemove({
        _id: jobId,
        createdBy: userId
    })

    if(!job){
        throw new NotFoundError(`No job with id${jobId}`)
    }

    res.status(StatusCodes.OK).send()
}

module.exports = {
    getAllJob,
    getJob,
    createJob,
    deleteJob,
    updateJob
}