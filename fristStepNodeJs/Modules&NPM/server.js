// let direBonjour = require('./hello')
// // pour ne pas mélanger avec les modules, on indique le chemin relatif pour importer nos modules;

// direBonjour.hello()
// direBonjour.auRevoir()



// // la gestion de ma connexion est exportée dans un fichier séparé. 
// let app = require('./app').start(8080)
// app.on('root', (response)=>{
//     response.write('je suis à la racine')
// })

// let _ = require('lodash');

// console.log(_.map([1,2,3], (n)=>{return n*3;}));


// test d'express 
let appexpress = require('express')();
appexpress.get('/', (request, response) =>{
    response.send('Salut tu es à la racine')
})

appexpress.get('/demo', (resquest, response)=>{
    response.send('Salut tu es sur la page démo')
})

appexpress.listen(8080);