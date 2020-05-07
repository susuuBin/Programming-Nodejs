process.on('exit', function(){
    console.log("exit 이벤트 발생항.");
});

setTimeout(function() {
    console.log("5 초 후에 시스템 종료 시도함.");
    process.exit();
}, 5000);

console.log("5 초 후에 실행될 것임.");