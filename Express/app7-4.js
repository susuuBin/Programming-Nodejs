var express = require('express');
var http = require('http');
var path = require('path');

var bodyParser = require('body-parser');
var static = require('serve-static');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/', static(path.join(__dirname, 'public')));

// app.get('/', function(req, res){
//     res.send('GET request to the homepage');
// });

// app.post('/', function(req, res){
//     res.send('POST request to the homepage');
// });

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listeing on port ' + app.get('port'));
});