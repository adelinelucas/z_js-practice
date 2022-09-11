const mongoose = require('mongoose');


const connectDB = (url) => {
    return mongoose
    .connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log(`Connected to the db!`)
        })
    .catch( (err)=> console.log(err, err.message));
}

module.exports = connectDB;