const express = require('express');//기본 express모듈 사용
const app = express();
//const router = express.Router();
const port = process.env.PORT || 3001; //포트번호 지정

const router = express.Router();
const indexrouter = require('./router/router.js');

const path = require("path");//경로 스트링 합칠 때 필요

const bodyParser= require('body-parser');
app.use(bodyParser.urlencoded ({extended: true}));
//프론트에서 값 전달받을때 사용하는 확장 프로그램

const nunjucks = require('nunjucks');
app.set('view engine', 'html');
nunjucks.configure('views', {//여기서 views는 폴더이름이다!
  express: app,
  watch: true,
});
app.use(express.static(__dirname+'/'));
//뷰엔진

app.use('/', indexrouter)



app.listen(port, () => {
    console.log(`server is listening at localhost:${process.env.PORT}`);
});
