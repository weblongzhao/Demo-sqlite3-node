const path= require("path");
var Sequelize = require('sequelize');

const sequelize = new Sequelize(undefined, undefined,undefined, {
    // sqlite! now!
    host: 'localhost',
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
Note.sync();

module.exports = Note;