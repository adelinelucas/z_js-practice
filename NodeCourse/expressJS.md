## Express 
is a framework. 

### Basic setup 
````js
const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.status(200).send('Home Page')
})

app.get('/about', (req, res)=>{
    res.status(200).send('About Page')
})
// handel all HTPP verbs
app.all('*', (req, res)=>{
    res.status(404).send('<h1>The page doesn\'t exist ! </h1>')
})
app.listen(5000, ()=>{
    console.log('server is listenning port 5000');
})
// app.use is for use middleware 
````

USE 
app.use allow us to setup static and middleware. 

**Static** it is a file that server doesn't have to change it. Common name for this folder is public. 

````js
const express = require('express');
const app = express();

// 
const path = require('path');

// here static allow us to point directly to the folder we want in order to allow the app.get to load files. 
app.use(express.static('./navbar-app'))

app.get('/', (req,res)=>{
    //console.log(__dirname) =>>> C:\Users\Adeline\Desktop\webdev\JS\nodeJS\02-express-tutorial
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*', (req,res)=>{
    res.status(404).send("The ressource is not found !")
})
app.listen(5000, ()=>{
    console.log('server is listenning port 5000');
})
// app.use is for use middleware 
````
## API vs SSR
With express you will use : setup API or template with server side rendering (SSR). 
Here when we talk about setup API we talk of en http interface to interact with our data. Our data is sent using JSON

SSR : we will set up templates and send back entire html and CSS and JS ourselves. Using res.render(). 


### JSON Basics 
````js
const express= require('express');
const app = express();
const {products} = require('./data.js')


app.get('/', (req, res)=>{

    // we send back a json response. the response that is the parameter converted to a JSON string using JSON.stringify()
    res.json(products)
})
app.listen(5000, ()=>{
    console.log("Server is listening on port 5000")
})
````

### Route params 
````js
app.get('/api/products', (req, res)=>{
    const newProduct = products.map((product)=>{
        const {id, name, image} = product;
        return {id, name, image}
    })
   res.json(newProduct)
})

// app.get('/api/products/1', (req, res)=>{
//     const singleProduct = products.find((product)=> product.id === 1)
//    res.json(singleProduct)
// })
// instead of hard coding we will route the arams 
app.get('/api/products/:productID', (req, res)=>{
    console.log(req.params)
    const {productID} = req.params;
    const singleProduct = products.find((product)=> product.id === Number(productID))

    if(!singleProduct) return res.status(404).send("Oups, the ressource doesn't exist ! ")

    res.json(singleProduct)
})
````

mode comple url request 
````js
app.get('/api/products/:productID/reviews/:reviewID', (req,res)=>{
    res.send('Hello there !')
})
````

### Query string parameters // URL parameters

It's a way to send small information to the server using the url. 
Whats is after the question mark is thechnicly not part of the url, meaning a way for us to send data to the server and the server decide what to do with the data. 

It's server side that you have to decide what parameters can be accepted from client request. 
Query string parameters helps to filter/ sort data received from the server **".../shearch?query=t&tags=story"**
After the question mark if the setup is supported by the server, you can add these key/ values pairs.
````js
app.get('/api/v1/query', (req,res)=>{
    // acces to those query parameters
    // http://localhost:5000/api/v1/query?search=a&limit=2
    console.log(req.query)
    let sortedProducts = [...products];
    const {search, limit} = req.query;

    if(search){
        sortedProducts  = sortedProducts.filter((product) =>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    if(sortedProducts.length < 1){
        // return res.status(200).send("no procudts matched your request");
        // other option
        return res.status(200).json({success: true, data:[]})
    }
    res.status(200).json(sortedProducts);
    // res.send('HelloooO');
})
````

## Middleware
Middlare are functions that execute during the request to the server . Eache middleware function avec access to request and response objects. 
Middleware are everywhere in express.
Middleware stands in between request and the response
request =====>> middleware =====>>  response

We stuck the middleware between the path and the callback function.
Express supplies for us the request, allow us to modify the response, and say what we do next.
````js
// req => middleware => response

// middleware logger
// express supplies for us the request, allow us to modify the response, and say what we do next. 
const logger = (req, res, next)=>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time)
    // next allow us to pass to the next middleware unless you set up the response youself res.send('my response')
    next();
}

// we stuck the middleware between the path and the callback function.
app.get('/',logger, (req, res)=>{
    res.send('Home')
})

app.get('/about',logger, (req, res)=>{
    res.send('About')
})
````

We can use the "use" fonctionnality of express to apply our middleware to all our routes. 
````js
// to apply  the middleware to all routes 
app.use(logger)
````

````js
app.get('/', (req, res)=>{
    res.send('Home')
})

// here get is befor applying the middleware so it is not concerned
// to apply  the middleware to all routes 
app.use(logger)

app.get('/', (req, res)=>{
    res.send('Home')
})

app.get('/about', (req, res)=>{
    res.send('About')
})
````

RQ we can prodive a specific route to the use. 
````js
// here get is befor applying the middleware so it is not concerned
// to apply  the middleware to all routes 
app.use('/api', logger)
````

RQ/ we can exceute several middleware in app.use
RQ :  becarful because they will be excute in the order.
````js
// exceute multiples middlewares in app.use
app.use([logger, authorize])
````
````js
const authorize = (req, res, next) =>{
    console.log('authorized');
    const {user} = req.query;
    if(user === 'ade'){
        req.user= {name: 'Ade', id:4}
        next();
    }
    else{
        res.status(401).send('Unanthorized')
    }
}
````

For middleware we have several option : 
- our middleware 
- express built in middleware  
    **app.use(express.static('./public))** this middleware will help us to charge ton fils that we will not change.
- third party middflvare
    **morgan** 
````js
const morgan = require('morgan')
app.use(morgan('tiny'))
````

## GET Method 
Default method that the browser performs 
````js
app.get('/api/people', (req,res)=>{
    res.status(200).json({success:true, data: people})
})
````

## POST Method 
In order to insert data. 
When we use a POST method in order to send the data to the server, we will use the body. 
````js
// parse form data 
// middleware to acces the data
app.use(express.urlencoded({extended: false}))
// it parses incoming request with urlencoded and is base on body-parser
// in previous version of express you have to install the body parser
app.post('/login',(req,res)=>{
    console.log(req.body)
    const {name} = req.body; 
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide credentials')
})
````

RQ: event the url is the same, is the HTPP method is different it is not the same url. 

#### expl with JS fetched data
````js
// to handle json data 
app.use(express.json())

app.get('/api/people', (req,res)=>{
    res.status(200).json({success:true, data: people})
})

app.post('/api/people/', (req, res)=>{
    const {name } = req.body;
    if(!name){
        return res.status(400).json({success:false, msg:'please provide a name value'})
    }
    res.status(201).json({success:true, person: name})
})
````

## PUT Method
This method is for editing the data. 
````js
app.put('/api/people/:id', (req,res)=>{
    const {id} = req.params;
    const {name} = req.body;
    console.log(id, name)
    
    const person = people.find((person) => person.id === Number(id))
    if(!person){
        return res.status(404).json({success:false, msg:`no person width id ${id}`})
    }

    const newPerson = people.map((person)=>{
        if(person.id ===Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({success:true, data: newPerson})
})
````

## DELETE Method
````js
app.delete('/api/people/:id', (req, res)=>{
    const person = people.find((person) => person.id === Number(req.params.id))
    if(!person){
        return res.status(404).json({success:false, msg:`no person width id ${req.params.id}`})
    }

    const newPeople = people.filter((person)=>person.id !== Number(req.params.id))
    return res.status(200).json({success:true, data: newPeople})
})
````

## Express Router 
Express router will help us to manage our route more easily. 

- in app.js file 
````js
// import our router 
const pleopleRouter = require('./routes/people')
const loginRouter = require('./routes/auth')

//....
// we use a predefine route for our one router
app.use('/login',loginRouter)
app.use('/api/people',pleopleRouter)
````

- in routes folder for each file of routes
````js
const express = require('express');

// we invoke express router
const router = express.Router();

router.post('/',(req,res)=>{
    console.log(req.body)
    const {name} = req.body; 
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide credentials')
})

module.exports = router
````

## Express Controller

The MVC structure of file will really help to clear the functionality and havbe a better set up for our server app. 


- router file 
````js
const express = require('express');
const {getPeople, createPerson, createPersonPostman, updatePerson, deletePerson} = require('../controllers/people.controller')

// we invoke express router
const router = express.Router();

router.get('/',getPeople)
router.post('/postman',createPersonPostman )
router.post('/',createPerson )
router.put('/:id',updatePerson )
router.delete('/:id', deletePerson)


// another way to writes routes 
router.route('/').get(getPeople).post(createPerson).post(createPersonPostman)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router
````
- controller files
````js 
let {people} = require('../data.js')

const getPeople = (req, res) =>{
    res.status(200).json({success:true, data: people})
}

const createPerson = (req, res)=>{
    const {name } = req.body;
    if(!name){
        return res.status(400).json({success:false, msg:'please provide a name value'})
    }
    res.status(201).json({success:true, person: name})
}

const createPersonPostman = (req, res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success:false, msg:'please provide a name value'})
    }
    res.status(201).json({success:true, data: [...people, name]})

}

const updatePerson = (req,res)=>{
    const {id} = req.params;
    const {name} = req.body;
    console.log(id, name)
    
    const person = people.find((person) => person.id === Number(id))
    if(!person){
        return res.status(404).json({success:false, msg:`no person width id ${id}`})
    }

    const newPerson = people.map((person)=>{
        if(person.id ===Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({success:true, data: newPerson})
}

const deletePerson = (req, res)=>{
    const person = people.find((person) => person.id === Number(req.params.id))
    if(!person){
        return res.status(404).json({success:false, msg:`no person width id ${req.params.id}`})
    }

    const newPeople = people.filter((person)=>person.id !== Number(req.params.id))
    return res.status(200).json({success:true, data: newPeople})
}

module.exports = {getPeople, createPerson, createPersonPostman, updatePerson, deletePerson}
