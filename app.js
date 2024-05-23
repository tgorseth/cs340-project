/* app.js */

/* SETUP */
const express = require('express'); // use express lib for the web server
const app = express(); // create an instance of the express obj to interact with the server
const db = require('./database/db-connector');
PORT = 2077; // because cyberpunk

/* ROUTES */
app.get('/', function(req, res) {
	// define queries
	query1 = 'SELECT * FROM Sessions;';

	// Execute every query in an asynchronous manner
	
	// DROP TABLE...
	db.pool.query(query1, function(err, results, fields){
		console.log(results);
		res.send(JSON.stringify(results));
	});
});


/* LISTENER */
app.listen(PORT, function() {
	console.log(`Express started on http://localhost:${PORT}; press Ctrl-C to terminate.`);
});

