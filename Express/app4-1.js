var express = require('express');
var http = require('http');

var app = express();

app.use(function(req, res, next){
    console.log("첫 번째 미들웨어에서 요청을 처리합니다.");

    req.user = "susuuBin";

    next();
});

app.use("/", function(req, res, next){
    console.log("두 번째 미들웨어에서 요청을 처리합니다.");

    // var person = {name: "소녀시대", age: 20};
    // res.send(person);

    // var person = {name: "소녀시대", age: 20};
    // var personStr = JSON.stringify(person);
    // res.send(personStr);

    var person = {name: "소녀시대", age: 20};
    var personStr = JSON.stringify(person);
    res.writeHead("200", {"Content-Type" : "test/html; charset=utf-8"});
    // res.write(personStr);
    res.end(personStr);
});

http.createServer(app).listen(3000, function(){
    console.log("express 서버가 3000 번 포트에서 시작됩니다.");
});