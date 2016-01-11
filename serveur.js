var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(request, response) {
	
	response.writeHead(200, {"Content-Type":"text/plain"});
	
	response.write('Salut tout le monde');

    response.end();
});

server.on('close', function(){ //On ecoute l'evenement close
		console.log('Bye bye!');
});

server.listen(8000); // Demarre le serveur

server.close(); //Arrete le serveur. declenche l'evenement close
