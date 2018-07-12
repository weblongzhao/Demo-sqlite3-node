var express = require('express');
var router = express.Router();
var Note = require('../models/index');

/*新增留言*/
router.post('/submit',function(req,res,next){
    const note = req.body.note;
    const username = "testAdmin";
    console.log({text: note, username: username});
    Note.create({text: note, username: username}).then(function(){
        res.send({status: 0});
    }).catch(function(){
        res.send({ status: 1,errorMsg: '数据库异常或者你没有权限'});
    })
    res.send({status:0});
});

/*获取所有的留言*/
router.get("/comments",function(req,res,next){
    const opts = {raw: true} ;
    opts.where = {username:"long"} ;
    Note.findAll(opts).then(function(notes) {
        res.send({status: 0, data: notes});
    }).catch(function(){
        res.send({ status: 1,errorMsg: '数据库异常'});
    });

}) ;
module.exports=router;