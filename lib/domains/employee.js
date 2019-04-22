'use strict';

// let Employee = function(code, name, job, salary, image){
// 	this.code = code;
// 	this.name = name;
// 	this.job = job;
// 	this.salary = salary;
// 	this.image = image;
// }

let Employee = function(id_buku, judul, jenis, keterangan){
	this.id_buku = id_buku;
	this.judul = judul;
	this.jenis = jenis;
	this.keterangan = keterangan;

}
module.exports = Employee;