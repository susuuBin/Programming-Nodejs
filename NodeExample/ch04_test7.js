var fs = require('fs');

fs.writeFile('./output.txt', 'Hello World!', function(err){
    if(err){
        console.log("Error : " + err);
    }

    console.log("output.txt 파일에 데이터 쓰기를 완료했습니다.")
})