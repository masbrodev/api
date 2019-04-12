'use strict';

let Employee = function(code, name, job, salary){
	this.code = code;
	this.name = name;
	this.job = job;
	this.salary = salary;
}

module.exports = Employee;