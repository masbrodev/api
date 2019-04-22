'use strict';

let express = require('express');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');

let employeeController = require('./controllers/employee_controller');
let jenisController = require('./controllers/jenis_controller');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

app.get('/', (req, res, next) => {
	res.send("BUKU PERPUSTAKAAN");
});

app.post('/buku', employeeController.saveEmployee);//SAVE
app.put('/buku/:id_buku', employeeController.updateEmployee);//UPDATE
app.delete('/buku/:code', employeeController.deleteEmployee);//DELETE
app.get('/buku/:id_buku', employeeController.getEmployee);//GET ONE
app.get('/buku', employeeController.getEmployees);//GET ALL

app.post('/jenis', jenisController.saveJenis);//SAVE
app.get('/jenis', jenisController.getJenis);//GET ALL

module.exports = app;