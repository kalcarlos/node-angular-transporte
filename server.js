var http =  require('http');
var app = require('./config/express');
var database = require('./config/database');

database('mongodb://localhost/projeto');

http.createServer(app)
.listen(8080, function(){
    console.log('Servidor iniciado');
});