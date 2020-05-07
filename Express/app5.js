var express = require('express');
var http = require('http');

var app = express();
app.use(function(req, res, next){
    console.log("첫 번째 미들웨어에서 요청을 처리함.");

   res.redirect("http://www.naver.com");
});

http.createServer(app).listen(3000, function(){
    console.log("express 서버가 3000 번 포트에서 시작됩니다.");
});