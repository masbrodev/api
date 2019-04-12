'use strict';

let express = require('express');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');

let employeeController = require('./controllers/employee_controller');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

app.get('/', (req, res, next) => {
	res.send("(post /employees = SAVE) || (put /employees/:code = UPDATE) || (delete /employees/:code = DELETE) || (get /employees/:code = GET ONE) || (get /employees = GET ALL)");
});

app.post('/employees', employeeController.saveEmployee);//SAVE
app.put('/employees/:code', employeeController.updateEmployee);//UPDATE
app.delete('/employees/:code', employeeController.deleteEmployee);//DELETE
app.get('/employees/:code', employeeController.getEmployee);//GET ONE
app.get('/employees', employeeController.getEmployees);//GET ALL

module.exports = app;
