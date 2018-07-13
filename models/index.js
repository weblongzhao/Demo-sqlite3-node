const path= require("path");
var Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    storage: path.join(__dirname, '../database','database.sqlite'),
    operatorsAliases: false
});


var Note = sequelize.define('user2', {
    username: Sequelize.STRING,
    text: Sequelize.STRING
});
Note.sync();

module.exports = Note;