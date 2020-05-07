var http = require('http');

http.createServer(function (req, res){
    // res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.writeHead(200, {"Content-Type" : "text/html; charser=utf-8"})
    res.write('<h1> 노드에서 응답 메시지 보기 </h1>');
    res.end();
}), listen(8080);