const path= require("path");
var Sequelize = require('sequelize');
var opts = {raw: true};
 opts.where = {username:'long',text:'note' };
const sequelize = new Sequelize('database', 'username', 'password', {
    // sqlite! now!
    dialect: 'sqlite',

    // the storage engine for sqlite
    // - default ':memory:'
    storage: path.join(__dirname, './database/database.sqlite')
});


var Note = sequelize.define('note', {
    text: {
        type: Sequelize.STRING
    },
    username: {
        type: Sequelize.STRING
    }
});
Note.create({text: 'note', username: 'long'})
Note.create({text: 'note6511', username: 'long'})
Note.create({text: 'note44165', username: 'long'})
Note.sync();

Note.findAll(opts).then(function(notes) {

    console.log(notes);
    console.log("成功查询")
}).catch(function(){
    console.log("数据库异常")
});

module.exports = Note;