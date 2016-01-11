var http = require('http');
var url = require('url');
var querystring = require('querystring');
var EventEmitter = require('events').EventEmitter;

var jeu = new EventEmitter();

jeu.on('gameover', function(message) {
	console.log(message);
	});
	
jeu.emit('gameover','Vous avez perdu');


