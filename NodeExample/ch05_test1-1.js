var http = require('http');

var server = http.createServer();
var host = "192.168.35.111";
var port = 3000;

//'50000' = 한 번에 접근할 수 있는 클라이언트 수
server.listen(port, host, '50000', function(){
    console.log('웹 서버가 시작되었습니다. ' + host + ':' + port);
});