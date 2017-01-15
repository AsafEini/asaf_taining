var child = require('child_process').exec;
var opener = require('opener');
child("C://Projects//RunHttpServerAndOpenBrowser//node_modules//.bin//http-server")
opener('http://127.0.0.1:8080/');






