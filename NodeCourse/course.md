## Node JS
Node JS is an environnement to run JS outside a Browser. 
it's built on chrom's V8 JS engine. 

- Difference between Browser JS and NodeJS
    - no DOM
    - no window
    - server side Apps
    - filesystem
    - based on node JS it's built in version 
    - CommonJS library for the modules

## Commandes 
node --version to know the node version
nvm -list => whow list of node running on our machine with nvm
nvm use 16.15.1 for use a specific version of node. 
in terminal node app.js ==> pour lancer node dans la console.

## Globals
In node there is no window object, we are not in the brower. 
Globals variable => we can acces anywhere in the app. 

    __dirname => pathe tu current directory
    __filename => filename
    require => function tu use modules
    module => infor about current module
    process => info about env where the program is being executed

## Modules
Modules helps us to encapsulate code and only shere whate we want. 
In node every file is a module. 
To visualize the module you can simply console the module console.log(module), and you can see the export object in there. 

### require 
    in order to export 
    module.export = {myVariableToExport , myfunctionToExport}
    module.export = myFunction;
    const items = ['item1, item2]; // alternative synthax module.export.items = ['item1, item2];
    // where I want to import the element I use 
    const var = require('./where ma data came from.js');
RQ: if we create a function in a file and invoke it. and then in app.js we require the file, the function will run in app.js. 

## import
    const items = ['item1, item2];

## OS module
OS module provide useful properties and method for interacting with operating system as well as the server. 
It's a built in module so we don't have to import it. 
const os = require('os');

`````js
const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user)

// method retruns the systems uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory : os.totalmem(),
    freeMemory: os.freemem()
}

console.log(currentOS)
`````

## Path
Another built-in module of nodejs
`````js
const path  = require('path')

// '/' séparator
console.log(path.sep)

// return a normalize resulting path
const filePath = path.join('/folder', 'anotherfolder', 'filename')

// getthe basename
const base = path.basename(filePath)
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')

// the methods are very useful to get the path to a specific file on the server. 
`````

## FS File system.
With FS we can do it synchrounously or asynchronously. 

### Synchronus approach
`````js
const { readFileSync, writeFileSync} = require('fs')

// alternative 
// const fs = require('fs');
// fs.readFileSync();

// read a file 
const frist = readFileSync('./pathToTheFile', 'utf-8');
const second = readFileSync('./anotherPathFile','utf-8');

// write on a file 
// if the file doesn't exist, node will create this file
writeFileSync('./pathWhereToCreateFile', `here is the text I want to write `)
// we can add a 3 arguments which is an object
// here we add flag:'a' so the text we send will be append to the file and not re-write all the file.
writeFileSync('./pathWhereToCreateFile', `here is the text I want to write `, {flag:'a'})
`````

### Asynchronus approach
`````js

const { readFile, writeFile, read} = require('fs')

// the main difference is that we haveto provide a callback

readFile('./pathTotheFile', 'utf8',(err, result)=>{
    // callback function
    if(err) return null;

    console.log(result)
    const firstResult = result;

    // becarefull we enter on the callback hell
    readFile('./secondPathToFile', 'utf8', (err, result)=>{
        if(err) return null;

        console.log(result)
        const secondResult = result;

        writeFile('./pathWhereToWriteFile', `here is the text I want to write ${secondResult} + ${firstResult} `, (err, result)=>{
            if(err) return null;
            // here the result is undefined beacause we are not excepting anything back
            console.log(result)
        })
    })
})
// if we don't provide utf encoding, the function will return a buffer. 
`````

## Util 
Util is another built-in dependency in node, is can help us to provide different functionality like to create more easily Promise. 

`````js
const util = require('util')
const myPromise = util.promisify('whatIwant')
`````

RQ 'fs' provides us promise functionnality: 

`````js
const {readfile, writeFile} = require('fs').promises // now readfile and writeFile are promises
`````

## Async or Sync
Async approches will help us to serve multiple demands, and for exempl if we have various request on our sever we will be able to treat them in parallèle and avoid to have our application down because we are treating one demande after one demande (sync) 

## HTPP 

`````js
const http = require('http');

// create server 
const server = http.createServer((req, res)=>{
    // req => request to the server
    // res => what the serve send back to the request

    if(req.url === '/'){
        res.end('Welcome to home page')
    }
    if(req.url === '/about'){
        res.end('Here is about page')
    }
    res.end(`
        <h1> Oupsi</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">Go back </a>
    `)

    // console.log(req)

    // res.write('Hello there');
    // res.end(); 
    // we end our request
})

// we indicate whate port we will listenning
server.listen(5000);
`````

RQ: a server is done for listenning reqest that are comming, so if we don't terminate the request the server will continue to listen.

Req is a giant object with a lot properties: 
    - url property : what adress the client is requesting, so what end point the client is requesting. 

## NPM 
Allow us to add package to our project to be able to use library, utilies functions, frameworks.... 
-> NPM calls a reusable code a package. 
-> -> A package is essentially a folder that contains a JS code , sharable JS code. 

1. Install a local dependance 
    npm i @packageName
    npm i @packageName -D //  npm i @packageName --save-dev ==> to add the dependency only in dev mode. 
3. Install a global dependance 
    npm i -g @packageName

RQ: package.json is a manifest file stat stores important info about project/package. 
**npm init -y**

### Add commande to package json
To run a command that you've create you have tu run **npm run nomeOfCommand** 

## To uninstall a pacakge 
**npm uninstall packageName**

RQ: Package json file is essential to have the specific version of package that work togheter. 

## Event Loop 
The event loop is what allow nodeJS tp perform non-blocking I/O (input/output) oparations despite the fact that JS is signle-threaded by offloading operation to the system kernel whenever possible. 
The event loop is very interesting for register the callbakc and olny when the operation is complete it execute it. And allows us to manage client request on our website. 

server.listen() is asynchronus so it stay listenning if we make any request. We use the event loop to keep linsting every request comming to the server. 

## Asynchronous pattern
On of the problem of nesting synchrounous action is that it will block the server. We wil have a risk to block the event loop to asynchrounous code will be better. 


## Events 
On a JS apps big part of our work is to handle events. 
That style of programming is called event programming. 
We listen for specific event, register function that will handle this specific event.  
When a event takes place a callback function is lunched. 

````js
const EventEmitter = require('events');

const customEmitter = new EventEmitter();
// on for listen a event
customEmitter.on('response', (name, id)=>{
    console.log(`data recieved ${name} : ${id}`)
})
customEmitter.on('response', ()=>{ // here we don't have argument but it will not affect the function emit.
    console.log(`data recieved`)
})
// emit to fire a event
customEmitter.emit('response','Jhon', 34)`
````
We first listen event before to fire event. 

## Streams
Streams are used to read or write sequentially. 
    writable : write data sequentially
    readable : read data sequentially 
    duplex : write & read data sequentially 
    transform : data can be modified 

Streams extends emitter class. 
If we have a big file, it can be very usefull and allows us to keep the app performance to get the data piece by piece.

````js
const {createReadStream} = require('fs');
const stream = createReadStream('./pathTothefile.txt', {highWaterMark: 9000, encoding: 'utf-8'})

stream.on('data', (result)=>{
    console.log(result) // send us a buffer by default size is 64kb
})
// {highWaterMark: 9000} allow tu adjuste the size of the buffer

stream.on('error', (err)=> console.log(err))
````

````js
// pratical exmpl 

const htpp = require('htpp');
const fs = require('fs');
const { Http2ServerRequest } = require('http2');

http
    .createServer((req, res)=>{
        const text = fs.readFileSync('./pathToMyBIGFile', 'utf-8')
        res.send(text)
    })
    .listen
/// here we don't chunck the data that we send to the client, which can ba probblematique and reduc performance if data are very big. 


http
    .createServer((req, res)=>{
        const fileStream = fs.createReadStream('./pathToMyBIGFile', 'utf-8')
        fileStream.on('open', ()=>{
            fileStream.pipe(res)
            // The readable.pipe() method in a Readable Stream is used to attach a Writable stream to the readable stream so that it consequently switches into flowing mode and then pushes all the data that it has to the attached Writable. 
            // we write data in chuncks
        })
        fileStream.on('error', (err)=>{
            res.end(erro)
        })
    })
    .listen
````

## HTTP Message

Request and Response have both : 
    - start line 
    - headers (option, contain metadata about the request or the response)
    - option body : when the request want a certain ressource on the server, we call it the payload. 

request => what client request from the server
reponse => what server send us to a request 

## HTPP Methods 
    GET / POST / PUT / DELETE 

## Express
### HTPP basics 
````js
const http = require('http');
const server  = http.createServer((req, res)=>{
    console.log('user hit the server')

    // when the user hit the server we have to send a response and use end()
    res.end('Welcome budy')
})

server.listen(5000)
````

### HTTP request object 
````js
const http = require('http');
const server  = http.createServer((req, res)=>{
    console.log('user hit the server')
    console.log(req.method) // to know the method use by the user
    console.log(req.url)// to know the method url request by the user
    // we send hearder infos, metadata bout our response

    const url = req.url;
    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})

        res.write('<h1>Hello there</h1>')
    
        // when the user hit the server we have to send a response and use end()
        res.end()
    }else if (url ==='/about'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h2>About us</h2>')
        res.end()
    }else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<p>La page n\'existe pas !')
        res.end()  
    }
    
})

server.listen(5000)
```` 

### HTTP HTML File
````js
const { readFileSync } = require('fs');
const http = require('http');

// get all files 
// here we use synchronus function beacause we want to charge the page when we arrive on the client, it's not related to any client request specificly. 
const homePage = readFileSync('./index.html'); 
const server  = http.createServer((req, res)=>{

    const url = req.url;
    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})

        res.write(homePage)
    
        // when the user hit the server we have to send a response and use end()
        res.end()
    }else if (url ==='/about'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h2>About us</h2>')
        res.end()
    }else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<p>La page n\'existe pas !')
        res.end()  
    }
    
})

server.listen(5000)
````
````js
const { readFileSync } = require('fs');
const http = require('http');

// get all files 
// here we use synchronus function beacause we want to charge the page when we arrive on the client, it's not related to any client request specificly. 
const homePage = readFileSync('./navbar-app/index.html'); 
const homeStyles = readFileSync('./navbar-app/styles.css'); 
const homeImages= readFileSync('./navbar-app/logo.svg'); 
const homeLogic = readFileSync('./navbar-app/browser-app.js'); 


const server  = http.createServer((req, res)=>{
// we will have to setup all path to request specific ressource. 

    const url = req.url;
    console.log(url)
    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})

        res.write(homePage)
    
        // when the user hit the server we have to send a response and use end()
        res.end()
    }else if (url ==='/about'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h2>About us</h2>')
        res.end()
    }else if (url ==='/browser-app.js'){
        res.writeHead(200, {'content-type': 'text/js'})
        res.write(homeLogic)
        res.end()
    }
    else if (url ==='/styles.css'){
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homeStyles)
        res.end()
    }
    else if (url ==='/logo.svg'){
        res.writeHead(200, {'content-type': 'image/svg+xml'})
        res.write(homeImages)
        res.end()
    }
    
    else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<p>La page n\'existe pas !')
        res.end()  
    }
    
})

server.listen(5000)
````