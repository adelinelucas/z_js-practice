require('dotenv').config();
const { application } = require('express');
const express = require('express')
// asyncs errors package pour tester nos routes et faire les try and catch
require('express-async-errors');

const app = express();

//db 
const connectDB = require('./db/connect') ;
const productsRouter = require('./routes/products')

// middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

app.use(express.json())

//routes
app.get('/', (req, res)=>{
    res.send('<h1>Store Api</h1> <a href="/api/v1/products" >products routes</a>')
})

app.use('/api/v1/products', productsRouter)

// product route 

// appel des middlewares
app.use(notFoundMiddleware)
app.use(errorMiddleware)
const PORT= process.env.PORT || 3000

const start = async() => {
    try{
        // connect DV
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, console.log(`Server listening port ${PORT}`))
    }catch(err){
        console.log(err)
    }
}
start()