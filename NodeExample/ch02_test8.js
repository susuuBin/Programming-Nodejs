var path = require('path');


var directories = ["users", "sunny", "docs"]; // 디렉토리 변수에 넣은 다음,
var docsDirectory = directories.join(path.sep); // sep = 백슬래시
console.log("문서 디렉토리 : %s", docsDirectory); 

var curPath = path.join('/User/sunny', 'notepad.exe');
console.log("파일 패스 : %s", curPath);

var filename = "C://Users//sunny//notepad.exe";
var dirname = path.dirname(filename);
var basename = path.basename(filename);
var extname = path.extname(filename);
console.log("디렉토리 : %s, 파일 이름 : %s, 확장자 : %s", dirname, basename, extname);