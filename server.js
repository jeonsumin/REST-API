var express = require('express');
var app = express();
var path = require('path');
var mysql = require('mysql');
var bodyParser = require('body-parser');

var connection = require('./models/mysql');

//Connect
connection.connect(function (err) {
	if (err) {
		console.error('mysql conneciton errer');
		console.error(err);
		throw err;
	} else {
		console.log('dbconnection success~');
	}
})

app.use(bodyParser.json());

//cors 허용
app.all('/*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});


//조회
app.get('/test', (req, res) => {
	connection.query('select * from test.test', (err, rows) => {
		if (!err) {
			var json = new Object()

			var json = { "status" : "ok",
						 "totalResults" : rows.length,
						 "articles" :rows
					    }
			console.log(rows);
			
			res.send(json);
			console.log(json);
			
			// console.log(users);
			
			
		} else {
			console.log(err);
		}
	})
})

//상세보기
app.get('/test/:id', (req, res) => {
	connection.query('select * from test.test where id = ?', [req.params.id], (err, rows) => {
		if (!err) {
			res.send(rows);
		} else {
			console.log(err);
		}
	})
})

//생성
app.post('/testing', (req, res) => {
	let getparams = req.body;
	var sql = "insert into test.test value(?,?,?)"
	connection.query(sql, [getparams.userid, getparams.name, getparams.address], (err, rows) => {
		if (!err) {
			res.send("insert success")
		} else {
			console.log(err);
		}
	})
})
//put 갱신? update
app.put('/testUpdate', (req, res) => {
	var sql = "update test.test set id = ?, name = ?, address = ? where id = ?"
	connection.query(sql, [req.body.userid, req.body.name, req.body.address, req.body.id], (err, rows) => {
		if (!err) {
			res.send("update(put) success");
		} else {
			console.log(err);
		}
	})
})

//delete
app.delete('/testdelete/:id', (req, res) => {
	var sql = "delete from test.test where id = ?"
	connection.query(sql, [req.params.id], (err, rows) => {
		if (!err) {
			res.send("delete success");
		} else {
			console.log(err);
		}
	})
})

//server
app.listen(3000, function (err) {
	if (!err) {
		console.log("Express server running at port no : 3000");
	} else {
		console.log("Port not running : " + err);
	}

})