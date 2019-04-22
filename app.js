'use srict';

let http = require('http');
let server = require('./lib/server');

const PORT = process.env.port || 3000;

server.set('port', PORT);
let app = http.createServer(server);

app.listen(PORT, () => {
	console.log('Budaaallll Gaannnn......');

});