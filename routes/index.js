var express = require('express');
var router = express.Router();
const message=require('./users');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.post('/send',async function(req,res){
  const createdmessage=await message.create({
    name:req.body.name,
    email:req.body.email,
    subject:req.body.subject,
    msg:req.body.msg
  });
  console.log(createdmessage);
  res.render('index');
});

module.exports = router;
