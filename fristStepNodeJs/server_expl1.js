// Système pour écouter des connexions.  
let http = require('http');
let fs = require('fs');

// On créer une variable server 
let server = http.createServer(); 

// on écoute l'évènement ...
server.on('request', (request, response)=>  {
    // lorsqu'une requete arrive, je veux lire le fichier 
    fs.readFile('index.html', (err, data)=>{
        if(err) {
            response.writeHead(400)
            response.end("Ce fichier n'existe pas")
        }else {
            response.writeHead(200, {
                'Content-type': 'text/html; charset=utf-8'
            })
            response.end(data)
        }
        
    })
    console.log('il y a eu une requete auprès du server')
     
    
})
// sur le server 80
server.listen(8080)