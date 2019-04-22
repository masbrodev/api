'use strict';

let Employee = require('../domains/employee');

let EmployeeRepository = function(db){
  this.db = db;
};

EmployeeRepository.prototype = {
  save: function(e, cb, errCb){
    let db = this.db;
    let data = {id_buku: e.id_buku, judul: e.judul, jenis: e.jenis, keterangan: e.keterangan};
    let query = 'INSERT INTO tambah_buku SET ?';
    db.query(query, data, (err, result) => {
      if(err){
        errCb(err);
      }
      cb(result);
    });
  },

  update: function(e, cb, errCb){
    let db = this.db;
    let data = [e.judul, e.jenis, e.keterangan, e.id_buku];
    let query = 'UPDATE tambah_buku SET judul = ?, jenis = ?, keterangan = ? WHERE id_buku = ?';
    db.query(query, data, (err, result) => {
      if(err){
        errCb(err);
      }
      cb(result);
    });
  },

  // delete: function(code, cb, errCb){
  //   let db = this.db;
  //   let query = 'DELETE FROM employee WHERE code = ?';
  //   db.query(query, [code], (err, result) => {
  //     if(err){
  //       errCb(err);
  //     }
  //     cb(result);
  //   });
  // },

  findOne: function(id_buku, cb, errCb){
    let db = this.db;
    let query = 'SELECT * FROM tambah_buku WHERE id_buku = ?';
    db.query(query, [id_buku], (err, results, fields) => {
      if(err){
        errCb(err);
      }
      let result = results[0];
      if(!result){
        cb(`data with code = ${id_buku} not found..`)
      } else {
        let employee = new Employee(result.id_buku, result.judul, result.jenis, result.keterangan);
        cb(employee);
      }
    });
  },

  findAll: function(cb, errCb){
    let db = this.db;
    let query = 'SELECT * FROM tambah_buku';
    db.query(query, (err, results, fields) => {
      if(err){
        errCb(err);
      }
      let employees = [];
      for(let i=0;i<results.length;i++){
        let e = results[i];
        let employee = new Employee(e.id_buku, e.judul, e.jenis, e.keterangan);
        employees.push(employee);
      }
      cb(employees);
    });
  }

};

module.exports = EmployeeRepository;
