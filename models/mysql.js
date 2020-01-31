var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//database
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'id',
	password: 'password',
	database: 'DB-Name',
	multipleStatements: true,
	insecureAuth: true
})


module.exports = connection;