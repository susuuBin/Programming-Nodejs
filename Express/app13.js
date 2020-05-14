var express = require('express');
var http = require('http');
var path = require('path');

var bodyParser = require('body-parser');
var static = require('serve-static');
var cookieParser = require('cookie-parser');
var expressErrorHandler = require('express-error-handler');
var expressSession = require('express-session');
var multer = require('multer');
var fs = require('fs');

var cors = require('cors');
var app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/public', static(path.join(__dirname, 'public')));
app.use('/uploads', static(path.join(__dirname, 'uploads')));
app.use(cookieParser());

app.use(expressSession({
    secret: 'susuuBin',
    resave: true,
    saveUninitialized: true
}));

app.use(cors());

var storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, 'uploads')
    },
    filename: function(req, file, callback){
        var extension = path.extname(file.originalname);
        var basename = path.basename(file.originalname, extension);
        callback(null, basename + Date.now() + extension);
    }
});

var upload = multer({
    storage : storage,
    limits: {
        files: 10,
        fileSize: 1024 * 1024 * 1024
    }
});

var router = express.Router();

router.route('/process/photo').post(upload.array('photo', 1), function(req, res){
    console.log('/process/photo 호출됨.');

    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;

    if(req.session.user){
        console.log("이미 로그인이 되어 상품 페이지로 이동합니다.");

        res.redirect('/public/product.html');
    } else {
        req.session.user = {
            id: paramId,
            name: "양수빈",
            authorized: true
        };

        res.writeHead('200', {'Content-Type' : 'text/html; charset=utf-8'});
        res.write('<h1> 로그인 성공 </h1>');
        res.write('<div><p> Param id : ' + paramId + '</p></div>');
        res.write('<div><p> Param password : ' + paramPassword + '</p></div>');
        res.write('<br><br><a href="/process/product"> 상품 페이지로 이동하기 </a>');
        res.end();
        }
    });

    router.route('/process/logout').get(function(req, res){
        console.log('/process/logout 호출됨.');

        if(req.session.user){
            console.log('로그아웃합니다.');

            req.session.destroy(function(err){
                if(err) { throw err; }

                console.log('세션을 삭제하고 로그아웃되었습니다.');
                res.redirect('/public/login2.html');
            });
        } else {
            console.log('아직 로그인이 되어 있지 않습니다.');
            
            res.redirect('/public//login2.html');
        }
    });

    router.route('/process/product').get(function(req, res){
        console.log('/process/product 호출됨.');
        if(req.session.user){
            res.redirect('/public//product.html');
        } else {
            res.redirect('/public//login2.html');
        }
    });

    app.use('/', router);

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