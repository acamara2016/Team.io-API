const mysql = require('mysql')
const config = require('../config/config');

// Create the connection
con = mysql.createConnection({
	host: config.HOST,
	user: config.USER,
	password: config.PASSWORD,
	database: config.DATABASE,
});
con.connect(function(err, con) {
	if (err) {
		throw err;
	}
	console.log("Connected")
})

module.exports = con