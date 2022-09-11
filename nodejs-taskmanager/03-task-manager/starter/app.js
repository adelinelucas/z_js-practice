const express =require('express');
const app = express();
const connectDB = require('./db/connect');
const bodyParser = require('body-parser')
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler')


// middleware
app.use(express.static('./public'))
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }));
const tasksRoutes = require('./routes/tasks.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// routes
app.use('/api/v1/tasks', tasksRoutes)

//gestion des pages 404
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async() => {
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on port ${port}`));

    }catch(err){
        console.log(err)
    }
}

start();
