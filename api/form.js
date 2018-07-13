var express = require('express');
var router = express.Router();
var Note = require('../models/index');

/*新增留言*/
router.post('/submit',function(req,res,next){
    const note = req.body.text;
    const username = "longzhao";
    Note.create({text: note, username: username}).then(function(){
        res.send({status: 0});
    }).then(jane => {
        console.log(jane.toJSON());
    })
});

/*获取所有的留言*/
router.get("/comments",function(req,res,next){
    const opts={where: {
            username:"longzhao"
        }};
    Note.findAll(opts).then(function(notes) {
        console.log(notes) ;

        res.send({status: 0, data: notes});
    });

}) ;



//新的 表
//提交表单
router.post("/a",function(req,res){
    Note.create(
        {
            username: 'longzhao',
            text:req.body.text
        }
    ).then(jane =>{
        console.log(jane.toJSON())
    })
})

const opts={where: {
        username:'longzhao'
    }};
router.get("/get",function(req,res){

Note.findAll({where: {username:'longzhao'}}).then(
    function(d){
        console.log(d);
        res.send(d)
    }
)
});











module.exports=router;




