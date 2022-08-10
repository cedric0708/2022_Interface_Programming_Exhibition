const express = require('express');
const router = express.Router();

const mainrouter = require('./main.js');

const path = require("path");//경로 스트링 합칠 때 필요


router.use('/main', mainrouter);

module.exports = router;

router.get('/test', (req, res) => { // 경로 /으로 요청이 들어왔으면
    //res.send('bye nodejs!');
   res.sendFile(path.join(__dirname,'/main.html'));
});

router.get('/create', (req, res) => { // 경로 /으로 요청이 들어왔으면
    //res.send('bye nodejs!');
   res.sendFile(path.join(__dirname,'/create.html'));
});

router.get('/res', function(req,res,next){
    res.render('result', {name:'db테스트',pw:'pw',test:'test1'});
  });

router.post('/createpost/action', (req, res) => {
    console.log(req.body);
    //res.render('result', {name:req.body.name, pw:req.body.pw});
    res.redirect('/test');
});
