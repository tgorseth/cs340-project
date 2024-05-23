/* app.js */

/* SETUP */
const express = require('express'); // use express lib for the web server
const app = express(); // create an instance of the express obj to interact with the server
PORT = 2077; // because cyberpunk

/* ROUTES */
app.get('/', function(req, res) {
	res.send(`The server is running!`);
});

/* LISTENER */
app.listen(PORT, function() {
	console.log(`Express started on http://localhost:${PORT}; press Ctrl-C to terminate.`);
});

