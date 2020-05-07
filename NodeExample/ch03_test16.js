function add(a, b, callback){ // callback에는 함수가 전달이 된다.
    var result = a + b;
    callback(result);

    var history = function(){
        return a + '+' + b + "=" + result;
    };
    return history;
}

var add_history = add(10, 10, function(result) {
    console.log("파라미터로 전달된 콜백 함수 호출됨.");
    console.log("더하기 (10, 10)의 결과 : %d", result);
});

console.log("결과값으로 받은 함수 실행 결과 : " + add_history());