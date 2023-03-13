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

3. Install a global dependance 
    npm i -g @packageName

RQ: package.json is a manifest file stat stores important info about project/package. 
**npm init -y**