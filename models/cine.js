var mysql = require('mysql'),
    myConnection = require('express-myconnection'),
    dbOptions = {
        host: 'localhost',
        user: 'root',
        password: '',
        port: 3306,
        database: 'cine'
    };

Cine = myConnection(mysql, dbOptions, 'request');
module.exports = Cine;