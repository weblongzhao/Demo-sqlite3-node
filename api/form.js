var express = require('express');
var router = express.Router();
var Note = require('../models/index');

/*提交*/
router.get('/submit',function(req,res,next){
   return res.end("submit")
});



module.exports=router;