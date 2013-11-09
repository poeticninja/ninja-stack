/**
* Module dependencies.
*/
var express = require('express');

//Load configurations
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
	config = require('./server/config/config');

var app = express();

//Express setup and settings
require('./server/config/express')(app);

//Bootstrap routes
require('./server/config/routes')(app);

//Start the app by listening on <port>
var port = process.env.PORT || config.port;
app.listen(port);
console.log('Express app started on port ' + port);