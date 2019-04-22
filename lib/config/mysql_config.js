'use strict';

let mysql = require('mysql');
let connection = mysql.createConnection({
	// host: 'www.db4free.net',
	// user: 'masbro000',
	// password: '12345678',
	// database: 'apitest000'

	host: 'www.db4free.net',
	user: 'masbro000',
	password: '12345678',
	database: 'apitest000'
});

connection.connect();

module.exports = connection;