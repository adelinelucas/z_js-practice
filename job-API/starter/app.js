require('dotenv').config();
require('express-async-errors');

// extra security package
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');
 

const express = require('express');
const app = express();

//connect DB
const connectDB = require('./db/connect')
const authUser = require('./middleware/authentication')

//routers
const authRouter = require('./routes/auth');
const jobRouter = require('./routes/jobs')

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// configure proxy for cors policy 
app.set('trust proxy', 1 );


app.use(express.json());
// extra packages
app.use(helmet());
app.use(cors());
app.use(xss());
// limiter les requêtes réalisée par un utilisateur sur une période données pour éviter les tentatives de hacker
app.use(rateLimiter({
  windowMS: 15*60*100,
  max: 100, 
}))

// deployement part
/* 
app.get('/', (req, res) => {
    res.send('job api')
})
*/

// routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs',authUser, jobRouter)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
