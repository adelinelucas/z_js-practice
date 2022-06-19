let getHttpResquest = function (){
    var httpRequest = false;
    if (window.XMLHttpRequest) { // Mozilla, Safari,...
        httpRequest = new XMLHttpRequest();
        if (httpRequest.overrideMimeType) {
            httpRequest.overrideMimeType('text/xml');
        }
    }
    else if (window.ActiveXObject) { // IE
        try {
            httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            try {
                httpRequest =  new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) {httpRequest = false;}
        }
    }

    if (!httpRequest) {
        alert('Abandon :( Impossible de créer une instance XMLHTTP (err001)');
        return false;
    } 

    return httpRequest;
}

var links = document.querySelectorAll('.meteo');
var result = document.getElementById('result');

for (var i =0; i< links.length; i++){
    let link = links[i];

    link.addEventListener('click', function(e){
        e.preventDefault();
        result.innerHTML = 'Chargement ...';
        var httpRequest = getHttpResquest(); 
        // on écoute la progression de l'évènement en attendant la réponse 4
        httpRequest.onreadystatechange = function (){
            if(httpRequest.readystate === 4 ){
                result.innerHTML = ''; 

               if(httpRequest.status === 200) {
                var results = JSON.parse(httpRequest.responseText);
                var ul = document.createElement('ul');
                result.appendChild(ul)
                for(var j = 0; j<results.length; j++){
                    var li = document.createElement('li');
                    li.innerHTML = results[i].name;

                    ul.appendChild(li)
                }
               } else {
                alert('Impossible de contacter le serveur ! ');
               }

            }
        }
        httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
        httpRequest.send();
    })
}

// EXEMPLE pour un POST 

for (var i =0; i< links.length; i++){
    let link = links[i];

    link.addEventListener('click', function(e){
        e.preventDefault();
        result.innerHTML = 'Chargement ...';
        var httpRequest = getHttpResquest(); 
        // on écoute la progression de l'évènement en attendant la réponse 4
        httpRequest.onreadystatechange = function (){
            if(httpRequest.readystate === 4 ){
                result.innerHTML = ''; 

               if(httpRequest.status === 200) 
               {
                result.innerHTML = httpRequest.responseText;
                } else 
                {
                alert('Impossible de contacter le serveur ! ');
               }

            }
        }
        httpRequest.open('POST', '/demo.php', true);
        httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // Envoi des informations 
        httpRequest.send("city=Montpellier&nom=Henry");

        /////////////////////////////
        // Demo avec l'objet FormData
        httpRequest.open('POST', '/demo.php', true);
        var data = new FormData();
        data.append('city', 'Paris');
        data.append('name', 'marie');
        // data.append(nomdelaClé , valeurquel'onenvoieenPOST)
        httpRequest.send(data);

    })
}

