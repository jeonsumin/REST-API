var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//database
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'user',
	password: 'password',
	database: 'databases',
	multipleStatements: true
})


module.exports = connection;
