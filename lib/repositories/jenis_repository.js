'use strict';

let Employee = require('../domains/jenis');

let JenisRepository = function(db){
  this.db = db;
};

JenisRepository.prototype = {
  save: function(e, cb, errCb){
    let db = this.db;
    let data = {id_jenis: e.id_jenis, nama_jenis: e.nama_jenis};
    let query = 'INSERT INTO jenis_buku SET ?';
    db.query(query, data, (err, result) => {
      if(err){
        errCb(err);
      }
      cb(result);
    });
  },

  // update: function(e, cb, errCb){
  //   let db = this.db;
  //   let data = [e.name, e.job, e.salary, e.code];
  //   let query = 'UPDATE employee SET name = ?, job = ?, salary = ? WHERE code = ?';
  //   db.query(query, data, (err, result) => {
  //     if(err){
  //       errCb(err);
  //     }
  //     cb(result);
  //   });
  // },

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

  // findOne: function(code, cb, errCb){
  //   let db = this.db;
  //   let query = 'SELECT * FROM employee WHERE code = ?';
  //   db.query(query, [code], (err, results, fields) => {
  //     if(err){
  //       errCb(err);
  //     }
  //     let result = results[0];
  //     if(!result){
  //       cb(`data with code = ${code} not found..`)
  //     } else {
  //       let employee = new Employee(result.code, result.name, result.job, result.salary);
  //       cb(employee);
  //     }
  //   });
  // },

  findAll: function(cb, errCb){
    let db = this.db;
    let query = 'SELECT * FROM jenis_buku';
    db.query(query, (err, results, fields) => {
      if(err){
        errCb(err);
      }
      let employees = [];
      for(let i=0;i<results.length;i++){
        let e = results[i];
        let employee = new Employee(e.id_jenis, e.nama_jenis);
        employees.push(employee);
      }
      cb(employees);
    });
  }

};

module.exports = JenisRepository;
