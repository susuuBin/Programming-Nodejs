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

var router = express.Router();

app.use('/', static(path.join(__dirname, 'public')));

var router = express.Router();

router.route('/process/users/:id').get(function(req, res){
    console.log('/process/users/:id 처리함.');

    var paramId = req.params.id;
  
    res.writeHead('200', {'Content-Type' : 'text/html; charset=utf8'});
    res.write('<h1> Express 서버에서 응답한 결과입니다. </h1>');
    res.write('<div><p> Param id : ' + paramId + '</p></div>');
    res.end();
});

app.use('/', router);

/* 등록되지 않은 패스에 대해 페이지 오류를 응답 */
var errorHandler = expressErrorHandler({
    static : {
        '404' : './public/404.html'
    }
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listeing on port ' + app.get('port'));
});