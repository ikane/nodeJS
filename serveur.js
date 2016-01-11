var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(request, response) {
	
	response.writeHead(200, {"Content-Type":"text/plain"});
	
	var params = querystring.parse(url.parse(request.url).query);
	
	if('prenom' in params && 'nom' in params) {
		response.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom']);
	} else {
		response.write('Vous devez bien avoir un prénom et un nom, non ?');
	}
	
	/*
	 if (page == '/') {
        response.write('Vous êtes à l\'accueil, que puis-je pour vous ?');
    }
    else if (page == '/sous-sol') {
        response.write('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
    }
    else if (page == '/etage/1/chambre') {
        response.write('Hé ho, c\'est privé ici !');
    } else {
		response.writeHead(404, {"Content-Type":"text/html"});
		response.write('<h1>Page not found, sorry!</h1>');
	}
	*/

    response.end();
});

server.listen(8000);

// Console will print the message
console.log("Server running at http://127.0.0.1:8000/ ...");
