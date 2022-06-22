const express = require('express'); 
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/postsController');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const cors = require('cors');

// mongoose.set('useFindAndModify', false);



// middleware : fonction qui va etre regarder les responses et request pour eventuellement réaliser des traitements.
app.use(bodyParser.json())
// on ouvre l'accès de l'api à des requetes externes.
// si on veut restreint à une origine on ferait => app.use(cors('https://adressedusite'))
app.use(cors())
app.use('/posts', postsRoutes)
app.listen(8080, () => console.log('server.started : 8080'))