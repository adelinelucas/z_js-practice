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