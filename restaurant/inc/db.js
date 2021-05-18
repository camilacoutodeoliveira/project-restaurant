const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user520',
    database: 'restaurant',
    password: 'password',
    multipleStatements: true
});

module.exports = connection;