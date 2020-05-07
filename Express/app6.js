var express = require('express');
var http = require('http');

var app = express();
app.use(function(req, res, next){
    console.log("첫 번째 미들웨어에서 요청을 처리함.");

    var userAgent = req.header("User-Agent");
    var paramName = req.query.name;
    res.writeHead("200", {"Content-Type" : "test/html; charset=utf-8"});
    res.write('<h1> Express 서버에서 응답한 결과입니다. </h1>');
    res.write('<div><p> Uer-Agent : ' + userAgent + '</p></div>');
    res.write('<div><p> Param Name : ' + paramName + '</p></div>');
    res.end();
});

http.createServer(app).listen(3000, function(){
    console.log("express 서버가 3000 번 포트에서 시작됩니다.");
});