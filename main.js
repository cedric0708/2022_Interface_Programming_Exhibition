const express=require('express');
const router = express.Router();
const path = require("path");//경로 스트링 합칠 때 필요

router.get('/main/hello', (req, res) => { // 경로 /으로 요청이 들어왔으면
    //res.send('bye nodejs!');
   res.sendFile(path.join(__dirname,'/main.html'));
});

module.exports = router;
