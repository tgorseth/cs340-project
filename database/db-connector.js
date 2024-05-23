/* ./database/db-connector.js */

// get an instance of mysql we can use in the app
const mysql = require('mysql');

// create a 'connection pool' using the provided credentials
const pool = mysql.createPool({
	connectionLimit : 10,
	host		: 'classmysql.engr.oregonstate.edu',
	user		: 'cs340_caballmi',
	password	: '2335',
	database	: 'cs340_caballmi'
});

// export the db for use in the app
module.exports.pool = pool;
