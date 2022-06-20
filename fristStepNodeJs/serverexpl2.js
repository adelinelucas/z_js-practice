// Système pour écouter des connexions.  
let http = require('http');
let fs = require('fs');
let url = require('url');

// On créer une variable server 
let server = http.createServer(); 

// on écoute l'évènement ...
server.on('request', (request, response)=>  {
    response.writeHead(200)
    let query = url.parse(request.url, true).query
    let name = query.name === undefined ? 'anonyme' : query.name

    fs.readFile('index.html', 'utf8', (err, data)=>{
        if(err) {
            response.writeHead(400)
            response.end("Ce fichier n'existe pas")
        }else {
            response.writeHead(200, {
                'Content-type': 'text/html; charset=utf-8'
            })

            data = data.replace('{{name}}', name)
            response.end(data)
        }
        
    })
    
})
// sur le server 80
server.listen(8080)