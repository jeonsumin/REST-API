var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//database
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'root1234',
	database: 'test',
	multipleStatements: true
})


module.exports = connection;
