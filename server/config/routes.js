/**
* Module dependencies.
*/
var config = require('./config'),
	routes = require(config.controller);

module.exports = function(app) {
	//Home route
	app.get('/', routes.index);

	// redirect all others to the index (HTML5 history). Remove this if you don't want Angular to handle all routes.
	app.get('*', routes.index);
};
