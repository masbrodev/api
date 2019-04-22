'use strict';

let db = require('../config/mysql_config');
let EmployeeRepository = require('../repositories/jenis_repository');
let Employee = require('../domains/jenis');

let saveJenis = (req, res, next) => {
	if (!req.body) {
		next('semua field harus diisi.....')
	}
	let data = req.body;
	// let employee = new Employee(data.code, data.name, data.job, parseFloat(data.salary));
    let employee = new Employee(data.id_jenis, data.nama_jenis);
	let employeeRepo = new EmployeeRepository(db);
	employeeRepo.save(employee, result => {
		res.send('Tambah Jenis sukses');
		next();
	}, err => {
		if (err) {
			next(err);
		}
	});
};



let getJenis = (req, res, next) => {
  let employeeRepo = new EmployeeRepository(db);
  employeeRepo.findAll(result => {
    res.status(200).json({message: 'get all employee', data: result});
    next();
  }, err => {
    if(err){
      next(err);
    }
  });
};

module.exports = {
	saveJenis: saveJenis,
  getJenis: getJenis
};