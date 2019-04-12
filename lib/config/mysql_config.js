'use strict';

let mysql = require('mysql');
let connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'api_test'
});

connection.connect();

module.exports = connection;